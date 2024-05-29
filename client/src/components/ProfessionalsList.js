import React from 'react';
import { Link } from 'react-router-dom';

const ProfessionalsList = () => {
  const categories = [
    { name: 'Coiffeurs', path: '/reservation/coiffeurs' },
    { name: 'Esthéticiennes', path: '/reservation/estheticiennes' },
    { name: 'Artisans', path: '/reservation/artisans' },
    { name: 'Consultants', path: '/reservation/consultants' },
  ];

  return (
    <div className="container mt-5 pt-5">
      <h2 className="text-center">Liste des Professionnels Disponibles</h2>
      <div className="row">
        {categories.map((category) => (
          <div key={category.name} className="col-md-3">
            <div className="card mb-4">
              <div className="card-body text-center">
                <h5 className="card-title">{category.name}</h5>
                <Link to={category.path} className="btn btn-primary">
                  Voir les {category.name.toLowerCase()}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfessionalsList;
