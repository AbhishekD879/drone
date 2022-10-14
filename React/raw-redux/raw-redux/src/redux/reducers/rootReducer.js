import {combineReducers} from 'redux'
import bugReducer from './bugReducer'
import bugGroupingReducer from './bugGropingReducer';
export default combineReducers({bugReducer,bugGroupingReducer});