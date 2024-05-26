import React from 'react';
import './AnimatedText.css';
import ButtonArrowTranparent from './ui/ButtonArrowTransparent';

const AnimatedText = () => {
  return (
    <div className="text-container">
      <div className="rectangle">
        <div className="circle"></div>
      </div>
      <span id="description_p">
      Marketing Digital, Diseño de Páginas Web e Inteligencia Artificial en Reynosa, Tamaulipas. En Nexus Marketing, ubicada en Reynosa, Tamaulipas, ofrecemos soluciones innovadoras que combinan la inteligencia artificial con estrategias especializadas en marketing digital y diseño de páginas web. Nuestra agencia se especializa en proporcionar servicios personalizados que impulsan la transformación digital de tu negocio, mejorando su eficiencia y competitividad en el mercado.
      </span>
      <div className="button-container">
        <a href="https://drive.google.com/file/d/1qFzhEmLDRzIHQ6x3FlLzlCLFJtopLEDz/view?usp=sharing" target="_blank" id="presentation_arrow">
            <ButtonArrowTranparent text={"Presentación"}/>
        </a>
      </div>
    </div>
  );
};

export default AnimatedText;
