
import './App.css';
import About from './Components/About/About';

import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Home from './Components/Home/Home';
import Header from './Components/Home/Header/Header';
import Contact from './Components/Contact/Contact';
import Login from './Components/Login/Login';
import Context from './context/Context';
import Protected from './Components/Protected/Protected';
import DashBoard from './Components/Dashboard/DashBoard';



function App() {
  return (
    <div className="App">
      <Router>
        <Context>
        <Header/>
        <Routes>
          <Route path='/' element={<Protected><Home/></Protected>}/>
          <Route path='/about' element={<Protected><About/></Protected>}/>
          <Route path='/dashboard'element={<Protected><DashBoard/></Protected>}/>
          <Route path='/contact' element={<Protected><Contact/></Protected>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
        </Context>
      </Router>
    </div>
  );
}

export default App;
