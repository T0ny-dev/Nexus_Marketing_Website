import React from 'react';
import "./TitleParagraph.css"

function TitleParagraph({ title, parraf }) {
  return (
    <div className='parraf'>
      <div className='parraf__title'>
        <h2>{title}</h2>
      </div>
      <div className='parraf__parraf'>
        <p>{parraf}</p>
      </div>
    </div>
  );
}

export default TitleParagraph;
