import React from 'react'
import {
  Container,
  Row,
  Col
} from 'react-bootstrap';
import { HeadViews } from '../../components/shared/HeadViews';
export const Index = () => {
  return (
    <>
      <Container>
        <HeadViews title="App de Usuarios" />
        <Row>
          <Col>
            <a href="/user" className="btn btn-info text-white">Listado Deusuarios</a>
          </Col>
        </Row>
      </Container>
    </>
  )
}
