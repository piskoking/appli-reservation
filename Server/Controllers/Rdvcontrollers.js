const RDV = require('../Models/rdv');

// Créer un rendez-vous
const createRDV = async (req, res) => {
    try {
        const { heure, date, status, client, email, numero } = req.body;
        const newRDV = await RDV.create({
            heure,
            date,
            status,
            client,
            email,
            numero
        });
        res.status(201).json({ message: "Rendez-vous créé avec succès", newRDV });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Lire tous les rendez-vous
const getAllRDVs = async (req, res) => {
    try {
        const rdvs = await RDV.find();
        res.status(200).json({ message: "Liste de tous les rendez-vous", rdvs });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Lire un rendez-vous par ID
const getRDVById = async (req, res) => {
    try {
        const rdvId = req.params.id;
        const rdv = await RDV.findById(rdvId);
        if (!rdv) {
            return res.status(404).json({ message: 'Rendez-vous introuvable' });
        }
        res.status(200).json({ message: "Rendez-vous trouvé", rdv });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Mettre à jour un rendez-vous par ID
const updateRDV = async (req, res) => {
    try {
        const rdvId = req.params.id;
        const { heure, date, status, client, email, numero } = req.body;
        const updatedRDV = await RDV.findByIdAndUpdate(
            rdvId,
            { heure, date, status, client, email, numero },
            { new: true }
        );
        if (!updatedRDV) {
            return res.status(404).json({ message: 'Rendez-vous introuvable' });
        }
        res.status(200).json({ message: "Rendez-vous mis à jour avec succès", updatedRDV });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Supprimer un rendez-vous par ID
const deleteRDV = async (req, res) => {
    try {
        const rdvId = req.params.id;
        const deletedRDV = await RDV.findByIdAndDelete(rdvId);
        if (!deletedRDV) {
            return res.status(404).json({ message: 'Rendez-vous introuvable' });
        }
        res.status(200).json({ message: 'Rendez-vous supprimé avec succès' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createRDV,
    getAllRDVs,
    getRDVById,
    updateRDV,
    deleteRDV,
};
