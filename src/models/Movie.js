import { Schema, model } from "mongoose";
const movieSchema = new Schema({
    title: String,
    category: String,
    genre: String,
    director: String,
    year: Number,
    imageUrl: String,
    rating: Number,
    description: String,
    casts: [{
        type: Schema.Types.ObjectId,
        ref: 'Cast',
    }],
    creator:{
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
});

const Movie = model('Movie', movieSchema);

export default Movie;