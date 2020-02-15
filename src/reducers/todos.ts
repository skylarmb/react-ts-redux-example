import { Action, State } from '../types';

const initialState = {};

let nextId = 0;

const todoReducer = (state: State['todos'] = initialState, action: Action) => {
  switch (action.type) {
    case 'ADD_TODO': {
      const { content } = action.payload;
      return {
        ...state,
        [nextId++]: {
          content,
          completed: false,
        },
      };
    }
    case 'TOGGLE_TODO': {
      const { id } = action.payload;
      return {
        ...state,
        [id]: {
          ...state[id],
          completed: !state[id].completed,
        },
      };
    }
    default:
      return state;
  }
};

export default todoReducer;
