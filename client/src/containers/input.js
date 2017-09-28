import React, { Component } from 'react';
import Address from '../Presentation/Address.jsx';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="Input">
        <Address />
      </div>
    );
  }
}

export default Input;