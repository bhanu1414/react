import React from 'react'
import { Link } from 'react-router-dom'
import Example from '../utils/Login'
import Examples from '../utils/Sign'
import { Row } from 'react-bootstrap'
import Col from 'react-bootstrap/Col'
const LoginPage = () => {
  return (
    <Row>
      <Col sm={10}>
      <img className='img' src="https://img.freepik.com/free-photo/stock-trading-workplace-background_1409-5545.jpg?t=st=1725617481~exp=1725621081~hmac=2971948360b793f65aa7c5672d60a6eee449a35253fdd8bf0c8eff97dfa92b70&w=1060" alt=" Business environment " />
      </Col>
      <Col className='enter' sm={2}>
      <Example/>
      <Examples/>
      
      </Col>
    </Row>
  )
}

export default LoginPage
