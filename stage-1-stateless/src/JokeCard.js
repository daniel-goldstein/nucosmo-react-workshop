import React, { Component } from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

class JokeCard extends Component {
	render() {
		return (
			<Card style={{color: 'black', width: '30%'}}>
				<CardContent>
					{this.props.joke}
				</CardContent>
			</Card>
		);
	}
}

export default JokeCard;