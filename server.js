const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

const authController = require('./backend/controllers/auth');
const animalController = require('./backend/controllers/animal');

const app = express();
const PORT = process.env.PORT || 8080;

const MONGO_URI = 'mongodb+srv://Stiliyan26:stili2002@zoo.w5fpxat.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(MONGO_URI || 'mongodb://localhost/zoo', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!!!');
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.use('/users', authController);
app.use('/animals', animalController);

app.listen(PORT, console.log(`Server is starting on port: http://localhost:${PORT}`));