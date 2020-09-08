import React from 'react';
import LaunchYear from '../LaunchYearFilter/LaunchYear';
import SuccessfullLaunchFilter from '../SuccessfullLaunchFilter/SuccessfullLaunchFilter';
import SuccessfullLandingFilter from '../SuccessfullLandingFilter/SuccessfullLandingFilter';
import './Filter.css';

class Filter extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="filter-container">
                <h3>Filters</h3>
                <div className="launchYear-container">
                    <h4>Launch Year</h4>
                    <LaunchYear/>
                </div>
                <div className="launch-container">
                    <h4>Successfull Launch</h4>
                    <SuccessfullLaunchFilter/>
                </div>
                <div className="landing-container">
                    <h4>Successfull Landing</h4>
                    <SuccessfullLandingFilter/>
                </div>
            </div>
        )
    }

}

export default Filter;