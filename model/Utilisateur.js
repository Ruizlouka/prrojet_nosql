const mongoose = require('mongoose')
const schema   = mongoose.Schema

// https://mongoosejs.com/docs/schematypes.html
const UtilisateurSchema = new schema({
    nom : { type:String, required:'un nom est obligatoire:)' },
    mail: { type:String },
    phone: { type:String },
    avatar:{ type:String },
    createdDate:{ type: Date, default: Date.now },
    isAdmin:{ type: Boolean, default: false },
})

<<<<<<< HEAD
module.exports = Utilisateur =mongoose.model('utilisateur', UtilisateurSchema)
=======
module.exports = Utilisateur = mongoose.model('utilisateur', UtilisateurSchema)
>>>>>>> c1e8cd3... Add models
