import React, { useState } from 'react';
import './NewsLetter.css';

const NewsLetter = () => {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubscribe = () => {
    if (!email.trim()) {
      setErrorMessage('Enter your email');
    } else {
      setErrorMessage('');
      setEmail('');
    }
  };

  return (
    <div className='newsletter'>
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Subscribe to our Website and stay updated</p>
      <div className='newsletter1'>
        <input
          type='email'
          className='email'
          placeholder='Your Email id'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="btn" onClick={handleSubscribe}>Subscribe</button>
      </div>
      {errorMessage && <p className='error-message' style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
};

export default NewsLetter;
