const path = require('path');

module.exports = (app) => {
    // app.get('/', (req, res) => {
    //     res.sendFile(path.join(__dirname, '..public/index.html'));
    // });
    app.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '..public/notes.html'));
    });
    app.get('/assets/css/style.css', (req, res) => {
        res.sendFile(path.join(__dirname, '..public/assets/css/style.css'));
    });
    app.get('/assets/js/index.js', (req, res) => {
        res.sendFile(path.join(__dirname, '..public/assets/js/index.js'));
    });
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '..public/index.html'));
    });
}