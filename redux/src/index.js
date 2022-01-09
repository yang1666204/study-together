import React,{Fragment} from 'react';
import ReactDOM from 'react-dom';
import Compo from './Com'
import Test from './test';
// import { createStore } from 'redux'
// import { Provider } from 'react-redux'
import {Provider} from './react-redux/provider.jsx'
import { logMiddleware1,logMiddleware2, thunk } from './middleware/log';
import redux from './redux/index'
import {applyMiddleware,createStore,reducer} from './redux/index'
import App from './App'
// const reducer = (state,action ) => {
//   switch (action.type) {
//     case "add":
//       return {
//         ...state,
//         num: state.num + 1
//       }
//     default:
//       return {
//         ...state
//       }
//   }
// }
let store = createStore(reducer,applyMiddleware([logMiddleware1,thunk,logMiddleware2]))
// const store = createStore(reducer,{num:0})
ReactDOM.render(
  <Provider store={store}>
    <Compo />
  </Provider>,
  document.getElementById('root')
)
