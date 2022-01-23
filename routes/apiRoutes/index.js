const router = require('express').Router();
const fs = require("fs");
const path = require("path");
const { noteobjects } = require("../../db/db");

function createNewNote(body, noteobjects) {
    const newnoteobject = body;
    noteobjects.push(newnoteobject);
    fs.writeFileSync(
      path.join(__dirname, "../../db/db.json"),
      JSON.stringify({ noteobjects }, null, 2)
    );
    return newnoteobject;
  }

router.get('/notes', (req, res) => {
    res.json(noteobjects);
    console.log(noteobjects);
});

router.post('/notes', (req, res) => {
    req.body.id = noteobjects.length.toString();
    const note = createNewNote(req.body, noteobjects);
    res.json(note);
});

module.exports = router;