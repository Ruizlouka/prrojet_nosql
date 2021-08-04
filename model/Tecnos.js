const mongoose = require('mongoose')
const schema   = mongoose.Schema

// https://mongoosejs.com/docs/schematypes.html
const TecnosSchema=new schema({
    name : { type:String, required:'un nom est obligatoire:)' },
})

module.exports = Tecnos = mongoose.model('tecnos',TecnosSchema)