const CarCategory = require('../models/carCategory');
const path = require("path");
const fs = require('fs');

// GET all car categories
exports.getCarCategories = async (req, res, next) => {
  try {
    const carCategories = await CarCategory.find();
    res.status(200).json(carCategories);
  } catch (error) {
    next(error);
  }
};

// GET single car category by ID
exports.getCarCategoryById = async (req, res, next) => {
  const { id } = req.params;

  try {
    const carCategory = await CarCategory.findById(id);

    if (!carCategory) {
      return res.status(404).json({ message: 'Car category not found' });
    }

    res.status(200).json(carCategory);
  } catch (error) {
    next(error);
  }
};

// POST create new car category
exports.createCarCategory = async (req, res, next) => {
  const {
    name,
    description,
    maxPassengers,
    maxLuggage,
    costPerMile,
    costPerMinute
  } = req.body;

  try {
    const carCategory = new CarCategory({
      name,
      description,
      maxPassengers,
      maxLuggage,
      costPerMile,
      costPerMinute
    });

    await carCategory.save();

    res.status(201).json(carCategory);
  } catch (error) {
    next(error);
  }
};

// PUT update existing car category by ID
exports.updateCarCategoryById = async (req, res, next) => {
  const { id } = req.params;
  const {
    name,
    description,
    maxPassengers,
    maxLuggage,
    costPerMile,
    costPerMinute
  } = req.body;

  try {
    const carCategory = await CarCategory.findByIdAndUpdate(
      id,
      {
        name,
        description,
        maxPassengers,
        maxLuggage,
        costPerMile,
        costPerMinute
      },
      { new: true }
    );

    if (!carCategory) {
      return res.status(404).json({ message: 'Car category not found' });
    }

    res.status(200).json(carCategory);
  } catch (error) {
    next(error);
  }
};

// DELETE remove car category by ID
exports.deleteCarCategoryById = async (req, res, next) => {
    const { id } = req.params;
  
    try {
      const carCategory = await CarCategory.findByIdAndRemove(id);
  
      if (!carCategory) {
        return res.status(404).json({ message: 'Car category not found' });
      }
  
      res.status(200).json({ message: 'Car category deleted successfully' });
    } catch (error) {
      next(error);
    }
  };
  
 // POST upload car category image
exports.uploadCarCategoryImage = async (req, res, next) => {
  const { id } = req.params;

  try {
    const carCategory = await CarCategory.findById(id);

    if (!carCategory) {
      return res.status(404).json({ message: 'Car category not found' });
    }

    if (!req.file || Object.keys(req.file).length === 0) {
      return res.status(400).json({ message: 'No image file provided' });
    }

    const file = req.file;
    const fileName = `${id}-${file.originalname}`;
    const filePath = path.join('images', fileName);

    // Delete the old image if it exists
    if (carCategory.imageUrl) {
      const oldImagePath = path.join(__dirname, '..', carCategory.imageUrl);
      fs.unlink(oldImagePath, (err) => {
        if (err) {
          console.error(err);
        }
      });
    }

    carCategory.imageUrl = `${filePath}`;
    await carCategory.save();

    res.status(200).json({ message: 'Image uploaded successfully' });
  } catch (error) {
    next(error);
  }
};

  
  
