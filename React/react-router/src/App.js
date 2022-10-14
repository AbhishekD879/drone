
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import PageNotFound from './Pages/404/PageNotFound';

import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Profile from './Pages/Profile/Profile';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
        <Router>
          <Header/>
          <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/about' element={<About/>} />
              <Route path='/profile/:firstName/:lastName' element={<Profile/>} />
              <Route path='/contact' element={<Contact/>} />
              <Route path='*' element={<PageNotFound/>} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
