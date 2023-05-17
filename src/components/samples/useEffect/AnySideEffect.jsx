import { useEffect, useState } from 'react';
import RepeatMessage from './RepeatMessage';

const AnySideEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <ChildrenExample value={count} />
    </div>
  );
};

const connectServer = () => {
  console.log('connect to server');
};

const ChildrenExample = props => {
  const [text, setText] = useState(null);

  useEffect(() => {
    // console.log(props);
    connectServer();
  }, [text]);

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <div>
      <p>its child</p>
      <input value={text} onChange={handleChange} />
      <RepeatMessage message={text} />
    </div>
  );
};

export default AnySideEffect;
