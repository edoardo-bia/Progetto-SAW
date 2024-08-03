import React from 'react';
import './Card.css';

const Card = ({ title, content, img, alt, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <h3>{title}</h3>
      <p>{content}</p>
      <img className='img_card' src={img} alt={alt} width="200" height="180"></img>

    </div>
  );
};

export default Card;