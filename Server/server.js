const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Place = require('./Models/place')
const Ort = require('./Models/ortdaten')
const db = require("./db");
const cors = require('cors');
const place = require('./Models/place');

const app = express();
const port = 8080;


app.use(cors());
app.use(bodyParser.json());
const corsOptions ={
    origin:'*',
    
           
    optionSuccessStatus:200
  }
  app.use(cors(corsOptions));
// Body Parser Middleware (für POST-Anfragen)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.get('/', (req, res) => {
    res.send('Hello from everywhere');
});

app.post('/add', (req, res) => {
    Place.create ({
        city: req.body.city,
        country : req.body.country,
        reminder: req.body.reminder,
        note:  req.body. note,
        visit: req.body.visit
    }).then((newplace)=>{res.send(newplace)})

    .catch(err => res.send(err))
});


app.post('/ortdaten', (req, res) => {
    Ort.create ({
        zipCode: req.body.zipCode,
        street : req.body.street,
    }).then((newdaten)=>{res.send(newdaten)})
    
    .catch(err => res.send(err))
});

app.get('/allplaces', async (req, res) => {
    const allplaces = await Place.find({})
    .catch((err) => res.status(500).send("Server Error"));
    res.status(200).json(allplaces);
})

app.get('/info', async (req, res) => {
    const bank = await Ort.find({})
    .catch((err) => res.status(500).send("Server Error"));
    res.status(200).json(bank);
})

app.delete('/delete/:id', async (req, res) => {
    try {
        const place = await Place.findOneAndDelete({ _id: req.params.id });
    
        if (!place) {
        return res.status(404).json({ success: false, error: `Place not found` });
        }
    
        return res.status(200).json({ success: true, data: place });
    } catch (err) {
        return res.status(400).json({ success: false, error: err.message });
    }
    });
  

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});