import { useState } from 'react';
import UseState from './components/samples/useState';

const HOOKS = {
  useState: {
    name: 'useState',
    component: <UseState />,
  },
  useEffect: {
    name: 'useEffect',
    component: <div>useEffect</div>,
  },
};

function App() {
  const [showHook, setshowHook] = useState('useState');
  return (
    <div className=''>
      <div className='select-button-container'>
        {Object.keys(HOOKS).map((hookItem, index) => (
          <button key={index} onClick={() => setshowHook(HOOKS[hookItem].name)}>
            {hookItem}
          </button>
        ))}
      </div>
      <div>{HOOKS[showHook].component}</div>
    </div>
  );
}

export default App;
