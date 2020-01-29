const fetch = require('node-fetch');
const API_URL = 'https://yts.lt/api/v2/list_movies.json?';

export const getMovies = rating => {
    // wrapping REST API by GraphQL
    return fetch(`${API_URL}minimum_rating=${rating}`)
            .then(res => res.json())
            .then(json => json.data.movies);
}