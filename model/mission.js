const mongoose = require('mongoose')
const schema   = mongoose.Schema

// https://mongoosejs.com/docs/schematypes.html
const MissionSchema = new schema({
    name : { type:String, required:'un nom est obligatoire:)' },
    localisation: { type:String },
    duree: { type:Date, required:'une durée est obligatoire:)'},
    date_de_debut: { type:Date },
    date_de_fin: { type:Date },
    is_remote: { type: Boolean, default: false },
    is_active: { type: Boolean, default: false },
    id_utilisateur   : {
        type     : mongoose.Schema.Types.ObjectId,
        ref      : 'utilisateur'
    },
    tecnos   : [{
        type     : mongoose.Schema.Types.ObjectId,
        ref      : 'tecnos'
    }],
})

module.exports = Mission  =mongoose.model('mission', MissionSchema)