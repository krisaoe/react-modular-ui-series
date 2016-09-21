import className from 'classname';
import { noop } from 'lodash';
import React, { Component, PropTypes } from 'react';

import styles from './TodosListItem.scss';

const _getTodoItemClass = todo => className(
  styles.todosListItem,
  { [styles.completed]: todo.completed }
);

const TodosListItem = ({ todo, toggleTodo }) => (
  <li className={_getTodoItemClass(todo)}
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

export default TodosListItem;