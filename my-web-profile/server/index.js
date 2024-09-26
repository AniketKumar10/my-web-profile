require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

const uri = process.env.MONGODB_URI;

mongoose.connect(uri, { 
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

const Contact = require('./models/contact.model'); 

const corsOptions = {
    origin: 'http://localhost:3000', // Replace with your frontend URL 
    optionsSuccessStatus: 200 // Some legacy browsers choke on 204
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.post('/contact', (req, res) => {
    console.log('Received request!');
    console.log(req.body);
    const newContact = new Contact({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message
    });

    newContact.save()
        .then(() => res.json('Contact added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
