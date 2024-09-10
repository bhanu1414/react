import React from 'react'
import { Col, Row } from 'react-bootstrap'
import ColorInversionNavigation from '../utils/Sidebar'
import ReactVirtualizedTable from '../utils/Kg'

const Team = () => {
  return (
    <Row>
    <Col sm={3}>
    <ColorInversionNavigation/>
    </Col>
    <Col sm={9}>
    <ReactVirtualizedTable/>
    </Col>
</Row>
  )
}

export default Team
