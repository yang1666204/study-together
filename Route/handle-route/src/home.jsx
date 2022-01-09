export default ()=>{
    function handleToAbout(){
        window.location = 'http://localhost:3000/#/about'
    }
    return (
        <button onClick={handleToAbout}>跳转到about</button>
    )   
}