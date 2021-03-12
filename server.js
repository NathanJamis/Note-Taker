const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true}));
app.use(express.json(path.join(__dirname, 'public')));

app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
});