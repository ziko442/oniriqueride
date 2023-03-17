const multer = require('multer');
const fs = require('fs');
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const dir = './images';
    if (!fs.existsSync(dir)){
      fs.mkdirSync(dir);
    }
    cb(null, dir);
  },
  filename: function (req, file, cb) {
    const { id } = req.params;
    const fileName = `${id}-${file.originalname}`;
    cb(null, fileName);
  },
});

const upload = multer({ storage: storage });

module.exports = upload;
