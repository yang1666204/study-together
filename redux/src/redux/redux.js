//getStore  subscribe   dispatch    applyMiddleware
export function createStore(reducer, heightener) {
    if(heightener){
        return heightener(createStore)(reducer)
    }
    let queue = []
    let currentStore

    function getStore() {
        return currentStore
    }
    function subscribe(callback) {
        queue.push(callback)
    }
    function dispatch(action) {
        currentStore = reducer(currentStore,action)
        queue.forEach(fn => {
            fn()
        })
    }
    

    dispatch("__yangon")
    return { getStore, subscribe, dispatch }
}