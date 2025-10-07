import User from '../models/User.js';
import bcrypt from 'bcrypt';
import { generateAuthToken } from '../utils/tokenUtils.js'


export default {
    async register(userData) {
        const user= User.create(userData);
        const token = generateAuthToken(user);
        return token;
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

        const token = generateAuthToken(user);
        return token;
    }

};