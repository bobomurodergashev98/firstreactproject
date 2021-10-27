import React, { Component } from 'react'
import Data from '../Sidebar/SidebarData'
import Menuqism from '../Sidebar/Menuqism'
export default class Menu extends Component{
    state={
        active:null
    }
    render() {

            const onActive=(id)=>{
                this.setState({active:id})
            }
        return(
         
            <div className="menu-wrapper">
                {Data.map(({id,img,title})=>{
                   return( 
                        <div onClick={()=>onActive(id)}>
                            <Menuqism active={this.state.active===id} id={id} img={img} title={title}/>
                        </div>
                    )
                })}
            </div>
        )
    }
}