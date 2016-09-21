import { noop } from 'lodash';
import React, { Component, PropTypes } from 'react';

import styles from './TodosList.scss';
import { TodosListItem } from '../';

const TodosList = ({ todos, toggleTodo }) => (
  <ul className={styles.todosList}>
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

export default TodosList;