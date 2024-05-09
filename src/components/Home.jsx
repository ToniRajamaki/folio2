import React, { useState } from 'react';
import '../styles/home.css';
import Data from './Data';
// Assuming ScrollDown and Social are not used in this snippet, so they're commented out
// import ScrollDown from './ScrollDown';
// import Social from './Social';
import AOS from 'aos';
import Info from './Info';
import 'aos/dist/aos.css';
import "../styles/home.css";
import "../styles/pp-hover.css";

const FACTS = [
  "Smiling boosts your immune system, keeping you healthier!",
  "It’s a natural stress-reliever – better than chocolate.",
  "Smiles are contagious – spread happiness effortlessly!",
  "Smiling can trick your brain into happiness.",
  "A smile increases your attractiveness – smile away!",
  "Smiles use up to 53 muscles – a mini workout!",
  "They're universally recognized, breaking down all language barriers.",
  "Smiling releases endorphins, elevating your mood naturally.",
  "A genuine smile can boost your lifespan.",
  "Smiling is free therapy for mind and soul.",
  "It makes you appear more confident and capable.",
  "Babies start smiling in the womb – it’s instinctual!",
  "Smiles are more memorable than any other expression.",
  "They can predict success in relationships.",
  "A smile can lead to laughter, the best medicine.",
  "Frequent smilers are seen as more likable.",
  "Smiling can reduce blood pressure, enhancing heart health.",
  "Even a forced smile can spark a genuine mood boost.",
  "Smiling is considered more trustworthy than not smiling.",
  "It’s the first trait noticed in new acquaintances.",
  "Smiling directly influences how others perceive you.",
  "It’s a universal sign of happiness and acceptance.",
  "Smiling can make difficult tasks seem easier.",
  "It’s a powerful tool in negotiations and meetings.",
  "Smiling helps to break the ice in social situations.",
  "It can make you look younger and more vibrant.",
  "People who smile often are perceived as more competent.",
  "A smile lights up your face, enhancing your features.",
  "It can be a silent way of showing empathy.",
  "Smiling can increase your attention and cognitive flexibility.",
  "It’s an instant mood lifter for you and others.",
  "A smile has the power to cross cultural boundaries.",
  "Smiling makes positive moments more memorable.",
  "It’s an easy way to express joy and satisfaction.",
  "Smiling fosters a positive and productive work environment."
];

// #endregion
const Home = ({ theme }) => {
  const [fact, setFact] = useState(FACTS[Math.floor(Math.random() * FACTS.length)]);

  const changeFactOnClick = () => {
    const newFact = FACTS[Math.floor(Math.random() * FACTS.length)];
    setFact(newFact);
  };

  return (
    <div id={theme}>
      <div className="cover"></div>
      <section className="home section " id="home">
        <div>
          <img 
            className='waves mt-4' 
            src="https://raw.githubusercontent.com/ToniRajamaki/ToniRajamaki/2af8c27a3d3efaac49eb6bf4efcdad93f43e1176/waves.svg"  
            height="150" 
            alt="Waves"
          />
        </div>
        <div className="home__container container flex justify-content">
          <div className="home__content grid mt-8">
            <Data />
            <div className="pp_box" data-aos="flip-left" data-aos-delay="600" data-aos-duration="700">
              <div className="pp_content">
                <img 
                  className='pp_img home__img' 
                  src="https://raw.githubusercontent.com/ToniRajamaki/folio2/main/public/assets/toni/profile_picture.png" 
                  alt="Profile"
                />
                <h2 className="pp_h2 font-bol">Interesting fact about SMILING 😁<br/><span className="pp_span">{fact}</span></h2>
                <a className="pp_a" onClick={changeFactOnClick} href="#!">Another 😁-Fact</a>
              </div>
            </div>
           
          <div className="sm:hidden xl:block">
            <Info />
          </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
