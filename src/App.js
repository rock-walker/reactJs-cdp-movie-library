import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './SearchBar';
import SearchFilter from './SearchFilter';
import SearchButton from './SearchButton';
import ResultCount from './ResultCount';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <SearchBar />
        <SearchFilter />
        <SearchButton />
        <ResultCount value={7} />
      </div>
    );
  }
}

export default App;
