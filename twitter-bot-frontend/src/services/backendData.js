import request from 'superagent';

export const getData = (tweet) => request.get(`https://letstalkaboutit-app.herokuapp.com/api/v1/tweets/content`)

