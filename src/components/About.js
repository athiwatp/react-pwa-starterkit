import React, {Component, PropTypes} from 'react';
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import {hashHistory} from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import {connect} from 'react-redux'

class About extends Component {
  render () {
    return (
      <Card style={{textAlign: 'center'}}>
        <CardTitle style={{margin: 'auto'}}>PWA</CardTitle>
        <CardText>
          About this Application
        </CardText>
        <CardActions>
          <RaisedButton onClick={() => hashHistory.push('/')}>OK</RaisedButton>
        </CardActions>
      </Card>
    )
  }
}

export default connect(
  state => {{}},
  dispatch => {{}},
)(About)