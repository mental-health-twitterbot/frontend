import React, { Component } from 'react'
import './App.css';
import Sidebar from '../src/components/Sidebar'
import TweetList from './components/TweetList';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Profile from './components/Profile';


export default class App extends Component {
  
  // state = {fakeTweets: []}

  render() {
    // const { fakeTweets } = this.state;
    return (
            <div>
              <Sidebar/>
<Router>

              <Switch>
                <Route exact path='/about/us' component={Profile}/>
              <Route exact path='/' component={TweetList}/>
              </Switch>
</Router>
            </div>
    )
  }
}
