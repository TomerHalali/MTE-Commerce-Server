const express = require('express')
const cors = require("cors");
const applicationRoute = require("./routes");
const constants = require('./constants/constants')
const app = express()
const port = constants.serverConstants.PORT
const mongoDbConnection = require("./config/dbConnection")

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors()); // For Apply Post/Get from UI

app.use(applicationRoute); // Using Routes

app.listen(port, () => {
    console.log(`${constants.serverConstants.CONNECTION_MESSAGE} ${port}`);
})

module.exports = app
