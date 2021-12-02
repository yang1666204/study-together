import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from './react-redux/provider.jsx'
import { logMiddleware1,logMiddleware2, thunk } from './middleware/log';
// import redux from './redux/index'
import {applyMiddleware,createStore,reducer} from './redux/index'
let store = createStore(reducer,applyMiddleware([logMiddleware1,thunk,logMiddleware2]))
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
