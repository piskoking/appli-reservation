import React, { useState } from 'react';
import './styles.css';
import ProfessionalsCategory from './ProfessionalsCategory';


function Reservation() {

  return (
    <div>
      <header>
        <h1>Réservez un Rendez-vous</h1>
      </header>
      <main>
      <ProfessionalsCategory />

        <h2>Choisissez un Professionnel</h2>
       
        <h2>Choisissez une Date et une Heure</h2>
        <form id="reservation-form">
          <label htmlFor="date">Date:</label>
          <input type="date" id="date" name="date" required />
          <label htmlFor="time">Heure:</label>
          <input type="time" id="time" name="time" required />
          <label htmlFor="contact">Informations de Contact:</label>
          <input type="text" id="contact" name="contact" placeholder="Nom" required />
          <input type="email" id="email" name="email" placeholder="Email" required />
          <input type="tel" id="phone" name="phone" placeholder="Téléphone" required />
          <button type="submit">Réserver</button>
        </form>
      </main>
    </div>
  );
}

export default Reservation;
