import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import reduxThunk from 'redux-thunk';

const configureStore = (initialState = {}) => createStore(rootReducer, initialState, applyMiddleware(reduxThunk));

export default configureStore;