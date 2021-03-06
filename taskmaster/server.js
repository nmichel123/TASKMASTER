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

//Sample route
app.get('/', (req, res) => {
    res.json({ message: 'Hello TaskMaster!'})
});

//Links sequelize to MySQL database
const db = require('./src/models')
db.sequelize.sync()


// Routes
require('./src/routes/task.routes')(app);

//Port
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});

