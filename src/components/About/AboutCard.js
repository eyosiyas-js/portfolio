import React from 'react'
import Card from 'react-bootstrap/Card'
import { ImPointRight } from 'react-icons/im'

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: 'justify' }}>
            Hi Everyone, I am <span className="purple">Eyosiyas Tefera </span>
            from <span className="purple"> Addis Ababa, Ethiopia.</span>
            <br />
            
            <br />
            Need someone to sprinkle a little magic on your code? Well, look no
            further because I'm the wizard you've been searching for! 🧙‍♂️ With my
            trusty keyboard ⌨️ and a cup of coffee ☕️, I'll debug your
            nightmares, fix your spaghetti code, and turn your tech
            troubles into tech triumphs! 💻✨
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Researching and Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: 'rgb(155 126 172)' }}>
            "int myQuality = (linesOfCode & (bugsFound - 1)) == 0;"{' '}
          </p>
          <footer className="blockquote-footer">Me</footer>
        </blockquote>
      </Card.Body>
    </Card>
  )
}

export default AboutCard
