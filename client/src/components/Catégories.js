import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

function Categories() {
  const id = "coiffeur";
  console.log(id);
  return (
    <div>
      <header>
        <h1>Réservez Votre Service</h1>
        <input type="text" id="search-bar" placeholder="Recherchez un service..." />
      </header>
      <main>
        <h2>Catégories</h2>
        <div className="categories">
          <div className="category">
            <img src="https://images.pexels.com/photos/3993133/pexels-photo-3993133.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Coiffeurs" />
            <h3>Coiffeurs</h3>
           <Link to={`/reservations/${id}`}>voir les coiffeurs</Link>
          </div>
          <div className="category">
            <img src="https://images.pexels.com/photos/7581575/pexels-photo-7581575.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Esthéticiennes" />
            <h3>Esthéticiennes</h3>
            <a href="/reservations">Voir les professionnels</a>
          </div>
          <div className="category">
            <img src="https://images.pexels.com/photos/2766334/pexels-photo-2766334.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Esthéticiennes" />
            <h3>Artisants</h3>
            <a href="/reservations">Voir les professionnels</a>
          </div>
          <div className="category">
            <img src="https://images.pexels.com/photos/5816284/pexels-photo-5816284.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Esthéticiennes" />
            <h3>Consultant</h3>
            <a href="/reservations">Voir les professionnels</a>

          </div>

          {/* Ajoutez d'autres catégories ici */}
        </div>
      </main>
    </div>
  );
}

export default Categories;
