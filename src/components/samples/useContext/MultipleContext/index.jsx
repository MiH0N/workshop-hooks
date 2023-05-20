import BestPractice from './BestPractice';
import BadPractice from './BadPractice';

const MultipleContext = ({ isExtracting }) => {
  return isExtracting ? <BestPractice /> : <BadPractice />;
};

export default MultipleContext;
