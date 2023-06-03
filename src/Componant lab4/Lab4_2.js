import React, { useState } from 'react';

// const signupStatus=false;

const Lab4_2 = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Name:', name);
    console.log('Password:', password);
    console.log('Email:', email);
    
  };


  return (
  <div>
    {/* {signupStatus ? (<HandlingFormlog/> ) : ( */}
    <form className='form' onSubmit={handleSubmit}>
    <h1>Please Submit this form</h1>
      <label  className='label'>Name:</label>
      <input className='div2'
        type="text"
        id="name"
        value={name}
        onChange={handleNameChange}
      />

      <label  className='label'>Password:</label>
      <input className='div2'
        type="password"
        id="password"
        value={password}
        onChange={handlePasswordChange}
      />

      <label  className='label'>Email:</label>
      <input className='div2'
        type="email"
        id="email"
        value={email}
        onChange={handleEmailChange}
      />

      <button className='submit'  type="submit">Submit</button>
    </form>
    {/* )} */}
    </div>
  );
};

export default Lab4_2;
