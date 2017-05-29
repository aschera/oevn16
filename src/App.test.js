/*
Skapa en ny webbapplikation. 
App-komponenten ska innehålla ett formulär där användaren kan fylla i namn och epostadress. 
Formuläret ska ligga i en egen komponent. När man skriver i något av formulärelementen så ska texten sparas i App-komponentens state. 

Skriv tester för komponenten innan du implementerar den.
Skapa sedan en button som ligger i en egen komponent. När man klickar på den ska namn och epostadress rensas från App-komponentens state.

Det ska finnas testfall som testar att formuläret innehåller input-element och att button-komponenten innehåller ett element med CSS-klassen "buttonClass". Använd Enzyme API.

Webbapplikationen ska finnas i ett git-repository, som du lägger upp på GitHub. 

Du ska göra minst en commit med testfall innan du gör en commit med motsvarande implementation. 
(Commit test cases before you commit the implementation.) 
Det är för att jag ska kunna se att ni har använt TDD-metoden "red, green, refactor".
*/

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Form from './Form';  // Added
import Button from './Button';  // Added
import { shallow } from 'enzyme'; // Added
import { mount } from 'enzyme'; // Added

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});


/* /////////////////////////////////////////////////////////////////////////////// */
/* MY OWN STUFF */
/* /////////////////////////////////////////////////////////////////////////////// */





/* /////////////////////////////////////////////////////////////////////////////// */
/*                          APP                                                    */
/* /////////////////////////////////////////////////////////////////////////////// */

/*App component */
test('shallow render App', () => {   // Shallow test  - render works?
	shallow(<App/>);
});

/* /////////////////////////////////////////////////////////////////////////////// */
/*                          Form                                                    */
/* /////////////////////////////////////////////////////////////////////////////// */

/* form component */
test('shallow render Form', () => {   // Shallow test - render works?
	shallow(<Form/>);
});  
      
/*   ///////////////////////////// testar att formuläret innehåller input-element ////////////////////////////////// */
    
/* form component - Name input field*/ 
test('renders inputfield name', () => {
    
      let wrapper = mount(<Form />);
      wrapper.find({ className: 'name'})  
    });

/* form component - Email input field*/
test('renders inputfield email', () => {
    
      let wrapper = mount(<Form />);
      wrapper.find({ className: 'email'})  
    });

/* /////////////////////////////////////////////////////////////////////////////// */
/*                          Button                                                    */
/* /////////////////////////////////////////////////////////////////////////////// */
    
/* button component */
test('shallow render Button', () => {   // Shallow test - render works?
	shallow(<Button />);
});   
    
/*   /////////////////////////////  testar att formuläret innehåller ett element med CSS-klassen "buttonClass" ////////////////////////////////// */

test('renders button to delete state', () => {
  let wrapper = shallow(<Button />);
	let actual = wrapper.find("button").hasClass("button");
	let expected = true;
	expect(actual).toBe(expected);

});