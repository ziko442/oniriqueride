







// app.use('/uploads/images', express.static(
//   path.join('uploads', 'images')
// ))



// app.use('/api/places', placesRoutes); // => /api/places...





const fs = require('fs');
const path = require('path');

const bodyParser = require('body-parser');
const express = require("express");
const mongoose = require('mongoose');

// const placesRoutes = require('./routes/places-routes');
const usersRoutes = require('./routes/users-routes');
const HttpError = require('./models/http-error');

const PORT = process.env.PORT || 3001;

const app = express();


app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');

  next();
});


app.use('/api/users', usersRoutes);

app.use((req, res, next) => {
  const error = new HttpError('Could not find this route.', 404);
  throw error;
});


app.use((error, req, res, next) => {
  if (req.file) {
    fs.unlink(req.file.path, err => {
      console.log(err);
    });
  }
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || 'An unknown error occurred!' });
});



app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

mongoose
  .connect(`mongodb+srv://ziko442:zikooo1995.@cluster0.mp06q.mongodb.net/oniriqueride?retryWrites=true&w=majority`)
  .then(() => {
    app.listen(5000);
    console.log("database is connected successfully");
  })
  .catch(err => {
    console.log(err);
  });