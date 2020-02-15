export type VisibilityFilter = 'all' | 'completed' | 'incomplete';

export interface Todo {
  content: string;
  completed: boolean;
}

export type Action =
  | {
      type: 'ADD_TODO';
      payload: {
        content: string;
      };
    }
  | {
      type: 'TOGGLE_TODO';
      payload: {
        id: string;
      };
    }
  | {
      type: 'SET_FILTER';
      payload: {
        filter: VisibilityFilter;
      };
    };

export interface State {
  todos: { [id: string]: Todo };
  filter: VisibilityFilter;
}
