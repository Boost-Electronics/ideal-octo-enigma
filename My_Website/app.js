const express = require('express');
const app = express();
const path = require('path');

// 1. Static Files
app.use(express.static(path.join(__dirname, 'public')));

// 2. View Engine Setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// --- Routes ---

// Home
app.get('/', (req, res) => res.render('index'));

// Main Project Pages
app.get('/portable-charger', (req, res) => res.render('portable-charger'));
app.get('/future-projects', (req, res) => res.render('future-projects'));

// Portable Charger Sub-Pages
app.get('/views/portable-charger-vision.ejs', (req, res) => res.render('portable-charger-vision'));
app.get('/views/portable-charger-pcb.ejs', (req, res) => res.render('portable-charger-pcb'));
app.get('/views/portable-charger-cad.ejs', (req, res) => res.render('portable-charger-cad'));

// THE FIX: This matches your screenshot URL exactly
app.get('/portable-charger/final-build', (req, res) => {
    res.render('portable-charger-final-build');
});

// Redirects
app.get('/index.ejs', (req, res) => res.redirect('/'));

// Export for Vercel
module.exports = app;

// Local Server Start
if (require.main === module) {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, '0.0.0.0', () => { 
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}