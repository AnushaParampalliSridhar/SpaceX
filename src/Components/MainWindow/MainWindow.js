import React from 'react';
import { connect } from 'react-redux';
import Filter from '../Filter/Filter';
import Programs from '../Programs/Programs';
import './MainWindow.css';

class MainWindow extends React.Component{

    constructor(props){
        super(props);
    }

    componentDidMount(){

    }

    render(){
        return(
            <div className="main-window">
                <div className="main-content-container">
                    <Filter/>
                    <Programs/>
                </div>
                <h3 style={{textAlign:"center"}}>
                    Developed By : Anusha P S
                </h3>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return{
        programs : state.programs
    }
}

export default connect(mapStateToProps)(MainWindow);