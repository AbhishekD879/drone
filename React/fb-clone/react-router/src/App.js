import {lazy,Suspense} from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import PageNotFound from './Pages/404/PageNotFound';
// import Video from "./Pages/Video/Video"
import Market from "./Pages/Market/Market"
import Community from "./Pages/Community/Community"
import Games from "./Pages/Games/Games"
// import Home from './Pages/Home/Home';

import Header from './components/Header';
import FacebookFooter from './components/FacebookFooter';
import Loading from './components/Loading';
import Login from './Pages/Login/Login';
import Context from './context/Context';
import Proctected from './components/Protected';
const Home=lazy(()=>import('./Pages/Home/Home'))
const Video=lazy(()=>import("./Pages/Video/Video"))
function App() {
  return (
    <div className="App">
      
        <Router>
         <Context>
         <Header/>
             <Suspense fallback={<Loading/>} >
          <Routes>
             <Route path='/' element={<Proctected><Home/></Proctected>} />
              <Route path='/video' element={<Proctected><Video/></Proctected>} />
              {/* <Route path='/profile/:firstName/:lastName' element={<Profile/>} /> */}
              <Route path='/market' element={<Proctected><Market/></Proctected>} />
              <Route path='/community' element={<Proctected><Community/></Proctected>} />
              <Route path='/fbgames' element={<Proctected><Games/></Proctected>} />
              <Route path='*' element={<PageNotFound/>} />
             <Route path='/login' element={<Login/>}/>
          </Routes>
          </Suspense>
          <FacebookFooter/>
         </Context>
        </Router>
      
    </div>
  );
}

export default App;
