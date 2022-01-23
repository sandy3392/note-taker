const router = require('express').Router();
const fs = require("fs");
const path = require("path");
const { noteobjects } = require('../../db/db');

router.get('/notes', (req, res) => {
    res.json(noteobjects);
    console.log(noteobjects);
});

router.post('/notes', (req, res) => {

});

module.exports = router;