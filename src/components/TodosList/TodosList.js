import { noop } from 'lodash';
import React, { Component, PropTypes } from 'react';
import CSSModules from 'react-css-modules';

import { TodosListItem } from '../';

const TodosList = ({ todos, toggleTodo }) => (
  <ul styleName="todos-list">
    {todos.map((todo, i) => (
      <TodosListItem key={i}
                    todo={todo}
                    toggleTodo={toggleTodo} />
    ))}
  </ul>
);

TodosList.defaultProps = {
  todos: [],
  toggleTodo: noop
};

TodosList.propTypes = {
  todos: PropTypes.array,
  toggleTodo: PropTypes.func
};

export default CSSModules(
  require('./TodosList.scss')
)(TodosList);