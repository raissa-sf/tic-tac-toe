
import React from 'react';

function Square({ value, onClick }) {
  
  const getColor = (value) => {
    if (value === 'X') {
      return 'red';   
    } else if (value === 'O') {
      return 'green'; 
    }
    return 'black'; 
  };

  return (
    <button 
      className="square" 
      onClick={onClick} 
      style={{ color: getColor(value) }}  
    >
      {value}
    </button>
  );
}

export default Square;

