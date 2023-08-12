import '../styles/Experience.css'
import '../App.css'
// import { ReactComponent as WorkIcon } from "./work.svg";
// import { ReactComponent as SchoolIcon } from "./school.svg";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

function Experience() {
  let timelineElements = [
    {
      id: 1,
      title: 'Game Software Developer',
      location: 'Tampere, Finland',
      description: [
        'Mobile game development using Unity game engine and C#.',
        'Implement and optimize game assets for performance on mobile devices.',
        'Collaborate with cross functional teams, including artists and programmers.',
      ],
      buttonText: 'View Frontend Projects',
      date: 'Jan 2021 - Dec 2022',
      icon: 'work',
      imageSrc: './folio2/assets/toni/tau_logo.png',
    }, {
      id: 1,
      title: 'Game Software Developer',
      location: 'Tampere, Finland',
      description: [
        'Mobile game development using Unity game engine and C#.',
        'Implement and optimize game assets for performance on mobile devices.',
        'Collaborate with cross functional teams, including artists and programmers.',
      ],
      buttonText: 'View Frontend Projects',
      date: 'Jan 2021 - Dec 2022',
      icon: 'work',
      imageSrc: './folio2/assets/toni/tau_logo.png',
    }, {
      id: 1,
      title: 'Game Software Developer',
      location: 'Tampere, Finland',
      description: [
        'Mobile game development using Unity game engine and C#.',
        'Implement and optimize game assets for performance on mobile devices.',
        'Collaborate with cross functional teams, including artists and programmers.',
      ],
      buttonText: 'View Frontend Projects',
      date: 'Jan 2021 - Dec 2022',
      icon: 'work',
      imageSrc: './folio2/assets/toni/tau_logo.png',
    },
  ]
  //   let workIconStyles = { background: "#06D6A0" };
  //   let schoolIconStyles = { background: "#f9c74f" };
  const checkIcon = <i class='uil uil-check-circle service__modal-icon'></i>
  const locationIcon = <i class='bx bx-buildings'></i>
  return (
    <div>
      <VerticalTimeline animate={true}>
        {timelineElements.map((element) => {
          return (
            <VerticalTimelineElement
              key={element.id} // Use 'id' instead of 'key'
              date={element.date}
              dateClassName='date'
              icon={checkIcon}
              iconStyle={{background:'rgb(33,150,243)',width:"50px",display:"flex",justifyContent:"center",alignItems:"center"}}
            >
              <div className='jobcard'>
                <div className='parent'>
                  <div className='Image_title_subtitle_container'>
                    <img
                      alt='jobImage'
                      className='work_image'
                      src={element.imageSrc}
                    ></img>
                    <div className='title_and_workplace'>
                      <h5 className='work_title_font'>{element.title}</h5>
                      <h3 className='work_title_header_font'>Git Gud Games</h3>
                    </div>
                  </div>
                  <span className='location'>
                    {locationIcon} {element.location}
                  </span>
                </div>

                <div className='description2'>
                  {element.description.map((desc, index) => (
                    <p key={index} className='tiny_font parent2'>
                      <div className='space_dot'>• </div> {desc}
                    </p>
                  ))}
                </div>
              </div>
            </VerticalTimelineElement>
          )
        })}
      </VerticalTimeline>
    </div>
  )
}

export default Experience
