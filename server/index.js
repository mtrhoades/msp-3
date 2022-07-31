// dependencies
const express = require('express');
const cors = require('cors');

// config
const app = express();
require('dotenv').config();
const PORT = process.env.PORT;


// middleware
app.use(cors());
app.use(express.json()); //req.body on client side


// root route
app.get('/', (req, res) => {
    res.send('Welcome to my Lair!')
});


// controller routes
    // resister and login routes
app.use('/auth', require('./controllers/jwtAuth'));

// server listen
app.listen(PORT, () => {
    console.log('We up in here on PORT', PORT)
});