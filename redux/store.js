import { createStore ,compose, applyMiddleware} from 'redux'
import reducer from './reducer'
import logger from 'redux-logger'

let finalCreateStore = compose(
    applyMiddleware(logger())
)(createStore)

export default function configureStore(initialState){
   initialState = initialState || {todos : []}
    return createStore(reducer, initialState)
}