import React from 'react';
import "./Princing.css"

function PricingPackage({ name, description, price, features }) {
  return (
    <div className="pricing-package">
      <h3>{name}</h3>
      <p>{description}</p>
      <div className="pricing-details">
        <p className="price">{price}</p>
      </div>
      <ul className="features-list">
        {features.map((feature, index) => (
          <li key={index}>
            <span className="check">&#10003;</span>
            <p>{feature}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PricingPackage;
