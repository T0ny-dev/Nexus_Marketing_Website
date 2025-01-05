import React from 'react';
import './/CardContainer.css'; // Archivo CSS para los estilos

function CardContainer({ cards }) {
  return (
    <div className="card-container">
      {cards.map((card, index) => (
        <div className="card" key={index}>
          <div className="card-info">
            <h2>{card.title}</h2>
            <p>{card.paragraph}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardContainer;
