// MY FIRST REACT COMPONENT

import React from 'react';

// THE RENDER FUNCTION

// A render method is a property whose name is render, and whose value is a function.
class ComponentFactory extends React.Component {
  render() {}
}

// A render method must contain a return statement.
class ComponentFactory extends React.Component {
  render() {
    return <h1>Hello world</h1>;
  }
}


// COMPONENT
import React from 'react';
import ReactDOM from 'react-dom';

class MyComponentClass extends React.Component {
  render() {
    return <h1>Hello world</h1>;
  }
}

ReactDOM.render(
  <MyComponentClass />,
  document.getElementById('app')
);
