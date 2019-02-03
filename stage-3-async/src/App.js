import React, { Component } from 'react';
import './App.css';
import JokeCard from './JokeCard'

const JOKE_API = "https://api.joshspicer.com/cosmo"

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      joke: null
    }
  }

  componentDidMount() {
    this.fetchJoke()
  }

  fetchJoke = () => {
    fetch(JOKE_API)
      .then(response => response.json())
      .then(newJoke => this.setState({ joke: newJoke }))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          { this.state.joke
            ?
            <JokeCard joke={this.state.joke["animal"]} 
                      onButtonClick={this.fetchJoke} />
            :
            "Waiting for a joke..."
          }
        </header>
      </div>
    );
  }
}

export default App;
