import React from 'react';
import './styles.css';

function MyAccount() {
  return (
    <div>
      <header>
        <h1>Mon Compte</h1>
      </header>
      <main>
        <section>
          <h2>Informations Personnelles</h2>
          <form id="personal-info-form">
            <label htmlFor="name">Nom:</label>
            <input type="text" id="name" name="name" value="Jean Dupont" required />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value="jean.dupont@example.com" required />
            <label htmlFor="phone">Téléphone:</label>
            <input type="tel" id="phone" name="phone" value="0123456789" required />
            <button type="submit">Mettre à jour</button>
          </form>
        </section>
        <section>
          <h2>Historique des Réservations</h2>
          <ul className="reservation-history">
            <li>Coiffeur - 20/05/2024 à 14h00 - Confirmée</li>
            <li>Esthéticienne - 25/05/2024 à 10h00 - Confirmée</li>
            {/* Ajoutez d'autres réservations ici */}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default MyAccount;
