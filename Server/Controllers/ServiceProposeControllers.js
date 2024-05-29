const Service = require('../Models/service propose');

// Créer un service
const createService = async (req, res) => {
    try {
        const { nom, duree, tarif, iduser_propose_ds } = req.body;
        const newService = await Service.create({
            nom,
            duree,
            tarif,
            iduser_propose_ds
        });
        res.status(201).json({ message: "Service créé avec succès", newService });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Lire tous les services
const getAllServices = async (req, res) => {
    try {
        const services = await Service.find();
        res.status(200).json({ message: "Liste de tous les services", services });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Lire un service par ID
const getServiceById = async (req, res) => {
    try {
        const serviceId = req.params.id;
        const service = await Service.findById(serviceId);
        if (!service) {
            return res.status(404).json({ message: 'Service introuvable' });
        }
        res.status(200).json({ message: "Service trouvé", service });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Mettre à jour un service par ID
const updateService = async (req, res) => {
    try {
        const serviceId = req.params.id;
        const { nom, duree, tarif, iduser_propose_ds } = req.body;
        const updatedService = await Service.findByIdAndUpdate(
            serviceId,
            { nom, duree, tarif, iduser_propose_ds },
            { new: true }
        );
        if (!updatedService) {
            return res.status(404).json({ message: 'Service introuvable' });
        }
        res.status(200).json({ message: "Service mis à jour avec succès", updatedService });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Supprimer un service par ID
const deleteService = async (req, res) => {
    try {
        const serviceId = req.params.id;
        const deletedService = await Service.findByIdAndDelete(serviceId);
        if (!deletedService) {
            return res.status(404).json({ message: 'Service introuvable' });
        }
        res.status(200).json({ message: 'Service supprimé avec succès' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createService,
    getAllServices,
    getServiceById,
    updateService,
    deleteService,
};
