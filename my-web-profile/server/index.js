
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

const uri = "mongodb+srv://AniketKumar:E275UpRJPrtWNnKh@my-web-profile.5948b.mongodb.net/?retryWrites=true&w=majority&appName=my-web-profile"; // Replace with your actual connection string
mongoose.connect(uri, { 
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

const Contact = require('./models/contact.model'); 

app.use(cors());
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
