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
      Nexus Marketing, en Reynosa, Tamaulipas, ofrecemos soluciones de vanguardia al combinar la inteligencia artificial con estrategias especializadas de marketing digital y desarrollo web. Nuestra agencia se distingue por proporcionar soluciones personalizadas que impulsan la transformación digital de tu negocio, mejorando su eficiencia y competitividad en el mercado.      </span>
      <div className="button-container">
        <a id="prese" href="https://drive.google.com/file/d/1qFzhEmLDRzIHQ6x3FlLzlCLFJtopLEDz/view?usp=sharing" target="_blank" id="presentation_arrow">
            <ButtonArrowTranparent text={"Presentación"}/>
        </a>
      </div>
    </div>
  );
};

export default AnimatedText;
