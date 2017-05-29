import React, { Component } from 'react';
import './Form.css' ;


class Form extends Component {

    
  render() {  
    return (
      <form>
        
        <input className="name" value={this.props.name} placeholder="enter name" onChange={this.props.changeName}/>
 
        <input className="email"  value={this.props.email}placeholder="enter email" onChange={this.props.changeEmail}/>
    
      </form>
    );
  }
    
    
}

export default Form;
