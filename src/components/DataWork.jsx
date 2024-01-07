import "../styles/Datawork.css";
const i = (
  <i
    className='bx bx-badge-check'
    style={{ color: '#516CF7', fontSize: 'large' }}
  ></i>
);

export const projectsData = [
  {
    id: 11,
    title: "Taste-Enhancing AR/VR:",
    images: ["https://github.com/ToniRajamaki/folio2/blob/main/public/assets/projects/ar/ar3.png?raw=true",
    "https://github.com/ToniRajamaki/folio2/blob/main/public/assets/projects/ar/ar1.gif?raw=true",
    "https://github.com/ToniRajamaki/folio2/blob/main/public/assets/projects/ar/ar2.png?raw=true",
    "https://github.com/ToniRajamaki/folio2/blob/main/public/assets/projects/ar/ar3.png?raw=true",
  ],
    category: ["other","featured"],
    video: "/assets/gym_mobile.mp4",
    description: "Leveraged Unity and ARuCo tags to create an immersive app altering food's visual appeal. Bachelor's thesis highlighting how enticing visuals can elevate taste perception.",
    tags:["C#","VR","AR"],
    features:["Augment Food","Real-Time Application","Calibration & Testing"],
    codeURL: "https://github.com/ToniRajamaki/FoodAugmentationWithUnity",
    demoURL: "https://www.youtube.com/watch?v=sUQpsuETWJc&ab_channel=ToniRajam%C3%A4ki"
  },
  {
    id: 10,
    title: "Image Recognition",
    images: ["https://github.com/ToniRajamaki/folio2/blob/abf8282d6520d05917c332c64b8e702e58a94076/public/assets/projects/cifar10/cifar2.png?raw=true","https://github.com/ToniRajamaki/folio2/blob/main/public/assets/projects/cifar10/cifar1.jpg?raw=true"],
    category: ["other","featured"],
    video: "/assets/gym_mobile.mp4",
    description: "Python-based image recognition app delving into Cifar-10 dataset. Explored classifiers' impact on results, yielding captivating insights and an enjoyable project journey.",
    tags:["Python","Keras","TensorFlow"],
    features:["Trains With Data","Multiple Classifier Methods","Bayesian","Performance analysis"],
    codeURL: "https://github.com/ToniRajamaki/Machine-Learning",
  },
  {
    id: 13,
    title: "Modular React Creations",
    images: [
      "https://github.com/ToniRajamaki/folio2/blob/main/public/assets/projects/mini_projects/ez1.png?raw=true",
      "https://github.com/ToniRajamaki/folio2/blob/main/public/assets/projects/mini_projects/ez2.gif?raw=true",
      "https://github.com/ToniRajamaki/folio2/blob/main/public/assets/projects/mini_projects/ez3.gif?raw=true",
      "https://github.com/ToniRajamaki/folio2/blob/main/public/assets/projects/mini_projects/ez4.gif?raw=true",
      "https://github.com/ToniRajamaki/folio2/blob/main/public/assets/projects/mini_projects/ez5.gif?raw=true",
    ],
    category: ["web","featured"],
    video: "/assets/gym_mobile.mp4",
    description: "Collection of React apps/components with meticulous state design, prioritizing reusability. A joyful endeavor, demonstrating the power of well-structured, modular development.",
    tags:["JavaScript","React","Redux"],
    features:["Lots Of Tiny Projects","Careful State Design","API","Axios"],
    codeURL: "https://github.com/ToniRajamaki?tab=repositories&q=&type=&language=javascript&sort=",
  },
  {
    id: 1,
    images: ["https://github.com/ToniRajamaki/folio2/blob/main/public/assets/projects/misc/portfolio2.png?raw=true"],
    title: "Portfolio Project",
    category: ["web","featured"],
    description:"This is one my latest works, a highly interactive personal website that multitude of features. Designed with care, it has unobtrusive animations that lend a hint of charm to the browsing experience. As you navigate the simple layout, I hope you find something of interest.",
    tags:["JavaScript","React","UI/UX"],
    features:["Asymptotic Efficiecny","Optimized","Adaptive Algorithms"],
    codeURL:"https://github.com/ToniRajamaki/folio2",
    demoURL:"https://tonirajamaki.github.io/folio2/"
  },
  {
    id: 2,
    title: "Tetris++",
    images: ["https://github.com/ToniRajamaki/folio2/blob/main/public/assets/projects/misc/tetris.png?raw=true"],
    category: ["other","featured"],
    video: "/assets/camping.mp4",
    description: "C++ Tetris rebirth via Qt Creator's GUI editor. Infused with creativity, this project offered both a playful twist on the classic game and a humorous dance with GUI complexities",
    tags:["C++","Qtcreator"],
    features:["Tetris with twist","Keep Track of hiscore","Adjust the difficulty"],
    codeURL: "https://github.com/ToniRajamaki/tetris-",
  },
  {
    id: 3,
    title: "FUZU 3D Mobile Game",
    images: ["https://github.com/ToniRajamaki/folio2/blob/main/public/assets/projects/fuzu/fuzu1.png?raw=true",
    "https://github.com/ToniRajamaki/folio2/blob/main/public/assets/projects/fuzu/fuzu2.gif?raw=true",
    "https://github.com/ToniRajamaki/folio2/blob/main/public/assets/projects/fuzu/fuzu3.jpg?raw=true",
    "https://github.com/ToniRajamaki/folio2/blob/main/public/assets/projects/fuzu/fuzu4.jpg?raw=true",
    "https://github.com/ToniRajamaki/folio2/blob/main/public/assets/projects/fuzu/fuzu5.jpg?raw=true",
  ],
  category: ["app","featured"],
  video: "/assets/CloneYoutube.mkv",
  description: "Major 3D project at G3, starring 'Fuzu' the bird. Navigate obstacles, acquire XP and Eggs for advancement. Unveil a world of optimized performance and captivating gameplay.",
  tags:["C#","Unity","G3"],
  features:["3D Platformer","Beautiful lvl Design","Skill tree","Highly Optimized"],
  demoURL:"https://www.youtube.com/watch?v=bjdl9BJKhxI&ab_channel=GitGudGames"
},
  {
    id: 4,
    title: "Pirkanmaa Domination",
    images: ["https://github.com/ToniRajamaki/folio2/blob/main/public/assets/projects/misc/pirkanmaan_valloitus.png?raw=true"],
    category: ["other"],
    video: "/assets/gym.mp4",
    description: "Dive into this resource-driven territory simulator. Outmaneuver your opponent, tactically manage resources, explore 'Pate's deals', and race to construct the decisive nuclear plant for victory.",
    tags:["C++","Pair Programming"],
    features:["Multiplayer","Random-Gen map","5 Unique resources"],
    codeURL:"https://github.com/ToniRajamaki/dominationGame/tree/main",
  },

  {
    id: 6,
    title: "Cyberpunk: Rogue Turret",
    images: ["https://github.com/ToniRajamaki/folio2/blob/main/public/assets/projects/cyberpunk/cyber1.png?raw=true",
    "https://github.com/ToniRajamaki/folio2/blob/main/public/assets/projects/cyberpunk/cyber2.png?raw=true",
    "https://github.com/ToniRajamaki/folio2/blob/main/public/assets/projects/cyberpunk/cyber3.png?raw=true",
    "https://github.com/ToniRajamaki/folio2/blob/main/public/assets/projects/cyberpunk/cyber4.png?raw=true",
    "https://github.com/ToniRajamaki/folio2/blob/main/public/assets/projects/cyberpunk/cyber5.png?raw=true",
  ],
  category: ["app","featured"],
    video: "/assets/todo.mp4",
    description: "Crafted at G3, a high-performance, visually stunning roguelike turret game. Engage waves of foes, upgrade with innovative enhancements, and wield new weaponry.",
    tags:["C#","Unity","G3"],
    features:["Highly Optimized","Fully Randomized","Stunning Visuals","40% D1 Retention"],
    demoURL:"https://www.youtube.com/watch?v=mQf923EoPJE&ab_channel=GitGudGames"
  },

  {
    id: 7,
    title: "Juice Master",
    images: ["https://github.com/ToniRajamaki/folio2/blob/main/public/assets/projects/juice/juice0.png?raw=true",
    "https://github.com/ToniRajamaki/folio2/blob/main/public/assets/projects/juice/juice1.png?raw=true",
    "https://github.com/ToniRajamaki/folio2/blob/main/public/assets/projects/juice/juice2.png?raw=true",
    "https://github.com/ToniRajamaki/folio2/blob/main/public/assets/projects/juice/juice3.png?raw=true",
    "https://github.com/ToniRajamaki/folio2/blob/main/public/assets/projects/juice/juice4.png?raw=true",
  ],
  category: ["app","featured"],
    video: "/assets/gym_mobile.mp4",
    description: "A G3 project where players dives into crafting diverse juices, balancing complexity and delight. Navigate traps, ensuring your creations remain pristine. The juice business awaits your strategic finesse.",
    tags:["C#","Unity","G3"],
    features:["Create Luxurious Drinks","Cool Animated processes","Make money with your drinks"],
    demoURL:"https://play.google.com/store/apps/details?id=com.gitgudgames.juicemaker"
  },
  {
    id: 8,
    title: "Tampere Bus Algorithms",
    images: ["https://github.com/ToniRajamaki/folio2/blob/main/public/assets/projects/misc/bus.png?raw=true","https://github.com/ToniRajamaki/folio2/blob/main/public/assets/projects/misc/bus2.png?raw=true"],
    category: ["other"],
    video: "/assets/gym_mobile.mp4",
    description: "Optimized Data Handling using unordered_maps selected for efficient handling of frequent functions achieving O(N) insertion, removal, and Θ(1) search. used vectors for less critical tasks due to their user-friendly nature.",
    tags:["C++","Optimization"],
    features:["Asymptotic Efficiecny","Optimized","Adaptive Algorithms"],
    codeURL:"https://github.com/ToniRajamaki/TIRAGA_bus_stops"
  },
 
  
  {
    id: 12,
    title: "Ninja Blog",
    images: ["https://github.com/ToniRajamaki/folio2/blob/main/public/assets/projects/ninja_blog/blog0.png?raw=true",
    "https://github.com/ToniRajamaki/folio2/blob/main/public/assets/projects/ninja_blog/blog1.gif?raw=true",
    "https://github.com/ToniRajamaki/folio2/blob/main/public/assets/projects/ninja_blog/blog2.gif?raw=true,"],
    category: ["web","featured"],
    video: "/assets/gym_mobile.mp4",
    description: "Unveiling my first React project, a dynamic blog hub. Immerse in ninja sagas, contribute your narratives. Crafted under YouTube's expert guidance for a stepping stone into web development.",
    tags:["JavaScript","React","Axios"],
    features:["Write Blogs","Create and Store New ones","Minimalistic Design"],
    codeURL:"https://github.com/ToniRajamaki/Ninja-react-blog"
  },
  {
    id: 5,
    title: "Suez Unblocker",
    images: ["https://github.com/ToniRajamaki/folio2/blob/main/public/assets/projects/suez/suez1.png?raw=true","https://github.com/ToniRajamaki/folio2/blob/main/public/assets/projects/suez/suez2.png?raw=true","https://github.com/ToniRajamaki/folio2/blob/main/public/assets/projects/suez/suez3.png?raw=true"],
    category: ["app"],
    video: "/assets/movie.mp4",
    description: "G3's quick gem spun from Suez Canal saga. Simple clicker game with depth. Witness random animations, NPC camaraderie, and vibrant sounds for an immersive adventure.",
    tags:["C#","Unity","G3"],
    features:["Clicker Game","Trending","Immersive Audio design"],
    demoURL:"https://play.google.com/store/apps/details?id=com.GitGudGamesOy.FreeSuezCanal"
  },
  //############# UI/UX PROJECTS ###############
  {
    id: 14,
    title: "FitAR",
    images: ["https://github.com/ToniRajamaki/folio2/blob/main/public/assets/projects/UI_UX/fitar/thumbnail.png?raw=true",
    "https://github.com/ToniRajamaki/folio2/blob/main/public/assets/projects/UI_UX/fitar/5.gif?raw=true",
    "https://github.com/ToniRajamaki/folio2/blob/main/public/assets/projects/UI_UX/fitar/6.gif?raw=true",
    "https://github.com/ToniRajamaki/folio2/blob/main/public/assets/projects/UI_UX/fitar/4.gif?raw=true"],
    category: ['ui/ux'],
    video: "/assets/movie.mp4",
    description: <>
    <h2>🏋️ FITAR: Augmented Reality Fitness App</h2>
    <p>FITAR, my personal project, is a smartphone app that uses Augmented Reality (AR) to enhance the gym experience, offering customizable workout plans and a virtual humanoid trainer.</p>
    <br/>
    <h3>🔍 Project Concept</h3>
    <p>The idea behind FITAR was to simplify workout planning and improve exercise form, utilizing AR technology to bring a personal trainer experience to the user's smartphone.</p>
    <br/>
    <h3>⚙️ Key Features of FITAR</h3>
    <ul>
      <li><strong>AR Exercise Demonstrations:</strong> Life-sized virtual humanoid showing exercises in real-time.</li>
      <li><strong>Customizable Workout Plans:</strong> Easy selection of exercises for personalized sessions.</li>
      <li><strong>User Feedback Integration:</strong> Allowing users to rate exercises and tailor their fitness journey.</li>
    </ul>
    <br/>
    <h3>🛠 Methods & Tools</h3>
    <ul>
      <li><strong>Extensive User Research:</strong> Gathering background information and analyzing existing solutions in the fitness app market.</li>
      <li><strong>Gamification Exploration:</strong> Researching ways to gamify the workout experience to increase user engagement.</li>
      <li><strong>Figma:</strong> Creating interactive mockup for UX testing.</li>
    </ul>
    <br/>
    <h3>🙋‍♂️ Personal Challenges and Growth</h3>
    <ul>
      <li><strong>Managing Workload:</strong> Navigating the challenges of handling a large project scope single-handedly.</li>
      <li><strong>Appreciation for Team Skills Diversity:</strong> Learning the value of having a team with varied skills and expertise.</li>
      <li><strong>Enhanced Learning Experience:</strong> Gaining substantial knowledge in various aspects of app development and AR technology.</li>
    </ul>
    <br/>
    <h3>📚 Key Learnings</h3>
    <ul>
      <li><strong>Power of AR in Fitness:</strong> Understanding the impact of augmented reality in enhancing workout experiences.</li>
      <li><strong>Importance of User-Centric Design:</strong> Recognizing the need for thorough user research in creating effective fitness solutions.</li>
      <li><strong>Value of Personal Development:</strong> Acknowledging the growth achieved through overcoming the challenges of solo project management.</li>
    </ul>
</>
,
    tags:["AR","UI/UX","Product Design","Interaction Design"],
    features:["Augmented Reality","Promote healthy lifestyle","Personal trainer"],
    demoURL:"https://www.figma.com/proto/QL1J9OfPg9Qmh8QPwGBZYy/HTI-560-FITAR?page-id=0%3A1&node-id=1-3&starting-point-node-id=1%3A3&mode=design&t=FVgUIZZd3DHnatnN-1"
  },
  {
    id: 15,
    title: "FutuMED",
    images: ["https://github.com/ToniRajamaki/folio2/blob/main/public/assets/projects/UI_UX/medical/thumbnail.jpg?raw=true",
    "https://github.com/ToniRajamaki/folio2/blob/main/public/assets/projects/UI_UX/medical/1.png?raw=true",
    "https://github.com/ToniRajamaki/folio2/blob/main/public/assets/projects/UI_UX/medical/3.png?raw=true",
    "https://github.com/ToniRajamaki/folio2/blob/main/public/assets/projects/UI_UX/medical/5.png?raw=true",
    "https://github.com/ToniRajamaki/folio2/blob/main/public/assets/projects/UI_UX/medical/4.png?raw=true",
    "https://github.com/ToniRajamaki/folio2/blob/main/public/assets/projects/UI_UX/medical/2.png?raw=true"],
    category: ['ui/ux'],
    video: "/assets/movie.mp4",
    description:<>
    <h2>🌐 FutuMED: Innovating Healthcare Monitoring</h2>
    <p>Our team of five, including a professional nurse, created FutuMED to modernize healthcare by enabling remote and automated monitoring of vital signs, enhancing the efficiency and personalization of patient care.</p>
    <br/>
    <h3>🔍 Problem Identification</h3>
    <p>Our goal was to ease the workload of medical professionals by integrating digital solutions for automated monitoring and patient data analysis.</p>
    <br/>
    <h3>⚙️ Key Features of FutuMED</h3>
    <ul>
      <li><strong>Remote Vital Sign Monitoring:</strong> Enables healthcare professionals to track patients' health remotely.</li>
      <li><strong>Integration of AI:</strong> Incorporates AI for comprehensive analysis of patients' physical and mental health.</li>
      <li><strong>Security and Privacy:</strong> Adheres to the EU General Data Protection Regulation for patient data safety.</li>
    </ul>
    <br/>
    <h3>🛠 Methods & Tools</h3>
    <ul>
      <li><strong>Insights from Medical Professional:</strong> Utilizing team member's expertise and network in healthcare for targeted research.</li>
      <li><strong>Clear Project Goals:</strong> Recognizing the importance of a well-defined framework and unified team objectives.</li>
      <li><strong>Invaluable User Insights:</strong> Conducting targeted inquiries to gather crucial feedback from the right people.</li>
    </ul>
    <br/>
    <h3>🙋‍♂️ My Role in the Project</h3>
    <ul>
      <li><strong>Contributing to Ideation:</strong> Actively participating in brainstorming sessions for innovative concepts.</li>
      <li><strong>UI wireframing:</strong> Focusing on the UI design aspects of the project to enhance user interaction.</li>
      <li><strong>Analysing Data:</strong> We collected lots of data from user research and it needed to be analysed for practical use.</li>
    </ul>
    <br/>
    <h3>📚 Key Learnings</h3>
    <ul>
      <li><strong>Enhancing Healthcare Through Technology:</strong> Understanding the impact of digital solutions in healthcare.</li>
      <li><strong>Value of Professional Insights:</strong> Learning the importance of industry-specific knowledge in project development.</li>
      <li><strong>Importance of Clear Framework:</strong> Recognizing the need for a well-defined project scope and team alignment.</li>
    </ul>
</>

 ,
    tags:["Human-centered Design","User research","UX Evaluation"],
    features:["Vital tracking","Remote Monitoring","Patient profiles"],
    demoURL:""
  },
  {
    id: 16,
    title: "Habitica ReDesign",
    images: ["https://github.com/ToniRajamaki/folio2/blob/main/public/assets/projects/UI_UX/habitica_redesign/thumbnail.jpg?raw=true",
    "https://github.com/ToniRajamaki/folio2/blob/main/public/assets/projects/UI_UX/habitica_redesign/image 2.png?raw=true",
    "https://github.com/ToniRajamaki/folio2/blob/main/public/assets/projects/UI_UX/habitica_redesign/Rectangle 1.png?raw=true",
    "https://github.com/ToniRajamaki/folio2/blob/main/public/assets/projects/UI_UX/habitica_redesign/Rectangle 2.png?raw=true",
    "https://github.com/ToniRajamaki/folio2/blob/main/public/assets/projects/UI_UX/habitica_redesign/image 1.png?raw=true",
    "https://github.com/ToniRajamaki/folio2/blob/main/public/assets/projects/UI_UX/habitica_redesign/image 3.png?raw=true"],
    category: ['ui/ux'],
    video: "/assets/movie.mp4",
    description: <>
    <h2>🌟 Enhancing Habitica for User Motivation</h2>
    <p>Our 4-person-team's UI/UX project focused on innovating the Habitica app, aiming to boost habit and productivity management by integrating new, motivational features inspired by Duolingo's wager system.</p>
    <br/>
    <h3>🔍 Problem Identification</h3>
    <p>Habitica web service was allready full of gamified elements so, it was challenging to ideate new concepts that integrate seamlessly.</p>
    <br/>
    <h3>⚙️ Key Features of the Redesign</h3>
    <ul>
      <li><strong>Wager System for Goals:</strong> Implementing a system inspired by Duolingo to set up wagers for achieving goals.</li>
      <li><strong>Interactive Quests and Progression:</strong> Transforming tasks into quests with experience bars and levels to deepen user engagement.</li>
      <li><strong>Social Interaction Enhancement:</strong> Designing more interactive parties to foster community and peer support.</li>
    </ul>
    <br/>
    <h3>🛠 Methods & Tools</h3>
    <ul>
      <li><strong>Figma for Interactive Design:</strong> Utilizing Figma to create and visualize the new features interactively.</li>
      <li><strong>Integrating Theories of Motivation:</strong> Employing self-determination and goal-setting theories in the design process.</li>
    </ul>
    <br/>
    <h3>🙋‍♂️ My Role in the Project</h3>
    <ul>
      <li><strong>Creating Interactive Figma Designs:</strong> Leading the development of interactive designs to showcase new concepts.</li>
      <li><strong>Ideating New Concepts:</strong> Generating innovative ideas to enhance the app's motivational aspects.</li>
      <li><strong>Contributing to Various Project Aspects:</strong> Engaging in other essential aspects of the project development.</li>
    </ul>
    <br/>
    <h3>📚 Key Learnings</h3>
    <ul>
      <li><strong>Enhancing User Engagement:</strong> Understanding how creative design elements can significantly improve user motivation and interaction.</li>
      <li><strong>Importance of Social Features:</strong> Recognizing the role of community and social support in habit-forming applications.</li>
      <li><strong>Effective Ideation:</strong> Learning the value of brainstorming and conceptualizing new features in app design.</li>
    </ul>
</>
,
    tags:["UX Design","Wireframing","Product Development"],
    features:["Reward system","Task Customization","Positive reinforcement"],
    demoURL:""
  },
  {
    id: 17,
    title: "SAMPO",
    images: ["https://github.com/ToniRajamaki/folio2/blob/main/public/assets/projects/UI_UX/sampo/9.png?raw=true",
    "https://github.com/ToniRajamaki/folio2/blob/main/public/assets/projects/UI_UX/sampo/5.png?raw=true",
    "https://github.com/ToniRajamaki/folio2/blob/main/public/assets/projects/UI_UX/sampo/3.png?raw=true",
    "https://github.com/ToniRajamaki/folio2/blob/main/public/assets/projects/UI_UX/sampo/1.png?raw=true",
    "https://github.com/ToniRajamaki/folio2/blob/main/public/assets/projects/UI_UX/sampo/4.png?raw=true",
    "https://github.com/ToniRajamaki/folio2/blob/main/public/assets/projects/UI_UX/sampo/6.png?raw=true",
    "https://github.com/ToniRajamaki/folio2/blob/main/public/assets/projects/UI_UX/sampo/7.png?raw=true",
    "https://github.com/ToniRajamaki/folio2/blob/main/public/assets/projects/UI_UX/sampo/8.png?raw=true",
    "https://github.com/ToniRajamaki/folio2/blob/main/public/assets/projects/UI_UX/sampo/2.png?raw=true"],
    category: ['ui/ux'],
    video: "/assets/movie.mp4",
    description:<>
    <h2>🎓 Sampo: Web Service for Uni students</h2>
    <p>In a three-person team, we created 'Sampo', a web service designed to boost study motivation and physical activity among students, focusing on community building and networking.</p>
    <br/>
    <h3>🔍 Problem Identification</h3>
    <p>Our goal was to create a service that benefits university students by combining education and physical activity, enhancing community spirit and networking.</p>
    <br/>
    <h3>⚙️ Key Features of Sampo</h3>
    <ul>
      <li><strong>Student Registration by Organizations:</strong> Allowing students to join subject communities or class groups.</li>
      <li><strong>Group Creation and Events:</strong> Enabling students to form groups, compete, or organize events like sports and academic challenges.</li>
      <li><strong>Community and Networking Focus:</strong> Enhancing community spirit within educational institutions.</li>
      <li><strong>Broad Accessibility:</strong> Open to external participants to widen community reach and impact.</li>
    </ul>
    <br/>
    <h3>🛠 Methods & Tools</h3>
    <ul>
      <li><strong>Service Design for University Students:</strong> Targeting the specific needs and interests of this group.</li>
      <li><strong>UI and Visual Design:</strong> Focusing on creating an intuitive and engaging user interface.</li>
      <li><strong>Miro whiteboard:</strong> Organizing resources, brainstorming and ideating different concepts.</li>
      
    </ul>
    <br/>
    <h3>🙋‍♂️ My Role in the Project</h3>
    <ul>
      <li><strong>Idea Brainstorming:</strong> Generating innovative concepts for the service.</li>
      <li><strong>UI and Visual Design:</strong> Leading the design aspects to create a visually appealing and user-friendly interface.</li>
      <li><strong>Project Management:</strong> Coordinating team efforts and managing project timelines.</li>
    </ul>
    <br/>
    <h3>📚 Key Learnings</h3>
    <ul>
      <li><strong>Combining Physical and Academic Activities:</strong> Understanding the benefits of integrating diverse activities in a student community.</li>
      <li><strong>Importance of Community in Education:</strong> Recognizing the role of community spirit in enhancing student motivation and networking.</li>
      <li><strong>Design for Engagement:</strong> Learning how effective UI/UX design can encourage participation and interaction in a web service.</li>
    </ul>
</>
,
    tags:["UI/UX Design","Interactive Design","Responsive","Service Design"],
    features:["Promoting Study motivation","Event Organazing","Community goals & hiscores"],
    demoURL:"https://www.figma.com/proto/NDfItwans8AxX29clPr0u9/HTI-2-Esiteht%C3%A4v%C3%A4-4-wf?node-id=25-1061&starting-point-node-id=25%3A1061&mode=design&t=VNNUXv6wLGFu5riv-1"
  },
  {
    id: 18,
    title: "LibreOffice Settings",
    images: ["https://github.com/ToniRajamaki/folio2/blob/main/public/assets/projects/UI_UX/libreoffice/thumbnail2.jpg?raw=true",
    "https://github.com/ToniRajamaki/folio2/blob/main/public/assets/projects/UI_UX/libreoffice/5.png?raw=true",
    "https://github.com/ToniRajamaki/folio2/blob/main/public/assets/projects/UI_UX/libreoffice/3.png?raw=true",
    "https://github.com/ToniRajamaki/folio2/blob/main/public/assets/projects/UI_UX/libreoffice/1.png?raw=true",
    "https://github.com/ToniRajamaki/folio2/blob/main/public/assets/projects/UI_UX/libreoffice/4.png?raw=true",
    "https://github.com/ToniRajamaki/folio2/blob/main/public/assets/projects/UI_UX/libreoffice/2.png?raw=true"],
    category: ['ui/ux'],
    video: "/assets/movie.mp4",
    description: <>
    <h2>📝 Redesigning LibreOffice Options Dialog</h2>
    <p>Our five-person team worked with one of the LibreOffice's creators to redesign its options dialog, focusing on enhancing user accessibility and simplifying the interface.</p>
    <br/>
    <h3>🔍 Problem Identification</h3>
    <p>We tackled the challenge of balancing the feature-rich design of LibreOffice with the need for simplicity, aiming to make it less overwhelming for novice users.</p>
    <br/>
    <h3>⚙️ Key Features of the Redesign</h3>
    <ul>
      <li><strong>User Research:</strong> Analyzing bug reports and conducting interviews to identify improvement areas.</li>
      <li><strong>Simplified Interface:</strong> Streamlining the menu to enhance user experience.</li>
      <li><strong>Figma Prototyping:</strong> Developing prototypes to visualize the new design.</li>
    </ul>
    <br/>
    <h3>🛠 Methods & Tools</h3>
    <ul>
      <li><strong>Affinity Diagramming:</strong> Organizing research findings to understand user needs better.</li>
      <li><strong>Collaborative Whiteboard Sessions:</strong> Engaging with The Document Foundation team for effective categorization and brainstorming.</li>
      <li><strong>Iterative Usability Testing:</strong> Refining the design based on feedback from various user groups.</li>
    </ul>
    <br/>
    <h3>🙋‍♂️ My Role in the Project</h3>
    <ul>
      <li><strong>Wireframing:</strong> Creating wireframes as foundational designs for the new interface.</li>
      <li><strong>Methodology Selection:</strong> Choosing the most effective research and design methodologies.</li>
      <li><strong>Active Participation in Whiteboard Sessions:</strong> Contributing significantly to brainstorming and ideation processes.</li>
      <li><strong>Usability Testing:</strong> Leading the usability testing and refining the process for better results.</li>
    </ul>
    <br/>
    <h3>📚 Key Learnings</h3>
    <ul>
      <li><strong>User-Centered Design in Open Source:</strong> Understanding the impact of user-focused design in open-source software.</li>
      <li><strong>Challenges of Diverse User Recruitment:</strong> Learning the importance of including various user groups in testing, despite recruitment challenges.</li>
      <li><strong>Effective Interface Simplification:</strong> Gaining insights into creating more accessible and user-friendly software interfaces.</li>
    </ul>
</>
,
    tags:["OpenSource project","UX/UI","User Research","Usability Testing"],
    features:["Enhanced accessibility","User-Friendly Navigation","Intuitive Design"],
    demoURL:""
  },
  {
    id: 20,
    title: "TOAS Heuristic evaluation",
    images: ["https://github.com/ToniRajamaki/folio2/blob/main/public/assets/projects/UI_UX/toas/thumbnail.png?raw=true",
    "https://github.com/ToniRajamaki/folio2/blob/main/public/assets/projects/UI_UX/toas/2.png?raw=true",
    "https://github.com/ToniRajamaki/folio2/blob/main/public/assets/projects/UI_UX/toas/5.png?raw=true",
    "https://github.com/ToniRajamaki/folio2/blob/main/public/assets/projects/UI_UX/toas/3.png?raw=true",
    "https://github.com/ToniRajamaki/folio2/blob/main/public/assets/projects/UI_UX/toas/7.png?raw=true",
    "https://github.com/ToniRajamaki/folio2/blob/main/public/assets/projects/UI_UX/toas/4.png?raw=true"],
    category: ['ui/ux'],
    video: "/assets/movie.mp4",
    description: <>
    <h2>🔍 Usability Assessment of TOAS Housing Website</h2>
    <p>Our five-member team conducted a comprehensive usability assessment of the TOAS housing foundation's website, focusing on the experience of young housing applicants under 25 years old.</p>
    <br/>
    <h3>👥 Problem Identification</h3>
    <p>We aimed to evaluate the website's usability for young users, identifying areas that could hinder their ability to find and apply for housing effectively.</p>
    <br/>
    <h3>⚙️ Key Features of the Assessment</h3>
    <ul>
      <li><strong>Remote Testing via Zoom:</strong> Involving four participants using both computers and a mobile device.</li>
      <li><strong>Task-Based Evaluation:</strong> Covering site navigation, information retrieval, property management, and application processes.</li>
      <li><strong>Severity Rating of Issues:</strong> Identifying and categorizing usability issues on a scale from critical to cosmetic.</li>
    </ul>
    <br/>
    <h3>🛠 Methods & Tools</h3>
    <ul>
      <li><strong>Heuristic Evaluation:</strong> Conducting an in-depth analysis of the website based on established usability principles.</li>
      <li><strong>Usability Testing:</strong> Performing tests to assess the ease of use and user experience of the website.</li>
      <li><strong>Documentation & Reporting:</strong> Thoroughly documenting findings and providing actionable insights to TOAS.</li>
    </ul>
    <br/>
    <h3>🙋‍♂️ My Role in the Project</h3>
    <ul>
      <li><strong>Extensive Heuristic Evaluation:</strong> Big part of detailed heuristic analysis of the website's user interface.</li>
      <li><strong>Usability Testing:</strong> Actively participating in conducting and refining the usability tests.</li>
      <li><strong>Reporting and Documentation:</strong> Preparing comprehensive reports of our findings and recommendations.</li>
    </ul>
    <br/>
    <h3>📚 Key Learnings</h3>
    <ul>
      <li><strong>Importance of User-Centric Design:</strong> Gained insights into the significance of designing with the user's perspective in mind.</li>
      <li><strong>Value of Thorough Testing:</strong> Learning the impact of comprehensive usability testing in identifying and resolving issues.</li>
      <li><strong>Teamwork and Diversity:</strong> Appreciating the strength of a diverse team in bringing different perspectives to a project.</li>
    </ul>
</>,
    tags:["Heuristic Evaluation","Usability Testing","UX  Testing"],
    features:["User-centric approach","Extensive heuristic evaluation","Usability Tested"],
    demoURL:""
  },
  {
    id: 19,
    title: "Feedback Engagement",
    images: ["https://github.com/ToniRajamaki/folio2/blob/main/public/assets/projects/UI_UX/feedback/6.png?raw=true",
    "https://github.com/ToniRajamaki/folio2/blob/main/public/assets/projects/UI_UX/feedback/thumbnail.gif?raw=true",
    "https://github.com/ToniRajamaki/folio2/blob/main/public/assets/projects/UI_UX/feedback/3.png?raw=true",
    "https://github.com/ToniRajamaki/folio2/blob/main/public/assets/projects/UI_UX/feedback/2.png?raw=true",
    "https://github.com/ToniRajamaki/folio2/blob/main/public/assets/projects/UI_UX/feedback/5.png?raw=true"],
    category: ['ui/ux'],
    video: "/assets/movie.mp4",
    description: <>
    <h2>🍴 Engaging Feedback System for Restaurants</h2>
    <p>Our four-person team worked on creating an online feedback system for restaurants, focusing on enhancing customer engagement and ensuring genuine reviews post-meal.</p>
    <br/>
    <h3>🔍 Problem Identification</h3>
    <p>We identified a gap in how restaurants collect feedback: Many lacked an effective system to gather honest opinions from customers on-site.</p>
    <br/>
    <h3>⚙️ Key Features</h3>
    <ul>
      <li><strong>Online Integration:</strong> A feedback system embedded in the restaurant's website for ease of access.</li>
      <li><strong>Choice of Survey Length:</strong> Offering customers the option to choose between short and long surveys, respecting their time and preference.</li>
      <li><strong>User-Centric Design:</strong> Ensuring the system is intuitive and user-friendly to encourage genuine feedback.</li>
      <li><strong>Incentivized Responses:</strong> Providing incentives to motivate thoughtful and honest reviews.</li>
    </ul>
    <br/>
    <h3>🛠 Methods & Tools</h3>
    <ul>
      <li><strong>Research on Existing Solutions:</strong> Analyzing available feedback systems and integrating the best features.</li>
      <li><strong>Human-Centered Approach:</strong> Designing with a focus on user experience and preferences.</li>
      <li><strong>Iterative Development:</strong> Continuously refining the system based on feedback and usability testing.</li>
    </ul>
    <br/>
    <h3>🙋‍♂️ My Role in the Project</h3>
    <ul>
      <li><strong>Idea Brainstorming:</strong> Generating creative solutions for the feedback system.</li>
      <li><strong>Rough Sketches:</strong> Visualizing initial ideas through basic sketches.</li>
      <li><strong>Project Management:</strong> Coordinating the team and overseeing project progress.</li>
      <li><strong>Refining Experience Goals:</strong> Focusing on enhancing the overall user experience of the system.</li>
    </ul>
    <br/>
    <h3>📚 Key Learnings</h3>
    <ul>
      <li><strong>Effective Feedback Collection:</strong> Understanding the nuances of designing systems that encourage honest feedback.</li>
      <li><strong>Importance of User Choice:</strong> Learning how providing options can improve user engagement.</li>
      <li><strong>Value of User-Centric Design:</strong> Recognizing the importance of designing with the end-user in mind for better product acceptance.</li>
    </ul>
</>
,
    tags:["Experience Driven Design","UI/UX","Interaction Design"],
    features:["Responsive Design","User-friendly interface","Minimalistic & Seamless"],
    demoURL:"https://www.figma.com/proto/vgWK2iVmD49yt4I1e3ycYY/Feedback-system-low-fi-ptototype-design?page-id=0%3A1&node-id=2-2&starting-point-node-id=2%3A2&t=NU0coJ3XJq3U5Qzw-1&mode=design"
  },
  {
    id: 21,
    title: "TALK HOME",
    images: ["https://github.com/ToniRajamaki/folio2/blob/main/public/assets/projects/UI_UX/home_assistant/thumbnail.jpg?raw=true",
    "https://github.com/ToniRajamaki/folio2/blob/main/public/assets/projects/UI_UX/home_assistant/1.png?raw=true",
    "https://github.com/ToniRajamaki/folio2/blob/main/public/assets/projects/UI_UX/home_assistant/4.png?raw=true",
    "https://github.com/ToniRajamaki/folio2/blob/main/public/assets/projects/UI_UX/home_assistant/5.png?raw=true",
    "https://github.com/ToniRajamaki/folio2/blob/main/public/assets/projects/UI_UX/home_assistant/6.png?raw=true",
    "https://github.com/ToniRajamaki/folio2/blob/main/public/assets/projects/UI_UX/home_assistant/8.png?raw=true",
    "https://github.com/ToniRajamaki/folio2/blob/main/public/assets/projects/UI_UX/home_assistant/3.png?raw=true"],
    category: ['ui/ux'],
    video: "/assets/movie.mp4",
    description: <>
    <h2>🔊 Futuristic AI Voice Assistant for Smart Homes</h2>
    <p>In a four-person team, we developed a <strong>futuristic smart voice assistant</strong> to enhance interaction with smart home devices, focusing on user customization and accessibility, especially for those with mobility impairments.</p>
    <br/>
    <h3>🔍 Problem Identification</h3>
    <p>Our goal was to go beyond existing speech command technologies, targeting home automation enthusiasts with a need for a more customizable and futuristic solution.</p>
    <br/>
    <h3>⚙️ Key Features</h3>
    <ul>
      <li><strong>Advanced Customization:</strong> Extensive user customization options for personalized experiences.</li>
      <li><strong>Accessibility Focus:</strong> Designed to improve user experience for individuals with mobility impairments.</li>
      <li><strong>Natural Language Processing:</strong> Intuitive controls through advanced speech recognition.</li>
      <li><strong>Integration with Smart Home Devices:</strong> Seamless connectivity with various smart home technologies.</li>
    </ul>
    <br/>
    <h3>🛠 Methods & Tools</h3>
    <ul>
      <li><strong>Extensive Background Research:</strong> Deep dive into existing solutions and potential improvements.</li>
      <li><strong>Iterative Design Process:</strong> Multiple rounds of presentations and refinements for optimal product design.</li>
      <li><strong>Low-Fidelity Mockups:</strong> Creation of basic mockups to visualize the assistant’s functionality.</li>
      <li><strong>Audio Demonstrations:</strong> Developing audio samples to showcase the assistant's capabilities.</li>
    </ul>
    <br/>
    <h3>🙋‍♂️ My Role in the Project</h3>
    <ul>
      <li><strong>Idea Brainstorming:</strong> Contributing creative concepts in the initial stages.</li>
      <li><strong>Interaction Design:</strong> Focusing on how users would interact with the voice assistant.</li>
      <li><strong>Background Research:</strong> Investigating existing technologies and user needs.</li>
      <li><strong>Audio Demo Creation:</strong> Crafting audio demonstrations for the assistant.</li>
    </ul>
    <br/>
    <h3>📚 Key Learnings</h3>
    <ul>
      <li><strong>Future-Oriented Design:</strong> The importance of designing for future needs and technologies.</li>
      <li><strong>Customization in Smart Technology:</strong> Understanding how personalization enhances user experience in home automation.</li>
      <li><strong>Accessibility in Design:</strong> Learning the significance of designing for users with diverse needs, especially in smart homes.</li>
    </ul>
</>,
    tags:["UI/UX","Product Design","Human-Centered Design"],
    features:["Speech Command Recognition","Highly customizable","Home automation"],
    demoURL:"https://drive.google.com/drive/folders/1IW9FSVE8lchmszNK4VcD8oQVYco8UkJv?usp=sharing"
  },
  {
    id: 22,
    title: "FitnessBPM",
    images: ["https://github.com/ToniRajamaki/folio2/blob/main/public/assets/projects/UI_UX/sports_app/thumbnail2.png?raw=true",
    "https://github.com/ToniRajamaki/folio2/blob/main/public/assets/projects/UI_UX/sports_app/1.png?raw=true",
    "https://github.com/ToniRajamaki/folio2/blob/main/public/assets/projects/UI_UX/sports_app/2.png?raw=true",
    "https://github.com/ToniRajamaki/folio2/blob/main/public/assets/projects/UI_UX/sports_app/7.png?raw=true",
    "https://github.com/ToniRajamaki/folio2/blob/main/public/assets/projects/UI_UX/sports_app/8.png?raw=true",
    "https://github.com/ToniRajamaki/folio2/blob/main/public/assets/projects/UI_UX/sports_app/9.png?raw=true",
    "https://github.com/ToniRajamaki/folio2/blob/main/public/assets/projects/UI_UX/sports_app/3.png?raw=true",
    "https://github.com/ToniRajamaki/folio2/blob/main/public/assets/projects/UI_UX/sports_app/4.png?raw=true",
    "https://github.com/ToniRajamaki/folio2/blob/main/public/assets/projects/UI_UX/sports_app/5.png?raw=true"],
    category: ['ui/ux'],
    video: "/assets/movie.mp4",
    description:<>
    <h2>📱 FitnessBPM: Gamified Fitness App</h2>
    <p><strong>FitnessBPM</strong> is an innovative project that tracks heartbeat rates and builds a gamified environment around that.</p>
    <br/>
    <h3>🔍 Problem Identification</h3>
    <p>The primary challenge addressed by <strong>FitnessBPM</strong> was to make fitness tracking more interactive and appealing to users. The project also required researching pragmatic hardware and software solutions.</p>
    <br/>
    <h3>⚙️ Key Features</h3>
    <ul>
      <li><strong>Custom Fitness Goals:</strong> Users can set various fitness targets.</li>
      <li><strong>Personalized Challenges:</strong> Offering tailored challenges and suggestions.</li>
      <li><strong>Gamification:</strong> Incorporating game-like elements for better user engagement.</li>
      <li><strong>Interactive UI:</strong> Designing a user-friendly and appealing interface.</li>
      <li><strong>Accessibility Features:</strong> Ensuring the app is accessible to a diverse user base.</li>
      <li><strong>Data Visualization:</strong> Creating engaging and informative data displays.</li>
    </ul>
    <br/>
    <h3>🛠 Methods & Tools</h3>
    <ul>
      <li><strong>Experience-Driven Design:</strong> Focused on creating an intuitive user experience, informed by user feedback and testing.</li>
      <li><strong>User Testing:</strong> Conducted extensive user testing sessions to refine the UX/UI elements.</li>
      <li><strong>Agile Project Management:</strong> Employed agile methodologies for efficient and adaptive project management.</li>
      <li><strong>Figma for Interactive Prototyping:</strong> Utilized Figma for rapid low-fidelity prototyping and iterating designs.</li>
    </ul>
    <br/>
    <h3>🙋‍♂️ My Role in the Project</h3>
    <ul>
      <li><strong>Interactive Design:</strong> Creating designs using Figma.</li>
      <li><strong>User Experience Testing:</strong> Conducting tests and gathering feedback for continuous improvement.</li>
      <li><strong>Prototyping:</strong> Developing interactive prototypes for user testing.</li>
      <li><strong>Project Management:</strong> Coordinating between different teams and managing timelines.</li>
    </ul>
    <br/>
    <h3>📚 Key Learnings</h3>
    <ul>
      <li><strong>Effective Gamification:</strong> The power of game elements in user engagement.</li>
      <li><strong>Iterative Design:</strong> The importance of ongoing improvements based on user feedback.</li>
      <li><strong>Community Building:</strong> Integrating social aspects into fitness tracking.</li>
    </ul>
</>
  ,
    tags:["Wireframing","Product Design","Interaction Design"],
    features:["Gamified sports app","Smart device integration","Promoting healthy lifestyle"],
    demoURL:"https://www.figma.com/proto/vM5s9GExMRFpzVYZAuMsd7/Innovation-course-WIreframes?page-id=0%3A1&type=design&node-id=1-4&viewport=547%2C-77%2C0.94&t=jsuyFro2DdxFAzsL-1&scaling=scale-down&starting-point-node-id=1%3A96&mode=design"
  },
  

];

export const projectsNav = [
  {
    name: "featured",
  },
  {
    name: 'UI/UX',
  },
  {
    name: "Web",
  },
  {
    name: "app",
  },
  {
    name: "other",
  },
  {
    name: "all",
  }
];

