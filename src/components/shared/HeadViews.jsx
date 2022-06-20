import React from 'react'
import {
    Row,
    Col,
  } from 'react-bootstrap';
export const HeadViews = ({title}) => {
  return (
    <Row>
        <Col>
            <h1>{title}</h1>
            <hr />
        </Col>
    </Row>
  )
}
