const express = require('express');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');
const mongoose = require('mongoose');
require('./models/User');
require('./services/passport');
mongoose.connect(keys.mongoDB);
const app = express();

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        key: [keys.cookieKey]
    })
)


app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

const PORT = 5000;

app.listen(process.env.PORT || PORT, console.log(`server runs on port ${PORT}`))