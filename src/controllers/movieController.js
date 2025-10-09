import { Router } from 'express';

import movieService from '../services/movieService.js';
import castService from '../services/castService.js';
import { isAuth } from '../middlewares/authMiddleware.js';
import { selectCatgory } from '../utils/categoryUtils.js';
import { getErrorMessage } from '../utils/errorUtils.js';

const movieController = Router();

movieController.get('/create', isAuth, (req, res) => {
    const categories = selectCatgory('');
    res.render('movies/create', { pageTitle: 'Create Movie', categories });
});

movieController.post('/create', isAuth, async (req, res) => {
    const movieData = req.body;
    const userId = req.user.id;

    try {
        const movie = await movieService.create(movieData, userId);
        res.redirect(`/movies/${movie.id}/details`);
    } catch (err) {
        const errorMessage = getErrorMessage(err);
        const categories = selectCatgory(movieData.category);
        res.status(400).render('movies/create', { error: errorMessage, movie: movieData, categories });
    }

});

movieController.get('/:movieId/details', async (req, res) => {
    const movieId = req.params.movieId;
    const movie = await movieService.getOneDetailed(movieId);
    const rating = '&#x2605;'.repeat(Math.floor(movie.rating));
    //const isCreator = req.user?.id && movie.creator == req.user.id;
    let isCreator = false;

    if (req.user && movie.creator == req.user.id) {
        isCreator = true;
    }

    res.render('movies/details', { movie, rating, pageTitle: movie.title, isCreator });
});

movieController.get('/search', async (req, res) => {
    const filter = req.query;
    const movies = await movieService.getAll(filter);
    res.render('movies/search', { movies, filter, pageTitle: 'Search Page' });
});

movieController.get('/:movieId/attach', async (req, res) => {
    const movieId = req.params.movieId;
    const movie = await movieService.getOne(movieId);
    const casts = await castService.getAll({ exclude: movie.casts });
    res.render('casts/attach', { movie, casts });
})

movieController.post('/:movieId/attach', async (req, res) => {
    const castId = req.body.cast;
    const movieId = req.params.movieId;

    if (!castId || castId === 'none') {
        return res.redirect(`/movies/${movieId}/details`);
    }

    await movieService.attach(movieId, castId);
    res.redirect(`/movies/${movieId}/details`);
})

movieController.get('/:movieId/delete', isAuth, async (req, res) => {
    const movieId = req.params.movieId;
    const movie = await movieService.getOne(movieId);

    if (!movie.creator?.equals(req.user.id)) {
        return res.redirect(`/movies/${movieId}/details`);
    }

    await movieService.delete(movieId);
    res.redirect(`/`);
})

movieController.get('/:movieId/edit', isAuth, async (req, res) => {
    const movieId = req.params.movieId;
    const movie = await movieService.getOne(movieId);

    if (!movie.creator?.equals(req.user.id)) {
        return res.redirect(`/movies/${movieId}/details`);
    }

    const categories = selectCatgory(movie.category);

    res.render(`movies/edit`, { movie, categories });
})

movieController.post('/:movieId/edit', isAuth, async (req, res) => {
    const editedData = req.body;
    const movieId = req.params.movieId;
    const movie = await movieService.getOne(movieId);

    if (!movie.creator?.equals(req.user.id)) {
        return res.redirect(`/movies/${movieId}/details`);
    }

    await movieService.edit(movieId, editedData);

    res.redirect(`/movies/${movieId}/details`);
})

export default movieController;