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
      imageSrc: 'https://github.com/ToniRajamaki/folio2/blob/main/public/assets/toni/gitgudgames.png?raw=true',
      workPlace: 'Git Gud Games®',
      time: "2 Years"
    },
    {
      id: 2,
      title: 'Meat Processing Laborer',
      location: 'Seinäjoki, Finland',
      description: [
        'Prepare and process meat products according to standard procedures',
        'Operate machinery and knife for cutting, grinding and processing meat.',
      ],
      buttonText: 'View Frontend Projects',
      date: 'May 2019 - Jun 2019',
      icon: 'work',
      imageSrc: 'https://github.com/ToniRajamaki/folio2/blob/main/public/assets/toni/atria.png?raw=true',
      workPlace: 'Atria®',
      time: "2 Months"
    },
    {
      id: 3,
      title: 'Technology Sales Specialist',
      location: 'Kauhava, Finland',
      description: [
        'Work autonomously, responsible for all store tasks and attending to customers',
        'Repair and troubleshoot electornics such as laptops for customers.',
        'Coordinate with suppliers and vendors to ensure product availability.',
      ],
      buttonText: 'View Frontend Projects',
      date: 'May 2018 - Aug 2018',
      icon: 'work',
      imageSrc: 'https://github.com/ToniRajamaki/folio2/blob/main/public/assets/toni/datakaistalogo.png?raw=true',
      workPlace: 'Datakaista®',
      time: "4 Months"
    },
    {
      id: 4,
      title: 'Custom Furniture Fabricator',
      location: 'Kauhava,Finland',
      description: [
        'Coordinate subcontracting tasks related to furniture manufacturing.',
        'Ensure quality control and adherence to manufacturing standards.',
        'Provide guidance and supervision to individuals in rehabilitative employment.',
      ],
      buttonText: 'View Frontend Projects',
      date: 'Jul 2016 - Jul 2017',
      icon: 'work',
      imageSrc: 'https://github.com/ToniRajamaki/folio2/blob/main/public/assets/toni/unico.png?raw=true',
      workPlace: 'Unico®',
      time: "1 Year"
    },
    {
      id: 5,
      title: 'Park Maintenance Worker',
      location: 'Kauhava, Finland',
      description: [
        'Guide and supervise other summer workers in their tasks.',
        'Provide training and instructions to other seasonal workers.',
      ],
      buttonText: 'View Frontend Projects',
      date: 'Jun 2015 - Aug 2015',
      icon: 'work',
      imageSrc: 'https://github.com/ToniRajamaki/folio2/blob/main/public/assets/toni/kauhava.png?raw=true',
      workPlace: 'City of Kauhava',
      time:"3 Months"
    },
    {
      id: 6,
      title: 'Park Maintenance Worker',
      location: 'Kauhava, Finland',
      description: [
        'Ensure the upkeep and cleanliness of shared outdoor spaces.',
        'Collaborate with management to address maintenance needs and priorities.',
      ],
      buttonText: 'View Frontend Projects',
      date: 'Jun 2014 - Aug 2014',
      icon: 'work',
      imageSrc: 'https://github.com/ToniRajamaki/folio2/blob/main/public/assets/toni/kauhava.png?raw=true',
      workPlace: 'City of Kauhava',
      time:"3 Months"
    },
    {
      id: 7,
      title: 'Construction Worker',
      location: 'Seinäjoki, Finland',
      description: [
        'Perform refurbishment and renovation work on buildings.',
        'Work included tasks such as: plastering, masonry and painting.',
      ],
      buttonText: 'View Frontend Projects',
      date: 'Jun 2013 - Jul 2013',
      icon: 'work',
      imageSrc: 'https://github.com/ToniRajamaki/folio2/blob/main/public/assets/toni/virrankoski.png?raw=true',
      workPlace: 'Rakennusliike Virrankoski®',
      time:"2 Months"
    },
  ]
  //   let workIconStyles = { background: "#06D6A0" };
  //   let schoolIconStyles = { background: "#f9c74f" };
  const checkIcon = <i className='uil uil-check-circle service__modal-icon'></i>
  const locationIcon = <i className='bx bx-buildings'></i>
  const timeIcon = <i className='bx bx-time-five'></i>
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
              iconStyle={{
                background: 'rgb(33,150,243)',
                width: '50px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <div className='jobcard'>
                <div className='parent'>
                  <div className='Image_title_subtitle_container'>
                    <img
                      alt='jobImage'
                      className='work_image'
                      src={element.imageSrc}
                    />
                    <div className='title_and_workplace'>
                      <h3 className='work_title_header_font'>
                        {element.workPlace}
                      </h3>
                      <h5 className='work_title_font'>{element.title}</h5>
                    </div>
                    <div className='location_and_time'>
                      <div>
                      {locationIcon} {element.location}
                      </div>
                      <div>
                      {timeIcon} {element.time}
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
              <div className='line'></div>
              <div className='description2'>
                {element.description.map((desc, index) => (
                  <p key={index} className='tiny_font parent2'>
                    <span className='space_dot'>• </span> {desc}
                  </p>
                ))}
              </div>
            </VerticalTimelineElement>
          )
        })}
      </VerticalTimeline>
    </div>
  )
}

export default Experience
