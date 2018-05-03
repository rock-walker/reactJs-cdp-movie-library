import React, { Component } from 'react';
import '../app/app.css';
import AppHeader from '../appHeader/AppHeader';
import StatusBar from '../statusBar/StatusBar';
import ResultBody from '../resultBody/ResultBody';
import AppFooter from '../appFooter/AppFooter';
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