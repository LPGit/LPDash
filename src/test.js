"use strict";

const React = require('react');
const ReactDOM = require('react-dom');
const Mongo = require('mongodb').MongoClient;

const url = "mongodb://localhost:27017/";
const dbName = "TEST";

class TestButton extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    console.log("clicked");
  }

  render() {
    return React.createElement('button', { onClick: this.handleClick }, "Test");
  }
}

class TodoApp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      todoitems: []
    };
  }

  componentDidMount() {
    let dbs = null;
    Mongo
      .connect(url)
      .then(d => {
        dbs = d;
        return d.db(dbName)
          .collection('TodoItems')
          .find()
          .toArray();
      })
      .then(col => {
        this.setState({ todoitems: col });
        dbs.close();
      })
      .catch((err) => { throw err; });
  }


  render() {
    return React.createElement(
      'div',
      null,
      React.createElement(TestButton),
      React.createElement('h3', null, "Todo List"),
      React.createElement(TodoList, { todoitems: this.state.todoitems })
    );
  }
}

class TodoList extends React.Component {
  render() {
    return React.createElement(
      "ul",
      { className: 'todo-list' },
      this.props.todoitems.map(item => React.createElement(
        TodoItem,
        { key: item._id, id: item.id, title: item.Title, text: item.Description }
      ))
    );
  }
}

class TodoItem extends React.Component {
  render() {
    return React.createElement(
      'li',
      {
        className: 'todo-item',
      },
      React.createElement('h5', null, this.props.title),
      React.createElement('p', null, this.props.text)
    );
  }
}


ReactDOM.render(React.createElement(TodoApp), document.getElementById('root'));


