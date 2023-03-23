import './App.css';
import CalcContainer from './components/calculator';
import Quote from './components/quote';

function App() {
  return (
    <div className="app">
      <Quote />
      <CalcContainer />
    </div>
  );
}

export default App;
