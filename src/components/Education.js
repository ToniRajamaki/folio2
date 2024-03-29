import React, { useEffect } from 'react';
import EducationCard from './EducationCard';
import '../styles/EducationCard.css'; // Ensure your CSS file is correctly linked
import 'aos/dist/aos.css'; // AOS styles, import in App.js if used globally
import AOS from 'aos';

// Component Definition
function Education() {
  // Initialize AOS library for animations
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  // Render the Education component
  return (
    <div className="education-background">
      <div className="education-content">
      <div className="wave1">

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 230"><path fill="#fafafa" fillOpacity="1" d="M0,192L120,202.7C240,213,480,235,720,224C960,213,1200,171,1320,149.3L1440,128L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>
</div>
        <section className="about section" id="education">
          <h2 className="section__title">Education</h2>
          <span className="section__subtitle">My Degrees</span>
          <div className="cards-container container grid2" data-aos="fade-up">
            {/* Dynamic rendering of education cards */}
            {[
              {
                href: 'https://www.tuni.fi/en/study-with-us/human-technology-interaction-computing-sciences',
                schoolName: 'Tampere University',
                degree: "Human-Technology Interaction Master's Degree (Tech)",
                duration: '2021-2023',
                description: '• Long Major: Human-Technology Interaction',
                imageSrc: 'https://github.com/ToniRajamaki/folio2/blob/main/public/assets/toni/tau_logo.png?raw=true',
              },
              {
                href: 'https://ahlmanedu.fi/',
                schoolName: 'AhlmanEdu',
                degree: 'Professional Entrepreneurship Diploma',
                duration: '2021 - 2022',
                description: '• Business operations development\n• Productization, Sales & Marketing',
                imageSrc: 'https://github.com/ToniRajamaki/folio2/blob/main/public/assets/toni/ahlman.png?raw=true',
              },
              {
                href: 'https://www.tuni.fi/en/about-us/computing-sciences#switcher-trigger-overview',
                schoolName: 'Tampere University',
                degree: "Computing Sciences Bachelor's Degree",
                duration: '2018-2021',
                description: '• Major: Signal Processing\n• Minor: Industrial Economics',
                imageSrc: 'https://github.com/ToniRajamaki/folio2/blob/main/public/assets/toni/tau_logo.png?raw=true',
              },
              // Add more education entries here as needed
            ].map((edu, index) => (
              <a key={index} href={edu.href} target="_blank" rel="noopener noreferrer" className="card-link">
                <EducationCard
                  schoolName={edu.schoolName}
                  degree={edu.degree}
                  duration={edu.duration}
                  description={edu.description}
                  imageSrc={edu.imageSrc}
                />
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Education;
