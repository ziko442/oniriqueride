const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const authMiddleware = (req, res, next) => {
    const authHeader = req.header('Authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'Access denied. No token provided.' });
    }
  
    const token = authHeader.substring(7);
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;
      next();
    } catch (ex) {
      res.status(400).json({ error: 'Invalid token.' });
    }
  };
  
  module.exports = authMiddleware;

// const jwt = require('jsonwebtoken');
// const dotenv = require('dotenv');

// dotenv.config();

// const authMiddleware = (req, res, next) => {
// const token = req.header('Authorization');

//   if (!token) {
//     return res.status(401).json({ error: 'Access denied. No token provided.' });
//   }

//   try {
//     const decoded = jwt.verify(token,  process.env.JWT_SECRET);
//     req.user = decoded;
//     next();
//   } catch (ex) {
//     res.status(400).json({ error: 'Invalid token.' });
//   }
// };

// module.exports = authMiddleware;
