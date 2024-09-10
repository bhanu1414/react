import React from 'react'
import { Col, Row } from 'react-bootstrap'
import ColorInversionNavigation from '../utils/Sidebar'

const Contact = () => {
  return (
    <Row>
        <Col sm={3}>
        <ColorInversionNavigation/>
        </Col>
        <Col sm={9}>
        <div style={{ paddingLeft:'10%',width:'100%', }} className="container">
            <h2> Your Contact </h2>
           
                <div className='Contact' >
                <input type="text" placeholder="Your Name" required=""/><br />
                <input type="email" placeholder="Your Email" required=""/><br />
                <textarea placeholder="Your Message" required=""></textarea><br />
                <button type="submit">Send Message</button><br />
                </div>
            
        </div>
        </Col>
    </Row>
    
  )
}

export default Contact
