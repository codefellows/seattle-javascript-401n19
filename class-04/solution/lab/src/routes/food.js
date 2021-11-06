'use strict';

const express = require('express');

const FoodCollection = require('../models/index.js').Food;

// const app = express();

const router = express.Router();

// RESTful Route Declarations
router.get('/food', getFood);
router.get('/food/:id', getOneFood);
router.post('/food', createFood);
router.put('/food/:id', updateFood);
router.delete('/food/:id', deleteFood);

// RESTful Route Handlers
async function getFood(req, res) {
  let allFood = await FoodCollection.read();
  res.status(200).json(allFood);
}

async function getOneFood(req, res) {
  const id = req.params.id;
  let theFood = await FoodCollection.read(id)
  res.status(200).json(theFood);
}

async function createFood(req, res) {
  let obj = req.body;
  let newFood = await FoodCollection.create(obj);
  res.status(200).json(newFood);
}

async function updateFood(req, res) {
  const id = req.params.id;
  const obj = req.body;
  let updatedFood = await FoodCollection.update(id, obj)
  res.status(200).json(updatedFood);
}

async function deleteFood(req, res) {
  let id = req.params.id;
  let deletedFood = await FoodCollection.delete(id);
  res.status(200).json(deletedFood);
}


module.exports = router;
