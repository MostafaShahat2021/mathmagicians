import './calculator.css';
import Display from './display';
import BtnContainer from './btnContainer';

function CalcContainer() {
  return (
    <div className="calcContainer">
      <Display />
      <BtnContainer />
    </div>
  );
}

export default CalcContainer;
