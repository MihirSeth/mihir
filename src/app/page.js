"use client"; // This is a client component 👈🏽

// import React, { useState } from 'react';

// export default function Home() {
//   const [command, setCommand] = useState('');
//   const [showHelp, setShowHelp] = useState(false);
//   // const [commandHistory, setCommandHistory] = useState([]);


//   const handleKeyChange = (e) => {
//     if (e.key === 'Enter') {
//       // setCommand(e.target.value);
//       // handleEnter();
//       console.log('Entered command:', command);
//       // const newCommandHistory = [...commandHistory, command];
//       // setCommandHistory(newCommandHistory);
//       if (command === 'help'){
       

//         setShowHelp(true);
//       }

//       }
  
//   };


//   return (
//     <body>
//     <div className="bg-blue-950 min-h-screen w-full h-full">
//       {/* <h1>hello</h1> */}
//       <div className="flex flex-col justify-center pl-2 pt-5">
//         {/* <h1>test</h1> */}
//         <Terminal 
//                 onKeyDown={handleKeyChange}
//                 onChange={e => setCommand(e.currentTarget.value)}
//                 // onEnter={handleEnter}
//                 value={command}
        
//         />
//           {showHelp && <Help commandHistory={commandHistory} setCommand={setCommand} />}

//         {/* <Terminal /> */}


//       </div>

//     </div>
//     </body>
//   )
// }

// function Terminal({onChange, onKeyDown, value }) {
//   return (
//     <div className="flex flex-wrap">
//       <h1>mihirseth@portfolio: </h1>
//       <input type="text" onChange={onChange} onKeyDown={onKeyDown} value={value} className="bg-blue-950 focus:outline-none pl-1"></input>
//     </div>
//   );
// }

// function Help({ command }) {
//   return (
//     <div>
//     <div className="flex flex-wrap">
//       <h1>rendered help options</h1>
//       {/* Render the Terminal component inside Help */}
//     </div>
//     <Terminal
//         onChange={() => {}}
//         onKeyDown={() => {}}
//         value={command}
//       />
//       {/* <CheckHome /> */}
//     </div>

//   );
// }
import { createServerContext } from 'react';
// 
import React, { useState, useEffect, useRef } from 'react';
// import Image from 'next/image'
// import Resume from '/Mihir_s_Resume.pdf';

// import { Fira_Code } from 'next/font/google';
// const inter = Fira_Code({ subsets: ['latin'] })


export default function Home() {
  const [command, setCommand] = useState('');
  const [commandHistory, setCommandHistory] = useState([]);

  const handleKeyChange = (e) => {
    if (e.key === 'Enter') {
      const trimmedCommand = command.trim().toLowerCase();
      const outputComponent = processCommand(trimmedCommand);
      setCommandHistory((prevHistory) => [
        ...prevHistory,
        { command: trimmedCommand, outputComponent },
      ]);
      setCommand('');
    }
  };

  // const commandInputRef = useRef(null); // Create a ref for the command input

  // useEffect(() => {
  //   // Automatically focus on the command input field when the component mounts
  //   if (commandInputRef.current) {
  //     commandInputRef.current.focus();
  //   }
  // }, []);

  const clear = () => {
    setCommandHistory([]); // Clear the command history
    setCommand('');
    // console.log('hello');
    // window.location.reload(false);
  };

  const processCommand = (command) => {
    switch (command) {
      case 'help':
        return <Help />;
      case 'resume':
        return <Resume />;
      case 'education':
        return <Education />
      case 'about':
        return <About />
      case 'skills':
        return <Skills />
      case 'projects':
        return <Projects />
      case 'experience':
        return <Experience />
      case 'contact':
        // console.log('hello');

        return <Contact />
      case 'clear':
        //  console.log('hello');
        //  document.location.reload();
        
        // window.location.reload();
          clear();
          return null;
          // return <Clear commandHistory = {setCommandHistory} commands = {commandHistory}/>
      default:
        return <DefaultOutput />;
    }
  };

  return (
    <body>
    <div  className="bg-[#30475E] min-h-screen w-full h-full border-2 border-solid border-orange-500 pt-2">
      <header className="flex flex-col">
        <h1 className="font-fira pl-5"><span className='text-orange-500'>visitor@mihirseth:$ ~</span> welcome</h1>
        <pre className="flex overflow-hidden pl-5 test-xs" >  

          <code>{`
███╗   ███╗██╗██╗  ██╗██╗██████╗     ███████╗███████╗████████╗██╗  ██╗
████╗ ████║██║██║  ██║██║██╔══██╗    ██╔════╝██╔════╝╚══██╔══╝██║  ██║
██╔████╔██║██║███████║██║██████╔╝    ███████╗█████╗     ██║   ███████║
██║╚██╔╝██║██║██╔══██║██║██╔══██╗    ╚════██║██╔══╝     ██║   ██╔══██║
██║ ╚═╝ ██║██║██║  ██║██║██║  ██║    ███████║███████╗   ██║   ██║  ██║
╚═╝     ╚═╝╚═╝╚═╝  ╚═╝╚═╝╚═╝  ╚═╝    ╚══════╝╚══════╝   ╚═╝   ╚═╝  ╚═╝                                                                     
          `} </code>
        </pre>

        {/* <Image fill={true} src={'/bob.svg'} /> */}
        <h1 className="font-fira pl-5">Type &apos;help&apos; to see a list of all the possible commands</h1>
      </header>
      <div className="flex flex-col justify-center pl-5 pt-5 md:w-1/3 sm:w-2/3">
        {/* Render command history */}
        <CommandHistory history={commandHistory} />
        {/* Render Terminal component */}
        <Terminal
          onKeyDown={handleKeyChange}
          onChange={(e) => setCommand(e.currentTarget.value)}
          value={command}
        />
      </div>
    </div>
    </body>
  );
}

function Terminal({ onChange, onKeyDown, value }) {
  return (
    <div className="flex flex-wrap">
      <h1 className="font-fira text-orange-500 ">visitor@mihirseth:$ ~ <input
        type="text"
        onChange={onChange}
        onKeyDown={onKeyDown}
        value={value}
        className="bg-[#30475E] text-white focus:outline-none"
        autoFocus={true}
      /></h1>
  
    </div>
  );
}

function CommandHistory({ history }) {
  return (
    <div className="flex flex-col mt-2">
      {/* <h1>mihirseth@portfolio: Command History</h1> */}
      {history.map((entry, index) => (
        <div key={index} className="font-fira mt-2">
          {entry.outputComponent}
        </div>
      ))}
    </div>
  );
}

function Education() {
  return (
    <div>
      {/* <h1>visitor@mihirseth:$ ~  education</h1> */}
      <p className="font-fira"><span className='text-orange-500'>visitor@mihirseth:$ ~</span> education</p>

      {/* <div className="flex flex-wrap"> */}
       <p>I did my high school at Pathways School Gurgaon in India, through the IB curriculum, and am currently studying Computer Engineering at the University of Waterloo</p>

      {/* </div> */}

    </div>
 

  )
}


function Help() {
  return (
    <div>
      <h1 className="font-fira"><span className='text-orange-500'>visitor@mihirseth:$ ~</span> help</h1>
      {/* <div className="flex flex-wrap"> */}
        <div className="flex justify-between">
          <p className="font-fira">about</p>
          <p className="font-fira">about me</p>
        </div>
        <div className="flex justify-between">
          <p className="font-fira">education</p>
          <p className="font-fira">my education</p>
        </div>
        <div className="flex justify-between">
          <p className="font-fira">skills</p>
          <p className="font-fira">what are my technical skills</p>
        </div>
        <div className="flex justify-between">
          <p className="font-fira">resume</p>
          <p className="font-fira">my resume</p>
        </div>
        <div className="flex justify-between">
          <p className="font-fira">projects</p>
          <p className="font-fira">list of my projects</p>
        </div>
        <div className="flex justify-between">
          <p className="font-fira">experience</p>
          <p className="font-fira">my experience</p>
        </div>
        <div className="flex justify-between">
          <p className="font-fira">contact</p>
          <p className="font-fira">how to contact me</p>
        </div>
        <div className="flex justify-between">
          <p className="font-fira">clear</p>
          <p className="font-fira">clear the whole page</p>
        </div>

      {/* </div> */}

    </div>

  )
}

function Resume() {

  useEffect(() => {
    const openResumeInNewTab = () => {
      window.open('https://drive.google.com/file/d/1PpPuyifjRw4CAUP5PzDDAHJnj_3l_g6V/view?usp=sharing', '_blank');
    };

    openResumeInNewTab(); // Open the PDF file when the component mounts

    // No cleanup needed for blob URL
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div>
      <p className="font-fira"><span className='text-orange-500'>visitor@mihirseth:$ ~</span> my resume is being opened in a new tab</p>
      {/* You can include other content related to the resume if needed */}
    </div>
  );
};



function DefaultOutput() {
  return <div>
    <p1 className="font-fira"><span className='text-orange-500'>visitor@mihirseth:$ ~</span> Command not recognized</p1>
    </div>;
}


function About(){
  return(
    <div>
      <h1 className="font-fira"><span className='text-orange-500'>visitor@mihirseth:$ ~</span> about</h1>

      <p className="font-fira">
      My name is Mihir. I am 19 and an aspiring Computer Engineer.
      </p>

      <p className="font-fira pt-2">

      I was 15 when I wrote my first Hello World program, and eventually made an app using Flutter to help my grandmother keep track off her medicines. Slowly after that I delved into Web Development using React JS and am currently learning TypeScript, Tailwind and Next JS. Apart from that I am also exploring PyTorch, Tensorflow, and Embedded Systems. At university, I am helping to make a formula electric car.
      </p>
      <p className="font-fira pt-2">

        When not coding, you&apos;ll catch me either reading a book, watching a sport, sleeping or crying over University Work. I occasionally also drift into endless thought while staring at the night sky.
      </p>

    </div>
  )
}

function Skills(){
  return(
    <div>
      <h1 className="font-fira"><span className='text-orange-500'>visitor@mihirseth:$ ~</span> skills</h1>

      <p className="font-fira">
        <span className='font-bold'>languages:</span> JavaScript, Python, HTML/CSS, Dart, C/C++, Ruby
        <br/><span className='font-bold'>frameworks: </span> React JS, Node JS, Flutter, Next JS, React, Flask, Django, Ruby on Rails
        <br/><span className='font-bold'>developer tools: </span> Git, VS Code, Android Studio, Firebase/Firestore, Raspberry Pi, STM 32
        <br/><span className='font-bold'>libraries: </span> NumPy, OpenCV, PyTorch, Tailwind, Tensorflow, Pandas, YOLO, pytesseract, Docker, Rspec, Langchain
      </p>
    </div>
  )
}

function Projects(){
  return(
    <div>
      <h1 className="font-fira"><span className='text-orange-500'>visitor@mihirseth:$ ~</span> projects</h1>

      <p className="font-fira">
        <br/><span className='font-bold'>sous-chef - Python, JavaScript, Next JS, OpenCV, Flask, Pandas, Docker, PyTorch</span>
        {/* <br/><span className='font-bold'>developer tools: </span> Git, VS Code, Android Studio, Firebase/Firestore, Raspberry Pi, STM 32 Libraries: NumPy, pytesseract, OpenCV */}
        <br /> Created a full stack website using Next JS that recommends recipes based on photos of ingredients taken by the user, enhancing convenience and reducing food waste.
      </p>

      <p className="font-fira">
        <br/><span className='font-bold'>Sign Language Detection - PyTorch, Python, OpenCV, MediaPipe</span>
        {/* <br/><span className='font-bold'>developer tools: </span> Git, VS Code, Android Studio, Firebase/Firestore, Raspberry Pi, STM 32 Libraries: NumPy, pytesseract, OpenCV */}
        <br /> Used PyTorch along with OpenCV to develop a Deep Learning Algorithm which can detect ASL, this allows Deaf and the Mute, to converse over the internet on Video Calls amongst other advantages
      </p>

      <p className="font-fira">
        <br/><span className='font-bold'>Helpinhands - JavaScript, React JS, Firebase, Firestore, HTML/CSS</span>
        {/* <br/><span className='font-bold'>developer tools: </span> Git, VS Code, Android Studio, Firebase/Firestore, Raspberry Pi, STM 32 Libraries: NumPy, pytesseract, OpenCV */}
        <br /> I created a donation website tailored for small and mid-sized NGOs, utilizing React JS for the frontend and Firebase for the backend. The platform successfully onboarded two mid-tier NGOs and welcomed 500 users. Hosting on Firebase ensures a seamless online experience, fostering efficient collaboration between donors and NGOs, facilitating non-monetary contributions for impactful causes.
      </p>

      <p className="font-fira">
        <br/><span className='font-bold'>MediRemi - Flutter, Dart, Firebase</span>
        {/* <br/><span className='font-bold'>developer tools: </span> Git, VS Code, Android Studio, Firebase/Firestore, Raspberry Pi, STM 32 Libraries: NumPy, pytesseract, OpenCV */}
        <br /> I designed a healthcare app aimed at providing users with timely reminders for medications and doctor appointments. Employing Flutter for the frontend and Firebase for the backend, I developed a comprehensive mobile application. The app seamlessly delivers periodic reminders, enhancing user adherence to healthcare routines. Additionally, I successfully published the app on the Google Play Store, making it readily accessible to a wide audience and contributing to improved health management for users.
      </p>
      <p className="font-fira">
        <br/><span className='font-bold'>Bloom - ReactJS, Firestore, HTML/CSS, Firebase</span>
        {/* <br/><span className='font-bold'>developer tools: </span> Git, VS Code, Android Studio, Firebase/Firestore, Raspberry Pi, STM 32 Libraries: NumPy, pytesseract, OpenCV */}
        <br /> I attended UofT Hacks, where I created a mental health website during COVID using React JS with fellow participants from across the globe, facilitating emotion management and providing users with basic psychotherapeutic guidance; added data authentication, queries and React Hooks.
      </p>
    </div>
  )
}


function Experience(){
  return(
    <div>
      <h1 className="font-fira"><span className='text-orange-500'>visitor@mihirseth:$ ~</span> experience</h1>
      <p className="font-fira">
        <br/><span className='font-bold'>Software Development Engineer, Intern - Razorpay</span>
        {/* <br/><span className='font-bold'>developer tools: </span> Git, VS Code, Android Studio, Firebase/Firestore, Raspberry Pi, STM 32 Libraries: NumPy, pytesseract, OpenCV */}
        <br /> Successfully increased unit test coverage from 15% to 60% on the payments application using Ruby, Rspec, and Ruby on Rails, significantly improving code reliability and quality. Utilized Ruby and Go to analyze and resolve frequent API errors, leading to a reduction of about 40\% in system alerts noise and improved monitoring efficiency. Developed comprehensive metrics for various aspects of the applications using Ruby and Ruby on Rails, and implementing them using Prometheus and Grafana, enabling detailed performance tracking and  issue resolution. Spearheaded the transition of exiting SMS and Email Services from external services like Gupshup to an internal service.
        {/* <br/><span className='font-bold'>developer tools: </span> Git, VS Code, Android Studio, Firebase/Firestore, Raspberry Pi, STM 32 Libraries: NumPy, pytesseract, OpenCV */}
      </p>
      <p className="font-fira">
        <br/><span className='font-bold'>Software Internship - Dotpe</span>
        {/* <br/><span className='font-bold'>developer tools: </span> Git, VS Code, Android Studio, Firebase/Firestore, Raspberry Pi, STM 32 Libraries: NumPy, pytesseract, OpenCV */}
        {/* <br/><span className='font-bold'>developer tools: </span> Git, VS Code, Android Studio, Firebase/Firestore, Raspberry Pi, STM 32 Libraries: NumPy, pytesseract, OpenCV */}
        <br /> Used image manipulation and OCR to authenticate and record the customers government identifier (passport, social security card, tax card etc.) while employing Python with specific tools like pytesseract, cv2, NumPy, among other tools
      </p>

      <p className="font-fira">
        <br/><span className='font-bold'>UW Formula Electric - Firmware Team Member</span>
        {/* <br/><span className='font-bold'>developer tools: </span> Git, VS Code, Android Studio, Firebase/Firestore, Raspberry Pi, STM 32 Libraries: NumPy, pytesseract, OpenCV */}
        <br /> As a member of the firmware team, I honed my skills in working with embedded systems using C. This experience deepened my understanding of software-system integration in large, complex projects, incorporating electrical, mechanical, and other components. Additionally, I actively contributed to the development and execution of multiple tests, assessing system reliability and gaining valuable insights into the intricacies of the underlying code.
      </p>

      <p className="font-fira">
        <br/><span className='font-bold'>Ideated and implemented an Annual Hackathon - Pathways School Gurgaon</span>
        {/* <br/><span className='font-bold'>developer tools: </span> Git, VS Code, Android Studio, Firebase/Firestore, Raspberry Pi, STM 32 Libraries: NumPy, pytesseract, OpenCV */}
        <br /> Ideated, created and successfully pitched to the faculty to integrate hackathon and film-making into an inter-school event hosted by my school . Orchestrated the event by crafting the plan, coordinating invitations and skilfully delegating responsibilities, resulting in participation of over 15 schools and more than 100 students. Additionally, played a significant role in the post event magazine curation.
      </p>

    </div>
  )
}



function Contact() {
  return (
    <div>
      <h1 className="font-fira"><span className='text-orange-500'>visitor@mihirseth:$ ~</span> contact</h1>
      {/* <div className="flex flex-wrap"> */}
        <div className="flex justify-between">
          <p className="font-fira">github</p>
          <a href="https://github.com/MihirSeth" target='_blank' className="font-fira text-orange-500 underline">mihirseth</a>
        </div>
        <div className="flex justify-between">
          <p className="font-fira">email</p>
          <a href="mailto:mihirseth2005@gmail.com" target='_blank' className="font-fira text-orange-500 underline">mihirseth2005@gmail.com</a>
        </div>
        <div className="flex justify-between">
          <p className="font-fira">linkedin</p>
          <a href="https://linkedin.com/in/mihirseth" target='_blank' className="font-fira text-orange-500 underline">mihirseth</a>
        </div>
        <div className="flex justify-between">
          <p className="font-fira">ece webring</p>
          <a href="https://ece.engineering" target='_blank' className="font-fira text-orange-500 underline">ece webring</a>
        </div>
        {/* <div className="flex justify-between">
          <p className="font-fira">resume</p>
          <p className="font-fira">my resume</p>
        </div> */}

    </div>

  )
}


// function Clear(setCommandHistory, commands){
//   window.location.reload();

//   // You can also use other ways to navigate to a different page or handle the 'contact' logic
//   // For example, you might want to use React Router or update the state to render a different component
//   return (
//     <div>
//       {/* Content for the Contact page */}
//     </div>
//   );
// };