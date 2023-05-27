import React from 'react';

const FunctionalProps = ({ fname, lname, age, number, children }) => {
  return (
    <div>
      <h1>Bio:</h1>
      <p>fName: {fname}</p>
      <p>lName: {lname}</p>
      <p>Age: {age}</p>
      <p>number: {number}</p>
      <h1>Child Component:</h1>
      {children}
    </div>
  );
};
export default FunctionalProps;