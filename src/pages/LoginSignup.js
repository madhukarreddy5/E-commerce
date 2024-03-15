import React, { useRef, useState } from 'react';
import './Css/Loginsignup.css';

export default function LoginSignup() {
  const formRef = useRef(null);
  const [errorMessages, setErrorMessages] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formDataObj = Object.fromEntries(formData.entries());

    // Check for empty fields
    const newErrorMessages = {};
    let hasError = false;
    Object.entries(formDataObj).forEach(([key, value]) => {
      if (value.trim() === '') {
        newErrorMessages[key] = `Please enter ${key}.`;
        hasError = true;
      } else {
        newErrorMessages[key] = '';
      }
    });

    if (hasError) {
      setErrorMessages(newErrorMessages);
      return;
    }

    // Reset error messages
    setErrorMessages({
      name: '',
      email: '',
      password: '',
    });

    console.log(formDataObj); // You can handle form submission logic here
    formRef.current.reset(); // Resetting the form fields

    // Redirect to /Shop after validation
    window.location.href = '/Shop';
  };

  return (
    <div className='loginsignup'>
      <div className='loginsignup-container'>
        <h1>Sign UP</h1>
        <form ref={formRef} onSubmit={handleSubmit} className='loginsignup-fields'>
          <input type='text' name='name' placeholder='Your name' />
          <p className='error-message' style={{ color: 'red' }}>{errorMessages.name}</p>
          <input type='email' name='email' placeholder='Email address' />
          <p className='error-message' style={{ color: 'red' }}>{errorMessages.email}</p>
          <input type='password' name='password' placeholder='Password' />
          <p className='error-message' style={{ color: 'red' }}>{errorMessages.password}</p>
          <button className='button22' type='submit'>Continue</button>
        </form>
        <p className='loginsignup-login'>
          Already have an account?<span>Login here</span>
        </p>
        <div className='loginsignup-agree'>
          <input type='checkbox' name='' id='' />
          <p>
            By continuing, I agree to the terms of use & privacy policy
          </p>
        </div>
      </div>
    </div>
  );
}
