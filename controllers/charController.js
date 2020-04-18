const Spell = require('../models/Spell')

exports.myCharacter = function(req, res) {
    res.render('my-spells')
}

exports.listSpells = function(req, res) {
    let spellInstance = new Spell()
    this.spellInstance.getSpellsList().then().catch()
}