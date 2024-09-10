import React from 'react'
import { Row } from 'react-bootstrap' 
import Col from 'react-bootstrap/Col'
import ColorInversionNavigation from '../utils/Sidebar'
import BarAnimation from '../utils/graphs'
import Card from 'react-bootstrap/Card';
import PieChart from '../utils/Piechat'
import SparkLineChart from '../utils/SparkLine'
const Dashboard = () => {
  return (
    <div>
      <Row>
        <Col sm={4}>
        <ColorInversionNavigation/>
        </Col>
        <Col sm={8} className='dark'>
        <div style={{ display: 'flex' }}>
    <Card style={{ width: '25rem', boxShadow: 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px' }}>
      <Card.Body>
      <BarAnimation/>
      </Card.Body>
    </Card>
    <Card style={{ width: '25rem', boxShadow: 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px' , }} >
      <Card.Body>
          <PieChart/>
      </Card.Body>
      </Card>
    </div>
    <Card >
      <Card.Body>
          <SparkLineChart/>
      </Card.Body>
    </Card>
        </Col>
      </Row>
     
    </div>
  )
}

export default Dashboard
