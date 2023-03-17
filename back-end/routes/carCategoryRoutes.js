const express = require('express');
const router = express.Router();

const upload = require('../middleware/upload-images');

const {
  createCarCategory,
  getCarCategories,
  getCarCategoryById,
  updateCarCategoryById,
  deleteCarCategoryById,
  uploadCarCategoryImage
} = require('../controllers/carCategoryController');

// Create a new car category
router.post('/', createCarCategory);

// Get all car categories
router.get('/', getCarCategories);

// Get a single car category by ID
router.get('/:id', getCarCategoryById);

// Update a car category by ID
router.put('/:id', updateCarCategoryById);

// Delete a car category by ID
router.delete('/:id', deleteCarCategoryById);

// Upload an image for a car category by ID
router.post('/:id/image', upload.single('image'), uploadCarCategoryImage);

module.exports = router;
