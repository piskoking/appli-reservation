// const Professionnel = require('../Models/Professionels');

// // // Créer un professionnel
// // const createProfessionnel = async (req, res) => {
// //     try {
// //         const { email, numero, mdp, metier, role } = req.body;
// //         const newProfessionnel = await Professionnel.create({
// //             email,
// //             numero,
// //             mdp,
// //             metier,
// //             role
// //         });
// //         res.status(201).json({ message: "Professionnel créé avec succès", newProfessionnel });
// //     } catch (error) {
// //         res.status(500).json({ error: error.message });
// //     }
// // };

// // Lire tous les professionnels
// const getAllProfessionnels = async (req, res) => {
//     try {
//         const professionnels = await Professionnel.find();
//         res.status(200).json({ message: "Liste de tous les professionnels", professionnels });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

// // Lire un professionnel par ID
// const getProfessionnelById = async (req, res) => {
//     try {
//         const professionnelId = req.params.id;
//         const professionnel = await Professionnel.findById(professionnelId);
//         if (!professionnel) {
//             return res.status(404).json({ message: 'Professionnel introuvable' });
//         }
//         res.status(200).json({ message: "Professionnel trouvé", professionnel });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

// // Mettre à jour un professionnel par ID
// const updateProfessionnel = async (req, res) => {
//     try {
//         const professionnelId = req.params.id;
//         const { email, numero, mdp, metier, horaires, role } = req.body;
//         const updatedProfessionnel = await Professionnel.findByIdAndUpdate(
//             professionnelId,
//             { email, numero, mdp, metier, horaires, role },
//             { new: true }
//         );
//         if (!updatedProfessionnel) {
//             return res.status(404).json({ message: 'Professionnel introuvable' });
//         }
//         res.status(200).json({ message: "Professionnel mis à jour avec succès", updatedProfessionnel });
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// };

// // Supprimer un professionnel par ID
// const deleteProfessionnel = async (req, res) => {
//     try {
//         const professionnelId = req.params.id;
//         const deletedProfessionnel = await Professionnel.findByIdAndDelete(professionnelId);
//         if (!deletedProfessionnel) {
//             return res.status(404).json({ message: 'Professionnel introuvable' });
//         }
//         res.status(200).json({ message: 'Professionnel supprimé avec succès' });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

// module.exports = {
//     // createProfessionnel,
//     getAllProfessionnels,
//     getProfessionnelById,
//     updateProfessionnel,
//     deleteProfessionnel,
// };
