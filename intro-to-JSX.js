// INTRO TO JSX
// Create and Render JSX Elements.

// JSX is a syntax extension for JavaScript. It was written to be used with React. JSX code looks a lot like HTML.
const h1 = <h1>Hello world</h1>;

<p>Hello World</p> // A JSX element



// JSX Elements And Their Surroundings

const navBar = <nav>I am a nav bar</nav>; // JSX element saved in variable

// JSX Elements stored in an object
const myTeam = {
  center: <li>Benzo Walli</li>,
  powerForward: <li>Rasha Loa</li>,
  smallForward: <li>Tayshaun Dasmoto</li>,
  shootingGuard: <li>Colmar Cumberbatch</li>,
  pointGuard: <li>Femi Billon</li>
};



// ATTRIBUTES IN JSX

// A JSX attribute is written using HTML-like syntax: a name, followed by an equals sign, followed by a value.
my-attribute-name="my-attribute-value"

// Some JSX elements with attributes:
<a href="http://www.example.com">Welcome to the Web</a>;

const title = <h1 id="title">Introduction to React.js: Part I</h1>;

// A single JSX element can have many attributes, just like in HTML:
const panda = <img src="images/panda.jpg" alt="panda" width="500px" height="500px" />;

// Exercise:
const p1 = <p id='large'>foo</p>;
const p2 = <p id='small'>bar</p>;



// NESTED JSX

<a href="https://www.example.com"><h1>Click me!</h1></a>

// You can format like HTML - Line breaks etc
<a href="https://www.example.com">
  <h1>
    Click me!
  </h1>
</a>

// However, they must be put in () if split over more than one line:
(
  <a href="https://www.example.com">
    <h1>
      Click me!
    </h1>
  </a>
)

// A nested JSX expression being saved as a variable:
const theExample = (
  <a href="https://www.example.com">
    <h1>
      Click me!
    </h1>
  </a>
);

// Exercise
const myDiv = <div><h1>Hello World</h1></div>



// JSX OUTER ELEMENTS

// The first opening tag and the final closing tag of a JSX expression must belong to the same JSX element!
const paragraphs = (
  <div id="i-am-the-outermost-element">
    <p>I am a paragraph.</p>
    <p>I, too, am a paragraph.</p>
  </div>
);

// This code, for example, will not work:
const paragraphs = (
  <p>I am a paragraph.</p>
  <p>I, too, am a paragraph.</p>
);

// Exercise: (Wrap in div)
const blog = (
  <div>
    <img src="pics/192940u73.jpg" />
    <h1>
      Welcome to Dan's Blog!
    </h1>
    <article>
      Wow I had the tastiest sandwich today.  I <strong>literally</strong> almost freaked out.
    </article>
  </div>
);



// RENDERING JSX

// To render a JSX expression means to make it appear onscreen.
import React from 'react';
import ReactDOM from 'react-dom';

// Copy code here:
ReactDOM.render(<h1>Hello world</h1>, document.getElementById('app'));

//====================================================================

// ReactDOM.render() I

// ReactDOM is the name of a JavaScript library. This library contains several React-specific methods, all of which deal with the DOM in some way or another.

import React from 'react';
import ReactDOM from 'react-dom';

// Write code here:
ReactDOM.render(<h1>Render me!</h1>, document.getElementById('app'));



// ReactDOM.render() II

//The first argument is appended to whatever element is selected by the second argument.
document.getElementById('app') // 'app'


// Exercise:

// app.js document
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(<h1>Render me!</h1>, document.getElementById('container'));

// index.html document
/* *** Commented out to protect JS doc characteristics ***
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<link rel="stylesheet" href="/styles.css">
	<title>Learn ReactJS</title>
</head>

<body>
  <span id="container"></span>
	<script src="https://s3.amazonaws.com/codecademy-content/courses/React/react-course-bundle.min.js"></script>
  <script src="/app.compiled.js"></script>
</body>

</html> */



// PASSING A VARIABLE TO ReactDOM.render()

const toDoList = (
  <ol>
    <li>Learn React</li>
    <li>Become a Developer</li>
  </ol>
);

ReactDOM.render(
  toDoList,
  document.getElementById('app')
);


// Exercise

import React from 'react';
import ReactDOM from 'react-dom';

const myList = (
  <ul>
  	<li>Blue</li>
  	<li>Red</li>
  	<li>Yellow</li>
  </ul>
)

ReactDOM.render(
  myList,
  document.getElementById('app')
);



// THE VIRTUAL DOM - only updates DOM elements that have changed.

const hello = <h1>Hello world</h1>;

// This will add "Hello world" to the screen:

ReactDOM.render(hello, document.getElementById('app'));

// This won't do anything at all:

ReactDOM.render(hello, document.getElementById('app'));
