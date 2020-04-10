import React, { Component } from 'react'
import './App.css';
import Sidebar from '../src/components/Sidebar'
import TweetList from './components/TweetList';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import Profile from './components/Profile.js';


export default class App extends Component {
  


  render() {
    
    return (
            <div>
              <Router>
              <Sidebar/>

              <Switch>
                 <Route exact path='/about-us' component={Profile}/>
                 <Route exact path='/' component={TweetList}/>
              </Switch>
              </Router>
            </div>
    )
  }
}
