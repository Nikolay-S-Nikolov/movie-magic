import { Router } from "express";
import homeController from './controllers/homeController.js';
import movieController from './controllers/movieController.js';
import castController from './controllers/castController.js'

const routes = Router();

routes.use('/',homeController);
routes.use('/movies', movieController);
routes.use('/casts', castController);

routes.get('/*splash', (req, res) => {
    res.render('404', { pageTitle: '404 Page' });
}); 

export default routes;
