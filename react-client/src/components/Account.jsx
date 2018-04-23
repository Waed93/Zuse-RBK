import React, { Component } from "react";
import ReactDOM from 'react-dom';
import $ from 'jquery';
import {
  Route,
  Link,
  Switch,
  browserHistory,
  BrowserRouter as Router
} from "react-router-dom";
import Home from './Home.jsx';
import Profile from './Profile.jsx';

const Account = (props) => (


   	 <Router>
     <center>
      <div>

      <div style={{background: 'pink'}} >

            <h1><Link to="/Home">Home</Link></h1>
            <h1><Link to="/Profile">Profile</Link></h1>
          </div>

          <div className="content">
            
            <Route path="/Home" component={Home}/>
            <Route path="/Profile" render={()=><Profile name={props.name}/> } />
          </div>

       <h1>{props.name}</h1>
       
 
      </div>

     </center>
     </Router>
   )

export default Account;