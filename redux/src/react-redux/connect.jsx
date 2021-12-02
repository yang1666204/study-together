// connect(mapState,mapDisptch)(component)
//1.通过store.subscribe监听store变化 
//2.store变化后触发一个回调函数，这个回调函数我们要让组件强制更新
//3.将mapstate和mapdispatch挂在props上
import { Context } from './provider.jsx'
import { useState, useEffect } from 'react';
import { useContext } from 'react';
export default function connect(mapState, mapDispatch) {

    return function func(Component) {
        function Factory() {
            let store = useContext(Context)
            let [flag, setFlag] = useState(false)
            useEffect(() => {
                store.subscribe(()=>{
                    setFlag(!flag)
                })
            }, [store.getStore()])
            // return 返回一个增强过后的组件
            return <Component
                {...mapState(store.getStore())}
                {...mapDispatch(store.dispatch)}
            ></Component>

        }
        //初步实现???
        return Factory
    }
}