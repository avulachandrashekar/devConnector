const express = require('express');
const mongoose = require('mongoose');

const bodyparser = require('body-parser');

const users = require('./routes/api/users');
const posts = require('./routes/api/posts');
const profiles = require('./routes/api/profiles');
const passport = require('passport');

const db = require('./Config/keys').mongoURI;

const app = express();

app.use(bodyparser.urlencoded({extended : false}))
app.use(bodyparser.json())

//Connect to mongo
mongoose.connect(db)
       .then(() => console.log('MongoDB connected.'))
       .catch(err => console.log(err))

app.use(passport.initialize());
require('./Config/passport')(passport);

app.use('/api/users', users);
app.use('/api/posts', posts);
app.use('/api/profiles', profiles);

const port = process.env.port || 5000;

app.listen(port, ()=> console.log(`Server running on ${port}`));