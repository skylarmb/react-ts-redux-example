import React, { useState, Dispatch } from 'react';
import { connect } from 'react-redux';

import { Action } from '../../types';

interface OwnProps {}

interface StateProps {}

interface DispatchProps {
  addTodo: (content: string) => void;
}

type Props = OwnProps & StateProps & DispatchProps;

const AddTodo: React.FC<Props> = props => {
  const [inputValue, setInputValue] = useState('');

  return (
    <>
      <input onChange={e => setInputValue(e.target.value)} value={inputValue} />
      <button
        onClick={() => {
          props.addTodo(inputValue);
          setInputValue('');
        }}
      >
        Add Todo
      </button>
    </>
  );
};

// not strictly needed, could just pass {} to connect
const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  addTodo: (inputValue: string) =>
    dispatch({
      type: 'ADD_TODO',
      payload: {
        content: inputValue,
      },
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
