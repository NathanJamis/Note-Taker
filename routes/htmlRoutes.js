const path = require('path');
const router = express.Router();

router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

module.exports = router;


// module.exports = (app) => {
//     app.get('/notes', (req, res) => {
//         res.sendFile(path.join(__dirname, '..public/notes.html'));
//     });
//     app.get('/assets/css/style.css', (req, res) => {
//         res.sendFile(path.join(__dirname, '..public/assets/css/style.css'));
//     });
//     app.get('/assets/js/index.js', (req, res) => {
//         res.sendFile(path.join(__dirname, '..public/assets/js/index.js'));
//     });
//     app.get('*', (req, res) => {
//         res.sendFile(path.join(__dirname, '..public/index.html'));
//     });
// }