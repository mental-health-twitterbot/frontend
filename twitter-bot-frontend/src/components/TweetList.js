import React, { Component } from 'react'
import TweetItem  from './TweetItem';
import './TweetList.css';
import { getData } from '../services/backendData.js';

export default class TweetList extends Component {  

    state = { 
        approvedTweet: [] 
    }

    // async componentDidMount() {
    //     // const data = await getData();
    //     // console.log(data.body);
    //     // if (data.body) {
    //     //  this.setState({ approvedTweet: data.body })
    //     // }
    // }

    handleClick = async(e) => {
        e.preventDefault();

        const data = await getData();

        this.setState({ approvedTweet: data.body.tweet_text })
        console.log(data.body);
        
    }

    render() {
    // const tweets = faketweets
    // const approvedTweet = this.state;
    console.log(this.state.approvedTweet);
    
    //     this.setState({data: [faketweets[Math.floor(Math.random() * 5)], ...this.state.data]})
    //     this.setState({approvedTweets: this.state.approvedTweets})

    // }
    // const elementArray = this.state.approvedTweets.map(tweetObj => {
    //     return <TweetItem tweet={ tweetObj}/
    // } )

    return (
        <div>
            <button onClick={this.handleClick}>Tweet</button>
            {/* <p className='tweets'>{elementArray}</p> */}
            <ul>
                <li>
                { this.state.approvedTweet 

// <TweetItem approvedTweet={this.state.approvedTweet}/>)
                }
                </li>
                
            </ul>
        </div>
        )
    }
}