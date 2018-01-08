import { createStore ,compose, applyMiddleware} from 'redux'
import reducer from './reducer'
import { createLogger } from 'redux-logger'

let finalCreateStore = compose(
    applyMiddleware(createLogger())
)(createStore)

export default function configureStore(initialState){
   initialState = initialState || {todos : []}
    return createStore(reducer, initialState)
}