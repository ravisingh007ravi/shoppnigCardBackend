const express = require('express');
const mongoose  = require('mongoose');
const cors = require('cors');
const route = require('./routes/routes.js')
require('dotenv').config()
const app = express();

app.use(cors());
app.use(express.json());

const DB = process.env.DB;
const port = process.env.PORT || 5000;


mongoose.connect(process.env.MONGODB_URI || DB)
    .then(() => console.log("Mongoose is Connected😊😊"))
    .catch((err) => console.log(err));


app.use('/', route);

app.listen(port, () => console.log(`Server is Running Succesfully ${port}💕`));
