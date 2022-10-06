
import './App.css';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import CustomImg from './components/ImageComponent/CustomImg';
import PropsDemo from './components/PropsDemo/PropsDemo';
import DriverForComponents from './components/DriverForComponent/DriverForComponents';

function App() {
  return (
    <div className="App">
     <Home/>
     <h1>I Am About</h1>
     <About/>
     <h1>I am Image Component</h1>
     <CustomImg/>
     <h1>Prop Drill</h1>
     <PropsDemo/>
     <h1>Component Rendering Demo</h1>
     <DriverForComponents/>
    </div>
  );
}

export default App;
