import React, { useState, useEffect } from 'react';

const NumberIncrement = ({ start = 0, end = 100, duration = 2000 }) => {
  const [number, setNumber] = useState(start);

  useEffect(() => {
    const increment = (end - start) / (duration / 1000 * 60); // Calculate increment per frame (assuming 60 frames per second)
    let currentNumber = start;
    const interval = setInterval(() => {
      currentNumber += increment;
      if (currentNumber >= end) {
        currentNumber = end;
        clearInterval(interval);
      }
      setNumber(Math.round(currentNumber));
    }, 1000 / 60); // Update 60 times per second

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [start, end, duration]);

  return <div>{number}</div>;
};

export default NumberIncrement;
