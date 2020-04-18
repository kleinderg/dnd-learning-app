const express = require('express')
const router = express.Router()
const charController = require('./controllers/charController')
const axios = require('axios')
// import controllers in here like const thisController = require('./controllers/thisController')

// character related routes
router.get('/', charController.myCharacter)
router.get('/find-acid-arrow', function(req, res) {
    axios.get('www.dnd5eapi.co/api/spells/acid-arrow/').then(data => {
        console.log(this.data)
    }).catch(error => {
        console.log("Something didn't work right")
    })
    res.send(this.data)
})
// router.get('/find-spells', charController.listSpells)

module.exports = router


function getSpellsList() { 
    axios.get('http www.dnd5eapi.co/api/spells/acid-arrow/')
    .then(data => {
       console.table(data);
    })
    .catch(error => {
      console.log(error);
    });
  }