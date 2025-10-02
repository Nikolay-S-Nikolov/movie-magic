import { Router } from 'express';
import movieService from '../services/movieService.js';
const movieController = Router();

movieController.get('/create', (req, res) => {
    res.render('create');
});

movieController.post('/create', async (req, res) => {
    const movieData = req.body;
    await movieService.create(movieData);
    res.redirect('/');
});

movieController.get('/:movieId/details', (req, res) => {
    const movieId = req.params.movieId;
    const movie = movieService.getOne(movieId);
    const rating = '&#x2605;'.repeat(Math.floor(movie.rating));
    res.render('details', { movie, rating });
});

movieController.get('/search', (req, res) => {
    const filter = req.query;
    const movies = movieService.getAll(filter);
    res.render('search',{ movies, filter });
});

export default movieController;