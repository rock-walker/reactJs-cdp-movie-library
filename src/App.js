import React, { Component } from 'react';
import './App.css';
import AppHeader from './AppHeader';
import StatusBar from './StatusBar';
import ResultBody from './ResultBody';
import AppFooter from './AppFooter';
import ErrorBoundary from './ErrorBoundary';

class App extends Component {
  render() {
    return (
      <div>
        <ErrorBoundary>
            <AppHeader />
            <StatusBar />
            <ResultBody/>
            <AppFooter />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;