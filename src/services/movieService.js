import Movie from '../models/Movie.js';

export default {
    getAll(filter) {
        const result = Movie.find(filter);
        // const result =  await Movie.find(filter).lean();
        return result;
    },

    getOne(movieId) {
        return Movie.findOne({ _id: movieId });
    },

    create(movieData) {
        movieData.rating = Number(movieData.rating);
        // const movie = new Movie(movieData);
        // return movie.save();
        return Movie.create(movieData);
    }
}