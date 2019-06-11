const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//Starting App
const app = express();
//Alow to app that client send json to server
app.use(express.json());
app.use(cors());

//Starting DB
mongoose.connect('mongodb://localhost:27017/nodeapi',
    { useNewUrlParser: true}
);
requireDir('./src/models');

//Routes
app.use('/api', require('./src/routes'));

app.listen(3001);
