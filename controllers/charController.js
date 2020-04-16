exports.myCharacter = function(req, res) {
    res.render('my-character')
}

exports.listSpells = async function(req, res) {
    listOfSpells = await Spell.getSpellsList()
    res.console.table(listOfSpells)
}