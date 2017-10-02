import React, { Component } from 'react';
import AddressForm from './AddressForm.js';
import LetterInfo from '../presentation/LetterInfo-view.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      letter: null
    };
    this.update = this.update.bind(this);
  }

  update(letter) {
    this.setState({letter});
  }

  render() {
    const { letter } = this.state;
    return (
      <div className="App">
        {letter ? <LetterInfo letter={this.state.letter} /> : <AddressForm update={this.update} />}
      </div>
    );
  }
}

export default App;
