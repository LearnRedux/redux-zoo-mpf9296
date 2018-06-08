import { RECEIVE_ANIMAL, BREAK_OUT, LOAD_SUCCESS } from '../actions';

export default (state = [], action) => {
  switch (action.type) {
    case RECEIVE_ANIMAL:
      if(action.name === undefined){
        return [...state, {present: true}];
      }else{
        return [...state.filter(animals => animals.name !== action.name), {name:action.name, present: true}];
      }
      case BREAK_OUT:
      if(action.name !== undefined){
        return state.map(x => x.name === action.name ? ({...x, present:false}) : x)
      }
        return state;

    default:
      return state;
  }
};
