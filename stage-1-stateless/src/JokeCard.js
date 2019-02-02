import React, { Component } from 'react';

class JokeCard extends Component {
	render() {
		return (
			<div>{this.props.joke}</div>
		);
	}
}

export default JokeCard;