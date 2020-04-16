// see if spell exists with "index"
// create a new Spell from findSpellBySpellIndex w/ spellName = 'findSpellBySpellIndex--result.name'
// display that spell in the charController

Char.findSpellBySpellIndex = function(spellIndex) {
    return new Promise(function(resolve, reject) {
        if (typeof(spellIndex) != "string") {
            reject()
            return
        }
    }).then().catch()
}

