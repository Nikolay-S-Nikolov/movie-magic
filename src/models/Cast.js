import { Schema, model } from "mongoose";

const castShema = new Schema({
    name: {
        type: String,
        required: [true, 'Cast name is required!'],
        match: /^[A-Za-z0-9\s]+$/,
        minLength: 5,
    },
    age: {
        type: Number,
        required: [true, 'Age is required'],
        max: [120, 'Age cannot be over 120'],
        min: 1,
    },
    born: {
        type: String,
        required: [true, 'Birthplace is required'],
        match: /^[A-Za-z0-9\s]+$/,
        minLength: 10,
    },
    // •	name in movie – String, required 
    imageUrl: {
        type: String,
        required: true,
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