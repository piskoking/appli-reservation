const mongoose = require('mongoose');

const professionnelSchema = new mongoose.Schema({
  email: { type: String, required: true },
  numero: { type: Number, required: true },
  mdp: { type: String, required: true },
  metier: { type: String, required: true },
  role : {type:Number,required: true}
});

const Professionnel = mongoose.model('Professionnel', professionnelSchema);

module.exports = Professionnel;
