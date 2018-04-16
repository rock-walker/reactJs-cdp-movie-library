import React, { Component } from 'react';
import './App.css';
import AppHeader from './AppHeader';
import SearchBar from './SearchBar';
import SearchFilter from './SearchFilter';
import SearchButton from './SearchButton';
import ResultCount from './ResultCount';
import SortBy from './SortBy';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader />
        <SearchBar />
        <SearchFilter />
        <SearchButton />
        <ResultCount value={7} />
        <SortBy />
      </div>
    );
  }
}

export default App;
