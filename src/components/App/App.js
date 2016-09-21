import React, { Component } from 'react';

import './App.scss';
import { fetchTodos } from '../../api/api';
import { TodosList } from '../';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  componentDidMount() {
    fetchTodos(20)
      .then(todos => this.setState({ todos }));
  }

  toggleTodo = (e, id) => {
    e.preventDefault();
    const updatedTodos = this.state.todos.map(todo => ({
      ...todo,
      completed: (todo.id === id)
        ? !todo.completed
        : todo.completed
    }));
    this.setState({ todos: updatedTodos});
  };

  render() {
    const { todos } = this.state;
    return (
      <div id="react-modular-ui-series">
        <TodosList todos={todos}
                   toggleTodo={this.toggleTodo} />
      </div>
    );
  }
}

export default App;