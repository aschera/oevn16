import React, { Component } from 'react';
import './App.css';
import Form from './Form';  // Added
import Button from './Button';  // Added

class App extends Component {
	constructor(props) {
			super(props);
			this.state = {
				name: '',
                email: ''
			};
            
            this.changeEmail = this.changeEmail.bind(this);
            this.changeName = this.changeName.bind(this);
            this.clearState = this.clearState.bind(this);
		}
            
/* ------------------------------------------------------------- */        
changeName(x) {
    let z = x.target.value;
    
    this.setState({
        name: z,
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
/* ------------------------------------------------------------- */     
clearState() {
    
    this.setState ({
            name: " ",
            email: " "
    });

}
        
/* ------------------------------------------------------------- */

  render() {
    return (
      <div className="App">
        
        <h3>Input name and email</h3>
        
        <br />
        <Form
        changeName={this.changeName}
        changeEmail={this.changeEmail}
       
        name={this.state.name}
        email={this.state.email} />

        <Button clearState={this.clearState}/>
        
        <br />
        
        <h4>State: </h4>
        <p>name: {this.state.name}
        </p>
        <p>email: {this.state.email}
        </p>
      </div>
    );
  }
}


export default App;
