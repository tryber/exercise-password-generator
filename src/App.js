import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import GeneratePassword from './pages/GeneratePassword';
import Login from './pages/Login';
import Profile from './pages/Profile';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={ (props) => <Login {...props} />} />
        <Route path="/generate-password" component={ GeneratePassword } />
        <Route path="/profile" component={ Profile } />
      </Switch>
    );
  }
}

export default App;
