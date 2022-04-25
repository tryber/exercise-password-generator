import './App.css';
import CharRange from './components/CharRange';
import Checkbox from './components/Checkbox';
import Password from './components/Password';

function App() {
  return (
    <form>
      <h1>Password Generator</h1>
      <Password />
      <CharRange />
      <Checkbox value="Uppercase" />
      <Checkbox value="Lowercase" />
      <Checkbox value="Numbers" />
      <Checkbox value="Symbols" />
      <button type="submit">
        Generate Password
      </button>
    </form>
  );
}

export default App;
