import React, { Component } from 'react';

class Square extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  getSquare() {
      if (this.props.isPlayerPosition){
        if (this.props.showAction) 
          return (<div className="square-main"><img alt="player" src={require('../images/player_action_1.png')} /></div>);
        else 
          return (<div className="square-main"><img alt="player" src={require('../images/player.png')} /></div>);
      }
    else 
        return (<div className="square-main">{this.props.value}</div>);
  }

  render() {
    return this.getSquare();
  }
}

export default Square;
