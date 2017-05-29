import React, { Component } from 'react';
import './Form.css' ;


class Form extends Component {

    
  render() {  
    return (
      <div className="Form">
        
        <input className="name" value={this.props.name} placeholder="enter name" onChange={this.props.changeName}/>
 
        <input className="email"  value={this.props.email}placeholder="enter email" onChange={this.props.changeEmail}/>
    
      </div>
    );
  }
    
    
}

export default Form;
