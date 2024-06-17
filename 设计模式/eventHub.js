class EventHub{
    cache={}
    emit(eventName){
        //发布
        this.cache[eventName].forEach((fn)=>{
            fn()
        })
    }
    off(eventName,fn){
        //取消订阅
        let index = this.cache[eventName].indexOf(fn) || -1
        this.cache[eventName].splice(index,1)
        return index
    }
    on(evenName,fn){
        //订阅
        this.cache[evenName] = this.cache[evenName]||[]
        this.cache[evenName].push(fn)
    }
}
function eat(){
    console.log("eating");
}
let evenHub = new EventHub
evenHub.on('eat',eat)
evenHub.emit('eat')