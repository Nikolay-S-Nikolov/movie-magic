import { Schema, model } from "mongoose";
const movieSchema = new Schema({
    title: {
        type: String,
        match: /^[A-Za-z0-9\s]+$/,
        minLength: 5
    },
    category: String,
    genre: {
        type: String,
        match: /^[A-Za-z0-9\s]+$/,
        minLength: 5
    },
    director: {
        type: String,
        match: /^[A-Za-z0-9\s]+$/,
        minLength: 5
    },
    year: {
        type: Number,
        min: 1900,
        max: 2024,
    },
    imageUrl: {
        type: String,
        match: /^https?:\/\/.+/,
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
    },
    description: {
        type: String,
        match: /^[A-Za-z0-9\s]+$/,
        minLength: 20
    },
    casts: [{
        type: Schema.Types.ObjectId,
        ref: 'Cast',
    }],
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
});

const Movie = model('Movie', movieSchema);

export default Movie;