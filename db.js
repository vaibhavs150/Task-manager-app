// db.js

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/task-manager', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB', error);
});
