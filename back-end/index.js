const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');

dotenv.config();
const app = express();



// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader(
//       'Access-Control-Allow-Headers',
//       'Origin, X-Requested-With, Content-Type, Accept, Authorization'
//     );
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
  
//     next();
//   });

mongoose.connect(process.env.MONGODB_URI).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error(error);
});


app.use(bodyParser.json());
app.use(cors());
app.use('/api/users', userRoutes);

app.listen(3001, () => console.log('Server is listening on port 3001'));
