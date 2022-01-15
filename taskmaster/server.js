const express = require('express');
const cors = require('cors');

const app = express();

var corsOptions = {
    origin: 'http://localhost:8081'
}

//Express options for reading port options, data (json) and middleware parsing
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended:true }));

