exports.myCharacter = function(req, res) {
    res.render('my-character')
}

exports.listSpells = function(req, res) {
    listOfSpells = Spell.getSpellsList()
    res.console.table(listOfSpells)
}