import React, { Component } from 'react'
import Menu from '../Sidebar/Menu';
export default class Sidebar extends Component{
    render() {
        return(
            <div className="sidebar">
                <div className="sidebar-header">
                  <img src={require('../../img/Bitmap.png').default} /> 
                    {/* <img className="sidebar-logo" src="/img/    Bitmap.png" /> */}
                    <div>
                        <h1>Fast Food</h1>
                        <p>Online mahsulot sotuvi</p>
                    </div>
                </div>
                <div className="sidebar-main">
                    <Menu />                    
                </div>
                <div className="sidebar-footer">
                    <img src={require('../../img/log-out.svg').default} />
                    <h2>Chiqish</h2>
                </div>
            </div>
        );
    }
}