import React, { Component } from 'react';
import '../App.css';
import MemoryGamePage from './containers/MemoryGamePage';

class App extends Component {
  render() {
    return (
      <div>
        <MemoryGamePage cardsFlippedCount='0'/>
      </div>
    );
  }
}

export default App;
