import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getUserByIdService } from "../../selectors/userService";
import {
  Container,
  Row,
  Col,
  ListGroup
} from 'react-bootstrap';
import { HeadViews } from "../shared/HeadViews";
export const ViewUser = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({})
  useEffect(() => {
    getUserByIdService(parseFloat(params.id)).then((data) => {
      if (data.data.ok) {
        setUser(data.data.user)
      }
    });
  },[])

  return (
    <>
      <Container>
        <HeadViews title="Detalle de Usuario" />
        <Row>
          <Col>
            <ListGroup>
              <ListGroup.Item>
                <b>Nombre:</b> {user.nombre}  {user.apellido}
              </ListGroup.Item>
              <ListGroup.Item>
                <b>Correo:</b> {user.correo}
              </ListGroup.Item>
              <ListGroup.Item>
                <b>Edad:</b> {user.edad}
              </ListGroup.Item>
              <ListGroup.Item>
                <b>Estado:</b> {user.estado}
              </ListGroup.Item>
              <ListGroup.Item>
                <b>Telefono:</b> {user.telefono}
              </ListGroup.Item>
              <ListGroup.Item>
                <b>Fecha Creación:</b> {user.createdAt}
              </ListGroup.Item>
              <ListGroup.Item>
                <b>Fecha de Actualización:</b> {user.updatedAt}
              </ListGroup.Item>

            </ListGroup>
          </Col>
        </Row>
      </Container>
    </>
  );
};
