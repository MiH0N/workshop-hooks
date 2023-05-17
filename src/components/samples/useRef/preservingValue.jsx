import { useState, useRef } from 'react';

function PreservingValue() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef(count);

  const incrementCount = () => {
    setCount(count + 1);
  };

  // Display the previous count value
  console.log('Previous count:', prevCountRef.current);

  // Update the previous count value
  prevCountRef.current = count;

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}

export default PreservingValue