//父


HistoryRoute.prototype = new Route
HistoryRoute.prototype.constructor = HistoryRoute

HashRoute.prototype = new Route
HashRoute.prototype.constructor = HashRoute

function Route(config) {
    this.routesMap = new Map
    config && this.init(config)
}
Route.prototype.init = function (config) {
    for (let i = 0; i < config.length; i++) {
        this.routesMap.set(config[i].path, config[i].element)
    }

}
//不涉及路由嵌套 只在root节点下更新
Route.prototype.render = function (element) {
    let root = document.getElementById("root")
    root.innerHTML = ""
    if (element) {
        root.appendChild(element)
    } else {
        root.innerHTML = '<h1>404</h1>'
    }
}

//toy router 不对数据做异常处理
//history
function HistoryRoute(config) {
    //init
    // this.routesMap = new Map
    Route.call(this, config)
    // this.init(config)
    let that = this
    window.onpopstate = function (e) {
        let path = e.state && e.state.path
        let element = that.routesMap.get(path)
        that.render(element)
    }

}


//约定path  以 / 开头
HistoryRoute.prototype.navigate = function (path) {
    //如果有参数 截断path ?后面的内容放进state就行了
    let element = this.routesMap.get(path)
    history.pushState({ path }, "", path)
    this.render(element)
}




//hash
function HashRoute(config) {
    Route.call(this,config)
    let that = this
    window.onhashchange = function () {
        //去掉#号
        let path = location.hash.slice(1)
        let element = that.routesMap.get(path)
        that.render(element)
    }
}


HashRoute.prototype.navigate = function (path) {
    location.hash = path
}