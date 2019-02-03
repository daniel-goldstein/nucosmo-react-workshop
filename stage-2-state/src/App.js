import React, { Component } from 'react';
import './App.css';
import JokeCard from './JokeCard'

const JOKES = [
  "How do you know if a Mathematician is extroverted? He looks at your shoes!",
  "Parallel lines have so much in common... it’s a shame they’ll never meet!",
  "My girlfriend is the square root of -100. She's a perfect 10, but purely imaginary.",
  "I just saw my math teacher with a piece of graph paper. I think he must be plotting something."
]

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      jokeIndex: 0
    }
  }

  advanceJokeIndex = () => {
    this.setState({
      jokeIndex: (this.state.jokeIndex + 1) % JOKES.length
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <JokeCard joke={JOKES[this.state.jokeIndex]} 
                    onButtonClick={this.advanceJokeIndex} />
        </header>
      </div>
    );
  }
}

export default App;
