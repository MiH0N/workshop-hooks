import ComponentContainer from '../../core/ComponentContainer';
import Counter from './Counter';
import TextField from './TextField';
import CheckBox from './CheckBox';
import Form from './Form';
import NestedFormObj from './NestedFormObj';
import ArrayList from './ArrayList';

const UseState = () => {
  return (
    <div className='app-wrapper'>
      <h1> UseState components : </h1>
      <ComponentContainer title={'number change : '}>
        <Counter />
      </ComponentContainer>
      <ComponentContainer title={'string change : '}>
        <TextField />
      </ComponentContainer>
      <ComponentContainer title={'boolean change : '}>
        <CheckBox />
      </ComponentContainer>
      <ComponentContainer title={'mulitple state :'}>
        <Form />
      </ComponentContainer>
      <h4>Examples of objects and arrays in state :</h4>
      <ComponentContainer title={'array list'}>
        <ArrayList />
      </ComponentContainer>
      <ComponentContainer title={'Form (nested object)'}>
        <NestedFormObj />
      </ComponentContainer>
    </div>
  );
};

export default UseState;
