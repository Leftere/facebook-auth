const express = require('express');

require('./services/passport');

const app = express();

require('./routes/authRoutes')(app);
// checking master branch

const PORT = 5000;

app.listen(process.env.PORT || PORT, console.log(`server runs on port ${PORT}`))