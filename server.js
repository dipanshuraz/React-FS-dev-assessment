// Server

const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

app.use(cors());

const port = 4000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/launches', (req, res) => {
  axios
    .get('https://api.spacexdata.com/v4/launches')
    .then((response) => {
      res.status(200).json({ data: response.data });
    })
    .catch((error) => {
      res.status(500).json({ message: 'An error occurred', error });
    });
});

app.get('/rockets', (req, res) => {
  axios
    .get('https://api.spacexdata.com/v4/rockets')
    .then((response) => {
      res.status(200).json({ data: response.data });
    })
    .catch((error) => {
      res.status(500).json({ message: 'An error occurred', error });
    });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
