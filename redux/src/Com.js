import connect from "./react-redux/connect"
const Com = (props) => {
    const handleClick = ()=>{
        props.addDispatch({
            type:'add'
        })
    }
    return (
        <div>
            <button onClick={handleClick}>加1</button><br/>
            <h1>{props.num}</h1>
        </div>
    )
}

// export default Com
const mapState = (state)=>({
    num:state.num
})

const mapDispatch = (dispatch)=>({
    addDispatch:dispatch
})

const Compo = connect(mapState,mapDispatch)(Com)
export default Compo