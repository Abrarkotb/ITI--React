import React, { useState } from 'react'

function TwoButton() {
    const initialValue = 0;
    const [count, setCount] = useState(initialValue)
    
    return (
      <div className="counter-content">
        <div>
          <button onClick={() => setCount( prv => prv - 1)}>-</button>
          <span>{count}</span>
          <button onClick={() => setCount( prv => prv + 1)}>+</button>
        </div>
      </div>
    );
  
    }

export default TwoButton;