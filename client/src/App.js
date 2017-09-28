import React, { Component } from 'react';
import Input from './containers/input.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  test () {
    const myHeaders = new Headers();
    myHeaders.append('Accept', 'application/json');
    myHeaders.append('Content-Type', 'application/json');
    const myInit = {
      method: 'GET',
      headers: myHeaders
    };


    fetch('/test', myInit)
      .then(res => {
        return res.json();
      })
      .then(result => {
        console.log(result);
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img 
            src={logo} 
            className="App-logo" 
            alt="logo" 
            onClick={() => this.test()}/>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Input />
      </div>
    );
  }
}

export default App;
