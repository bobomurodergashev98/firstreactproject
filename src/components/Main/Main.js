import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar'
import arr  from './MainData'
import Mainqism from './Mainqism'
export default class Main extends Component{
    render() {
        return(
            <div className="right">
                <Navbar />
                <div className="firstrow" >
                    <h1>MAXSULOT</h1>
                    <h1>KATEGORIYA</h1>
                    <h1>NARXI</h1>
                    <h1>QO'SHIMCHA</h1>
                    <h1>ACTION</h1>
                </div>
           
            <div className="arricon">
                {arr.map(({id,icon1,icon2,icon3,icon4,icon5,icon6,icon7,icon8,icon9,icon10})=>{
                return <Mainqism id={id} icon1={icon1} icon2={icon2} icon3={icon3} icon4={icon4} icon5={icon5} icon6={icon6} icon7={icon7} icon8={icon8} icon9={icon9} icon10={icon10}  />
            })}
            </div>
            <button className="btn" type="button" style={{width:'97%',marginLeft:'15px',marginTop:'10px' ,padding:'5px 0'}}>Yana Yuklash</button>
            </div>
        )
    }
}