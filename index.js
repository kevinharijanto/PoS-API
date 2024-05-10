const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser'); 

const app = express();
const PORT = 5500;

app.set('view engine', 'ejs');