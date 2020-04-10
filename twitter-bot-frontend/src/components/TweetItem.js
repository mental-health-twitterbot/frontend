import React, { Component } from 'react'
import './TweetItem.css';
export default class TweetItem extends Component {
   
    render() {
       const { approvedTweet } = this.props;
       
        return (
         <div className='tweetBox'>
            <li className='tweets'> { approvedTweet }</li>
         </div>
        )
    }
}