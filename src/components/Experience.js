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
    },
    {
      id: 2,
      title: 'Backend Developer',
      location: 'Skystead, Craonia',
      description:
        'Working hand-in-hand with front-end developers by providing the outward facing web application elements server-side logic. Creating the logic to make the web app function properly, and accomplishing this through the use of server-side scripting languages.',
      buttonText: 'View Backend Projects',
      date: 'June 2013 - August 2016',
      icon: 'work',
    },
    {
      id: 3,
      title: 'Quality Assurance Engineer',
      location: 'South Warren, Geshington',
      description:
        'Assessing the quality of specifications and technical design documents in order to ensure timely, relevant and meaningful feedback.',
      buttonText: 'Company Website',
      date: 'September 2011 - June 2013',
      icon: 'work',
    },
    {
      id: 4,
      title: 'Oak Ridge College',
      location: 'South Warren, Geshington',
      description:
        'Online Course in Magical Beasts and Wonders of the World - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque sagittis tellus, non ultrices lacus tempus vel.',
      buttonText: 'Course Certificate',
      date: 'September 2011',
      icon: 'school',
    },
    {
      id: 5,
      title: 'Hawking College',
      location: 'Skystead, Craonia',
      description:
        'College - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque sagittis tellus, non ultrices lacus tempus vel.',
      buttonText: 'College Projects',
      date: '2007 - 2011',
      icon: 'school',
    },
    {
      id: 6,
      title: 'Marble Hills Grammar School',
      location: 'Dragontail, Ascana',
      description:
        'Highschool - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque sagittis tellus, non ultrices lacus tempus vel.',
      date: '2003 - 2007',
      icon: 'school',
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
          let isWorkIcon = element.icon === 'work'

          return (
            <VerticalTimelineElement
              key={element.key}
              date={element.date}
              dateClassName='date'
              // className='description'
              //   iconStyle={}
              //   icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
            >
              <div className='jobcard'>
                <div className='parent'>
                  <div className='Image_title_subtitle_container'>
                    <img
                      alt='jobImage'
                      className='work_image'
                      src='https://seeklogo.com/images/U/unity-logo-988A22E703-seeklogo.com.png'
                    ></img>
                    <div className='title_and_workplace'>
                      <h5 className='work_title_font'>{element.title}</h5>
                      <h3 className='work_title_header_font'>Git Gud Games</h3>
                    </div>
                  </div>
                  <span className='location'>
                    <i class='bx bx-buildings'></i>
                    {element.location}
                  </span>
                </div>

                <div className='description2'>
                  <p className='tiny_font'>{element.description}</p>
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
