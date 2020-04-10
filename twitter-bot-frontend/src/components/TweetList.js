import React, { Component } from 'react'
import TweetItem  from './TweetItem';
import './TweetList.css';
import { getData } from '../services/backendData.js';

export default class TweetList extends Component {  

    state = { approvedTweet: [] }

    async componentDidMount() {
        const data = await getData();
 
        if (data.body) {
         this.setState({ approvedTweet: data.body })
        }
 
    }
    render() {
    // const tweets = faketweets
    const { approvedTweet } = this.state;


    // const handleClick = () => {

    //     this.setState({data: [faketweets[Math.floor(Math.random() * 5)], ...this.state.data]})
    //     this.setState({approvedTweets: this.state.approvedTweets})

    // }
    // const elementArray = this.state.approvedTweets.map(tweetObj => {
    //     return <TweetItem tweet={ tweetObj}/>
    // } )

    return (
        <div>
            <button>Tweet</button>
            {/* <p className='tweets'>{elementArray}</p> */}
        <ul>
            <TweetItem approvedTweet={ approvedTweet } />
        </ul>
        </div>
        )
    }
}