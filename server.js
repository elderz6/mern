const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

//api route setup
const items = require('./routes/api/items');

//init app
const app = express();
//bodyParser middleware
app.use(bodyParser.json());

//mongo config
const db = require('./config/keys').mongoURI;

//connect to mongo
mongoose.connect(db)
  .then(()=>console.log('connected'))
  .catch(err => console.log(err));

app.use('/api/items', items);

//load static assets in production
if (process.env.NODE_ENV === 'production') {
  //set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) =>
  {
    res.sendFile(path.resolve(__dirname, 'client', 'build', index.html));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, ()=> console.log('server started on port', port));
