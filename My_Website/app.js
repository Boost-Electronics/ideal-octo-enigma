const express = require('express');
const app = express();
const path = require('path');

// 1. Static Files: Ensure this is defined BEFORE your routes
// Using path.join(__dirname) ensures Vercel finds the 'public' folder in production
app.use(express.static(path.join(__dirname, 'public')));

// 2. View Engine Setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// --- Routes ---

app.get('/', (req, res) => res.render('index'));
app.get('/portable-charger', (req, res) => res.render('portable-charger'));
app.get('/future-projects', (req, res) => res.render('future-projects'));

// Clean up the Vision route (Remove /views/ and .ejs from the URL)
app.get('/views/portable-charger-vision.ejs', (req, res) => {
    res.render('portable-charger-vision');
});

app.get('/views/portable-charger-PCB.ejs', (req, res) => {
    res.render('portable-charger-PCB');
});

app.get('/portable-charger/cad', (req, res) => {
    res.render('portable-charger-cad');
});

app.get('/portable-charger/final-build', (req, res) => {
    res.render('portable-charger-final-build');
});

// Redirect old .ejs link if necessary
app.get('/index.ejs', (req, res) => res.redirect('/'));

// Export the app for Vercel
module.exports = app;

// Only start the server if running locally
if (require.main === module) {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}