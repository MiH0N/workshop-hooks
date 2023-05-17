import { useState, useCallback } from 'react';

function useCallbackExample() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);
//   const handleClick = () => {
//     console.log('salam');
//     setCount(count + 1);
//   };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

export default useCallbackExample;