const mongoose = require('mongoose')
const schema   = mongoose.Schema

// https://mongoosejs.com/docs/schematypes.html
const FavorisSchema = new schema({
    id_utilisateur: {
        type     : mongoose.Schema.Types.ObjectId,
        ref      : 'utilisateur'
    },
    id_mission: {
        type     : mongoose.Schema.Types.ObjectId,
        ref      : 'mission'
    },
})

module.exports = Favoris = mongoose.model('favoris', FavorisSchema)