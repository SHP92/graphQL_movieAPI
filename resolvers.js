/*
import { Movies, getById, deleteMovie, addMovie } from './db.js';

const resolvers = {
    Query : {
        Movies: () => Movies
        , Movie: (_, args) => getById(args.id)
        // , Movie : (_, { id }) => getById(id)
    }
    , Mutation : {
        newMovie: (_, { name, title, score }) => (
            addMovie(name, title, score)
        )
        , oldMovie: (_, { id }) => deleteMovie(id)
    }
};
*/

import { getMovies } from './moiveDB';

const resolvers = {
    Query : {
        Movies: (_, { rating }) => getMovies(rating)
    }
}

export default resolvers;