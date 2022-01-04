// - CRA uses Babel and Webpack under the hood so you can really set up a react app without using CRA.

// Remember react-snippet extension and emmet and prettierextension setup(incase of teaching others.)

// ReactDom.render is always in one place - where you inject your JS.

//Use <React.fragment></React.fragment> instead of enclosing JSX inside extra dormant HTML elements.

//  Always remember this under the hood thing.

/*

  import React from 'react';

  function Greeting() {
    return React.createElement('h2', {}, 'this is the real thing in react');

    or;

    return React.createElement(
      'div',
      {},
      React.createElement('h2', {}, 'I guess I see why we choose JSX')
    );
  }

  export default Greeting;
*/

// Inline comment in JSX - style = {{property: 'value', property:'value'}} (note the comma spliting)

// JSX inline comments {/* */}

//IN JSX, you cannot add a javascript statement like "let bee = 6" but you can add statements(expressions) like "6 + 6"

// use in JSX: {author.toUpperCase}

// *. TTD.
//     a. Learn CSS grid.
//     b. review JS objects
//     c. review js arrays
//     d. learn and practice js destructuring, practice John Smilga's props destructuring examples.
//     e. check out for the project course codes and save them especially the props part.
//     e. practice object propps example like John Smilga did. //note how he kind of used the image specially.

// Props is simply a JS parameters. It is set up in the created component and defined in the called component.
// And accessed in created component using JSX-JS.

import React from 'react';
import ReactDom from 'react-dom';

// CSS
import './index.css';

function FirstComponent() {
  return (
    <div>
      <Book job="Web Developer" salary="$12,000" />
      <Book job="Computer Engineer" salary="$15,000" />
      <Book job="Data Analist" salary="$12,000" />
    </div>
  );
}

function Book(props) {
  /*
  // prop destructuring

  function Book({ job, salary, age })
    
  or
  
  const { job, salary, age } = props;
  
  */

  return (
    <section className="inline">
      <img
        src="https://ajokpainmo.netlify.app/Gulp/Images/a.j-2.jpg"
        alt="bookImageBanner"
        className="image"
      />
      <h3>This is the title of the book</h3>
      <h4 style={{ color: 'blue', fontSize: '25px' }}>
        By Andrew James Okpainmo
      </h4>
      <h4>{props.job}</h4>
      <h4>{props.salary}</h4>
    </section>
  );
}

ReactDom.render(<FirstComponent />, document.getElementById('root'));

// React props help you give similar components different properties like background images, and text contents

// The children prop sit in between the closing tag and the opening tag of the called component

// js mapping.

/*
const variableName = arrayName.map(targetItems) => {
  console.log(targetItems - that is the whole array)

  <h1>variableName</h1>
}
 */
