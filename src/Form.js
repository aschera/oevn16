import React, { Component } from 'react';

import './Form.css' ;


class Form extends Component {
	constructor(props) {
			super(props);
			this.state = {
				name: 'test',
                email: 'test'
			};
            
            this.changeEmail = this.changeEmail.bind(this);
            this.changeName = this.changeName.bind(this);
		}
            
    


/* ------------------------------------------------------------- */        
changeName(x) {
    let z = x.target.value;
    
    this.setState({
        email: z,
    });
 console.log(z);

}
        
/* ------------------------------------------------------------- */
/* ------------------------------------------------------------- */        
changeEmail(x) {
    let z = x.target.value;
    
    this.setState({
        email: z,
    });
 console.log(z);

}
        
/* ------------------------------------------------------------- */   
    
    
    
  render() {
    return (
      <div className="Form">
        <input id="name"  placeholder="enter name" onChange={this.changeName}/>
     <div className={this.state.name}/>
        <input id="email"  placeholder="enter email" onChange={this.changeEmail}/>
     <div className={this.state.email}/>
      </div>
    );
  }
    
    
}

export default Form;
