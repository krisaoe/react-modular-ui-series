import { noop } from 'lodash';
import React, { Component, PropTypes } from 'react';
import CSSModules from 'react-css-modules';

const _getTodoItemClass = todo => todo.completed
  ? 'completed'
  : 'todos-list-item';

const TodosListItem = ({ todo, toggleTodo }) => (
  <li styleName={_getTodoItemClass(todo)}
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

export default CSSModules(
  require('./TodosListItem.scss')
)(TodosListItem);