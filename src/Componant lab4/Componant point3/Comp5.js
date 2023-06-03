import React from 'react';
import CompMain from './CompMain';

const Comp5 = () => {
  return (
    <CompMain.Consumer>
      {(value) => <p>Hello From 5: {value}</p>}
    </CompMain.Consumer>
  );
};
export default Comp5;