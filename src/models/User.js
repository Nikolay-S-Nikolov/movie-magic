import { Schema, model } from "mongoose";
import bcrypt from 'bcrypt';

const userSchema = new Schema({
    email: {
        type: String,
        match: [/^\S+@\S+\.\S+$/, 'Invalid email string'],
        required: [true, 'Email is required'],
        minLength: [10, 'Email should be at least 10 char long'],
        unique: true,
    },
    password: {
        type: String,
        match: [/^[A-Za-z0-9]+$/, 'Password consist only of English letters and digits'],
        minLength: [6, 'Minimu length of password is 6 char'],
        required: [true, 'Please enter password'],
    }
});

// Create a virtual property `rePassword` passed as data to create User.
userSchema.virtual('repassword')
    .get(function () {
        return this._repassword;

    })
    .set(function (value) {
        this._repassword = value;
    });

userSchema.pre('validate', function (next) {
    if (this.isNew && this.repassword !== this.password) {
        this.invalidate(this.password, 'Password missmatch!')
    }
    next();
});


userSchema.pre('save', async function () {
    // Generate salt
    // const salt = await bcrypt.genSalt(12);
    this.password = await bcrypt.hash(this.password, 12);

})

const User = model('User', userSchema);
export default User;