import React, { Component } from 'react'
import './App.css';
import Sidebar from '../src/components/Sidebar'
import TweetList from './components/TweetList';


export default class App extends Component {
  
  // state = {fakeTweets: []}

  render() {
    // const { fakeTweets } = this.state;
    return (
            <div>
              <Sidebar/>
              <TweetList/>
            </div>
    )
  }
}
