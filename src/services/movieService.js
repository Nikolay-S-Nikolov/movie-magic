import Movie from '../models/Movie.js';

export default {
    getAll() {
        return Movie.find();
    },

    create(movieData){
        movieData.rating = Number(movieData.rating);
        const movie = new Movie(movieData);
        return movie.save();
    }
}