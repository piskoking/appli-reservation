import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

function Footer({ handleClose }) {
  return (
    <footer className="home-footer bg-dark text-white py-4 mt-4">
      <div className="container">
        <div className="row foot">
          <div className="col-md-4">
            <h5>À propos</h5>
            <p>RDVBUSSINES est une plateforme de réservation en ligne pour les petits commerces, artisans, coiffeurs, esthéticiennes, consultants, et bien plus encore.</p>
          </div>
          <div className="col-md-2">
            <h5>Liens utiles</h5>
            <ul className="list-unstyled">
              <li><a href="/about" className="text-white">À propos</a></li>
              <li><a href="/contact" className="text-white">Contact</a></li>
              <li><a href="/privacy" className="text-white">Politique de confidentialité</a></li>
              <li><a href="/terms" className="text-white">Conditions d'utilisation</a></li>
            </ul>
          </div>
          <div className="col-md-2">
            <h5>Support</h5>
            <ul className="list-unstyled">
              <li><a href="/faq" className="text-white">FAQ</a></li>
              <li><a href="/support" className="text-white">Support</a></li>
              <li><a href="/help" className="text-white">Aide</a></li>
            </ul>
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
  );
}

export default Footer;
