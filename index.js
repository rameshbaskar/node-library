import express from 'express';
import bodyParser from 'body-parser';
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Welcome to Library');
});

app.listen(3000, () => {
  console.log('app started in port 3000');
});