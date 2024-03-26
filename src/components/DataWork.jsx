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
  ],
    category: ["other"],
    video: "/assets/gym_mobile.mp4",
    description: <>
    <h2>🍲 Taste-enhancing AR/VR</h2>
    <p>Taste-enhancing AR/VR changes how food looks using AR (Augmented Reality). You can see these cool changes on any device with a camera, like VR glasses or phones. This was my project for my Bachelor's degree in Computer Science, and it's about exploring how what we see can change how we taste food.</p>
    <br/>
    <h3>🌟 Key Features</h3>
    <ul>
      <li><strong>Reading Data from ARuCo Markers:</strong> The app can understand special markers to create augmented reality effects.</li>
      <li><strong>Generating Augmented Content:</strong> It can make digital images appear in specific places in real-time.</li>
      <li><strong>Camera Calibration:</strong> Adjusting the camera for a more reliable and accurate AR experience.</li>
    </ul>
    <br/>
    <h3>💻 Technologies Used</h3>
    <ul>
      <li><strong>Unity and C#:</strong> Main tools for building the app, chosen for their power and because I wanted to get better at using them.</li>
      <li><strong>SourceTree for Version Control:</strong> Keeping track of changes and updates to the project easily.</li>
      <li><strong>Frameworks for Camera and Tags:</strong> Special software helping with camera settings and recognizing ARuCo tags.</li>
    </ul>
</>
,
    tags:["C#","VR","AR"],
    features:["Augment Food","Real-Time Application","Calibration & Testing"],
    codeURL: "https://github.com/ToniRajamaki/FoodAugmentationWithUnity",
    demoURL: "https://www.youtube.com/watch?v=sUQpsuETWJc&ab_channel=ToniRajam%C3%A4ki"
  },
  {
    id: 10,
    title: "Image Recognition",
    images: ["https://github.com/ToniRajamaki/folio2/blob/abf8282d6520d05917c332c64b8e702e58a94076/public/assets/projects/cifar10/cifar2.png?raw=true","https://github.com/ToniRajamaki/folio2/blob/main/public/assets/projects/cifar10/cifar1.jpg?raw=true"],
    category: ["other"],
    video: "/assets/gym_mobile.mp4",
    description: <>
    <h2>🖼️ Cifar10 Image Recognition</h2>
    <p>The 'Cifar10 Image Recognition' project can recognize images from the CIFAR-10 database. This was developed as part of a machine learning course at Tampere University. The main goal was to use Python, Keras, and TensorFlow to create a system that yields good results accurately and within a reasonable timeframe.</p>
    <br/>
    <h3>🌟 Key Features</h3>
    <ul>
      <li><strong>Semi-Good Accuracy:</strong> The classifier achieves respectable accuracy in image recognition.</li>
      <li><strong>Decent Speed:</strong> It processes images quickly.</li>
      <li><strong>Minimal Training Data Needed:</strong> Performs well without a large amount of training data.</li>
      <li><strong>Easy to Fine-Tune:</strong> The system is user-friendly and can be adjusted for better performance.</li>
    </ul>
    <br/>
    <h3>💻 Technologies Used</h3>
    <ul>
      <li><strong>Python:</strong> The primary programming language used.</li>
      <li><strong>Keras and TensorFlow:</strong> Employed for creating the image classification model.</li>
      <li><strong>Database Tools:</strong> Used for handling and managing the datasets.</li>
    </ul>
    <br/>
    <p><strong>Extra Info:</strong> This project was exciting, especially trying to fine-tune the classifier for better performance.</p>
</>
,
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
    description: <>
    <h2>💻 Modular React Creations</h2>
    <p>'Modular React Creations' is a collection of simple React projects I developed while learning React. This personal project was aimed at enhancing my basic front-end skills and was a fun journey.</p>
    <br/>
    <h3>🌟 Key Features</h3>
    <ul>
      <li><strong>Variety of Projects:</strong> Includes a range of projects, some focusing on reusable components, others on beautiful CSS design.</li>
      <li><strong>Focus on Front-End Development:</strong> Each project is crafted to improve specific aspects of front-end development.</li>
    </ul>
    <br/>
    <h3>💻 Technologies Used</h3>
    <ul>
      <li><strong>Modern JavaScript with Hooks:</strong> Utilizing the latest JavaScript features and React Hooks for component management.</li>
      <li><strong>React JS:</strong> Building projects with React to create dynamic user interfaces.</li>
      <li><strong>HTML & CSS:</strong> Applying fundamental web technologies for structure and styling.</li>
      <li><strong>Careful State Design:</strong> Thoughtful design of application states to ensure responsiveness and efficiency.</li>
    </ul>
    <br/>
    <p><strong>Extra Info:</strong> This project was a valuable practice in exploring and applying various React concepts and techniques.</p>
</>
,
    tags:["JavaScript","React","Redux"],
    features:["Lots Of Tiny Projects","Careful State Design","API","Axios"],
    codeURL: "https://github.com/ToniRajamaki?tab=repositories&q=&type=&language=javascript&sort=",
  },
  {
    id: 1,
    images: ["https://github.com/ToniRajamaki/folio2/blob/main/public/assets/projects/misc/portfolio2.png?raw=true"],
    title: "Portfolio Project",
    category: ["web","featured"],
    description:<>
    <h2>🌐 Interactive Personal Website</h2>
    <p>This is one of my latest works: a highly interactive personal website with a multitude of features. It’s designed to enhance the user experience with subtle animations and a simple layout, hopefully offering something interesting for every visitor. This project is continuously improved in my spare time, adding new features and refining existing ones.</p>
    <br/>
    <h3>🌟 Key Features</h3>
    <ul>
      <li><strong>Unobtrusive Animations:</strong> Adds charm to the browsing experience without being distracting.</li>
      <li><strong>Simple and Effective Layout:</strong> Easy navigation to help users find what they're looking for.</li>
      <li><strong>Continuous Improvement:</strong> Regularly updated with new features and optimizations.</li>
    </ul>
    <br/>
    <h3>💻 Technologies Used</h3>
    <ul>
      <li><strong>Modern JavaScript:</strong> Utilizing the latest features of JavaScript for dynamic functionality.</li>
      <li><strong>React:</strong> Building the website with React for an efficient, interactive user interface.</li>
      <li><strong>HTML & CSS:</strong> Using fundamental web technologies for a solid structure and aesthetic appeal.</li>
      <li><strong>Customized React Libraries:</strong> Enhancing the site with React libraries, tailored to fit the site’s unique style and needs.</li>
    </ul>
    <br/>
    <p><strong>Extra Info:</strong> This personal project is a fun endeavor where I experiment with new ideas and continuously push the boundaries of my web development skills.</p>
</>,

    tags:["JavaScript","React","UI/UX"],
    features:["Asymptotic Efficiecny","Optimized","Adaptive Algorithms"],
    codeURL:"https://github.com/ToniRajamaki/folio2",
    demoURL:"https://tonirajamaki.github.io/folio2/"
  },
  {
    id: 2,
    title: "Tetris++",
    images: ["https://github.com/ToniRajamaki/folio2/blob/main/public/assets/projects/misc/tetris.png?raw=true"],
    category: ["other"],
    video: "/assets/camping.mp4",
    description: <>
    <h2>🎮 C++ Tetris Rebirth via Qt Creator</h2>
    <p>This project is a creative reimagining of the classic Tetris game, developed using Qt Creator's GUI editor. It's a playful twist on Tetris, combined with the challenge of mastering the complexities of GUI development.</p>
    <br/>
    <h3>🌟 Key Features</h3>
    <ul>
      <li><strong>Classic Tetris Gameplay:</strong> Reviving the beloved game with a fresh perspective.</li>
      <li><strong>GUI Development Exploration:</strong> Navigating through the intricacies of Qt Creator's GUI editor, despite its initial complexity.</li>
    </ul>
    <br/>
    <h3>💻 Technologies Used</h3>
    <ul>
      <li><strong>C++:</strong> The main programming language used for the project.</li>
      <li><strong>Qt Creator's GUI Editor:</strong> Employed for developing the game's graphical interface, offering a unique learning experience.</li>
    </ul>
    <br/>
    <p><strong>Extra Info:</strong> As part of the Programming Structures course at Tampere University, this project was both fun and educational. It has inspired me to consider recreating it in a more robust environment like Unity, with the potential for further development.</p>
</>,
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
  description: <>
  <h2>🕹️ Major 3D Unity Platformer: Fuzu's Adventure at Git Gud Games</h2>
  <p>Join Fuzu the bird in a major 3D platformer project developed at Git Gud Games. Navigate through challenging obstacles, collect XP and Eggs to progress, and explore a world of optimized performance and immersive gameplay. This project draws some inspiration from the idea of a rogue-like 3D Flappy Bird.</p>
  <br/>
  <h3>🌟 Key Features</h3>
  <ul>
    <li><strong>Engaging Platformer Gameplay:</strong> Experience the thrill of guiding Fuzu through a series of challenging and entertaining levels.</li>
    <li><strong>XP and Egg Collection:</strong> Collect experience points and eggs to advance in the game and unlock new capabilities.</li>
    <li><strong>Inspired by Rogue-like Elements:</strong> Incorporating aspects of rogue-like games to enhance the fun and replayability.</li>
  </ul>
  <br/>
  <h3>💻 Technologies and Contributions</h3>
  <ul>
    <li><strong>Agile Development:</strong> Employing agile methodologies for efficient and rapid game development.</li>
    <li><strong>C# Programming:</strong> Crafting various game mechanics and ensuring optimal performance on diverse devices, including older Android phones.</li>
    <li><strong>UI Design:</strong> Creating user interfaces that enhance player interaction and experience.</li>
    <li><strong>Audio Design:</strong> Contributing to the audio aspects of the game, enriching the overall atmosphere and immersion.</li>
    <li><strong>Level design:</strong> Creating 3D game assets and developing randomnly generating gameworld with beautiful levels.</li>
    <li><strong>Ideation of Core Mechanics:</strong> Actively involved in brainstorming and defining the fundamental gameplay mechanics.</li>
  </ul>
  <br/>
  <p><strong>Extra Info:</strong> This project at Git Gud Games was a comprehensive endeavor, showcasing my versatility in game development.</p>
</>
,
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
    description: <>
    <h2>🌍 Resource-Driven Territory Simulator</h2>
    <p>Engage in a strategic battle of wits with this resource-driven territory simulator. Developed as a pair project for the Programming 3: API course at Tampere University, this game challenges players to tactically manage resources, engage in 'Pate's deals', and race to build a nuclear plant for victory.</p>
    <br/>
    <h3>🌟 Key Features</h3>
    <ul>
      <li><strong>Strategic Resource Management:</strong> Players must thoughtfully manage resources to outmaneuver their opponents.</li>
      <li><strong>Complex Gameplay Mechanics:</strong> Designed to challenge players' critical thinking and strategic planning.</li>
      <li><strong>Race to Victory:</strong> The ultimate goal is to construct a nuclear plant to claim victory over the territory.</li>
    </ul>
    <br/>
    <h3>💻 Development Experience</h3>
    <p>Collaborating closely, we developed the game using QtCreator and C++. Although initially challenging to navigate QtCreator's GUI system, we eventually mastered it to create an engaging gameplay experience.</p>
    <br/>
    <p><strong>Extra Info:</strong> This project was not only a fun learning experience but also a testament to our ability to create intricate gameplay mechanics and effective collaboration.</p>
</>
,
    tags:["C++","Pair Programming","GUI"],
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
    description: <>
    <h2>🎮 High-Performance Roguelike Turret Game at Git Gud Games</h2>
    <p>Crafted at Git Gud Games, this roguelike turret game combines high performance with stunning visuals. Players engage in thrilling battles against waves of enemies, upgrade with innovative enhancements, and experiment with an array of new weaponry. Developed in collaboration with Moonee.com, an Israeli mobile game publisher, this project was a substantial endeavor at Git Gud Games.</p>
    <br/>
    <h3>🌟 Key Features</h3>
    <ul>
      <li><strong>Engaging Enemy Waves:</strong> Battle against various foes in intense combat scenarios.</li>
      <li><strong>Innovative Upgrades:</strong> Enhance your turret with unique and powerful upgrades.</li>
      <li><strong>Diverse Weaponry:</strong> Wield a variety of weapons to defeat your enemies.</li>
    </ul>
    <br/>
    <h3>💻 My Contributions</h3>
    <ul>
      <li><strong>Core Gameplay Programming:</strong> Implementing fundamental gameplay elements to bring the game to life.</li>
      <li><strong>2D Asset Production:</strong> Creating a range of visual assets to enrich the game's aesthetic appeal.</li>
      <li><strong>Particle System Development:</strong> Designing various particle systems to enhance the game's visual effects.</li>
      <li><strong>Collaborative Testing and Development:</strong> Working alongside Moonee.com to ensure a polished and engaging gaming experience.</li>
    </ul>
    <br/>
    <p><strong>Extra Info:</strong> This project was an enjoyable and multifaceted challenge, allowing me to delve into different aspects of game development, from programming to asset creation.</p>
</>
,
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
    description:<>
    <h2>🍹 Juice Crafting Game at Git Gud Games</h2>
    <p>A creative project from Git Gud Games, where players immerse themselves in the art of crafting diverse juices. This game balances the complexity of navigating traps with the delight of creating unique juice blends. It's all about strategic finesse in the juice business. Developed through rapid iteration using agile methods, this project offered a fun and dynamic development experience.</p>
    <br/>
    <h3>🌟 Key Features</h3>
    <ul>
      <li><strong>Creative Juice Crafting:</strong> Combine various ingredients to create unique juice blends.</li>
      <li><strong>Navigating Traps:</strong> Overcome challenges and ensure your juice creations remain top-notch.</li>
      <li><strong>Strategic Gameplay:</strong> Employ clever strategies to succeed in the competitive juice business.</li>
    </ul>
    <br/>
    <h3>💻 My Contributions</h3>
    <ul>
      <li><strong>Gameplay Brainstorming:</strong> Ideating the core gameplay concept and hook to engage players.</li>
      <li><strong>Gameplay Programming:</strong> Developing key gameplay elements for a smooth and enjoyable experience.</li>
      <li><strong>Asset Creation:</strong> Producing both 3D and 2D assets to bring the game's visual world to life.</li>
      <li><strong>Animation and Particle Design:</strong> Crafting animations and particle effects to enhance the game's aesthetics.</li>
    </ul>
    <br/>
    <p><strong>Extra Info:</strong> Working on this juice crafting game was a delightful and engaging experience, allowing me to explore various aspects of game development from concept to execution.</p>
</>
,
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
    description: <>
    <h2>🔍 Optimized Data Handling in Algorithms and Data Structures</h2>
    <p>This project, part of the Algorithms and Data Structures programming course at Tampere University, focused on optimizing data handling using unordered_maps for efficient execution of frequent functions. The goal was to achieve O(N) insertion, removal, and Θ(1) search, with vectors used for less critical tasks due to their user-friendly nature.</p>
    <br/>
    <h3>🌟 Key Features</h3>
    <ul>
      <li><strong>Unordered_maps for Efficiency:</strong> Utilized to handle frequent functions efficiently, optimizing data processes.</li>
      <li><strong>Vectors for User-friendly Tasks:</strong> Employing vectors in areas where ease of use is a priority.</li>
    </ul>
    <br/>
    <h3>💻 Project Insights</h3>
    <p>This project was both challenging and intriguing. It was a crucial part of one of my favorite courses at the university, where I learned a lot about data structures and algorithms.</p>
    <br/>
    <p><strong>Extra Info:</strong> The course and this project significantly contributed to my understanding of efficient data management and algorithm optimization.</p>
</>
,
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
    description: <>
    <h2>📖 Ninja Blog: A Dynamic Blog Hub</h2>
    <p>'Ninja Blog' is a dynamic and interactive blog hub where users can dive into the world of ninja sagas and contribute their own stories. This project was crafted as a personal endeavor under the guidance of YouTube experts, serving as a stepping stone into the realm of web development.</p>
    <br/>
    <h3>🌟 Key Features</h3>
    <ul>
      <li><strong>Read and Write Blogs:</strong> Users can immerse themselves in ninja tales or share their own.</li>
      <li><strong>Responsive Design:</strong> The blog hub is designed to be accessible and visually appealing on various devices.</li>
    </ul>
    <br/>
    <h3>💻 Technologies and Learning Experience</h3>
    <p>This project was a fun learning experience, undertaken in my spare time to deepen my understanding of React JS and modern JavaScript hooks.</p>
    <br/>
    <p><strong>Extra Info:</strong> 'Ninja Blog' not only enhanced my web development skills but also provided a creative outlet to explore storytelling in the digital space.</p>
</>
,
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
    description: <>
    <h2>🚢 Suez Canal Incident-Inspired Clicker Game at Git Gud Games</h2>
    <p>Developed at Git Gud Games, this quick gem is a simple yet deep clicker game based on the real-life Suez Canal incident. Created using agile methods and rapid iteration, this project was an intense but exciting sprint into game development.</p>
    <br/>
    <h3>🌟 Key Features</h3>
    <ul>
      <li><strong>Randomized Animations and NPC Interactions:</strong> Keeping players engaged with varied and unexpected in-game events.</li>
      <li><strong>Vibrant Sounds:</strong> Enhancing the user experience with immersive audio.</li>
      <li><strong>Minimalistic Design:</strong> Offering a clean and straightforward user interface for easy gameplay.</li>
    </ul>
    <br/>
    <h3>💻 My Contributions</h3>
    <ul>
      <li><strong>Asset Creation:</strong> Developing visual elements to enrich the game's aesthetic.</li>
      <li><strong>Audio Setup:</strong> Implementing sound effects and background music for an immersive experience.</li>
      <li><strong>UX Refinements:</strong> Fine-tuning various aspects of the game to improve the overall user experience.</li>
    </ul>
    <br/>
    <p><strong>Extra Info:</strong> Being part of this project during a hectic sprint was a unique and enriching experience, contributing significantly to my understanding of fast-paced game development.</p>
</>
,
    tags:["C#","Unity","G3"],
    features:["Clicker Game","Trending","Immersive Audio design"],
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

