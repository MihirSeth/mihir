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

import React, { useState, useEffect }from 'react';
// import Resume from '/Mihir_s_Resume.pdf';

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

  const processCommand = (command) => {
    switch (command) {
      case 'help':
        return <Help />;
      case 'clear':
        return null;
      case 'resume':
        return <Resume />;
      case 'education':
        return <Education />
      default:
        return <DefaultOutput />;
    }
  };

  return (
    <div className="bg-blue-950 min-h-screen w-full h-full">
      <header className="flex flex-col">
        <pre className="flex justify-center">  
          <code>{`
          ███╗   ███╗██╗██╗  ██╗██╗██████╗     ███████╗███████╗████████╗██╗  ██╗
          ████╗ ████║██║██║  ██║██║██╔══██╗    ██╔════╝██╔════╝╚══██╔══╝██║  ██║
          ██╔████╔██║██║███████║██║██████╔╝    ███████╗█████╗     ██║   ███████║
          ██║╚██╔╝██║██║██╔══██║██║██╔══██╗    ╚════██║██╔══╝     ██║   ██╔══██║
          ██║ ╚═╝ ██║██║██║  ██║██║██║  ██║    ███████║███████╗   ██║   ██║  ██║
          ╚═╝     ╚═╝╚═╝╚═╝  ╚═╝╚═╝╚═╝  ╚═╝    ╚══════╝╚══════╝   ╚═╝   ╚═╝  ╚═╝
                                                                                
          `} </code>
        </pre>
        <h1 className="font-fira pl-2 flex justify-center">Type 'help' to see a list of all the possible commands</h1>
      </header>
      <div className="flex flex-col justify-center pl-2 pt-5 w-1/3">
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
  );
}

function Terminal({ onChange, onKeyDown, value }) {
  return (
    <div className="flex flex-wrap">
      <h1 className="font-fira">mihirseth@portfolio ~ % </h1>
      <input
        type="text"
        onChange={onChange}
        onKeyDown={onKeyDown}
        value={value}
        className="bg-blue-950 focus:outline-none pl-1"
      />
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
      <h1>mihirseth@portfolio: education</h1>
      {/* <div className="flex flex-wrap"> */}
       <p>I did my high school at Pathways School Gurgaon in India, through the IB curriculum, and am currently studying Computer Engineering at the University of Waterloo</p>

      {/* </div> */}

    </div>
 

  )
}


function Help() {
  return (
    <div>
      <h1>mihirseth@portfolio: help</h1>
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
          <p className="font-fira">what are my skills</p>
        </div>

      {/* </div> */}

    </div>
 

  )
}

function Resume() {

  useEffect(() => {
    const openResumeInNewTab = () => {
      window.open('/Mihir_s_Resume.pdf', '_blank');
    };

    openResumeInNewTab(); // Open the PDF file when the component mounts

    // No cleanup needed for blob URL
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div>
      <p className="font-fira">mihirseth@portfolio ~ % my resume is being opened in a new tab</p>
      {/* You can include other content related to the resume if needed */}
    </div>
  );
};



function DefaultOutput() {
  return <div>mihirseth@portfolio: Command not recognized</div>;
}


