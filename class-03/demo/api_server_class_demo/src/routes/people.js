'use strict';

const express = require('express');

// require the People object from /models/index, not from /models/people
const { People } = require('../models/index.js');

const router = express.Router();

//RESTful Route Delarartions
router.get('/people', getPeople);
router.get('/people/:id', getOnePerson);
router.post('/people', createPerson);
router.put('/people/:id', updatePerson);
router.delete('/people/:id', deletePerson);

// Restful Router Handlers
async function getPeople(req,res) {
    console.log('People', People);
    let allPeople = await People.findAll();
    res.status(200).json(allPeople);
}

async function getOnePerson(req,res) {
    const id = parseInt(req.params.id);
    let person = await People.findOne({ where:{ id: id } });
    res.status(200).json(person)
}

async function createPerson(req,res) {
    let personData = req.body;
    let person = await People.create(personData);
    res.status(200).json(person);
}

async function updatePerson(req,res) {
    const id = parseInt(req.params.id);
    const personData = req.body;
    let person = await People.findOne({ where: { id: id} });
    let updatedPerson = await person.update(personData);
    res.status(200).json(updatedPerson);
}

async function deletePerson(req,res) {
    let id = parseInt(req.params.id);
    let deletedPerson = await People.destroy({ where: { id: id } });
    res.status(200).json(deletedPerson);
}

module.exports = router;