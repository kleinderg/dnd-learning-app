const dndSpells = "www.dnd5eapi.co/api/spells/"
const axios = require('axios')

let Spell = function(data) {
    this.data = data
    this.errors = []
}

Spell.getSpellsList = () => {
    axios.get(dndSpells).then(data => {
        return data
    }).catch(error => {
        this.errors.push("Error retrieving spells list.")
        return(error)
    })
}

module.exports = Spell