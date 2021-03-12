const fs = require('fs');
let db = JSON.parse(fs.readFileSync('./db/db.json'));
let id = 1;

module.exports = (app) => {
    app.get('/api/notes', (req, res) => {
        res.json(db)
    });
    app.post('/api/notes', (req, res) => {
        let newNote = {
            id: id++,
            title: req.body.title,
            text: req.body.text
        };
        db.push(newNote);
        fs.writeFile('./db/db.json', JSON.stringify(db), (err, data) => {
            if (err) {
                throw err;
            }
        });
        res.end();
    });
    app.delete('/api/notes/:id', (req, res) => {
        db.splice(db.findIndex(element => element.id == req.params.id), 1);
        fs.writeFile('/db/db.json', JSON.stringify(db), (err, data) => {
            if (err) {
                throw err;
            }
        });
        res.end();
    })
}