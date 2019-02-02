import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="header-main">
        <h3>{this.props.prompt}</h3>
      </div>
    );
  }
}

export default Header;
