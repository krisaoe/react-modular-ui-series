import { noop } from 'lodash';
import Radium from 'radium';
import React, { Component, PropTypes } from 'react';
import { compose } from 'redux';
import { applyThemeWrap } from 'theme-wrap';

import styles from './TodosList.styles';
import { TodosListItem } from '../';

const TodosList = ({ todos, toggleTodo, twStyles }) => (
  <ul style={twStyles.todosList}>
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

export default compose(
  applyThemeWrap(styles),
  Radium
)(TodosList);