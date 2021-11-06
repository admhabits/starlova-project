const express = require('express');
const cors = require('cors');
const path = require('path');
const { PORT } = require('./config/variable');

// CONSTANT ROUTES
const Users = require('./routes/Users');
const app = express();

app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// this func allow users to visit this path 
app.use('/e-book', express.static(path.join(__dirname, 'e-book')))

// CREATE STATIC PATH REACT BUILD
app.use(express.static(path.join(__dirname, 'admin/build')))

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'admin/build', 'index.html'))
})

// app.get('/*', (req, res) => {
//   res.json({ message: "Welcome to starlova application." });
// })


// API ROUTES
app.use('/api/users', Users);

// CONSTANT PORT FROM ENV
const port = PORT || 4000;

// RUNNING THE SERVER
app.listen(port, () => console.log(`\n ======== Your App running on port ${port} ======== \n`))
