import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link ,Redirect} from 'react-router-dom';


import SignUp from './components/SignUp';
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';
import LandingPage from './components/LandingPage';
import Verification from './components/Verification';
// import Welcome from './components/Welcome';

function App() {
  return (
    <React.Fragment>
    <Router>

   

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/forgot-password" component={ForgotPassword} />
            <Route path="/verification" component={Verification} />
            {/* <Route path="/welcome" component={Welcome} /> */}
            {/* <Route path="/dashboard" component={Dashboard} /> */}

            {/* <Redirect from="/dashboard" to="/ http://localhost:3000/admin/dashboard" /> */}
          </Switch>
        </div>
      </div>
     
    
    {/* <DarkFooter />  */}
    </Router>
    </React.Fragment>
  );
}

export default App;
