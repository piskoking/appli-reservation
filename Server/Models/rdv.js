const mongoose = require('mongoose');

const rdvSchema = new mongoose.Schema({
  heure: { type: Number, required: true },
  date: { type: Number, required: true },
  status: { type: String, required: true },
  client: { type: String, required: true },
  email: { type: String, required: true },
  numero: { type: Number, required: true }
  
});

const RDV = mongoose.model('RDV', rdvSchema);

module.exports = RDV;
