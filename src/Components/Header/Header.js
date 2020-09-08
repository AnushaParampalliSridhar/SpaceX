import React from 'react';
import './Header.css'

class Header extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="ui-header">
                SpaceX Launch Programs
            </div>
        )
    }

}

export default Header;