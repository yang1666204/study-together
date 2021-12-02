import React from "react";
import { render } from "@testing-library/react";
const ComponentB__ = import('./d')
ComponentB__.then(value=>{
    console.log(value.default);
    let a = render(value.default)
    console.log("a",a);
})
export default function ComponentB(){

    return(
        <div>
            i am <ComponentB__/>
            <span>ComponentB</span>
        </div>
    )
    
}