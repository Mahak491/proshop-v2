import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
function Footer() {
    const currentYear = new Date().getFullYear();
  return (
    <div>
      <Container>
        <Row>
            <Col className='text-center py-3'>
            <p>Proshop &copy; {currentYear}</p>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer
