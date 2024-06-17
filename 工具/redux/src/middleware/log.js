//打印中间件
function logMiddleware1(store) {
    return (next) => {
        return function (action) {
            console.log("进入logMiddleware1");
            next(action)
            console.log("离开logMiddleware1");
            // return
        }
    }
}

const thunk = (store) => (next) => (action) => {
    console.log("进入thunk");
    typeof action === 'function' ? action(store.dispatch) : next(action)
    console.log("离开thunk");
}

function logMiddleware2(store) {
    return (next) => {
        return function (action) {
            console.log("进入logMiddleware2");
            next(action)
            console.log("离开logMiddleware2");
            // return 
        }
    }
}
export { logMiddleware1, logMiddleware2, thunk }