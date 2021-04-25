import React, { useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from "react-router-dom"
import reportWebVitals from './reportWebVitals';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import Slider from './pages/Layout/slider/index.jsx'
import Header from './pages/Layout/header/index.jsx'
import Routes from './config/router'
import { Provider }  from './context/index'
import store from './redux/index'
import { setCollapsed } from './redux/actionCreators'
let collapsed = true

function toggleCollapsed() {
  const action = setCollapsed(!store.getState().collapsed);
  store.dispatch(action)
}
ReactDOM.render(
  <BrowserRouter>
    <div className='page-box'>
      <Provider value={collapsed}>
        <Slider/>
      </Provider>
      <div className="container">
        <Header toggleCollapsed={toggleCollapsed}></Header>
        <div className='content'>
          <Routes />
        </div>
      </div>
    </div>,
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
