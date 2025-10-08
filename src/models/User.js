import { Schema, model } from "mongoose";
import bcrypt from 'bcrypt';

const userSchema = new Schema({
    email: {
        type: String,
        match: /^\S+@\S+\.\S+$/,
        required: true,
        minLength: 10,
        unique: true,
    },
    password: {
        type: String,
        match: /^[A-Za-z0-9]+$/,
        minLength: 6,
        required: true,
    }
});

userSchema.pre('save', async function () {
    // Generate salt
    // const salt = await bcrypt.genSalt(12);
    this.password = await bcrypt.hash(this.password, 12);

})

const User = model('User', userSchema);
export default User;