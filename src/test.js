const React = require('react');
const ReactDOM = require('react-dom');

class TodoApp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      todoitems: []
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        todoitems: [
          { id: '01', title: "Do it", text: " really do it " },
          { id: '02', title: "Oh reilly", text: " come on" },
          { id: '03', title: "Kamlay", text: " come on" }
        ]
      });

    }, 2000);

  }


  render() {
    return React.createElement(
      'div',
      null,
      [React.createElement('h3', { key: 'apptitle' }, "Todo List"), React.createElement(TodoList, { key: 'todolist', todoitems: this.state.todoitems })]
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
        { key: item.id, id: item.id, title: item.title, text: item.text }
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
      [React.createElement('h5', { key: 'itemtitle' }, null, this.props.title), React.createElement('p', { key: 'text' }, this.props.text)]
    );
  }
}


ReactDOM.render(React.createElement(TodoApp), document.getElementById('root'));


