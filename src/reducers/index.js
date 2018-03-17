import { combineReducers } from 'redux';
import authenticationReducer from './authentication'
import usersReducer from './users'

const rootReducer = combineReducers({
  //state: (state = {}) => state
  authenticated: authenticationReducer,
  users: usersReducer
});

export default rootReducer;
 