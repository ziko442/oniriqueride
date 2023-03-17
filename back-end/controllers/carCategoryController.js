const CarCategory = require('../models/carCategory');


const multer = require('multer');

// Create a multer storage object
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './images'); // Set the destination folder
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // Set the file name
  },
});

// Create a multer upload object
const upload = multer({ storage: storage });

// Upload an image for a car category by ID
exports.uploadCarCategoryImageById = upload.single('image'), async (req, res) => {
  try {
    const carCategory = await CarCategory.findById(req.params.id);
    if (!carCategory) {
      return res.status(404).json({ error: 'Car category not found' });
    }
    carCategory.imageUrl = req.file.filename; // Set the image URL
    await carCategory.save();
    res.status(200).json(carCategory);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


// Create a new car category
exports.createCarCategory = async (req, res) => {
  try {
    const carCategory = new CarCategory(req.body);
    await carCategory.save();
    res.status(201).json(carCategory);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all car categories
exports.getAllCarCategories = async (req, res) => {
  try {
    const carCategories = await CarCategory.find();
    res.status(200).json(carCategories);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get a single car category by ID
exports.getCarCategoryById = async (req, res) => {
  try {
    const carCategory = await CarCategory.findById(req.params.id);
    res.status(200).json(carCategory);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update a car category by ID
exports.updateCarCategoryById = async (req, res) => {
  try {
    const carCategory = await CarCategory.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json(carCategory);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete a car category by ID
exports.deleteCarCategoryById = async (req, res) => {
  try {
    const carCategory = await CarCategory.findByIdAndDelete(req.params.id);
    res.status(200).json(carCategory);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
