import React from 'react';
import { useParams, Link } from 'react-router-dom';

const professionalsData = {
  coiffeurs: [
    { id: 1, name: 'papy', description: 'ayna trop' },
    { id: 2, name: 'Coiffeur 2', description: 'Description du coiffeur 2' },
  ],
  estheticiennes: [
    { id: 1, name: 'Esthéticienne 1', description: 'Description de l\'esthéticienne 1' },
    { id: 2, name: 'Esthéticienne 2', description: 'Description de l\'esthéticienne 2' },
  ],
  artisans: [
    { id: 1, name: 'Artisan 1', description: 'Description de l\'artisan 1' },
    { id: 2, name: 'Artisan 2', description: 'Description de l\'artisan 2' },
  ],
  consultants: [
    { id: 1, name: 'Consultant 1', description: 'Description du consultant 1' },
    { id: 2, name: 'Consultant 2', description: 'Description du consultant 2' },
  ],
};
const ProfessionalsCategory = () => {
  const { category } = useParams();
  // console.log(category);
  const professionals = professionalsData[category] || [];

  return (
    <div className="container mt-5 pt-5">
      <h2 className="text-center">Liste des {category}</h2>
      <div className="row">
        {professionalsData.coiffeurs.map((professional) => (
          <div key={professional.id} className="col-md-4">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">{professional.name}</h5>
                <p className="card-text">{professional.description}</p>
                <Link to={`/reservations/${category}/${professional.id}`} className="btn btn-primary">
                  Réserver
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfessionalsCategory;
