import React from 'react'
import { Col, Row } from 'react-bootstrap'
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
  SiJenkins,
  SiJira,
  SiUbuntu
} from 'react-icons/si'

function Toolstack() {
  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiUbuntu />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJenkins />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJira />
      </Col>
    </Row>
  )
}

export default Toolstack
