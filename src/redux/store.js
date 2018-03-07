import { createStore, compose, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import reducer from './reducer';

const finalCreateStore = compose(applyMiddleware(createLogger()))(createStore);

export default function configureStore(initialState) {
  initialState = initialState || { todos: [] }; // eslint-disable-line no-param-reassign
  return createStore(reducer, initialState);
}
