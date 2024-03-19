import React from 'react'
import "../styles/work.css"
import Projects from './Projects'

// import VideoPlayer from "react-video-js-player";
// import Camping from "./video/camping.mp4";
  

const Portfolio = ({ theme }) => {
    // const videoSrc = Camping;

  return (
    <div id={theme}>
      <section className="work section container" id="portfolio">
        <h2 className="section__title">Portfolio</h2>
        <span className="section__subtitle small_margin_bottom">Most recent works</span>

        <Projects theme={theme} />
      </section>
    </div>
  );
};

export default Portfolio