import React, { Component } from 'react';
import './App.css';
import AppHeader from './Header';
import SearchBar from './SearchBar';
import SearchFilter from './SearchFilter';
import SearchButton from './SearchButton';
import ResultCount from './ResultCount';
import SortBy from './SortBy';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar />
        <SearchFilter />
        <SearchButton />
        <ResultCount value=7 />
        <SortBy />
      </div>
    );
  }
}

export default App;