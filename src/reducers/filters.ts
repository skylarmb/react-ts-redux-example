import { Action, State } from '../types';

const initialState = 'all';

const filterReducer = (
  state: State['filter'] = initialState,
  action: Action,
) => {
  switch (action.type) {
    case 'SET_FILTER': {
      return action.payload.filter;
    }
    default: {
      return state;
    }
  }
};

export default filterReducer;
