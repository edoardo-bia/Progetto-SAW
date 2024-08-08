import React from 'react';
import './Card.css';

const Card = ({ title, content, img, alt }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{content}</p>
      <img className='img_card' src={img} alt={alt} width="200" height="180"></img>

    </div>
  );
};

export default Card;