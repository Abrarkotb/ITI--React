import React from 'react';
import CompMain from './CompMain';
import Comp3 from './comp3';

const Comp1= () => {
  
  return (
    <CompMain.Provider value={'Hello from 1'}>
      <div>
      <h2>Component One</h2>
      <Comp3/>
      </div>
    </CompMain.Provider>
  );
};
export default Comp1;