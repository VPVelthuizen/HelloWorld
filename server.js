const express = require('express');
const routes = require('./routes');

const app = express();
const PORT = 3001;

app.use(routes);