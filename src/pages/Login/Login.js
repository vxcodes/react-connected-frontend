import React from 'react';
import styles from './Login.module.css';
import { login, logout } from '../../services/firebase';
import Header from '../../components/Header/Header'
import Home from "../Home/Home"
// import Profile from "../Profile/Profile"
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { render } from '@testing-library/react';

function Login(props) {
    // async function onSubmit(){
    //     await fetch(login())
    //     .then(<Redirect to="/home/"/>)
    // }
    return(
        <Router>
            <Header />
            {/* <Route path="/" component={Home}/>
            <Route path="/profile" component={Profile} /> */}
        </Router>
    )
}

export default Login;