import './App.css';
import {FormGenerator} from './components/FormGenerator.jsx';
import {Provider} from 'react-redux'
import store from './app/store'

function App() {
  return (
    <Provider store={store}>

    <div className="App">
      <FormGenerator/>
    </div>
    </Provider>
  );
}

export default App;
