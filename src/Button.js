import React, { Component } from 'react';


class Button extends Component {

  render() {
    return (
        <div>
            <button onClick={this.props.clearState}
            type="reset" className="button" >Delete</button>
        </div>
      
    );
  }
    
}

export default Button;