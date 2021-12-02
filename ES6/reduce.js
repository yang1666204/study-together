let color = ['red','black','yellow']

let newArr = color.reduce((pre,cur)=>{
    console.log("pre",pre);
    console.log("cur",cur);
    return pre+cur
})
console.log(newArr);