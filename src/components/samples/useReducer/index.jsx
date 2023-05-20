import ComponentContainer from '../../core/ComponentContainer';
import Form  from './form';
import UseMemoExample  from './useMemoExample';
import UseCallbackExample  from './useCallbackExample';




const useReducerExample = [
  {
    title: 'Form (object) : ',
    component: <Form />,
  },
  {
    title: 'use Memo Example: ',
    component: <UseMemoExample />,
  },
  {
    title: 'use Callback Example: ',
    component: <UseCallbackExample />,
  },
];

const UseReducer = () => {
  return (
    <div className='app-wrapper'>
      <h1> UseReducer components : </h1>
      {useReducerExample.map((item, index) => (
        <ComponentContainer key={index} title={item.title} subtitle={item.subtitle}>
          {item.component}
        </ComponentContainer>
      ))}
    </div>
  );
};

export default UseReducer;

