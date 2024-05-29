// const User = require('../Models/User');
// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcrypt")

// // function to generate a token
// const createToken = (id, email, role) => {
//     return jwt.sign(
//         { data: { id, email, role } },
//         "H37Tsgv6DWF3dGzcM4CQQBqDrMBcpY2BYXL5JVhZsbM1WufD1PQ5hdjXedIyMtstX2vkSuDKVVZy0uvx",
//         { expiresIn: "1d" }
//     )
// }

// // Créer un utilisateur
// const createUser = async (req, res) => {
//     try {
//         const { firstName, lastName, numero, metier, horaires, email, mdp, role } = req.body;
//         const newUser = await User.create({
//             firstName,
//             lastName,
//             numero,
//             metier,
//             horaires,
//             email,
//             mdp,
//             role
//         });
//         res.status(201).json({ message: "Utilisateur créé avec succès", newUser });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

// // Lire tous les utilisateurs
// const getAllUsers = async (req, res) => {
//     try {
//         const users = await User.find();
//         res.status(200).json({ message: "Liste de tous les utilisateurs", users });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

// // Lire un utilisateur par ID
// const getUserById = async (req, res) => {
//     try {
//         const userId = req.params.id;
//         const user = await User.findById(userId);
//         if (!user) {
//             return res.status(404).json({ message: 'Utilisateur introuvable' });
//         }
//         res.status(200).json({ message: "Utilisateur trouvé", user });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

// // Mettre à jour un utilisateur par ID
// const updateUser = async (req, res) => {
//     try {
//         const userId = req.params.id;
//         const { firstName, lastName, numero, metier, horaires, email, mdp, role } = req.body;
//         const updatedUser = await User.findByIdAndUpdate(
//             userId,
//             { firstName, lastName, numero, metier, horaires, email, mdp, role },
//             { new: true }
//         );
//         if (!updatedUser) {
//             return res.status(404).json({ message: 'Utilisateur introuvable' });
//         }
//         res.status(200).json({ message: "Utilisateur mis à jour avec succès", updatedUser });
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// };
// const userSignin = async (req, res) => {
//     try {
//         const { email, mdp } = req.body;
//         const user = await User.findOne({ email: email });
//         // we verify if this  user exist if everything is ok we continued with the function next() !!!
//         if (!user) {
//             return res.status(401).json({ message: `the user with this email : ${email} does'nt exist... ` })
//         }
//         const comparePassword = bcrypt.compareSync(mdp, user.mdp);
//         if (!comparePassword) {
//             return res.status(401).json({ message: "Incorrect Password" })
//         }
//         const token = createToken(user._id, user.email, user.role)
//         res.status(200).json({ message: "Successfully connection", token, user });
//         console.log(token);
//     } catch (error) {
//         console.log(error);

//         res.status(500).send({ message: "Internal Server Error" , error});
//     }
// }

// // Supprimer un utilisateur par ID
// const deleteUser = async (req, res) => {
//     try {
//         const userId = req.params.id;
//         const deletedUser = await User.findByIdAndDelete(userId);
//         if (!deletedUser) {
//             return res.status(404).json({ message: 'Utilisateur introuvable' });
//         }
//         res.status(200).json({ message: 'Utilisateur supprimé avec succès' });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

// module.exports = {
//     createUser,
//     getAllUsers,
//     getUserById,
//     updateUser,
//     deleteUser,
//     userSignin,
// };
