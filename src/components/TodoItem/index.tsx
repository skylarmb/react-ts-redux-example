import React, { Dispatch } from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';

import { Todo, Action } from '../../types';

type OwnProps = Todo & { id: string };

interface StateProps {}

interface DispatchProps {
  toggleTodo: (id: string) => void;
}

type Props = OwnProps & StateProps & DispatchProps;

const TodoItem: React.FC<Props> = props => (
  <li className="todo-item" onClick={() => props.toggleTodo(props.id)}>
    {props.completed ? '👌' : '👋'}{' '}
    <span
      className={cx(
        'todo-item__text',
        props.completed && 'todo-item__text--completed',
      )}
    >
      {props.content}
    </span>
  </li>
);

const mapStateToProps = () => {};

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  toggleTodo: (id: string) =>
    dispatch({
      type: 'TOGGLE_TODO',
      payload: {
        id,
      },
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);
