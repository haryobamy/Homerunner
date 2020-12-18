import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';


import SignUp from './components/SignUp';
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';
import LandingPage from './components/LandingPage';
import Verification from './components/Verification';

function App() {
  return (
    <React.Fragment>
    <Router>
     {/* <ExampleNavbar /> */}
    {/* <LandingPageHeader /> */}
   

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/forgot-password" component={ForgotPassword} />
            <Route path="/verification" component={Verification} />
          </Switch>
        </div>
      </div>
     
    
    {/* <DarkFooter />  */}
    </Router>
    </React.Fragment>
  );
}

export default App;
