import { noop } from 'lodash';
import Radium from 'radium';
import React, { Component, PropTypes } from 'react';
import { compose } from 'redux';
import { applyThemeWrap } from 'theme-wrap';

import styles from './TodosListItem.styles';

const _getTodoItemClass = (todo, twStyles) => todo.completed
  ? twStyles.completed
  : twStyles.todosListItem;

const TodosListItem = ({ todo, toggleTodo, twStyles }) => (
  <li style={_getTodoItemClass(todo, twStyles)}
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

export default compose(
  applyThemeWrap(styles),
  Radium
)(TodosListItem);