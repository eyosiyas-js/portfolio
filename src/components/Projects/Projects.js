import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ProjectCard from './ProjectCards'
import Particle from '../Particle'
import leaf from '../../Assets/app.png'
import emotion from '../../Assets/Projects/emotion.png'
import editor from '../../Assets/api.png'
import chatify from '../../Assets/Projects/chatify.png'
import suicide from '../../Assets/Projects/suicide.png'
import bitsOfCode from '../../Assets/piretor.png'

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: 'white' }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={
                'https://i.pinimg.com/originals/5b/1a/85/5b1a85f263210d027c58d76e7163dc86.png'
              }
              isBlog={false}
              title="TypeRacer"
              description="This project is a replica of the widely-known Typing Racer game, enabling concurrent gameplay for multiple users in real-time"
              ghLink="https://github.com/eyosiyas-js/typeracer"
              demoLink="#torpa"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Pirator"
              description="The Pirater is a comprehensive tool designed for remote access and control of target systems. It provides a wide range of features to facilitate various tasks and operations on the victim's machine. With Pirater, users can remotely manage files, execute commands, gather system information, and perform other actions seamlessly"
              ghLink="https://github.com/eyosiyas-js/Pireter"
              demoLink="#torpa"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Reserve"
              description="A Fully functional, slick UI, go-to mobile app for seamless hotel and event reservations made using React Native and Tailwind css"
              ghLink="https://github.com/eyosiyas-js/expo-peomax"
              demoLink="#torpa"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Full Ecommerce Backend"
              description="Full Ecommerce Backend project is a user-friendly and efficient system that integrates client, admin, and delivery management functionalities. It provides a seamless online shopping experience for customers while empowering store administrators to manage their operations effectively."
              ghLink="https://github.com/eyosiyas-js/Full-Ecommerce-Backend-"
              demoLink="#torpa"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects
