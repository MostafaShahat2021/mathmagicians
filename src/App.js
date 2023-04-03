import './App.css';
import CalcContainer from './components/calculator';
import Quote from './components/quote';
import Home from './components/Home';

function App() {
  return (
    <div className="app">
      <Home />
      <Quote />
      <CalcContainer />
    </div>
  );
}

export default App;
