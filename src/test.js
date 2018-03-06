 const React = require('react');
 const ReactDOM = require('react-dom');


 class HelloMessage extends React.Component {
    render() {
      return React.createElement(
        "div",
        { class: 'hello-message' },
        "Hello ",
        this.props.name
      );
    }
  }
  
  ReactDOM.render(React.createElement(HelloMessage, { name: "Taylor" }), document.getElementById('root'));



// ReactDOM.render(
//   <h1>Hello, world!</h1>,
//   document.getElementById('root')
// );




document.getElementById('test-button').addEventListener('click', function () {
    console.log("terror");
    document.getElementById("test-button").innerHTML = "YOU CLICKED ME!";
});


