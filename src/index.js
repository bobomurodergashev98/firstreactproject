import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './components/Main/Main'
 import Sidebar from './components/Sidebar/Sidebar'
import Example from './Example';
ReactDOM.render(
  <React.StrictMode>
    <div className="container" > 
      <Sidebar />
      <Main />
      {/* <Example /> */}
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
