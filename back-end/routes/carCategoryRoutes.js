const express = require('express');
const router = express.Router();

const upload = require('../middleware/upload-images');

const carCategoryController = require('../controllers/carCategoryController');

// Create a new car category
router.post('/', carCategoryController.createCarCategory);

// Get all car categories
router.get('/', carCategoryController.getCarCategories);

// Get a single car category by ID
router.get('/:id', carCategoryController.getCarCategoryById);

// Update a car category by ID
router.put('/:id', carCategoryController.updateCarCategoryById);

// Delete a car category by ID
router.delete('/:id', carCategoryController.deleteCarCategoryById);

// Upload an image for a car category by ID
router.post('/:id/image', upload.single('image'), carCategoryController.uploadCarCategoryImage);

module.exports = router;
