import request from 'superagent';

export const getData = () => request.get(`https://letstalkaboutit-app.herokuapp.com/api/v1/tweets/content`)

