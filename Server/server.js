

// const express = require('express');

// const mongoos = require('mongoose')
// const app = express()

// const port = 3001

// // const mongodb = "mongodb+srv://NomadNexus:<password>@my-love-planet.vco2jng.mongodb.net/?retryWrites=true&w=majority"

// async function run() {  
//     await mongoos.connect('mongodb+srv://NomadNexus:<password>@my-love-planet.vco2jng.mongodb.net/?retryWrites=true&w=majority');

//     const UserSchema = await mongoos.Schema({
//     name: String,
//     age: Number
//     })

//     const User = mongoos.model('User', UserSchema);

//     await User.create({
//     name: 'Test',
//     age: 25
//     })
// }
// run()
// app.get('/', (req, res) => {
    

//     res.send('Hello von NomadNexus');
// });


// app.listen(port, () => {
//         console.log(`Server is Running on ${port}`);

// });


const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// const cors = require('cors');
// const api = require('./routes/api');
// const app = express();
// const port = 8080; app.use(cors()); 


const port = 8080;

// Markieren Sie die run-Funktion als async
async function run() {
    try {
        

// app.use('/api', api);

        await mongoose.connect('mongodb+srv://NomadNexus:techstarter5@my-love-planet.vco2jng.mongodb.net/Maps?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });


        const MapsSchema = new mongoose.Schema({
            city: String,
            state: String,
            postalcode: Number
        });

        const Maps = mongoose.model('Maps', MapsSchema);

        const newMaps = new Maps({
            city: 'Siegen',
            state: 'NRW',
            postalcode: 579072
        });

        await newMaps.save();

        console.log('Maps Created Successfully');
    } catch (error) {
        console.error('Error:', error);
    }
}

// Rufen Sie die run-Funktion auf

run();

app.get('/', (req, res) => {
    res.send('Hello von NomadNexus');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});





// /*
// app.get('/'): 
// Hier wird eine HTTP-GET-Anfrage auf der Wurzelroute ("/") definiert. 
// Das bedeutet, dass, wenn jemand die Haupt-URL der Website besucht (z.B. http://www.example.com/), dieser Codeblock ausgeführt wird.
// */

// app.get('/', (req, res) => {
// res.send('Hello von Express');
// });


// app.listen(port, () => {
// console.log(`Server läuft auf Port ${port}`);
// });


const path = require('path');
const apiRoutes = require('./routes/api');  // Importieren Sie die API-Routen nur einmal

const app = express();
const port = 8080;

// CORS Middleware
app.use(cors());

// Body Parser Middleware (für POST-Anfragen)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

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

