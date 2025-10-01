import express from 'express';
import handlebars from 'express-handlebars';
import homeController from './controllers/homeController.js';
import movieController from './controllers/movieController.js';

const app = express();
const PORT = 5000;


// Handlebars setup
app.engine('hbs', handlebars.engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', 'src/views');

// Setup static files serving middlewere
app.use(express.static('src/public'));

// Routes
app.use(homeController);
app.use('/movies', movieController);
// Server start
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
