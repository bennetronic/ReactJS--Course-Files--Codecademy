// ADVANCED JSX



// class vs className

<h1 class="big">Hey</h1> // HTML

<h1 className="big">Hey</h1> // JSX


// Exercise
import React from 'react';
import ReactDOM from 'react-dom';

const myDiv = (
	<div className="big">I AM A BIG DIV</div>
);

ReactDOM.render(
	myDiv,
  document.getElementById('app')
);



// SELF-CLOSING TAGS

Fine in HTML with a slash:

  <br />

Also fine, without the slash:

  <br>

Fine in JSX:

  <br />

NOT FINE AT ALL in JSX:

  <br>


// eg
const profile = (
  <div>
    <h1>I AM JENKINS</h1>
    <img src="images/jenkins.png" />
    <article>
      I LIKE TO SIT
      <br />
      JENKINS IS MY NAME
      <br />
      THANKS HA LOT
    </article>
  </div>
);



// JavaScript in JSX in JavaScript

import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <h1>2 + 3</h1>,
  document.getElementById('app')
);



// CURLY BRACES IN JSX
// {}'s treat code within JSX tags as JS. Otherwise it will be treated as a string.

import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <h1>{2 + 3}</h1>,
  document.getElementById('app')
);



// 20 DIGITS OF PI IN JSX

import React from 'react';
import ReactDOM from 'react-dom';

const pi = (
  <div>
    <h1>
      PI, YALL!
    </h1>
    <p>
      {Math.PI.toFixed(20)}
    </p>
  </div>
);

ReactDOM.render(
	pi,
	document.getElementById('app')
);

// ex.
import React from 'react';
import ReactDOM from 'react-dom';

const math = (
	<h1>
  2 + 3 = {2 + 3} // Prints 2 + 3 = 5
  </h1>
)

ReactDOM.render(
	math,
  document.getElementById('app')
)



// VARIABLES IN JSX

// Declare a variable:
const name = 'Gerdo';

// Access your variable
// from inside of a JSX expression:
const greeting = <p>Hello, {name}!</p>;


// Exercise
import React from 'react';
import ReactDOM from 'react-dom';

const theBestString = 'tralalalala i am da best';

ReactDOM.render(<h1>{theBestString}</h1>, document.getElementById('app'));



// VARIABLE ATTRIBUTES IN JSX

// Use a variable to set the `height` and `width` attributes:

const sideLength = "200px";

const panda = (
  <img
    src="images/panda.jpg"
    alt="panda"
    height={sideLength}
    width={sideLength} />
);


// EG
const pics = {
  panda: "http://bit.ly/1Tqltv5",
  owl: "http://bit.ly/1XGtkM3",
  owlCat: "http://bit.ly/1Upbczi"
};

const panda = (
  <img
    src={pics.panda}
    alt="Lazy Panda" />
);

const owl = (
  <img
    src={pics.owl}
    alt="Unimpressed Owl" />
);

const owlCat = (
  <img
    src={pics.owlCat}
    alt="Ghastly Abomination" />
);


// Ex.
import React from 'react';
import ReactDOM from 'react-dom';

const goose = 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-goose.jpg';

// Declare new variable here:
const gooseImg = <img src={goose} />;

ReactDOM.render(
  gooseImg,
	document.getElementById('app')
)



// EVENT LISTENERS IN JSX

// An event listeners name should be onBlahBlah (onClick, onMouseOver etc).
<img onClick={myFunc} />

// An event listener attribute's value should be a function.
function myFunc() {
  alert('Make myFunc the pFunc... omg that was horrible i am so sorry');
}

<img onClick={myFunc} />


// Ex.
import React from 'react';
import ReactDOM from 'react-dom';

function makeDoggy(e) {
  // Call this extremely useful function on an <img>.
  // The <img> will become a picture of a doggy.
  e.target.setAttribute('src', 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-puppy.jpeg');
  e.target.setAttribute('alt', 'doggy');
}

const kitty = (
	<img
		src="https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg"
		alt="kitty" onClick={makeDoggy} />
);

ReactDOM.render(kitty, document.getElementById('app'));



// JSX CONDTITIONALS: If Statements That Don't Work
// *** You can not inject an if statement into a JSX expression.
// This code will break:
(
  <h1>
    {
      if (purchase.complete) {
        'Thank you for placing an order!'
      }
    }
  </h1>
)
