const express = require('express');
const app = express();
const path = require('path');

// Set views directory explicitly for Vercel's serverless environment
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Serve static files from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => res.render('index'));
app.get('/portable-charger', (req, res) => res.render('portable-charger'));
app.get('/future-projects', (req, res) => res.render('future-projects'));

// Export the app for Vercel
module.exports = app;

// Only start the server if running locally
if (require.main === module) {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}