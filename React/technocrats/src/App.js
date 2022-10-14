
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from './pages/Login/Login';
import ClientList from './pages/ClientList/ClientList';
import Products from './pages/Products/Products';
import Revenue from './pages/Revenue/Revenue';
import Stats from './pages/Stats/Stats';
import Context from './context/Context';
import Protected from './components/Protector/Protected';
import Header from './components/Header/Header';
function App() {
  return (
    <div className="App">
      <Router>
        <Context>
          <Header/>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/" element={<Login/>}/>
          <Route path="/clientlist" element={<Protected><ClientList/></Protected>}/>
          <Route path="/products" element={<Protected><Products/></Protected>}/>
          <Route path="/revenue" element={<Protected><Revenue/></Protected>}/>
          <Route path="/stats" element={<Protected><Stats/></Protected>}/>
        </Routes>
        </Context>
      </Router>
    </div>
  );
}

export default App;
