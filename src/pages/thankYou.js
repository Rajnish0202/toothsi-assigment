import React from 'react';
import { FaPrayingHands } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ThankYou = () => {
  return (
    <div className='thank'>
      <h1 className='thank_heading'>thank you for shopping </h1>
      <FaPrayingHands size={200} fill={'#16caf7'} />

      <Link to='/' className='back'>
        Back to product list
      </Link>
    </div>
  );
};

export default ThankYou;
