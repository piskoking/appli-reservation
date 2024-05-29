import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThList, faCalendarAlt, faUserTie, faUserCircle, faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';

import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Home.css'; // Assurez-vous d'avoir un fichier CSS pour styliser votre page
import { Slide } from "react-awesome-reveal";
function Home() {
  const handleClose = () => {
    localStorage.removeItem("token");
    window.location = "/";
  };

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
                <a className="nav-link" href="/account"><FontAwesomeIcon icon={faUserCircle} /> Mon compte</a>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              
              
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

      <div className="container mt-5 pt-5">
        <header className="home-header text-center">
          <h2>Bienvenue sur RDVBUSSINES</h2>
          <p>Découvrez les meilleures fonctionnalités pour améliorer votre expérience.</p>
          <p>Simplifiez la prise de rendez-vous pour vos clients et gérez votre activité efficacement avec notre plateforme de réservation en ligne.</p>

        </header>
        <Slide>
        <section className="features-section text-center mt-5">
          <h3>Nos Fonctionnalités</h3>
          <div className="row homecard">
            <div className="col-sm-3">
              <img src="https://images.pexels.com/photos/2766334/pexels-photo-2766334.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Artisan" className="img-fluid rounded" />
              <p>Des rendez-vous pour les artisans</p>
            </div>
            <div className="col-sm-3">
              <img src="https://images.pexels.com/photos/3993133/pexels-photo-3993133.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Coiffeur" className="img-fluid rounded" />
              <p>Prise de rendez-vous pour les coiffeurs</p>
            </div>
            <div className="col-sm-3">
              <img src="https://images.pexels.com/photos/7581575/pexels-photo-7581575.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Esthéticienne" className="img-fluid rounded" />
              <p>Réservation pour les esthéticiennes</p>
            </div>
            <div className="col-sm-3">
              <img src="https://images.pexels.com/photos/5816284/pexels-photo-5816284.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Consultant" className="img-fluid rounded" />
              <p>Rencontrez un consultant</p>
            </div>
          </div>
        </section></Slide>
      </div>
      <footer className="home-footer bg-dark text-white py-3 mt-4">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h5>À propos</h5>
              <p>RDVBUSSINES est une plateforme de réservation en ligne pour les petits commerces, artisans, coiffeurs, esthéticiennes, consultants, et bien plus encore.</p>
            </div>
            
            <div className="col-md-4">
              <h5>Suivez-nous</h5>
              <a href="https://facebook.com" className="text-white mr-3">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a href="https://twitter.com" className="text-white mr-3">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
              <a href="https://instagram.com" className="text-white mr-3">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
              <a href="https://linkedin.com" className="text-white">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-6">
              <p>© 2024 RDVBUSSINES. Tous droits réservés.</p>
            </div>
            <div className="col-md-6 text-md-right">
              <button onClick={handleClose} className="btn btn-danger">Déconnexion</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
