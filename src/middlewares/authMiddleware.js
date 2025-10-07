import jws from 'jsonwebtoken';

export default function authMiddleware(req, res, next) {
    const token = req.cookies['auth']; // from middleware cookie-parser for HTTP cookies 

    if (!token) {
        return next();
    }

    try {
        const decodedToken = jws.verify(token, process.env.JWT_SECRET);
        req.user = decodedToken;
        req.isAuthenticated = true;
        next();
    } catch (err) {
        res.clearCookie('auth')
        res.redirect('auth/login')
    }
}