import { useState, useEffect } from 'react';

export default () => {
  const [intervalId, setIntervalId] = useState(0);
  useEffect(() => {
    const id = setInterval(setCount(prevCount => prevCount + 1), 100);
    setIntervalId(id);
    return () => clearInterval(id);
  }, []);
  return () => clearInterval(intervalId);
};