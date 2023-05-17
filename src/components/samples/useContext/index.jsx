import ComponentContainer from '../../core/ComponentContainer';
import AuthContext from './AuthContext';
import DarkMode from './DarkMode';
import MultipleContext from './MultipleContext';
import SimpleUsage from './SimpleUsage';
import TaskApp from './TaskApp';

const UseContext = () => {
  return (
    <div className='app-wrapper'>
      <h1> UseState components : </h1>
      <ComponentContainer title={'use context api : '}>
        <SimpleUsage />
      </ComponentContainer>
      <ComponentContainer title={'use context api update value: '}>
        <DarkMode />
      </ComponentContainer>
      <ComponentContainer title={'use context api update obj value: '}>
        <AuthContext />
      </ComponentContainer>
      <ComponentContainer title={'use multiple Context api :'}>
        <MultipleContext isExtracting={true} />
      </ComponentContainer>
      <ComponentContainer title={'use multiple Context api :'}>
        <TaskApp />
      </ComponentContainer>
    </div>
  );
};

export default UseContext;
