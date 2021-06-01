const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

const app = express();
mongoose.set('debug', true)
mongoose.connect("mongodb+srv://Users:users12345@cluster0.vlmjs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then( () => {
  console.log('Connection to the Atlas Cluster is successful!')
  })
  .catch((err) => console.error(err));

requireDir('./src/models');

app.use(express.json())
app.use('/api/v1', require('./src/routes'));


app.listen(3001)