// COMPONENTS RENDER OTHER COMPONENTS

// 1. Components Interact ======================================================
- A React application can contain dozens, or even hundreds, of components.
- Each component might be small and relatively unremarkable on its own. When combined, however, they can form enormous, fantastically complex ecosystems of information.
- In other words, React apps are made out of components, but what makes React special isn't components themselves. What makes React special is the ways in which components interact.



// 2. A Component in a Render Function =========================================
// eg.
// Here is a .render() method that returns an HTML-like JSX element:
class Example extends React.Component {
  render() {
    return <h1>Hello world</h1>;
  }
}

// Render methods can also return another kind of JSX: component instances.
class OMG extends React.Component {
  render() {
    return <h1>Whooaa!</h1>;
  }
}

class Crazy extends React.Component {
  render() {
    return <OMG />;
  }
}
// Crazy's render method returns an instance of the OMG component class. You could say that Crazy renders an <OMG />.



// 3. Apply a Component in a Render Function ===================================
// ex.
import React from 'react';
import ReactDOM from 'react-dom';
import { NavBar } from './NavBar';

class ProfilePage extends React.Component {
  render() {
    return (
      <div>
				<NavBar />
        <h1>All About Me!</h1>
        <p>I like movies and blah blah blah blah blah</p>
        <img src="https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-monkeyselfie.jpg" />
      </div>
    );
  }
}

ReactDOM.render(<ProfilePage />, document.getElementById('app'));



// 4. Require A File ===========================================================
// eg.
// If you want to use a variable that's declared in a different file, such as NavBar, then you have to import the variable that you want.
import { NavBar } from './NavBar.js';

// ex.
// ProfilePage.js
import React from 'react';
import ReactDOM from 'react-dom';
import { NavBar } from './NavBar';

class ProfilePage extends React.Component {
  render() {
    return (
      <div>
				<NavBar />
        <h1>All About Me!</h1>
        <p>I like movies and blah blah blah blah blah</p>
        <img src="https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-monkeyselfie.jpg" />
      </div>
    );
  }
}

ReactDOM.render(<ProfilePage />, document.getElementById('app'));



// 5. export ===================================================================
// eg.
//In one file, place the keyword export immediately before something that you want to export. That something can be any top-level var, let, const, function, or class:

// Manifestos.js:
export const faveManifestos = {
  futurist: 'http://www.artype.de/Sammlung/pdf/russolo_noise.pdf',
  SCUM:     'http://www.ccs.neu.edu/home/shivers/rants/scum.html',
  cyborg:   'http://faculty.georgetown.edu/irvinem/theory/Haraway-CyborgManifesto-1.pdf'
};
You can export multiple things from the same file:

// Manifestos.js:
export const faveManifestos = {
  futurist: 'http://www.artype.de/Sammlung/pdf/russolo_noise.pdf',
  SCUM:     'http://www.ccs.neu.edu/home/shivers/rants/scum.html',
  cyborg:   'http://faculty.georgetown.edu/irvinem/theory/Haraway-CyborgManifesto-1.pdf'
};

export const alsoRan = 'TimeCube';

//In a different file, import the name of the var, let, const, function, or class from the first file:

// App.js:
// Import faveManifestos and alsoRan from ./Manifestos.js:
import { faveManifestos, alsoRan } from './Manifestos';

// Use faveManifestos:
console.log(`A Cyborg Manifesto:  ${faveManifestos.cyborg}`);
This style of importing and exporting in JavaScript is known as "named exports." When you use named exports, you always need to wrap your imported names in curly braces, such as:

import { faveManifestos, alsoRan } from './Manifestos';`
JavaScript's ES6 module system goes beyond named exports and has several advanced syntax features.



// ex.
// NavBar.js
import React from 'react';

export class NavBar extends React.Component {
  render() {
    const pages = ['home', 'blog', 'pics', 'bio', 'art', 'shop', 'about', 'contact'];
    const navLinks = pages.map(page => {
      return (
        <a href={'/' + page}>
          {page}
        </a>
      )
    });

    return <nav>{navLinks}</nav>;
  }
}



// 5. Component Rendering In Action ============================================
// ProfilePage.js
import React from 'react';
import ReactDOM from 'react-dom';
import { NavBar } from './NavBar';

class ProfilePage extends React.Component {
  render() {
    return (
      <div>
				<NavBar />
        <h1>All About Me!</h1>
        <p>I like movies and blah blah blah blah blah</p>
        <img src="https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-monkeyselfie.jpg" />
      </div>
    );
  }
}

ReactDOM.render(<ProfilePage />, document.getElementById('app'));
