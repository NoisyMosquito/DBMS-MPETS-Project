require("dotenv").config();

const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/species', (req, res) => {
db.query('SELECT * FROM Marine_Species', (err, result) => {
if (err) return res.status(500).send(err);
res.json(result);
});
});

app.listen(3001, () => {
console.log('Server running on http://localhost:3001');
});