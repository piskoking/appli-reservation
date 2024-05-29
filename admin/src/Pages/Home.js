import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faThList, faCalendarAlt, faUserTie,  faUserCircle, faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/styles.css';



function Home() {
    const handleClose = () => {
        localStorage.removeItem("token")
        window.location = "/"
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                <div className="container d-flex">
                    <a className="navbar-brand" href="/">RDVBUSSINES</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-flex" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                           
                            <li className="nav-item">
                                <a className="nav-link" href="/categories"><FontAwesomeIcon icon={faThList} /> Catégories</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/reservations"><FontAwesomeIcon icon={faCalendarAlt} /> Réservations</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/professionals"><FontAwesomeIcon icon={faUserTie} /> Professionnels</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="/account"><FontAwesomeIcon icon={faUserCircle} /> Mon compte</a>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Rechercher" aria-label="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Rechercher</button>
                        </form>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="/login"><FontAwesomeIcon icon={faSignInAlt} /> Connexion</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/signup"><FontAwesomeIcon icon={faUserPlus} /> Inscription</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Code HTML inséré ici */}
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2>Bienvenue chez RdvBusiness</h2>
                        <p>Simplifiez la prise de rendez-vous pour vos clients et gérez votre activité efficacement avec notre plateforme de réservation en ligne.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h3>Bienvenue chez RdvBusiness</h3>
                        <p>Simplifiez la prise de rendez-vous pour vos clients et gérez votre activité efficacement avec notre plateforme de réservation en ligne.</p>
                        <div className="row">
                            <div className="col-sm-3">
                                <img src="https://th.bing.com/th?id=OIF.97chNVQrE7%2bx2PVbCx3PNA&w=328&h=184&c=7&r=0&o=5&pid=1.7" alt="Artisan" />
                                <p>Des rendez-vous pour les artisans</p>
                            </div>
                            <div className="col-sm-3">
                                <img src="https://th.bing.com/th/id/OIP.ji_VltzZVbYtmu7Rfhd8ngHaEo?w=310&h=193&c=7&r=0&o=5&pid=1.7" alt="Coiffeur" />
                                <p>Prise de rendez-vous pour les coiffeurs</p>
                            </div>
                            <div className="col-sm-3">
                                <img src="https://th.bing.com/th/id/OIP._OXC806cWvRWlTqGeKTKDAHaE8?w=220&h=180&c=7&r=0&o=5&pid=1.7" alt="Esthéticienne" />
                                <p>Réservation pour les esthéticiennes</p>
                            </div>
                            <div className="col-sm-3">
                                <img src="https://th.bing.com/th/id/OIP.zoWT7g702ZXKE9ed1EORPAHaFD?w=246&h=180&c=7&r=0&o=5&pid=1.7" alt="Consultant" />
                                <p>Rencontrez un consultant</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <button onClick={handleClose}>
                Déconnexion
            </button>
        </div>
    )
}

export default Home;
