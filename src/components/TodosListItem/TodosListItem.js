import { noop } from 'lodash';
import Radium from 'radium';
import React, { Component, PropTypes } from 'react';

import styles from './TodosListItem.styles';

const _getTodoItemClass = todo => todo.completed
  ? styles.completed
  : styles.todosListItem;

const TodosListItem = ({ todo, toggleTodo }) => (
  <li style={_getTodoItemClass(todo)}
      onClick={(e) => toggleTodo(e, todo.id)}>
    {todo.description}
  </li>
);

TodosListItem.defaultProps = {
  todo: {},
  toggleTodo: noop
};

TodosListItem.propTypes = {
  todo: PropTypes.object,
  toggleTodo: PropTypes.func
};

export default Radium(TodosListItem);