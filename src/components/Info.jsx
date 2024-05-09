import React from "react";

const Info = React.memo(() => {
  return (
    <div className="about__info center container ">
      <div className="about__box">
        <div className="flex">
          <h3 className="about__title" data-aos="fade-down" data-aos-delay="200" style={{
            fontSize: "2.5em",
            fontWeight: "500",
            color: "#071013",
          }}>
            2+
          </h3>
        </div>
        <p className="about__subtitle da" data-aos="fade-up" data-aos-delay="200">Years of Experience</p>
      </div>

      <div className="about__box">
        <div className="flex">
          <h3 className="about__title" data-aos="fade-down" data-aos-delay="400" style={{
            fontSize: "2.5em",
            fontWeight: "500",
            color: "#071013",
          }}>
            30+
          </h3>
        </div>
        <p className="about__subtitle da" data-aos="fade-up" data-aos-delay="400">Projects Completed</p>
      </div>

      <div className="about__box">
        <div className="flex">
          <h3 className="about__title" data-aos="fade-down" data-aos-delay="600" style={{
            fontSize: "2.5em",
            fontWeight: "500",
            color: "#071013",
          }}>
            2500+
          </h3>
        </div>
        <p className="about__subtitle da" data-aos="fade-up" data-aos-delay="600">Total Commits</p>
      </div>

      <div className="about__box">
        <div className="flex">
          <h3 className="about__title" data-aos="fade-down" data-aos-delay="800" style={{
            fontSize: "2.5em",
            fontWeight: "500",
            color: "#071013",
          }}>
            2017
          </h3>
        </div>
        <p className="about__subtitle da" data-aos="fade-up" data-aos-delay="800">Coding since</p>
      </div>
    </div>
  );
});

export default Info;

// Ensure AOS is initialized, possibly in your component's useEffect hook or in the main entry file of your app.
// Example of AOS initialization:
// useEffect(() => {
//   AOS.init();
// }, []);
