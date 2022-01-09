function applyMiddleware(store,middlewares){
    middlewares.forEach(middleware=>{
        store.dispatch = middleware(store)
    })
}

function logMiddleware(store){
    let next = store.dispatch
    return (action)=>{
        console.log("进入中间件");
        next(action)
        console.log("离开中间件");
    }
}