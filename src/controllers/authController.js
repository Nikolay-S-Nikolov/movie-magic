import { Router } from 'express';
import authService from '../services/authService.js';
import { isGuest, isAuth } from '../middlewares/authMiddleware.js';
import { getErrorMessage } from '../utils/errorUtils.js';
import jwt from 'jsonwebtoken';

const authController = Router();

authController.get('/register', isGuest, (req, res) => {
    res.render('auth/register');
});

authController.post('/register', isGuest, async (req, res) => {
    const userData = req.body;
    try {
        const token = await authService.register(userData);

        res.cookie('auth', token);
        res.redirect('/');
    } catch (err) {
        const errorMessage = getErrorMessage(err);

        res.status(400).render('auth/register', { error: errorMessage, user: userData });
    }
});

authController.get('/login', isGuest, (req, res) => {
    res.render('auth/login');
});

authController.post('/login', isGuest, async (req, res) => {
    const { email, password } = req.body;

    try {
        const token = await authService.login(email, password);
        res.cookie('auth', token);
        res.redirect('/');
    } catch (err) {
        const errorMessage = getErrorMessage(err);

        res.status(400).render('auth/login', { error: errorMessage, userEmail: email });
    }

});

authController.get('/logout', isAuth, async (req, res) => {
    const token = req.cookies['auth'];
    const decoded = jwt.decode(token, process.env.JWT_SECRET);
    const expiresAt = new Date(decoded.exp * 1000);

    await authService.deactivateToken(token, expiresAt);

    res.clearCookie('auth');
    res.redirect('/');
});

export default authController;