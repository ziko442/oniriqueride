const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');


const userRoutes = require('./routes/userRoutes');
const carCategoryRoutes = require('./routes/carCategoryRoutes');

dotenv.config();
const app = express();


mongoose.connect(process.env.MONGODB_URI).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error(error);
});


app.use(bodyParser.json());
// app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cors());


app.use('/api/users', userRoutes);
app.use('/api/car-categories', carCategoryRoutes);
app.use('/images', express.static('images'));



app.listen(3001, () => console.log('Server is listening on port 3001'));
