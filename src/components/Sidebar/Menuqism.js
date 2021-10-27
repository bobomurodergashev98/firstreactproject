import React, { Component } from 'react'

export default class Menuqism extends Component{
    render() {
        return(
            <div className={`menuqism active-${this.props.active}`}>
                <img className="icon" src={this.props.img} />
                <h2 className="title" >{this.props.title}</h2>
            </div>
        )
    }
}