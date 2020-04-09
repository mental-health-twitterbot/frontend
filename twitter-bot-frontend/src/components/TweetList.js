import React, { Component } from 'react'
import TweetItem  from './TweetItem';
import faketweets  from '../data';
import './TweetList.css';

export default class TweetList extends Component {   
    states = { data: [] }
    render() {
    const tweets = faketweets
    const data = tweets.map(tweet => {
        console.log(tweets)
        return (<TweetItem key={tweet.tweet} tweet={tweet}/>)

    })
    return (
        <div>

            <ul className='tweets'>{data}</ul>
        <button>Tweet</button>
        </div>
    )
    }
}