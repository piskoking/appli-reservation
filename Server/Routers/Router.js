const router = require('express').Router();
const Auth = require("../Controllers/Auth");
const PaiementControllers = require("../Controllers/Paiementcontroller"); 
const ProfessionelControllers = require("../Controllers/Professionelscontrollers");
const RdvControllers = require("../Controllers/RdvControllers");
const ServiceProposeControllers = require("../Controllers/ServiceProposeControllers");
const UserControllers = require("../Controllers/UserControllers");

// Authentification avec JWT
router.post("/signup", Auth.signUP);
router.post("/signin", Auth.signIn);

// Routes pour la gestion des paiements
router.post("/paiement", PaiementControllers.createpaiement);
router.get("/paiement/:id", PaiementControllers.getpaiementById);
router.get("/paiement", PaiementControllers.getAllpaiements);
router.put("/paiement/:id", PaiementControllers.updatepaiement);
router.delete("/paiement/:id", PaiementControllers.deletepaiement);

// Routes pour la gestion des professionnels
// router.post("/professionels", ProfessionelControllers.createProfessionnel);
// router.get("/getprofessionels", ProfessionelControllers.getAllProfessionnels);
// router.get("/professionels/:id", ProfessionelControllers.getProfessionnelById);
// router.put("/professionels/:id", ProfessionelControllers.updateProfessionnel);
// router.delete("/professionels/:id", ProfessionelControllers.deleteProfessionnel);

// Routes pour la gestion des rendez-vous
router.post("/rdv", RdvControllers.createRDV);
router.get("/rdv", RdvControllers.getAllRDVs);
router.get("/rdv/:id", RdvControllers.getRDVById);
router.put("/rdv/:id", RdvControllers.updateRDV);
router.delete("/rdv/:id", RdvControllers.deleteRDV);

// Routes pour la gestion des services proposés
router.post("/services", ServiceProposeControllers.createService);
router.get("/services", ServiceProposeControllers.getAllServices);
router.get("/services/:id", ServiceProposeControllers.getServiceById);
router.put("/services/:id", ServiceProposeControllers.updateService);
router.delete("/services/:id", ServiceProposeControllers.deleteService);

// Routes pour la gestion des utilisateurs
// router.post("/users", UserControllers.createUser);
// router.post("/userSignin", UserControllers.userSignin);
// router.get("/getusers", UserControllers.getAllUsers);
// router.get("/getusers/:id", UserControllers.getUserById);
// router.put("/updateuUsers/:id", UserControllers.updateUser);
// router.delete("/deleteUsers/:id", UserControllers.deleteUser);

module.exports = router;
