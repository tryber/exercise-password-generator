import './App.css';
import {FormGenerator} from './components/FormGenerator.jsx';
import {Provider} from 'react-redux'
import store from './app/store'

function App() {
  return (
    <div className="App">
    <Provider store={store}>
      <FormGenerator/>
    </Provider>
    </div>
  );
}

export default App;
