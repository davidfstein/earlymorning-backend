const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(cors({credentials: true, origin: true}));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const mongoUser = process.env.RESUME_MONGO_USER;
const mongoPassword = process.env.RESUME_MONGO_PASSWORD;
const mongoHost = process.env.RESUME_MONGO_HOST;
const mongoPort = process.env.RESUME_MONGO_PORT;
const mongoDb = process.env.RESUME_MONGO_DB;
mongoose.connect(`mongodb://${mongoUser}:${mongoPassword}@${mongoHost}:${mongoPort}/${mongoDb}`);

// require('./services/post-service')(app);

app.listen(process.env.PORT || 3000)