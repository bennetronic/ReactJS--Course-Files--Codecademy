// COMPOMENTS AND ADVANCED JSX


// USE MULTILINE JSX IN A COMPONENT
// A multi-line JSX expression should always be wrapped in parentheses! That is why QuoteMaker's 'return' statement has parentheses around it.
import React from 'react';
import ReactDOM from 'react-dom';

class QuoteMaker extends React.Component {
  render() {
    return (
      <blockquote>
        <p>
          The world is full of objects, more or less interesting; I do not wish to add any more.
        </p>
        <cite>
          <a target="_blank"
            href="https://en.wikipedia.org/wiki/Douglas_Huebler">
            Douglas Huebler
          </a>
        </cite>
      </blockquote>
    );
  }
};

ReactDOM.render(
  <QuoteMaker />,
  document.getElementById('app')
);



// USE A VARIABLE ATTRIBUTE IN A COMPONENT

// Ex.
import React from 'react';
import ReactDOM from 'react-dom';


const owl = {
  title: 'Excellent Owl',
  src: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-owl.jpg'
};

// Component class starts here:
class Owl extends React.Component {
  render() {
    return (
    <div>
    	<h1>{owl.title}</h1>
      <img
      	src={owl.src}
      	alt={owl.title} />
    </div>
    );
  }
};

ReactDOM.render(
	<Owl />,
  document.getElementById('app')
);



// PUT LOGIC IN A RENDER FUNCTION
// A variable should not be part of the class declaration itself, but should occur in a method like render().

// Ex.
import React from 'react';
import ReactDOM from 'react-dom';


const friends = [
  {
    title: "Yummmmmmm",
    src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-monkeyweirdo.jpg"
  },
  {
    title: "Hey Guys!  Wait Up!",
    src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-earnestfrog.jpg"
  },
  {
    title: "Yikes",
    src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-alpaca.jpg"
  }
];

// New component class starts here:
class Friend extends React.Component {
  render() {
    const friend = friends[1];

    return(
    <div>
      <h1>{friend.title}</h1>
      <img src={friend.src} />
    </div>
    );
  }
};

ReactDOM.render(
	<Friend />,
  document.getElementById('app')
)



// USE A CONDITIONAL IN A RENDER FUNCTION

// Eg.
import React from 'react';
import ReactDOM from 'react-dom';

class TodaysPlan extends React.Component {
  render() {
    let task;
    if (!apocalypse) {
      task = 'learn React.js'
    } else {
      task = 'run around'
    }

    return <h1>Today I am going to {task}!</h1>;
  }
}

ReactDOM.render(
	<TodaysPlan />,
	document.getElementById('app')
);


// Ex.
import React from 'react';
import ReactDOM from 'react-dom';

class TodaysPlan extends React.Component {
  render() {
    let task;
    if (!apocalypse) {
      task = 'learn React.js'
    } else {
      task = 'run around'
    }

    return <h1>Today I am going to {task}!</h1>;
  }
}

ReactDOM.render(
	<TodaysPlan />,
	document.getElementById('app')
);



// USE 'this' IN A COMPONENT

// Eg.
class IceCreamGuy extends React.Component {
  get food() {
    return 'ice cream';
  }

  render() {
    return <h1>I like {this.food}.</h1>;
  }
}



// Ex.
import React from 'react';
import ReactDOM from 'react-dom';

class MyName extends React.Component {
	// name property goes here:
	get name() {
    return 'James';
  }

  render() {
    return <h1>My name is {this.name}.</h1>
  }
}

ReactDOM.render(<MyName />, document.getElementById('app'));



// USE AN EVENT LISTENER IN A COMPONENT

// Here's an example of an event listener in a render function:
render() {
  return (
    <div onHover={myFunc}>
    </div>
  );
}


// In React, you define event handlers as methods on a component class. Like this:
class MyClass extends React.Component {
  myFunc() {
    alert('Stop it.  Stop hovering.');
  }

  render() {
    return (
      <div onHover={this.myFunc}>
      </div>
    );
  }
}
