import ComponentContainer from '../../core/ComponentContainer';
import AnySideEffect from './AnySideEffect';
import ChatRoomServer from './ChatRoomServer';
import CursorPosition from './CursorPosition';
import Posts from './Posts';
import TodoList from './TodoList';

const useEffectExample = [
  {
    title: 'any side effects : ',
    component: <AnySideEffect />,
  },
  {
    title: 'with dependency : ',
    component: <Posts />,
  },
  {
    title: 'cleanup effect',
    component: <ChatRoomServer />,
  },
  {
    title: 'remove event listener for avoid memory leaks and ',
    subtitle: `If our effect didn't return a cleanup function, a new event listener would be added to the DOM's document object every time that our component re-renders`,
    component: <CursorPosition />,
  },
  {
    title: 'runs only once : ',
    component: <TodoList />,
  },
];

const UseEffect = () => {
  return (
    <div className='app-wrapper'>
      <h1> UseEffect components : </h1>
      {useEffectExample.map((item, index) => (
        <ComponentContainer key={index} title={item.title} subtitle={item.subtitle}>
          {item.component}
        </ComponentContainer>
      ))}
    </div>
  );
};

export default UseEffect;
