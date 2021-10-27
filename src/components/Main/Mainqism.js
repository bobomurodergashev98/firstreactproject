import React, { Component } from 'react'

export default class Mainqism extends Component{
    render() {
        const {id,icon1,icon2,icon3,icon4,icon5,icon6,icon7,icon8,icon9,icon10} = this.props
         if (id===5) {
            return(
            
                    <div className="Mainqism5">
                        <img className="icon" src={icon1} />
                        <img className="icon" src={icon2} />
                        <img className="icon" src={icon3} />
                        <img className="icon" src={icon4} />
                        <img className="icon" src={icon5} />
                        <img className="icon" src={icon6} />
                        <img className="icon" src={icon7} />
                        <img className="icon" src={icon8} />
                        <img className="icon" src={icon9} />
                        <img className="icon" src={icon10} />
                    </div>
            )        
        } else if(id===6){
            return(
            
                    <div className="Mainqism6">
                        <img className="icon" src={icon1} />
                        <img className="icon" src={icon2} />
                        <img className="icon" src={icon3} />
                        <img className="icon" src={icon4} />
                        <img className="icon" src={icon5} />
                        <img className="icon" src={icon6} />
                        <img className="icon" src={icon7} />
                        <img className="icon" src={icon8} />
                        <img className="icon" src={icon9} />
                        <img className="icon" src={icon10} />
                    </div>
            )        
        } else {
                        return(
                            <div className="pl">
                                <p className="plar">{icon1}</p>
                                <p className="plar">{icon2}</p>
                                <p className="plar">{icon3}</p>
                                <p className="plar">{icon4}</p> 
                                <p className="plar">{icon5}</p>
                                <p className="plar">{icon6}</p>
                                <p className="plar">{icon7}</p>
                                <p className="plar">{icon8}</p>
                                <p className="plar">{icon9}</p>
                                <p className="plar">{icon10}</p>

                            </div>
                        )
                        
        }
        
    }
}





