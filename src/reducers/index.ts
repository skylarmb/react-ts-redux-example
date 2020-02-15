import { combineReducers } from 'redux';
import filter from './filters';
import todos from './todos';

export default combineReducers({ todos, filter });
