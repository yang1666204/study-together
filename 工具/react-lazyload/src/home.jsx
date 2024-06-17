import { useHistory } from "react-router"

export default function ComponentHome() {
    const history = useHistory()
    function jumpa(){
        history.push('/a')
    }
    function jumpb(){
        history.push('/b')
    }
    return <div>
        <button onClick={jumpa}>jumpa</button>
        <button onClick={jumpb}>jumpb</button>
        <span>ComponentHome</span>
    </div>
}