import React, { Component } from 'react'
import './TweetItem.css';
export default class TweetItem extends Component {
   
    render() {
       const { approvedTweet } = this.props;
        const tweetArray = approvedTweet.split("#");
       
        return (
         <div className='tweetBox'>
          
            <li className='tweets'> 
                <div id ='subTweetBox'>
                    <div id="profilePic">
                        <img 
                            className='tweetProfile' 
                            src='tweet_profile.png'
                        />
                    </div>
                    <div id="tweetBody">
                        <div>
                            <h6>@letsTalkAboutIt</h6>
                            {/* <span>{ new Date().toISOString() }</span> */}
                        </div>
                        <div>
                            { tweetArray[0]} 
                            <a href="">
                                #{tweetArray[1]}
                            </a>
                            <a href ="">
                                { tweetArray[2] ? '#' + tweetArray[2] : ''}
                            </a>
                        </div>
                    </div>
                </div>
            </li>
            <img className='linkBar' src="tweetbar.png"/>
         </div>
        )
    }
}