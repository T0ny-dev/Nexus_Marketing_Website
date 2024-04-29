import "./Faq.css"
import React, { useState } from 'react';
import './Faq.css'; // Importa el archivo CSS para estilos

const FAQ = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFAQ = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faq">
      <div className={`question ${isOpen ? 'open' : ''}`} onClick={toggleFAQ}>
        {question}
      </div>
      {isOpen && <div className="answer">{answer}</div>}
    </div>
  );
};

export default FAQ;
