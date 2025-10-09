import { Schema, model } from "mongoose";
const movieSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
        match: [/^[A-Za-z0-9\s]+$/, 'Title should be English letters, digits, and whitespaces'],
        minLength: [5, 'Title should be at least 5 characters long'],
    },
    category: {
        type: String,
        required: [true, 'Category is required'],
        enum: {
            values: ['tv-show', 'animation', 'movie', 'documentary', 'short-film'],
            message: 'Category {VALUE} is not between alowed TV-show, Animation, Movie, Documentary ,Short Film'
        },
    },
    genre: {
        type: String,
        required: [true, 'Genre is required'],
        match: [/^[A-Za-z0-9\s]+$/, 'Genre should be English letters, digits, and whitespaces'],
        minLength: [5, 'Genre should be at least 5 characters long'],
    },
    director: {
        type: String,
        required: [true, 'Director name is required'],
        match: [/^[A-Za-z0-9\s]+$/, 'Genre should be English letters, digits, and whitespaces'],
        minLength: [5, 'Director name should be at least 5 characters long'],
    },
    year: {
        type: Number,
        required: [true, 'Year is required'],
        min: [1900, 'Movie can not be created before 1900'],
        validate: {
            validator: function (value) {
                const currentYear = new Date().getFullYear();
                return value <= currentYear;
            },
            message: function(props){return `The entered year ${props.value} can not be after the current year`},
        }
    },
    imageUrl: {
        type: String,
        required: [true, 'Image URL is required'],
        match: [/^https?:\/\/.+/, 'Invalid image URL'],
    },
    rating: {
        type: Number,
        required: [true, 'Rating is required'],
        min: [1, 'Minimum alowed rating is 1'],
        max: [10, 'Maximum alowed rating is 10'],
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
        match: [/^[A-Za-z0-9\s]+$/, 'Description should be English letters, digits, and whitespaces'],
        minLength: [20, 'Minimum length of description is 20 char'],
    },
    casts: [{
        type: Schema.Types.ObjectId,
        ref: 'Cast',
    }],
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'Movie should have creator!'],
    },
});

const Movie = model('Movie', movieSchema);

export default Movie;