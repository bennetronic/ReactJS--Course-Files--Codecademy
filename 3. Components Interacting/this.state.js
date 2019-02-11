// THIS.STATE

// 1. Setting Initial State ====================================================

// eg.
class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mood: 'decent' };
  }

  render() {
    return <div></div>;
  }
}

<Example />


// ex.
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	// constructor method begins here:
	constructor(props){
    super(props)
    this.state = { title: 'Best App'};
  }

  render() {
    return (
      <h1>
        Wow this entire app is just an h1.
      </h1>
    );
  }
}



// 2. Access a Component's state ===============================================

// eg.
class TodayImFeeling extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mood: 'decent' };
  }

  render() {
    return (
      <h1>
        I'm feeling {this.state.mood}!
      </h1>
    );
  }
}

// ex.
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	// constructor method begins here:
	constructor(props){
    super(props)
    this.state = { title: 'Best App'};
  }

  render() {
    return (
      <h1>
      Best App
      </h1>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);



// 3. Update state with this.setState ==========================================

// eg.
import React from 'react';

class Example extends React.Component {
  constructor(props) {
  	super(props);
    this.state = {
      mood:   'great',
      hungry: false
    };
  }

  render() {
    return <div></div>;
  }
}

<Example />

// Now, let's say that <Example /> were to call:
this.setState({ hungry: true });

// After that call, here is what <Example />'s state would be:
{
  mood:   'great',
  hungry: true
}
The mood part of the state remains unaffected!



// 4. Call this.setState from Another Function =================================

// eg.
class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = { weather: 'sunny' };
    this.makeSomeFog = this.makeSomeFog.bind(this);
  }

  makeSomeFog() {
    this.setState({
      weather: 'foggy'
    });
  }
}

// This line is necessary because makeSomeFog()'s body contains the word this.
this.makeSomeFog = this.makeSomeFog.bind(this);

// Here is how a <Mood />'s state would be set:
- A user triggers an event (in this case a click event, triggered by clicking on a <button></button>).
- The event from Step 1 is being listened for (in this case by the onClick attribute on line 20).
- When this listened-for event occurs, it calls an event handler function (in this case, this.toggleMood(), called on line 20 and defined on lines 11-14).
- Inside of the body of the event handler, this.setState() is called (in this case on line 13).
- The component's state is changed!


// ex.
// Toggle.js
import React from 'react';
import ReactDOM from 'react-dom';

const green = '#39D1B4';
const yellow = '#FFD712';

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: green };
    this.changeColor = this.changeColor.bind(this);
  }

  changeColor() {
    const newColor = this.state.color == green ? yellow : green;
    this.setState({ color: newColor });
  }

  render() {
    return (
      <div style={{background: this.state.color}}>
        <h1>
          Change my color
        </h1>
					<button onClick={this.changeColor} >
  					Change color
					</button>
      </div>
    );
  }
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('app')
)



// 5. this.setState Automatically Calls render =================================

- Any time that you call this.setState(), this.setState() AUTOMATICALLY calls .render() as soon as the state has changed.
- Think of this.setState() as actually being two things: this.setState(), immediately followed by .render().



// 6. Components Interacting Recap =============================================

In this unit, you learned how to use import and export to access one file from another. You learned about props and state, and the countless variations on how they work.

Before this unit, you learned about JSX, components, and how they can work together.

A React app is basically just a lot of components, setting state and passing props to one another. Now that you have a real understanding of how to use props and state, you have by far the most important tools that you need!

In future lessons, the focus will shift slightly outward. In addition to learning more new skills, you'll also learn your first programming patterns. These large-scale strategies will help you combine what you've learned and really start building.
