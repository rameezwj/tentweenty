import { useState, useEffect, useRef } from "react";
import './assets/styles.scss';
import "./assets/helper.css";
import Header from './components/header/Header.js';
import News from './components/news/News.js';
import Featured from './components/featured/Featured.js';
import Testimonial from './components/testimonial/Testimonial.js';
import {hoverAnimation} from './helper.js';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'

function App() {
  const [theme, setTheme] = useState("theme-light");

  useEffect(()=>{
    hoverAnimation();
  });

  const changeTheme = ()=>{
    theme === 'theme-dark' ? setTheme('theme-light') : setTheme('theme-dark');
  }

  const containerRef = useRef(null);

  return (
    <LocomotiveScrollProvider
      options={
        {
          smooth: true,
        }
      }

      containerRef={containerRef}
    >
      <div className={`app_wrapper widthb100 ${theme}`} data-scroll-container ref={containerRef}>
        <Header changeTheme={changeTheme} />
        <News />
        <Testimonial />
        <Featured />

        <div className="cursor"></div>
      </div>
    </LocomotiveScrollProvider>
  );
}

export default App;
