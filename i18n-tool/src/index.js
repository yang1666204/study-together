const fse = require('fs-extra');
const path = require('path');
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const types = require('@babel/types');
const template = require('@babel/template').default;
const format = require('prettier-eslint')
const { codeFrameColumns } = require('@babel/code-frame');
const generator = require('@babel/generator').default;
const genRanHex = size => [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');

async function traversalFiles(absPath, filePaths) {
    const filelist = await fse.readdir(absPath);
    for (let fileName of filelist) {
        const filePath = path.join(absPath, fileName);
        const stats = await fse.stat(filePath);
        if (stats.isDirectory()) {
            await traversalFiles(filePath, filePaths)
        } else {
            filePaths.push(filePath);
        }
    }
}


async function getFileList(absPath) {
    const filePathArr = [], fileList = [];
    await traversalFiles(absPath, filePathArr)
    for (let filePath of filePathArr) {
        const fileContent = fse.readFileSync(filePath, { encoding: 'utf-8' });
        fileList.push({
            fileContent,
            filePath,
            extname: path.extname(filePath)
        })
    }
    return fileList;
}
/**
 * 
 * @param {parser.ParseResult<types.File>} ast 
 * @param {{fileContent: string;filePath: string;extname: string}} file 
 */
async function handleAst(ast, file) {
    traverse(ast, {
        // 注入 import { intl } from '@/utils/intl';
        Program: {
            enter: (path, state) => {
                let imported = false;
                path.traverse({
                    ImportSpecifier(p) {
                        if (p.node.local.name === 'intl') {
                            imported = true;
                        }
                    }
                })
                if (!imported) {
                    path.node.body.unshift(template.ast(`import { intl } from '@/utils/intl'`))
                }
            }
        },
        // text => intl.formatMessage({id:'xxx',defaultMessage:'text'})
        JSXText: {
            enter: (path, state) => {
                const value = path.node.value.trim();
                if (value) {
                    const jsxNode = template.ast(`intl.formatMessage({id:'${genRanHex(6)}',defaultMessage:'${value}'})`);
                    const temp = types.jSXExpressionContainer(jsxNode.expression);
                    path.replaceWith(temp);
                }
            }
        }
    })
    const { code } = generator(ast);
    const formatedCode = await prettierCode(code)
    saveCode(formatedCode, file.filePath)
}

function saveCode(code, filePath) {
    fse.writeFile(filePath, code);
}

async function prettierCode(code) {
    const options = {
        text: code,
        eslintConfig: {
            parserOptions: {
                ecmaVersion: 7
            },
            rules: {
                semi: ['error', 'never']
            }
        },
        prettierOptions: {
            bracketSpacing: true
        },
        fallbackPrettierOptions: {
            singleQuote: false
        }
    };

    const formatted = await format(options);
    return formatted
}

async function pipeline(entry) {
    const absPath = path.join(__dirname, `../${entry}`);

    const fileList = await getFileList(absPath);
    for (let file of fileList) {
        if (file.extname !== '.js' && file.extname !== '.jsx') continue;
        const ast = parser.parse(file.fileContent, {
            sourceType: 'unambiguous',
            plugins: ['jsx']
        });
        await handleAst(ast, file)
    }
}
const entry = './example/src';

pipeline(entry)