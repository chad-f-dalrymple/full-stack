// module imports
const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

// connect mongoose to mongodb
mongoose.connect(keys.mongoURI);

const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

// cookie stuff
app.use(passport.initialize());
app.use(passport.session());

// routers
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);