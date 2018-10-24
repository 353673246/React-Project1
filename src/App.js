import React, { Component } from 'react';
import {HashRouter  as Router , Route} from 'react-router-dom'
import './App.css';

import HomePage from './Components/HomePage/HomePage'
import Login from './Components/Login/Login'
import UserInfo from './Components/UserInfo/UserInfo'
import Postage from './Components/Postage/Postage'
import Pay from './Components/Pay/Pay'
import PaySuc from './Components/Pay/PaySuc'
import Active from './Components/Active/Active'
import ActSuc from './Components/Active/ActSuc'

class App extends Component {

render(){
    return (
        <Router>
            <div className="App">
                <Route exact path="/" component={HomePage}></Route>
                <Route path="/Login" component={Login}></Route>
                <Route path="/UserInfo" component={UserInfo}></Route>
                <Route path="/Postage" component={Postage}></Route>
                <Route path="/Pay" component={Pay}></Route>
                <Route path="/PaySuc" component={PaySuc}></Route>
                <Route path="/Active" component={Active}></Route>
                <Route path="/ActSuc" component={ActSuc}></Route>

            </div>
        </Router>
    )
}

}





export default App;
