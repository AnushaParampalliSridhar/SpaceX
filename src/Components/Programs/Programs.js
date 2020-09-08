import React from 'react';
import { connect } from 'react-redux';
import { getAllPrograms,filterPrograms } from '../../Redux/Actions/actions';
import Card from '../Card/Card';
import './Programs.css';

class Programs extends React.Component{

    constructor(props){
        super(props);
        this.state={
            loading : true
        }
    }

    componentDidMount(){
        this.props.getAllPrograms().then(()=>{
            this.setState({loading : !this.state.loading})
        })
    }

    renderCard = () => {
        if(this.props.programs.length===0){
            return(
                <div className="loading-icon">No Mission Programs Found</div>
            )
        }
        return this.props.programs.map((program)=>{
            return(
                <Card 
                    key={program.flight_number} 
                    missionName={program.mission_name} 
                    flightNumber={program.flight_number}
                    missionIDs={program.mission_id}
                    launchSuccess={program.launch_success}
                    landingSuccess={program.launch_landing}
                    launchYear={program.launch_year}
                    landSuccess={program.launch_landing}
                    imgSrc={program.links.mission_patch}
                />
            )
        })
    }

    render(){
        if(this.state.loading){
            return(
                <div className="loading-icon ui active centered loader"></div>
            )
        }else {
            return(
                <div className="programs-container">
                    {this.renderCard()}
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return{
        programs : state.programs.programs
    }
}

export default connect(mapStateToProps,{getAllPrograms,filterPrograms})(Programs);
