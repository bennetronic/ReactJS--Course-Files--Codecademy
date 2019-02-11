// THIS.PROPS

// 1. Access a Component's props ===============================================
// eg.
- Every component has something called props.
- A component's props is an object. It holds information about that component.
- To see a component's props object, you use the expression this.props. Here's an example of this.props being used inside of a render method:

render() {
  console.log("Props object comin' up!");

  console.log(this.props);

  console.log("That was my props object!");

  return <h1>Hello world</h1>;
}

// ex.
// PropsDisplayer.js
import React from 'react';
import ReactDOM from 'react-dom';

class PropsDisplayer extends React.Component {
  render() {
  	const stringProps = JSON.stringify(this.props);

    return (
      <div>
        <h1>CHECK OUT MY PROPS OBJECT</h1>
        <h2>{stringProps}</h2>
      </div>
    );
  }
}

// ReactDOM.render goes here:
ReactDOM.render(
  <PropsDisplayer />,
  document.getElementById('app')
)

// 2. Pass `props` to a Component ==============================================
//eg.
// You can pass information to a React component by giving that component an attribute:

<MyComponent foo="bar" />

// Let's say that you want to pass a component the message, "This is some top secret info.". Here's how you could do it:

<Example message="This is some top secret info." />

// Pass information that isn't a string, wrap that information in curly braces. Here's how you would pass an array:

<Greeting myInfo={["top", "secret", "lol"]} />

// We pass several pieces of information to <Greeting />. The values that aren't strings are wrapped in curly braces:

<Greeting name="Frarthur" town="Flundon" age={2} haunted={false} />


// ex.
// PropsDisplayer.js
import React from 'react';
import ReactDOM from 'react-dom';

class PropsDisplayer extends React.Component {
  render() {
  	const stringProps = JSON.stringify(this.props);

    return (
      <div>
        <h1>CHECK OUT MY PROPS OBJECT</h1>
        <h2>{stringProps}</h2>
      </div>
    );
  }
}

// ReactDOM.render goes here:
ReactDOM.render(
  <PropsDisplayer myProp = 'Hello'/>,
  document.getElementById('app')
)



// 3. Render a Component's props ===============================================
// eg.
1 - Find the component class that is going to receive that information.
2 - Include this.props.name-of-information in that component class's render method's return statement.

// ex.
import React from 'react';
import ReactDOM from 'react-dom';

class Greeting extends React.Component {
  render() {
    return <h1>Hi there, {this.props.firstName}!</h1>;
  }
}

ReactDOM.render(
  <Greeting firstName='James' />,
  document.getElementById('app')
);



// 4. Pass props From Component To Component ===================================

// eg.
// How to pass a prop to a component:
<Greeting firstName="Esmerelda" />

// How to access and display a passed-in prop:
render() {
  return <h1>{this.props.firstName}</h1>;
}



// ex.
// Greeting.js
import React from 'react';

export class Greeting extends React.Component {
  render() {
    return <h1>Hi there, {this.props.name}!</h1>;
  }
}

// App.js
import React from 'react';
import ReactDOM from 'react-dom';
import {Greeting} from './Greeting.js'

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Hullo and, "Welcome to The Newzz," "On Line!"
        </h1>
        <Greeting name = 'Einstein' />
        <article>
          Latest newzz:  where is my phone?
        </article>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);



// 5. Render Different UI Based on props =======================================
// ex.
// Greeting.js
import React from 'react';
import ReactDOM from 'react-dom';

export class Greeting extends React.Component {
  render() {
  	if (this.props.signedIn == false) {
  	  return <h1>GO AWAY</h1>;
  	} else {
  	  return <h1>Hi there, {this.props.name}!</h1>;
  	}
  }
}

// App.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Greeting } from './Greeting';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Hullo and, "Welcome to The Newzz," "On Line!"
        </h1>
        <Greeting name="Alison" signedIn={true}/>
        <article>
          Latest:  where is my phone?
        </article>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);



// 6. Put an Event Handler in a Component Class ================================
// eg.
// Example.js
import React from 'react';

class Example extends React.Component {
  handleEvent() {
    alert(`I am an event handler.
      If you see this message,
      then I have been called.`);
  }

  render() {
    return (
      <h1 onClick={this.handleEvent}>
        Hello world
      </h1>
    );
  }
}

// ex.
// Talker.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from './Button';

class Talker extends React.Component {
  talk() {
    let speech = '';
    for (let i = 0; i < 10000; i++) {
      speech += 'blah ';
    }
    alert(speech);
	}

  render() {
    return <Button />;
  }
}

ReactDOM.render(
  <Talker />,
  document.getElementById('app')
);



// 7. Pass an Event Handler as a prop
// ex.
// Talker.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from './Button';

class Talker extends React.Component {
  talk() {
    let speech = '';
    for (let i = 0; i < 10000; i++) {
      speech += 'blah ';
    }
    alert(speech);
  }

  render() {
    return <Button talk={this.talk} />;
  }
}

ReactDOM.render(
  <Talker />,
  document.getElementById('app')
);



// 8. Receive an Event Handler as a prop =======================================
// ex.
// Button.js
import React from 'react';

export class Button extends React.Component {
  render() {
    return (
      <button onClick={this.props.talk}>
        Click me!
      </button>
    );
  }
}


// 9. handleEvent, onEvent, and this.props.onEvent =============================
// eg.
//If you are listening for a "click" event, then you name your event handler handleClick. If you are listening for a "keyPress" event, then you name your event handler handleKeyPress:

class MyClass extends React.Component {
  handleHover() {
    alert('I am an event handler.');
    alert('I will be called in response to "hover" events.');
  }
}

// Your prop name should be the word on, plus your event type. If you are listening for a "click" event, then you name your prop onClick. If you are listening for a "keyPress" event, then you name your prop onKeyPress:

class MyClass extends React.Component {
  handleHover() {
    alert('I am an event handler.');
    alert('I will listen for a "hover" event.');
  }

  render() {
    return <Child onHover={this.handleHover} />;
  }
}

// Button.js
// The attribute name onClick creates an event listner:
<button onClick={this.props.onClick}>
  Click me!
</button>

// Talker.js
// The attribute name onClick is just a normal attribute name:
<Button onClick={this.handleClick} />

// The reason for this is that <Button /> is not an HTML-like JSX element; it's a component instance.
// Names like onClick only create event listeners if they're used on HTML-like JSX elements. Otherwise, they're just ordinary prop names.

// ex.
// Talker.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from './Button';

class Talker extends React.Component {
  handleClick() {
    let speech = '';
    for (let i = 0; i < 10000; i++) {
      speech += 'blah ';
    }
    alert(speech);
  }

  render() {
    return <Button onClick={this.handleClick}/>;
  }
}

ReactDOM.render(
  <Talker />,
  document.getElementById('app')
);


// Button.js
import React from 'react';

export class Button extends React.Component {
  render() {
    return (
      <button onClick={this.props.onClick}>
        Click me!
      </button>
    );
  }
}



// 10. this.props.children =====================================================

// this.props.children will return everything in between a component's opening and closing JSX tags.
// eg.
// BigButton.js
import React from 'react';
import { LilButton } from './LilButton';

class BigButton extends React.Component {
  render() {
    console.log(this.props.children);
    return <button>Yo I am big</button>;
  }
}

// Example 1
<BigButton>
  I am a child of BigButton.
</BigButton>


// Example 2
<BigButton>
  <LilButton />
</BigButton>


// Example 3
<BigButton />


// ex.
// App.js
import React from 'react';
import ReactDOM from 'react-dom';
import { List } from './List';

class App extends React.Component {
  render() {
    return (
      <div>
        <List type='Living Musician'>
          <li>Sachiko M</li>
          <li>Harvey Sid Fisher</li>
        </List>
        <List type='Living Cat Musician'>
          <li>Nora the Piano Cat</li>
      <li>Tora the Piano Cat</li>
        </List>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

// List.js
import React from 'react';

export class List extends React.Component {
  render() {
    let titleText = `Favorite ${this.props.type}`;
    if (this.props.children instanceof Array) {
    	titleText += 's';
    }
    return (
      <div>
        <h1>{titleText}</h1>
        <ul>{this.props.children}</ul>
      </div>
    );
  }
}



// 11. defaultProps ============================================================

//eg.
// Display default message on button if no text present:
class Example extends React.Component {
  render() {
    return <h1>{this.props.text}</h1>;
  }
}

Example.defaultProps = { text: 'yo' };


// ex.
import React from 'react';
import ReactDOM from 'react-dom';

class Button extends React.Component {
  render() {
    return (
      <button>
        {this.props.text}
      </button>
    );
  }
}

// defaultProps goes here:
Button.defaultProps={text:'I am a button'};

ReactDOM.render(
  <Button text="" />,
  document.getElementById('app')
);



// 12.this.props Recap

Here are some of the skills that you have learned:

- Passing a prop by giving an attribute to a component instance
- Accessing a passed-in prop via this.props.prop-name
- Displaying a prop
- Using a prop to make decisions about what to display
- Defining an event handler in a component class
- Passing an event handler as a prop
- Receiving a prop event handler and attaching it to an event listener
- Naming event handlers and event handler attributes according to convention
- this.props.children
- getDefaultProps
