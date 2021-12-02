import { useState } from "react"
import loadable from "@loadable/component"
const AsyncComponent = loadable(()=>import('./c'))
export default function ComponentA() {
    let [state, setState] = useState(0)
    function add() {
        setState(state+1)
    }

    return (
        <div>
            <p>ComponentA</p>
            number:{state}
            <AsyncComponent/>
            <button onClick={add}>++</button>
        </div>
    )

}