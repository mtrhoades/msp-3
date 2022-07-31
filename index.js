// dependencies
const express = require('express');
const cors = require('cors');
const path = require('path');

// config
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3070


// middleware
app.use(cors());
app.use(express.json()); //req.body on client side

// app.use(express.static(path.join(__dirname, 'client/build')));

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, 'client/build')));
}

console.log(__dirname);
console.log(path.join(__dirname, 'client/build'))

// root route
app.get('/', (req, res) => {
    res.send('Welcome to my Lair!')
});


// controller routes
    // resister and login routes
app.use('/auth', require('./controllers/jwtAuth'));


// catch all route
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "client/build/index.html"))
})

// server listen
app.listen(PORT, () => {
    console.log('We up in here on PORT', PORT)
});