import movieService from '../services/movieService.js'

export async function isCreator(req, res, next) {
    const movieId = req.params.movieId;

    try {
        const movie = await movieService.getOne(movieId);

        if (!movie.creator?.equals(req.user.id)) {
            return res.status(401).render('404', { error: 'Only creator can edit this movie!' });
        }

        req.movie = movie

        next();
    } catch (err) {
        return res.status(401).render('404', { error: 'No such movie!' });
    }
}
