
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Place = require('./Models/place')

const Ort = require('./Models/ortdaten')
const db = require("./db");
const cors = require('cors');

const app = express();
const port = 8080;

app.use(cors());
app.use(bodyParser.json());


const db = require("./db");
const cors = require('cors');


const express = require('express');
const cors = require('cors');
const path = require('path');
const apiRoutes = require('./routes/api');  // Importieren Sie die API-Routen nur einmal


const app = express();
const port = 8080;


app.use(cors());
app.use(bodyParser.json());

// CORS Middleware
app.use(cors());



// Body Parser Middleware (für POST-Anfragen)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.get('/', (req, res) => {
    res.send('Hello from everywhere');
});

app.post('/add', (req, res) => {
    Place.create ({
        name: req.body.name,
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

// Mussen wir noch anpassen

app.post('/ortdaten', (req, res) => {
    Place.create ({
        name: req.body.name,
        country : req.body.country,
        reminder: req.body.reminder,
        note:  req.body. note,
        visit: req.body.visit
    }).then((newplace)=>{res.send(newplace)})

    
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



// Neuen Ort hinzufügen
app.post('/orte', async (req, res) => {
try {
    const {
    name,
    country,
    city,
    visitedDate,
    reminder,
    linkedPlaces,
    } = req.body;
    const neuerOrt = new Ort({
    name,
    country,
    city,
    visitedDate,
    reminder,
    linkedPlaces,
    });
    const gespeicherterOrt = await neuerOrt.save();
    res.status(201).json(gespeicherterOrt);
} catch (error) {
    res.status(500).json({ error: error.message });
}
});



app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});






// API Routes
app.use('/api', apiRoutes);  // Fügen Sie die API-Routen nur einmal hinzu

// Static File Handling for React
app.use(express.static(path.join(__dirname, '../Client/build')));

// Catch-All for React Router
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../Client/build', 'index.html'));
});

// Start Server
app.listen(port, () => {
  console.log(`Server läuft auf Port ${port}`);
});

