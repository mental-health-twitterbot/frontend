import React, { Component } from 'react'

export default class TweetItem extends Component {
   
    render() {
       const { approvedTweet } = this.props;
       
        return (
         <div className='TheTweet'>
            
        <li className='tweets'></li>
             
         </div>
        )
    }
}