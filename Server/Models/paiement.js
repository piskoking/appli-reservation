const mongoose = require('mongoose');

const paiementSchema = new mongoose.Schema({
  montant: { type: Number, required: true },
  status_paiement: { type: String, required: true },
  method_paiement: { type: String, required: true }
});

const Paiement = mongoose.model('Paiement', paiementSchema);

module.exports = Paiement;
