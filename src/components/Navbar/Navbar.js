import React, { Component } from 'react'
import '../../index.css'
export default class Navbar extends Component{
    state={
        active:false,
    }
    render() {
        const onActive=()=>{
            if (this.state.active===true) {
                this.setState({active:false})
            } else{
                this.setState({active:true})
            }
        }
        return(
            <div className="navbar">
                <div className="navbar-left">
                    <div className="plus">
                    <img src={require('../Navbar/navbarimg/plus.svg').default} />
                    </div>
                    <h3>Yangi mahsulot qo'shish</h3>
                </div>
                <div className="navbar-right">
                        <input className="input" type="text" placeholder="Qidirish" />
                        <img className="search" src={require('../Navbar/navbarimg/search.svg').default} />
                        <div onClick={()=>onActive()} className={`path activ-${this.state.active===true}`}>
                            <div>
                            <img  style={{width:'100%'}} src={require('../Navbar/navbarimg/Path.svg').default} />   
                            </div>
                        </div>
                </div>
            </div>
        )
    }
}