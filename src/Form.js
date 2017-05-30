import React, { Component } from 'react';
import './App.css' ;
class Form extends Component {

    
  render() {  
    return (
      <form>
        
        Name:
        <input id='name' className="name" value={this.props.name} placeholder="enter name" onChange={this.props.changeName}/>
        Email:
        <input className="email"  value={this.props.email}placeholder="enter email" onChange={this.props.changeEmail}/>
    
      </form>
    );
  }
    
    
}

export default Form;
