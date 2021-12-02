//如何获取store.dispath?
// export function applyMiddleware(middlewares){
//     //如何让以后的每个dispatch都经过这增强的中间件
//     middlewares = [...middlewares]
//     middlewares.reverse()
//     middlewares.forEach(middleware=>{
//         store.dispatch = middleware(action)
//     })
// }
export const applyMiddleware = function (middlewares) {
    return (createStore) => {
        return (reducer) => {
            const store = createStore(reducer)  //会执行一次disptach
            let { getStore, dispatch } = store
            const parmas = {
                getStore,
                dispatch: (action) => dispatch(action)
            }
            middlewares = [...middlewares]
            const middlewareArr = middlewares.map(middleware => middleware(parmas))
            let a = compose(...middlewareArr)
            console.log("a",a);
            dispatch = a(dispatch)
            // dispatch = compose(...middlewareArr)(dispatch)
            console.log("dispatch",dispatch);
            return { ...store, dispatch }
        }
    }
}

function compose(...fns) {
    if (fns.length === 0) return arg => arg
    if (fns.length === 1) return fns[0]
    return fns.reduce((res, cur) => {
        return (...args) => {
            return res(cur(...args))
        }
    })
    // return fns.reduce((res, cur) => (...args) => res(cur(...args)))
}