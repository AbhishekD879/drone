
import { useState } from 'react';
import './App.css';
import ColorBox from './component/ColorBox';

function App() {
  const [color,setColor]=useState("");
  const colors=['#e44236','#25ccf7','#8b78e6','#ea7773','#bb2cd9']
  return (
    <div className="App w-screen h-screen items-center justify-start flex flex-col mt-36">
      <div className="flex items-center">
        {colors.map(color=>(<ColorBox onClick={setColor} key={color} color={color} />))}
      </div>
      <div className='flex items-center justify-center mt-20'>
        <div className='rounded-full w-80 h-80' style={{backgroundColor:color}}>

        </div>
      </div>
    </div>
  );
}

export default App;
