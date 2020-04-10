import React, { Component } from 'react'
import './TweetItem.css';
export default class TweetItem extends Component {
   
    render() {
       const { approvedTweet } = this.props;
        const tweetArray = approvedTweet.split("#");

       
        return (
         <div className='tweetBox'>
            <li className='tweets'> 
                { tweetArray[0]} 
                <a href="">
                    #{tweetArray[1]}
                </a>
                <a href ="">
                    { tweetArray[2] ? '#' + tweetArray[2] : ''}
                </a>
            </li>
            <img className='linkBar' src="tweetbar.png"/>
         </div>
        )
    }
}