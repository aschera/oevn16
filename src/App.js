import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form';  // Added

class App extends Component {
	constructor(props) {
			super(props);
			this.state = {
				name: '',
                email: ''
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
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Form
        changeName={this.changeName}
        changeEmail={this.changeName}
       
        name={this.state.name}
        email={this.state.email} />
      </div>
    );
  }
}


export default App;
