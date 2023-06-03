import React from 'react';
import CompMain from './CompMain';
import Comp5 from './Comp5';



const Comp3 = () => {
  return (
    <CompMain.Consumer>
      {(value) => <p>Hello from 3: {value}</p>}
      <Comp5/>
    </CompMain.Consumer>
  );
};

export default Comp3;