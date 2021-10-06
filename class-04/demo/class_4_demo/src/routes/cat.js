'use strict';

const express = require('express');

const catCollection = require('../models/index.js').Cat;

const router = express.Router();

//REST route declerations

router.get('/cat', getCat);
router.get('/cat/:id', getOneCat);
router.post('/cat', createCat);
router.put('/cat/:id', updateCat);
router.delete('/cat/:id', deleteCat);

async function getCat(req, res) {
    let cats = await catCollection.read();
    res.status(200).json(cats);
}

async function getOneCat(req, res) {
    let id = req.params.id
    let cat = await catCollection.read(id);
    res.status(200).json(cat);
}

async function createCat(req, res) {
    let obj = req.body;
    let cat = await catCollection.create(obj);
    res.status(200).json(cat);
}

async function updateCat(req, res) {
    let id = req.params.id;
    const obj = req.body;
    let updatedCat = await catCollection.update(id, obj);
    res.status(200).json(updatedCat);
}

async function deleteCat(req, res) {
    let id = req.params.id;
    let deletedCat = await catCollection.delete(id);
    res.status(200).json(deletedCat);
}

module.exports = router;