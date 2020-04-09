import React, { Component } from 'react'
// import TweetItem  from './TweetItem';
import faketweets  from '../data';
import './TweetList.css';

export default class TweetList extends Component {   
    state = { data: '' }
    render() {
    // const tweets = faketweets
     
    const handleClick = () => {
        this.setState({data:  faketweets[Math.floor(Math.random() * 5)]})
    }
    return (
        <div>
            <div class= "vertical"></div> 
            <hr></hr>
        <h3> Home </h3>

            <p className='tweets'>{this.state.data.tweet}</p>
        <button onClick={handleClick}>Tweet</button>
        </div>
    )
    }
}