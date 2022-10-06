
import './App.css';
import About from './components/AboutSection/About';
import Hero from './components/SectionHero/Hero';
import aboutMeImg from "./assets/aboutme.svg"
import aboutmeVideo from"./assets/Codes.mp4"
import WhatIDo from './components/WhatDoIDo/WhatIDo';
import frontEndIcon from "./assets/web-development1.svg"
import backEndIcon from "./assets/ui-design1.svg"
import Project from './components/Project/Project';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

const VideoAsset=()=>(<video className=" rounded relative -right-4 -bottom-4" width="500" controls>
<source src={aboutmeVideo}   />

Your browser does not support HTML video.
</video>)
function App() {
  return (
    <div className="App">
     <Hero/>
     <About  Asset={<img className="relative -left-4 -top-4" alt='abtme' src={aboutMeImg} />} />
     <About isLeft={true} Asset={<VideoAsset/>}/>
     <WhatIDo 
     frontEnd={{
      title:"Front-end Development",
      ioc:frontEndIcon
     }} 
     backEnd={{
      title:"Back-end Development",
      ioc:backEndIcon
     }} 
     />
     <Project projects={[{
      title:"Need Food App Design",
      img:require("./assets/portfolio.svg")
     },
     {
      title:"Cafe Street Web Design",
      img:require("./assets/cafestreet-webdesign.svg")
     },
     {
      title:"Travel App Design",
      img:require("./assets/travel-app-modal1.svg")
     },
     
     ]} />
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
