import React, { Component } from 'react';
import Address from '../presentation/Address-view.js';

class AddressForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      addressLine1: '',
      addressLine2: '',
      addressCity: '',
      addressState: '',
      addressZip: '',
      message: '',
      wordCount: 0,
      president: null,
    };
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.checkGoogleAddress = this.checkGoogleAddress.bind(this);
    this.checkWordCount = this.checkWordCount.bind(this);
    this.httpReq = this.httpReq.bind(this);
  }

  httpReq (req, cb) {
    const myHeaders = new Headers();
    myHeaders.append('Accept', 'application/json');
    myHeaders.append('Content-Type', 'application/json');
    const myInit = {
      method: req.method,
      headers: myHeaders
    };
    if (req.method === 'POST' ) {
      myInit.body = req.body;
    }
    fetch(req.route, myInit)
      .then(res => {
        return res.json();
      })
      .then(result => {
        cb(result);
      });
  }

  checkGoogleAddress(cb) {
    const {
      addressLine1,
      addressLine2,
      addressCity,
      addressState,
      addressZip
    } = this.state;
    const address = `${addressLine1}${addressLine2}${addressCity}${addressState}${addressZip}`;
    this.httpReq({method: 'GET', route: `/president?address=${address}`}, (res) => {
      cb(res);
    });
  }

  checkWordCount(message) {
    const words = message.trim().replace(/\s+/gi, ' ').split(' ');
    (words[0] === '' && words.shift());
    return words.length;
  }

  onClick(e) {
    e.preventDefault();
    if (this.state.wordCount > 200) {
      return alert('Word count too high');
    }
    this.checkGoogleAddress((res) => {
      if (res.error && res.error.code !== 404) {
        return alert(res.error.message);
      }
      let body = Object.assign({}, this.state, {president: res});
      this.httpReq({method: 'POST', route: '/letter', body: JSON.stringify(body)}, (data) => {
        if (data._response !== undefined) {
          return alert(data._response.body.error.message);
        }
        this.props.update(data);
      });
    });
  }

  onChange(e, key) {
    const newValue = e.target.value;
    const newState = {[key]: newValue};
    if (key === 'message') {
      const count = this.checkWordCount(newValue);
      newState.wordCount = count;
    }
    this.setState(newState);
  }

  render() {
    const {
      name, 
      addressLine1,
      addressLine2,
      addressCity,
      addressState,
      addressZip,
      addressCountry,
      message,
      wordCount,
      president,
    } = this.state;
    return (
      <div className="Input">
        <Address 
          name={name}
          addressLine1={addressLine1}
          addressLine2={addressLine2}
          addressCity={addressCity}
          addressState={addressState}
          addressZip={addressZip}
          addressCountry={addressCountry}
          message={message}
          wordCount={wordCount}
          president={president}
          onChange={this.onChange}
          onClick={this.onClick}
        />
      </div>
    );
  }
}

export default AddressForm;