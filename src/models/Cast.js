import { Schema, model } from "mongoose";

const castShema = new Schema({
    name: {
        type: String,
        required: [true, 'Cast name is required!'],
    },
    age: {
        type: Number,
        required: [true, 'Age is required'],
        max: [120, 'Age cannot be over 120'],
        min: [0, 'Age cannot be negative'],
    },
    born: {
        type: String,
        required: [true, 'Birthplace is required'],
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