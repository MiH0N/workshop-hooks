import ComponentContainer from '../../core/ComponentContainer';
import AccessDom from './accessDom';
import PreservingValue  from './preservingValue';
import Counter  from './counter';
import StopWatch  from './stopWatch';




const useRefExample = [
  {
    title: 'Accessing DOM Elements : ',
    component: <AccessDom />,
  },
  {
    title: 'Preserving Value Across Renders : ',
    component: <PreservingValue />,
  },
  {
    title: 'Click counter : ',
    component: <Counter />,
  },
  {
    title: 'Stop Watch : ',
    component: <StopWatch />,
  },
];

const UseRef = () => {
  return (
    <div className='app-wrapper'>
      <h1> UseRef components : </h1>
      {useRefExample.map((item, index) => (
        <ComponentContainer key={index} title={item.title} subtitle={item.subtitle}>
          {item.component}
        </ComponentContainer>
      ))}
    </div>
  );
};

export default UseRef;


UseRef