import React, { useState } from 'react';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import '../components/SignIn.css';

const SignIn = () => {
    const [formData, setFormData] = useState({ email: '', mdp: '' });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(''); // Réinitialiser l'erreur avant de soumettre

        try {
            const response = await axios.post('http://localhost:5000/api/signin', formData);
            console.log("++++++++++++", response);
            if (response.data.user) {
                localStorage.setItem("token", response.data.token);
                navigate("/home");
            }
        } catch (error) {
            if (error.response) {
                setError(error.response.data.message || 'Une erreur est survenue lors de la connexion.');
                console.error('Erreur de réponse du serveur :', error.response.data);
            } else if (error.request) {
                setError('Aucune réponse du serveur. Veuillez vérifier votre connexion.');
                console.error('Aucune réponse reçue :', error.request);
            } else {
                setError('Erreur lors de la configuration de la requête : ' + error.message);
                console.error('Erreur lors de la configuration de la requête :', error.message);
            }
        }
    };

    return (
        <div className='layout-signin'>
            <div className='form-signin'>
                <form onSubmit={handleSubmit}>
                    <div className='parent-form-input'>
                        <label htmlFor='email'>Email:</label>
                        <input
                            className='input'
                            type='email'
                            name='email'
                            id='email'
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className='parent-form-input'>
                        <label htmlFor='mdp'>Mot de passe:</label>
                        <input
                            className='input'
                            type='password' // Type corrected from 'mdp' to 'password'
                            name='mdp'
                            id='mdp'
                            value={formData.mdp}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type='submit' className='btn-form-connection' id='btn-signin'>
                        Se connecter
                    </button>
                </form>

                <div className='container-right-signin'>
                    <div className='card-title-signup sign-in'>
                        <p id='new-user'>Vous n’avez pas de compte ?</p>
                        <Link className='btn-form-connection' to='/signup'>
                            Inscrivez-vous
                        </Link>
                    </div>
                </div>
            </div>
            <div>
                {error && <h1 style={{ color: 'red' }}>{error}</h1>}
            </div>
        </div>
    );
};

export default SignIn;
