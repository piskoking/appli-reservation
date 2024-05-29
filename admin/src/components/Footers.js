import React from 'react';

function Footer() {
    return (
        <footer className="footer bg-dark text-light">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h5>À propos de nous</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus nunc eget enim sollicitudin, quis posuere libero consequat.</p>
                    </div>
                    <div className="col-md-3">
                        <h5>Liens rapides</h5>
                        <ul className="list-unstyled">
                            <li><a href="#">Accueil</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Professionnels</a></li>
                            <li><a href="#">Réservations</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5>Contactez-nous</h5>
                        <ul className="list-unstyled">
                            <li><i className="fas fa-map-marker-alt"></i> 123 Rue Principale, Ville, Pays</li>
                            <li><i className="fas fa-envelope"></i> info@example.com</li>
                            <li><i className="fas fa-phone"></i> +123 456 7890</li>
                        </ul>
                    </div>
                </div>
                <hr className="mt-0" />
                <div className="row">
                    <div className="col-md-12 text-center">
                        <p className="mb-0">© 2024 MaPlateforme. Tous droits réservés.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
