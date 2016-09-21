import className from 'classname';
import { noop } from 'lodash';
import React, { Component, PropTypes } from 'react';

import './TodosListItem.css';

const _getTodoItemClass = todo => className(
  'todos-list-item',
  { completed: todo.completed }
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