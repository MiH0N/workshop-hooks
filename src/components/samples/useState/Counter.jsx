import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1 className='text-center'>Counter is {count}</h1>
      <div className='button-container'>
        <button onClick={() => setCount(count => count + 1)}>+</button>
        <span>{count}</span>
        <button onClick={() => setCount(count => count - 1)}>-</button>
      </div>
    </div>
  );
}

export default Counter;
