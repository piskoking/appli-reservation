import React, { useState } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import '../Connection/SignIn.css';



const SignIn = () => {
    const [data, setData] = useState({ email: '', mdp: '' });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const { data: response } = await axios.post('http://localhost:5000/api/signin', data);
            console.log(response);
            if (response) {
                const user = response.user;

                if (user) {
                    localStorage.setItem("token", response.token);
                    window.location = "/home";
                }
            } else {
                setError("Réponse invalide du serveur");
            }
        } catch (error) {
            console.error('Erreur lors de la connexion:', error);
            setError(error);
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
                            value={data.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className='parent-form-input'>
                        <label htmlFor='mdp'>Mot de passe:</label>
                        <input
                            className='input'
                            type='password'  // Changez 'mdp' à 'password'
                            name='mdp'
                            id='mdp'
                            value={data.mdp}
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
                        <p id='new-user'>Vous n'avez pas de compte ?</p>
                        <Link className='btn-form-connection' to='/signup'>
                            Inscrivez-vous
                        </Link>
                    </div>
                </div>
            </div>
            <div>
                {error && <h1 className='error-message'>{error.response?.data?.message}</h1>}
            </div>
        </div>
    );
};

export default SignIn;
