import React, { Component } from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

class JokeCard extends Component {
  render() {
    return (
      <Card style={{color: 'black', width: '30%'}}>
        <CardContent>
          {this.props.joke}
        </CardContent>
        <CardActions className="Center-row">
          <Button variant="contained" color="primary" onClick={this.props.onButtonClick}>
            Next
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default JokeCard;
