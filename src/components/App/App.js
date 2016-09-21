import { Style, StyleRoot } from 'radium';
import normalize from 'radium-normalize';
import React, { Component } from 'react';
import { ThemeWrapProvider } from 'theme-wrap';

import theme from '../styles/theme';
import mixins from '../styles/mixins';
import styles from './App.styles';
import { fetchTodos } from '../../api/api';
import { TodosList } from '../';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      hotTheme: theme
    };
  }

  componentDidMount() {
    fetchTodos(20)
      .then(todos => this.setState({ todos }));
  }

  randomizeTheme = () => {
    const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'gray', 'white', 'black'];
    const hotTheme = {
      ...this.state.hotTheme,
      $darkGray: _.sample(colors),
      $mediumGray: _.sample(colors),
      $primaryColor: _.sample(colors),
      $secondaryColor: _.sample(colors),
      $tertiaryColor: _.sample(colors)
    };
    this.setState({ hotTheme });
  };

  toggleTodo = (e, id) => {
    e.preventDefault();
    const updatedTodos = this.state.todos.map(todo => ({
      ...todo,
      completed: (todo.id === id)
        ? !todo.completed
        : todo.completed
    }));
    this.setState({ todos: updatedTodos });
  };

  render() {
    const { todos, hotTheme } = this.state;
    return (
      <StyleRoot>
        <ThemeWrapProvider theme={hotTheme}
                           mixins={mixins}>
          <Style rules={normalize} />
          <div style={styles.app}>
            <button onClick={this.randomizeTheme}>
              Randomize Theme
            </button>

            <TodosList todos={todos}
                       toggleTodo={this.toggleTodo} />
          </div>
        </ThemeWrapProvider>
      </StyleRoot>
    );
  }
}

export default App;