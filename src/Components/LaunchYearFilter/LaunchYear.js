import React from 'react';
import { connect } from 'react-redux';
import { setFilter,filterPrograms } from '../../Redux/Actions/actions';
import '../CSS/Button.css';
import '../CSS/BtnBox.css';

class LaunchYear extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            selected : ''
        }
    }

    handleClick=(evt)=>{
        if(this.state.selected===evt.target.innerHTML){
            this.setState({
                selected : ''
            },()=>{this.props.setFilter('launchYear',this.state.selected)})
        }else {
            this.setState({
                selected : evt.target.innerHTML
            },()=>{this.props.setFilter('launchYear',this.state.selected)})
        }
    }

    componentDidUpdate(prevProps) {
        if(prevProps.filters.launchYear !== this.props.filters.launchYear) {
            this.props.filterPrograms();
        }
    }

    render(){
        return(
            <div className="btnBox">
                <div className="btnRow">
                    <button onClick={this.handleClick} className={`btn ${this.state.selected==='2006'?'active':''}`}>2006</button>
                    <button onClick={this.handleClick} className={`btn ${this.state.selected==='2007'?'active':''}`}>2007</button>
                </div>
                <div className="btnRow">
                    <button onClick={this.handleClick} className={`btn ${this.state.selected==='2008'?'active':''}`}>2008</button>
                    <button onClick={this.handleClick} className={`btn ${this.state.selected==='2009'?'active':''}`}>2009</button>
                </div>
                <div className="btnRow">
                    <button onClick={this.handleClick} className={`btn ${this.state.selected==='2010'?'active':''}`}>2010</button>
                    <button onClick={this.handleClick} className={`btn ${this.state.selected==='2011'?'active':''}`}>2011</button>
                </div>
                <div className="btnRow">
                    <button onClick={this.handleClick} className={`btn ${this.state.selected==='2012'?'active':''}`}>2012</button>
                    <button onClick={this.handleClick} className={`btn ${this.state.selected==='2013'?'active':''}`}>2013</button>
                </div>
                <div className="btnRow">
                    <button onClick={this.handleClick} className={`btn ${this.state.selected==='2014'?'active':''}`}>2014</button>
                    <button onClick={this.handleClick} className={`btn ${this.state.selected==='2015'?'active':''}`}>2015</button>
                </div>
                <div className="btnRow">
                    <button onClick={this.handleClick} className={`btn ${this.state.selected==='2016'?'active':''}`}>2016</button>
                    <button onClick={this.handleClick} className={`btn ${this.state.selected==='2017'?'active':''}`}>2017</button>
                </div>
                <div className="btnRow">
                    <button onClick={this.handleClick} className={`btn ${this.state.selected==='2018'?'active':''}`}>2018</button>
                    <button onClick={this.handleClick} className={`btn ${this.state.selected==='2019'?'active':''}`}>2019</button>
                </div>
                <div className="btnRow">
                    <button onClick={this.handleClick} className={`btn ${this.state.selected==='2020'?'active':''}`}>2020</button>
                    <div>&nbsp;</div>
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

export default connect(mapStateToProps,{setFilter,filterPrograms})(LaunchYear);
