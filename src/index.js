import express from 'express';
import handlebars from 'express-handlebars';

const app = express();
const PORT = 5000;


// Handlebars setup
app.engine('hbs', handlebars.engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', 'src/views');

// Setup static files serving middlewere
app.use(express.static('src/public'));

// Routes
app.get('/', (req, res) => {
    res.render('home');
});

// Server start
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
