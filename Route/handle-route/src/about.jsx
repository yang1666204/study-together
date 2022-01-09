export default ()=>{
    function handleToAbout(){
        window.location = 'http://localhost:3000/#/home'
    }
    return (
        <button onClick={handleToAbout}>跳转到home</button>
    )   
}