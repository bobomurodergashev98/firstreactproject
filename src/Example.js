import React, { Component } from 'react'


export default class Example extends Component{
    state={
        count:0,
    }
    render() {
        const ayirish = ()=>{
            if (this.state.count>0) {
                this.setState({count:this.state.count-1})
            }
        }
        const qoshish = ()=>{
            this.setState({count:this.state.count+1})
        }
        return(
            <div className="nima" style={{display:'flex',alignItems:'center',margin:'0 auto'}}>
                <button style={{width:'60px',height:'30px',background:'red',color:'yellow'}} onClick={()=>ayirish()}>-</button>
                <h2 style={{background:'yellow',color:'red',width:'40px',height:'30px',textAlign:'center'}}>{this.state.count}</h2>
                <button style={{width:'60px',height:'30px',background:'red',color:'yellow'}} onClick={()=>qoshish()}>+</button>
            </div>
        )
    }
}