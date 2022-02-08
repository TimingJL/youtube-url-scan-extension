import './App.css';
import { changeColor } from './main';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={changeColor}>
          Change color
        </button>
      </header>
    </div>
  );
}

export default App;
