import {legacy_createStore as createStore} from 'redux'
import reducers from "./../reducers/rootReducers"
export default createStore(reducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())