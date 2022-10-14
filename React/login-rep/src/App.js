
import './App.css';
import {BrowserRouter as Router,Routes,Route, Link} from 'react-router-dom'
import Proctected from './components/Proctected';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import {useNavigate} from "react-router-dom"

import Contact from './Pages/Contact/Contact';
import Context from './context/Context';
function App() {
  // const [isLogged,setisLoggedIn]=use
  // useEffect(()=>{
  //   if(localStorage.getItem('login')){
      
  //   }
  // })
  return (
    <div className="App">
      
      
      <Router>
      <div className='flex justify-between w-2/5'>
        <Link to="/home" state={{fromLogin:true}}>HOME</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/login">LOGIN</Link>
        <Link to="/contact">Contact</Link>
        </div>
        <Routes>
          <Route path='/home' element={<Proctected><Home/></Proctected>}/>
          <Route path='/about'element={<Proctected><About/></Proctected>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/' element={<Login/>}/>
          <Route path='/contact' element={<Proctected><Contact/></Proctected>}/>
        </Routes>
        <Logout/>
      </Router>
      
    </div>
  );
}
const Logout=()=>{
  const navgate=useNavigate();
  return(
    <button onClick={()=>{localStorage.clear() 
      navgate('/login') }}>Clear Storage</button>
  )
}
export default App;
