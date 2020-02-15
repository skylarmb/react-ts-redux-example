import React from 'react';
import { connect } from 'react-redux';

import { State, VisibilityFilter } from '../../types';
import TodoItem from '../TodoItem';

interface OwnProps {}

interface StateProps {
  todos: State['todos'];
  filter: State['filter'];
}

interface DispatchProps {}

type Props = OwnProps & StateProps & DispatchProps;

export const getTodosByVisibilityFilter = (
  todos: State['todos'],
  filter: VisibilityFilter,
) => {
  const allTodos = Object.entries(todos);

  switch (filter) {
    case 'completed':
      return allTodos.filter(([_, todo]) => todo.completed);
    case 'incomplete':
      return allTodos.filter(([_, todo]) => todo.completed);
    case 'all':
    default:
      return todos;
  }
};

const TodoList: React.FC<Props> = props => (
  <ul className="todo-list">
    {props.todos && Object.keys(props.todos).length > 0
      ? Object.entries(props.todos).map(([id, todo]) => (
          <TodoItem key={`todo-${id}`} id={id} {...todo} />
        ))
      : 'No todos, yay!'}
  </ul>
);

const mapStateToProps = (state: State) => ({
  filter: state.filter,
  todos: state.todos,
});

export default connect(mapStateToProps, {})(TodoList);
