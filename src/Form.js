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
    
 
    
  render() {var nameX= this.changeName; var emailX= this.changeEmail;    
    return (
      <div className="Form">
        <input className="name" placeholder="enter name" onChange={nameX}/>
     <div className={this.state.name}/>
        <input className="email"  placeholder="enter email" onChange={emailX}/>
     <div className={this.state.email}/>
      </div>
    );
  }
    
    
}

export default Form;
