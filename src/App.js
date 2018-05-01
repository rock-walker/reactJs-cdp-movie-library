import React, { Component } from 'react';
import './App.css';
import AppHeader from './Header';
import StatusBar from './StatusBar';

class App extends Component {
  render() {
    return (
      <div>
        <AppHeader />
        <StatusBar />
      </div>
    );
  }
}

export default App;