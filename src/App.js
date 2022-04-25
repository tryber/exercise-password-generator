import logo from './logo.svg';
import './App.css';
import Password from './components/Password';
import Length from './components/Length';
import Settings from './components/Settings';
import GeneratePasswordBtn from './components/GeneratePasswordBtn';

function App() {
  return (
    <div className="App">
      <main>
        <h1>password generator</h1>
        <Password />
        <Length />
        <Settings />
        <GeneratePasswordBtn />
      </main>
    </div>
  );
}

export default App;
