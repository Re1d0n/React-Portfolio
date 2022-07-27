import { useState } from "react";
import "./App.css";
import image from "./images/IMG_7006.JPG";
import resume from "./images/Resume.JPG";

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          About Me
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}

>
          Resume
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >

          Projects
        </button>
        <button
          className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(4)}
        >
          Contact
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          
          <h2>Hello my name is Kaia Innes!</h2>
          <hr />
          <b>Web Developer</b>

          <img src={image} width={300} height={400}/>
          <p>
            Im from Grants Pass Oregon and some of my interests include reading, hiking and of course web development! Ive always had an interest in computers. I built my own pc about 3 years ago and found out about University of Oregons coding bootcamp and jumped at the opptunity to join.
          </p>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <h2>Resume</h2>
          <hr />
          <div>
          <img src={resume} width={300} height={400}/>
          </div>
        </div>
        
        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <h2>Here are some of my Projects</h2>
          <hr />
          
          <p>
            
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
            nostrum rerum laudantium totam unde adipisci incidunt modi alias!
            Accusamus in quia odit aspernatur provident et ad vel distinctio
            recusandae totam quidem repudiandae omnis veritatis nostrum
            laboriosam architecto optio rem, dignissimos voluptatum beatae
            aperiam voluptatem atque. Beatae rerum dolores sunt.
          </p>
        </div>
        <div
          className={toggleState === 4 ? "content  active-content" : "content"}
        >
          <h2>Content 4</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            voluptatum qui adipisci.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Tabs;