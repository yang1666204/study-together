import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './home';
import About from './about'

class HashRouter {
  curURL = ''
  handler = {}
  constructor() {
    this.refresh = this.refresh.bind(this); //this指向
    window.addEventListener('load', this.refresh)
    window.addEventListener('hashchange', this.refresh)
  }
  getURL(url) {
    let index = url.indexOf('#')
    if (index !== -1) {
      return url.slice(index + 1)
    }
    return '/'
  }
  refresh(e) {
    let cur = ''
    if (e.newURL) {
      cur = this.getURL(e.newURL) || ''
      console.log("cur", cur);
    } else {
      console.log("a", this);
      cur = this.getURL(window.location.href)
    }
    this.curURL = cur
    this.emit('change', this.curURL)
  }
  on(evName, listener) {
    this.handler[evName] = listener
  }
  emit(evName, ...args) {
    this.handler[evName](...args)
  }
}

class BrowserRouter {
  //监听url的变化
  //一旦变化render对应组件
}

const Routes = [
  {
    path: '/home',
    name: 'home',
    component: <Home />,
  }, {
    path: '/about',
    name: 'about',
    component: <About />
  }
]

const Route = new HashRouter()
Route.on('change', (url) => {
  for (let i = 0; i < Routes.length; i++) {
    if (Routes[i].path === url) {
      console.log("qqq");
      ReactDOM.render(
        Routes[i].component, document.getElementById('root')
      );
    }
  }
})


