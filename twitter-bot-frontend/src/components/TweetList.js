import React, { Component } from 'react'
import TweetItem  from './TweetItem';
import './TweetList.css';
import { getData } from '../services/backendData.js';

export default class TweetList extends Component {  

    state = { 
        approvedTweet: [] 
    }

    handleClick = async(e) => {
        e.preventDefault();

        const data = await getData();

        this.setState({ approvedTweet: [...this.state.approvedTweet, data.body.tweet_text] })
        console.log(data.body);
        
    }

    render() {
    console.log(this.state.approvedTweet);

    return (
        <div>
            <button onClick={this.handleClick}>Tweet</button>
            <ul>
                { this.state.approvedTweet.map(tweet => {
                   return <TweetItem approvedTweet={tweet}/>
                })};
            </ul>
        </div>
        )
    }
}