const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        numero: {
            type: Number,  
            // required: true,
        },
        metier: {
            type: String,  
            // required: true,
        },
        horaires: {
            type: String, // Assurez-vous que c'est bien une chaîne si c'est le type attendu
            // required: true,
        },
        email: {
            type: String,
            required: true,
            validate: {
                validator: validator.isEmail,
                message: '{VALUE} is not a valid email',
                isAsync: false
            }
        },
        mdp: {
            type: String,
            required: true
        },
        role: {
            type: Number,
            default: 0
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
