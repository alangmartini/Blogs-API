const express = require('express');
const router = express.Router();
const categoryService = require('../services');

const registerCategory = async (req, res) => {
    try {
      const { name } = req.body;
      const newCategory = await categoryService.createCategory(name);
      res.status(201).json(newCategory);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

module.exports = {
    registerCategory,
};
