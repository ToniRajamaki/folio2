import React from "react";
import AnimatedNumbers from "react-animated-numbers";

const Info = React.memo(() => {
  return (
    <div className="about__info center container">

    <div className="about__box">
      <div className="flex">

             <h3 className="about__title">  
            <AnimatedNumbers
            includeComma
            transitions={(index) => ({
              type: 'spring',
              duration: 0.5 + 0.4,
            })}
            fontStyle={{
              fontSize: "3em",
              fontWeight: "500",
              color: "var(--main)",
            }}
            animateToNumber={2}
            />
            </h3>
          <span className="sliding-number-postfix">+</span>

            </div>
            <p className="about__subtitle">Years of Experience</p>
          </div>
    
    
          <div className="about__box">
            <div className="flex">

             <h3 className="about__title">  
            <AnimatedNumbers
            includeComma
            transitions={(index) => ({
              type: 'spring',
              // stiffness:200,
              duration: 0.5 + 0.4,
            })}
            fontStyle={{
              fontSize: "3em",
              fontWeight: "500",
              color: "var(--main)",
            }}
            animateToNumber={30}
            />
            </h3>
          <span className="sliding-number-postfix">+</span>

            </div>
            <p className="about__subtitle">Projects Completed</p>
          </div>
    
    
          <div className="about__box">
            <div className="flex">
              
             <h3 className="about__title">  
            <AnimatedNumbers
            includeComma
            transitions={(index) => ({
              type: 'spring',
              // stiffness:200,
              duration: 0.5 + 0.4,
            })}
            fontStyle={{
              fontSize: "3em",
              fontWeight: "500",
              color: "var(--main)",
            }}
            animateToNumber={2500}
            />
            </h3>
          <span className="sliding-number-postfix">+</span>
            
            </div>
            <p className="about__subtitle">Total Commits</p>
          </div>
    
    
          <div className="about__box">
    
             <h3 className="about__title">  
            <AnimatedNumbers
            includeComma = {false}
            transitions={(index) => ({
              type: 'spring',
              // stiffness:200,
              duration: 0.5 + 0.4,
            })}
            fontStyle={{
              fontSize: "3em",
              fontWeight: "500",  
              color: "var(--main)",
            }}
            animateToNumber={2017}
            />
            </h3>
            <p className="about__subtitle">Coding since</p>
          </div>
    
       
        </div>
  );
});

export default Info;
