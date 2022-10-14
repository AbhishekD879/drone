import store from "./store/store.js";
const {dispatch,getState}=store;
import {triggerAction} from './action/action'
dispatch(triggerAction.addBug({description:"BUG1"}))
getState()
dispatch(triggerAction.addBug({description:"BUG2"}))
getState()
dispatch(triggerAction.addBug({description:"BUG3"}))
getState()
dispatch(triggerAction.removeBug({id:2}));
getState()