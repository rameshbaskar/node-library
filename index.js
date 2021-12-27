import express from 'express';
import bodyParser from 'body-parser';
import {initUserRoutes} from './routers/userRoutes';

require('dotenv').config();

const app = express();
app.use(bodyParser.json());

// Initialise the routes
initUserRoutes(app);

app.get('/', (req, res) => {
  res.send('Welcome to Library');
});

app.listen(3000, () => {
  console.log('app started in port 3000');
});