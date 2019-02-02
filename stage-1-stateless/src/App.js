import React, { Component } from 'react';
import './App.css';
import JokeCard from './JokeCard'

const JOKE = "How do you know if a Mathematician is extroverted? He looks at your shoes!"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <JokeCard joke={JOKE} />
        </header>
      </div>
    );
  }
}

export default App;