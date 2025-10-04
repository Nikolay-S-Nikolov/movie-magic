import express from 'express';
import handlebars from 'express-handlebars';
import routes from './routes.js';
import mongoose from 'mongoose';

const app = express();
const PORT = 5000;


// MongoDB connection
const DB_URL = 'mongodb://admin:secret@localhost:27017/movie_magic?authSource=admin';

try {
    await mongoose.connect(DB_URL);
    console.log('Connected to MongoDB');
} catch (error) {
    console.error('Error connecting to MongoDB:', error);
}

// Handlebars setup
app.engine('hbs', handlebars.engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', 'src/views');

// Setup static files serving middlewere
app.use(express.static('src/public'));

// Middleware to parse URL-encoded form data
app.use(express.urlencoded());

// Routes
app.use(routes);

// Server start
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
