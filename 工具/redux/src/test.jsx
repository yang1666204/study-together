import { useState } from "react"
export default function Test() {
    let [a, seta] = useState(1)
    let [b, setb] = useState(2)
    let [c, setc] = useState(3)
    console.log("组件渲染");
    const handleClick = () => {
        seta(a+1)
        setb(b+2)
        setc(c+3)
    }
    return <>
        hello
        <button onClick={handleClick}>点击</button>
    </>
}