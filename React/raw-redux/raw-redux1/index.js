import store from "./redux/store/store";
const {dispatch,getState}=store;
import {triggerAction} from './redux/action/action'
dispatch(triggerAction.addBug({description:"BUG1"}))
getState()
dispatch(triggerAction.addBug({description:"BUG2"}))
getState()
dispatch(triggerAction.addBug({description:"BUG3"}))
getState()
dispatch(triggerAction.removeBug({id:2}));
getState()