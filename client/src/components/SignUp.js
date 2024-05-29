import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function SignUp() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        numero: "",
        mdp: "",
        metier: "",
        horaires: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(formData);
            const response = await axios.post('http://localhost:5000/api/users', formData);
            console.log(response.data);
            // Rediriger l'utilisateur après inscription, si nécessaire
            window.location ='/home'
        } catch (error) {

            console.error("Une erreur s'est produite lors de l'inscription :", error);
            // Gérer les erreurs, par exemple, afficher un message d'erreur à l'utilisateur
        }
    };

    return (

        <form onSubmit={handleSubmit}>
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="Nom" required />
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Prénom" required />
            <input type="text" name="metier" value={formData.metier} onChange={handleChange} placeholder="Metiers" required />
            <input type="text" name="horaires" value={formData.horaires} onChange={handleChange} placeholder="Horaires" required />
            <input type="text" name="numero" value={formData.numero} onChange={handleChange} placeholder="Numero" required />
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Adresse e-mail" required />
            <input type="password" name="mdp" value={formData.mdp} onChange={handleChange} placeholder="Mot de passe" required />
            <button onClick={handleSubmit} type="submit">S'inscrire</button>
            <Link to="/signin">Se connecter</Link>
        </form>
    );
}

export default SignUp;
