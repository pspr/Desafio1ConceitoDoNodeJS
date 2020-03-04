//My library
const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//my app
const app = express();
app.use(express.json());



//My conncetion strinf from mongoose
mongoose.connect(
    'mongodb://localhost:27017/BootCamp', 
    {
        useUnifiedTopology: true, 
        useNewUrlParser: true
    }
);

requireDir('./src/models');

//Settings of my all routers
app.use('/api', require('./src/Routes'));

//My port connection
app.listen(2000)
