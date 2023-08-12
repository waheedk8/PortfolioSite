import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Videochat"
              description="Develop a personal real-time video chat app with Node.js, Socket.io, and WebRTC.
              Enable seamless, instant video communication through efficient Socket.io signaling.
              Utilize WebRTC for secure, peer-to-peer audio and video streaming, showcasing modern web development skills.."
              ghLink="https://github.com/waheedk8/videochat"
              demoLink="https://videochat-livid.vercel.app/"
            />
          </Col>

          <Col md={4} className="Weather-web">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Weatherweb"
              description="Explore personalized, real-time weather updates and forecasts through a visually intuitive interface. Effortlessly switch between locations and temperature units for a tailored weather experience."
              ghLink="https://github.com/waheedk8/weather-web"
              demoLink="https://weather-web-ruby.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="EliteWheel"
              description="dynamic adventure and sports bike rental website crafted with HTML, CSS, and Javascript. Immerse yourself in a world of excitement as you explore a diverse collection of high-performance bikes. With user-friendly interfaces and seamless interactions, my creation brings the joy of adventure right to your fingertips"
              ghLink="https://github.com/waheedk8/elitewheel"
              demoLink="http://elitewheels.surge.sh/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="CoffeeDapp"
              description=" DApp developed on Ethereum using Solidity, Hardhat, and Metamask. Immerse yourself in a world of transparent, tamper-proof operations executed by smart contracts. Seamlessly interact with blockchain technology, all wrapped in a user-friendly interface that empowers you to explore the potential of this groundbreaking innovation. Welcome to the realm where security, transparency, and innovation converge."
              ghLink="https://github.com/waheedk8/coffeedapp"
             // demoLink="https://plant49-ai.herokuapp.com/"//
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/waheedk8/AiForSocial"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Bmi calculator"
              description="BMI Calculator, meticulously crafted using Flutter and Dart. Seamlessly input your height and weight, and witness real-time BMI calculations along with insightful interpretations. With a sleek design and intuitive interface, our app empowers you to make informed decisions about your well-being, putting the power of health management in your hands."
              ghLink="https://github.com/waheedk8/BMI-calculator"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
