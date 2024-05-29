const User = require("../Models/Professionels")
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt")

// function to generate a token
const createToken = (id, email, role) => {
    return jwt.sign(
        { data: { id, email, role } },
        "H37Tsgv6DWF3dGzcM4CQQBqDrMBcpY2BYXL5JVhZsbM1WufD1PQ5hdjXedIyMtstX2vkSuDKVVZy0uvx",
        { expiresIn: "1d" }
    )
}


// register or SignUp* 
module.exports.signUP = async (req, res) => {
    try {
        const {firstName,lastName,email,numero,mdp,metier} = req.body;

        // Before creating a new user, we verify if this user already exists or not!!!

        const userEmailExist = await User.findOne({ email });
        if (userEmailExist) {
            return res.status(409).json({ message: "User with this email is already Exist!" });
        }
        // crypt mdp
        const salt = await bcrypt.genSalt(10);
        const cryptmdp = await bcrypt.hash(mdp, salt);

        // A new user created!!!    
        const user = await User.create({
            firstName,
            lastName,
            email,
            numero,
            mdp: cryptmdp,
            metier,
            // horaires,
            role : 0
        });

        return res.status(201).json({ message: " successfully creation User  ...", user });
    } catch (error) {
        res.status(500).send({ message: "Internal Server Error", error });
        console .log(error);
    }
}

module.exports.signIn = async (req, res) => {
    try {
        const { email, mdp } = req.body;
        const user = await User.findOne({ email: email });

        console.log(user, email);

        if (!user) {
            return res.status(401).json({ message: `L'utilisateur avec cet email : ${email} n'existe pas.` });
        }

        const comparePassword = bcrypt.compareSync(mdp, user.mdp);
        if (!comparePassword) {
            return res.status(401).json({ message: "Mot de passe incorrect" });
        }

        const token = createToken(user._id, user.email, user.role);
        res.status(200).json({ message: "Connexion réussie", token, user });
        console.log(token);
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Erreur interne du serveur", error });
    }
};
    



