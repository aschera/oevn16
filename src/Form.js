import React, { Component } from 'react';
import logo from './logo.svg';
import './Form.css';


class Form extends Component {
  render() {
    return (
      <div className="Form">
        <input id="name"  placeholder="enter name" />
        <input id="email"  placeholder="enter email" />
      </div>
    );
  }
}

export default Form;
