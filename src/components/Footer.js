import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className="footer-main">
      <div>Score: {this.props.score}</div>
      </div>
    );
  }
}

export default Footer;
