import React from 'react'
import '../styles/home.css'
import Data from './Data'
import ScrollDown from './ScrollDown'
import Social from './Social'
import AOS from 'aos';
import Info from './Info';
import 'aos/dist/aos.css';
import "../styles/home.css";

const Home = ({theme}) => {
  
  return (
    <div id={theme}>
      <section className="home section " id="home">
        <div >
          <img 
          className='waves' src="https://raw.githubusercontent.com/ToniRajamaki/ToniRajamaki/2af8c27a3d3efaac49eb6bf4efcdad93f43e1176/waves.svg"  height="150"></img>
          {/* <svg className="wave1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 160"><path fill="#9b8ef6" fillOpacity="1" d="M0,160L80,133.3C160,107,320,53,480,37.3C640,21,800,43,960,53.3C1120,64,1280,64,1360,64L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg> */}
        </div>
        <div className="home__container container  ">
          <div className="home__content grid">
            {/* <Social /> */}
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

            <Info />
       
              {/* <ScrollDown /> */}
        </div>
      </section>
    </div>
  );
}

export default Home