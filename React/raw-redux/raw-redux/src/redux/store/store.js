import {legacy_createStore as createStore} from 'redux'
import rootReducer from '../reducers/rootReducer'
export default createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

// const {dispatch,getState}=store;
// import {triggerAction} from './action/action'
// dispatch(triggerAction.addBug({description:"BUG1"}))
// getState()
// dispatch(triggerAction.addBug({description:"BUG2"}))
// getState()
// dispatch(triggerAction.addBug({description:"BUG3"}))
// getState()
// dispatch(triggerAction.removeBug({id:2}));
// getState()

