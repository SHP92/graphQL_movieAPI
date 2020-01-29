export let Movies = [
    {
        id : 0
        , name: "Sherlock Holmes"
        , title : "private detective"
        , score : 10
    }
    , {
        id : 1
        , name : "John Watson"
        , title : "army doctor"
        , score : 8
    }
];

export const getById = id => {
    // .filter -> return array with given condition
    const filteredMovies = Movies.filter(Movie => id === Movie.id);
    return filteredMovies[0];
}

export const deleteMovie = id => {
    const cleanedMovies = Movies.filter(Movie => id !== Movie.id);
    const deletedMovies = Movies.filter(Movie => id === Movie.id);
    if (Movies.length > cleanedMovies.length) {
        Movies = cleanedMovies;
    }
    return deletedMovies[0];
}

export const addMovie = (name, title, score) => {
    const newMovie = {
        id : Movies.length
        , name
        , title
        , score
    }
    Movies.push(newMovie);
    return newMovie;
}