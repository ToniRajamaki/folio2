import React from 'react'
import '../styles/home.css'
import Data from './Data'
import ScrollDown from './ScrollDown'
import Social from './Social'
import AOS from 'aos';
import 'aos/dist/aos.css';
import "../styles/home.css";

const Home = ({theme}) => {
  
  return (
    <div id={theme} className='full-height'>
      <section className="home section" id="home">
        <div className="home__container  ">
          <div className="home__content grid">
            <Social />
               {/* profile picture */}

            <div className="home__img" data-aos="flip-left" data-aos-delay="1000" data-aos-duration="1000">
              <img
                src="https://github.com/ToniRajamaki/folio2/blob/main/public/assets/toni/profile_picture.png?raw=true"
                alt="about__img"
                className="home__img"
              />
            </div>
            
            <Data />
          </div>
          <div data-aos="fade-up" data-aos-delay="1000">

          <img 
           className='waves' src="https://raw.githubusercontent.com/ToniRajamaki/ToniRajamaki/2af8c27a3d3efaac49eb6bf4efcdad93f43e1176/waves.svg" width="100%" height="150" borderRadius="0px"></img>
           <svg className="wave1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 160"><path fill="#9b8ef6" fill-opacity="1" d="M0,160L80,133.3C160,107,320,53,480,37.3C640,21,800,43,960,53.3C1120,64,1280,64,1360,64L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
           </div>
              {/* <ScrollDown /> */}
        </div>
      </section>
    </div>
  );
}

export default Home