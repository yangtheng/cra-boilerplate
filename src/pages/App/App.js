import React, { Component } from 'react';
import Routes from '../../routes';
import './App.scss';

class App extends Component {
  componentDidMount() {
    // dispatch fetch api actions here
  }

  render() {
    return (
      <div className="app">
        <Routes />
      </div>
    );
  }
}

export default App;
