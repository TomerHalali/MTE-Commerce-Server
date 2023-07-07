const dotenv = require("dotenv");
dotenv.config();
const constants = require("../constants/constants")

const mongoose = require('mongoose');

const mongoURL = process.env.MONGODB_URI;

mongoose.connect(mongoURL);

const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once(constants.databaseConstants.CONNECTED, () => {
    console.log(constants.databaseConstants.CONNECTION_MESSAGE);
})

module.exports = database;