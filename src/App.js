import { useDispatch } from 'react-redux';
import './App.css';
import CharRange from './components/CharRange';
import Checkbox from './components/Checkbox';
import Password from './components/Password';
import { generatePassword } from './redux/actions';

function App() {
  const dispatch = useDispatch();

  const handleSubmit = (ev) => {
    ev.preventDefault();
    dispatch(generatePassword());
  };

  return (
    <form className="main-container" onSubmit={ handleSubmit }>
      <h1>Password Generator</h1>
      <Password />
      <CharRange />
      <p className="subtitle">Settings</p>
      <Checkbox field="Uppercase" />
      <Checkbox field="Lowercase" />
      <Checkbox field="Numbers" />
      <Checkbox field="Symbols" />
      <button className="button" type="submit">
        Generate Password
      </button>
    </form>
  );
}

export default App;
