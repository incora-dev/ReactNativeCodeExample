import { combineReducers } from 'redux';
import profile from './modules/Profile/profile.reducers';

const allReducers = combineReducers({
  profile,
});

export default allReducers;
