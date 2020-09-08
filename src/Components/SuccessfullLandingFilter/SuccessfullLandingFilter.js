import React from 'react';
import { connect } from 'react-redux';
import { setFilter,filterPrograms } from '../../Redux/Actions/actions';
import '../CSS/Button.css';
import '../CSS/BtnBox.css';

class SuccessfullLandingFilter extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            selected : ''
        }
    }

    handleClick = (evt) => {
        if(this.state.selected===evt.target.innerHTML){
            this.setState({
                selected : ''
            },()=>{this.props.setFilter('successfullLanding',this.state.selected)})
        }else{
            this.setState({
                selected : evt.target.innerHTML
            },()=>{this.props.setFilter('successfullLanding',this.state.selected)})
        }
    }

    componentDidUpdate(prevProps) {
        if(prevProps.filters.successfullLanding !== this.props.filters.successfullLanding) {
            this.props.filterPrograms();
        }
    }

    render(){
        return(
            <div className="btnBox">
                <div className="btnRow">
                    <button onClick={this.handleClick} className={`btn ${this.state.selected==='true'?'active':''}`}>true</button>
                    <button onClick={this.handleClick} className={`btn ${this.state.selected==='false'?'active':''}`}>false</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps=(state) => {
    return{
        filters : state.filters
    }
}

export default connect(mapStateToProps,{setFilter,filterPrograms})(SuccessfullLandingFilter)