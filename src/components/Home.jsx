import React from 'react'
import '../styles/home.css'
import Data from './Data'
import ScrollDown from './ScrollDown'
import Social from './Social'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = ({theme}) => {
  
  return (
    <div id={theme}>
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
          <img data-aos="fade-up" data-aos-delay="1000"
           className='waves' src="https://raw.githubusercontent.com/ToniRajamaki/ToniRajamaki/main/waves.svg" width="100%" height="150"></img>
              {/* <ScrollDown /> */}
        </div>
      </section>
    </div>
  );
}

export default Home