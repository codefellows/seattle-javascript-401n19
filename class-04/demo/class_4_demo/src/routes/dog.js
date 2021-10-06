'use strict';

const express = require('express');

const dogCollection = require('../models/index.js').Dog;

const router = express.Router();

//REST route declerations

router.get('/Dog', getDog);
router.get('/Dog/:id', getOneDog);
router.post('/Dog', createDog);
router.put('/Dog/:id', updateDog);
router.delete('/Dog/:id', deleteDog);

async function getDog(req, res) {
    let Dogs = await dogCollection.read();
    res.status(200).json(Dogs);
}

async function getOneDog(req, res) {
    let id = req.params.id
    let Dog = await dogCollection.read(id);
    res.status(200).json(Dog);
}

async function createDog(req, res) {
    let obj = req.body;
    let Dog = await dogCollection.create(obj);
    res.status(200).json(Dog);
}

async function updateDog(req, res) {
    let id = req.params.id;
    const obj = req.body;
    let updatedDog = await dogCollection.update(id, obj);
    res.status(200).json(updatedDog);
}

async function deleteDog(req, res) {
    let id = req.params.id;
    let deletedDog = await dogCollection.delete(id);
    res.status(200).json(deletedDog);
}

module.exports = router;