import request from 'superagent';

export const getData = () => request.get(`https://git.heroku.com/letstalkaboutit-app/api/v1/tweets`)

