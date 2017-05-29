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
import { shallow } from 'enzyme'; // Added

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
test('shallow render', () => {   // Shallow test  - render works?
	shallow(<App/>);
});

/* Setting state of new Name in App*/
test('App: Setting state of new Name in App', () => {

	let wrapper = shallow(<App/>);
	expect(wrapper.find('.test')).to.have.length(1);
    expect(wrapper.find('.bar')).to.have.length(0);
    wrapper.setState({ name: 'Elvis' });
    expect(wrapper.find('.foo')).to.have.length(0);
    expect(wrapper.find('.Elvis')).to.have.length(1);
})

/* Setting state of new Email in App*/
test('App: Setting state of new Email in App', () => {

	let wrapper = shallow(<App/>);
	expect(wrapper.find('.test')).to.have.length(1);
    expect(wrapper.find('.bar')).to.have.length(0);
    wrapper.setState({ email: 'Elvis' });
    expect(wrapper.find('.foo')).to.have.length(0);
    expect(wrapper.find('.Elvis')).to.have.length(1);
})    
    
    


/* /////////////////////////////////////////////////////////////////////////////// */
/*                          Form                                                    */
/* /////////////////////////////////////////////////////////////////////////////// */




/* form component */
test('shallow render', () => {   // Shallow test - render works?
	shallow(<Form/>);
});  
    
/* form component - Name input field*/
test('renders inputfield name', () => {
	// <input id="name"  placeholder="enter name" onChange={this.changeName}/>

	let wrapper = shallow(<Form/>);
	let actual = wrapper.contains(<input id="name"  placeholder="enter name" onChange={this.changeName}/>);
	let expected = true;
	expect(actual).toBe(expected);
})

/* form component - Email input field*/
test('renders inputfield email', () => {
    // <input id="email"  placeholder="enter email" onChange={this.changeEmail}/>
    
	let wrapper = shallow(<Form/>);
	let actual = wrapper.contains(<input id="email"  placeholder="enter email" onChange={this.changeEmail}/>);
	let expected = true;
	expect(actual).toBe(expected);
})


/* Setting state of new Name in Form*/
test('Form: Setting state of new Email in Form', () => {

	let wrapper = shallow(<Form/>);
	expect(wrapper.find('.test')).to.have.length(1);
    expect(wrapper.find('.bar')).to.have.length(0);
    wrapper.setState({ name: 'Elvis' });
    expect(wrapper.find('.foo')).to.have.length(0);
    expect(wrapper.find('.Elvis')).to.have.length(1);
})

/* Setting state of new Email in Form*/
test('Form: Setting state of new Email Form', () => {

	const wrapper = shallow(<Form />);
	expect(wrapper.find('.test')).to.have.length(1);
    expect(wrapper.find('.bar')).to.have.length(0);
    wrapper.setState({ email: 'Elvis' });
    expect(wrapper.find('.foo')).to.have.length(0);
    expect(wrapper.find('.Elvis')).to.have.length(1);
})