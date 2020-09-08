import React from 'react';
import './Card.css';

class Card extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="program-card">
                <div className="image-box">
                    <img src={this.props.imgSrc} alt={this.props.missionName}/>
                </div>
                <div className="heading">
                    {this.props.missionName} #{this.props.flightNumber}
                </div>
                <div className="description">
                    <div>Mission IDs :
                        <div style={{textAlign:"left"}}>
                            {this.props.missionIDs.map(id=><li key={id}>{id}</li>)}
                        </div>
                    </div>
                    <div>Launch Year : {this.props.launchYear}</div>
                    <div>Successfull Launch : {this.props.launchSuccess.toString()}</div>
                    <div>Successfull Landing : {this.props.landingSuccess}</div>
                </div>
            </div>
        )
    }
}

export default Card;
