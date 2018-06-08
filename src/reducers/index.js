import name from './name';
import presenceFilter from './presenceFilter';
import animals from './animals';
import { combineReducers } from 'redux';

export default combineReducers({
  name,
  presenceFilter,
  animals
})

export {
  name,
  presenceFilter,
  animals
};
