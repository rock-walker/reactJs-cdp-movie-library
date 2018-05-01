import React, { Component } from 'react';
import './App.css';
import AppHeader from './AppHeader';
import StatusBar from './StatusBar';
import ResultBody from './ResultBody';
import AppFooter from './AppFooter';

class App extends Component {
  render() {
    return (
      <div>
        <AppHeader />
        <StatusBar />
        <ResultBody/>
        <AppFooter />
      </div>
    );
  }
}

export default App;