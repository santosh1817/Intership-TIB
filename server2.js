const express = require('express');
const cors = require('cors');
const serveStatic = require('serve-static');
const path = require('path');

const connectDB = require('./config/db');
const { mongoose } = require('./config/db');
const { routes } = require('./config/routes');

const app = express();

//const port =5000

//port = process.env.PORT;

var distDir = __dirname + '/dist/';
app.use(express.static(distDir));

//connectDB()npm insta
app.use(express.json());
app.use(cors());
//app.use(express.static("build"));
//app.use(serveStatic(__dirname + "/dist"));

app.use('/', serveStatic(path.join(__dirname, '/dist')));
app.get(/.*/, function(req, res) {
//res.sendFile(path.join(__dirname, '/dist/index.html'));
});
app.use('/', routes);

const port = process.env.PORT || 8080;
app.listen(port);
console.log(`app is listening on port: ${port}`);
