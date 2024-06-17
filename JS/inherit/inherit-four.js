//寄生式继承
//寄生式继承和原型继承紧密相关，由同一个人推出
function object(obj){
    function cons(){}
    cons.prototype = obj
    return new cons
}

function jsInherit(obj){
    let _obj = object(obj)
    _obj.sayName = function(){
        console.log("hhh");
    }
    return _obj
}

let obj = {
    name:'ly'
}
let newobj = jsInherit(obj)
newobj.sayName()