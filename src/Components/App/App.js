import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import MainWindow from '../MainWindow/MainWindow';
import './App.css';

class App extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <BrowserRouter>
                <Header/>
                <Switch>
                    <Route path="/" component={MainWindow}/>
                </Switch>
            </BrowserRouter>
        )
    }

}

export default App;