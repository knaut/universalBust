import { createStore } from 'redux'
import rootReducer from '../dux/Root.js';

const generateStore = function(initialState, middleware) {

  if (middleware) {
    return createStore(
      rootReducer,
      initialState,
      middleware
    );  
  } else {
    return createStore(
      rootReducer,
      initialState
    );
  }
  
}

export default generateStore;