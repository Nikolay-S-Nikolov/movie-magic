import express from 'express';
import handlebars from 'express-handlebars';
import routes from './routes.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;;


// MongoDB connection
const DB_URL = process.env.DB_URL;

try {
    await mongoose.connect(DB_URL);
    console.log('Connected to MongoDB');
} catch (error) {
    console.error('Error connecting to MongoDB:', error);
}

// Handlebars setup
app.engine('hbs', handlebars.engine({
    extname: '.hbs',
    runtimeOptions: {
        allowProtoMethodsByDefault: true,
        allowProtoPropertiesByDefault: true
    }
}));
app.set('view engine', 'hbs');
app.set('views', 'src/views');

// Setup static files serving middleware
app.use(express.static('src/public'));

// Middleware to parse URL-encoded form data
app.use(express.urlencoded());

// Routes
app.use(routes);

// Server start
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
