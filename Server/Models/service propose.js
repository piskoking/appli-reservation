const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  duree: { type: Number, required: true },
  tarif: { type: Number, required: true },
  iduser_propose_ds: { type: mongoose.Schema.Types.ObjectId, ref: 'Professionnel', required: true }
});

const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;
