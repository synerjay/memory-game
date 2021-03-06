import React from 'react';
import './SingleCard.css';

const SingleCard = ({ card }) => {
  return (
    <div className='card' key={card.id}>
      <div>
        <img className='front' src={card.src} alt='card front' />
        <img className='back' src='/img/cover.png' alt='cover' />
      </div>
    </div>
  );
};

export default SingleCard;
