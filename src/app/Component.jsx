import React, { Component } from 'react';
import '../app/Component.css';
import AppHeader from '../appHeader/Component';
import StatusBar from '../statusBar/Component';
import ResultBody from '../resultBody/Component';
import AppFooter from '../appFooter/Component';
import ErrorBoundary from '../common/ErrorBoundary';

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