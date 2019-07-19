const express = require('express');
const keys = require('./config/keys');
const mongoose = require('mongoose');
require('./models/User');
require('./services/passport');
mongoose.connect(keys.mongoDB);
const app = express();

require('./routes/authRoutes')(app);

const PORT = 5000;

app.listen(process.env.PORT || PORT, console.log(`server runs on port ${PORT}`))