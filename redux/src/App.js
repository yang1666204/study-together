import { Provider } from './react-redux/provider'
import connect from './react-redux/connect';
function App(props) {
  return (
    <div>
      Num:{props.num}<br />
      <button onClick={props.addNum}>加1</button>
      <button onClick={props.ayncAddNum}>异步加1</button>
    </div>
  );
}
const addAction = {
  type: 'add'
}

const asyncDispatch = (dispatch)=>{
  setTimeout(()=>{
    dispatch(addAction)
  },2000)
}

const mapState = (state) => ({
  num: state.num
})

const mapDispatch = (dispatch) => ({
  addNum: () => {
    dispatch(addAction)
  },
  ayncAddNum: () => {
    console.log("调用异步函数");
    dispatch(asyncDispatch)
  }
})

export default connect(mapState, mapDispatch)(App);
