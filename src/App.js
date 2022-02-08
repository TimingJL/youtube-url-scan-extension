import styled from 'styled-components';
import './App.css';
import { changeColor } from './main';

const ExtensionBox = styled.div`
  width: 300px;
  height: 400px;
`;

const App = () => {
  return (
    <ExtensionBox>
      <header className="App-header">
        <button onClick={changeColor}>
          Change color
        </button>
      </header>
    </ExtensionBox>
  );
}

export default App;
