const paiement = require('../Models/paiement');

// Créer un produit
const createpaiement = async (req, res) => {
    try {
        const { paiementName, paiementType, paiementPrice } = req.body;
        const newpaiement = await paiement.create({
            paiementName,
            paiementType,
            paiementPrice,
        });
        res.status(201).json({ message: "Paiement créé avec succès", newpaiement });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Lire tous les produits
const getAllpaiements = async (req, res) => {
    try {
        const paiements = await paiement.find();
        res.status(200).json({ message: "Liste de tous les paiement", paiements });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Lire un produit par ID
const getpaiementById = async (req, res) => {
    try {
        const paiementId = req.params.id;
        const paiement = await paiement.findById(paiementId);
        if (!paiement) {
            return res.status(404).json({ message: 'Paiement introuvable' });
        }
        res.status(200).json({ message: "Paiement trouvé", paiement });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Mettre à jour un produit par ID
const updatepaiement = async (req, res) => {
    try {
        const paiementId = req.params.id;
        const { paiementName, paiementType, paiementPrice } = req.body;
        const updatedpaiement = await paiement.findByIdAndUpdate(
            paiementId,
            { paiementName, paiementType, paiementPrice },
            { new: true }
        );
        if (!updatedpaiement) {
            return res.status(404).json({ message: 'Paiement introuvable' });
        }
        res.status(200).json({ message: "Paiement mis à jour avec succès", updatedpaiement });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Supprimer un produit par ID
const deletepaiement = async (req, res) => {
    try {
        const paiementId = req.params.id;
        const deletedpaiement = await paiement.findByIdAndDelete(paiementId);
        if (!deletedpaiement) {
            return res.status(404).json({ message: 'Paiement introuvable' });
        }
        res.status(200).json({ message: 'Paiement supprimé avec succès' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createpaiement,
    getAllpaiements,
    getpaiementById,
    updatepaiement,
    deletepaiement,
};
