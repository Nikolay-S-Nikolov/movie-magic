import { Schema, model } from "mongoose";

const castShema = new Schema({
    name: {
        type: String,
        required: [true, 'Cast name is required!'],
        match: [/^[A-Za-z0-9\s]+$/, 'Cast name should be English letters, digits, and whitespaces'],
        minLength: [5, 'Name should be at least 5 characters long'],
    },
    age: {
        type: Number,
        required: [true, 'Age is required'],
        max: [120, 'Age cannot be over 120'],
        min: [1, 'Minimum age is 1'],
    },
    born: {
        type: String,
        required: [true, 'Birthplace is required'],
        match: [/^[A-Za-z0-9\s]+$/, 'Born should be English letters, digits, and whitespaces'],
        minLength: [10, 'Born should be at least 5 characters long'],
    },
    // •	name in movie – String, required 
    imageUrl: {
        type: String,
        required: [true, 'Image URL is required'],
        validate: {
            validator: function (value) {
                return /^https?:\/\/.+/.test(value);
            },
            message: 'Image URL must start with http:// or https://'
        },
    },
});

const Cast = model('Cast', castShema);
export default Cast; 