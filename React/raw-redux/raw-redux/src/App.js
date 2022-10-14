import logo from './logo.svg';
import './App.css';
import store from "./redux/store/store";

import {triggerAction} from './redux/action/action'
import {bugGrpAction} from './redux/action/action'
function App() {
store.dispatch(triggerAction.addBug({description:"BUG1"}))
console.log("Adding BUG1")
console.log(store.getState())
store.dispatch(triggerAction.addBug({description:"BUG2",priority:2}))
console.log("Adding BUG2")
console.log(store.getState())
store.dispatch(triggerAction.addBug({description:"BUG3"}))
console.log("Adding BUG3")
console.log(store.getState())
// store.dispatch(triggerAction.removeBug({id:2}));
// console.log("Removing BUG2")
// console.log(store.getState())
store.dispatch(triggerAction.resolveBug({id:1}))
console.log("Resolving BUG1")
console.log(store.getState())
store.dispatch(triggerAction.sortBugs())
console.log("Sorting Bugs...")
console.log(store.getState())
store.dispatch(bugGrpAction.groupBug({bugs:store.getState()['bugReducer']}))
console.log("grouping Bugs...")
console.log(store.getState())
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
