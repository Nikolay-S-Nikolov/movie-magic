import User from '../models/User.js'
import bcrypt from 'bcrypt'

export default {
    register(userData) {
        return User.create(userData);
    },

    async login(email, password) {
        const user = await User.findOne({ email });

        if (!user) {
            throw new Error('User or password are not matching');
        }

        const isValid = await bcrypt.compare(password, user.password);

        if (!isValid) {
            throw new Error('User or password are not matching');
        }
    }

};