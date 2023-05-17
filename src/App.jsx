import { useMemo, useState } from 'react';
import UseState from './components/samples/useState';
import UseEffect from './components/samples/useEffect';

const HOOKS = {
  useState: {
    name: 'useState',
    component: <UseState />,
  },
  useEffect: {
    name: 'useEffect',
    component: <UseEffect />,
  },
};

function App() {
  const [showHook, setshowHook] = useState('useState');

  const hooksButton = useMemo(
    () =>
      Object.keys(HOOKS).map((hookItem, index) => (
        <button key={index} onClick={() => setshowHook(HOOKS[hookItem].name)}>
          {hookItem}
        </button>
      )),
    []
  );

  return (
    <div className=''>
      <div className='select-button-container'>{hooksButton}</div>
      <div>{HOOKS[showHook].component}</div>
    </div>
  );
}

export default App;
