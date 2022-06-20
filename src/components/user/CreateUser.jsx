import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { createUserService } from "../../selectors/userService";
import {
  Container,
  Row,
  Col,
  Button,
  Form
} from 'react-bootstrap';
import { HeadViews } from "../shared/HeadViews";
export const CreateUser = () => {
  const navigate = useNavigate();
  const [formValues, handleInputChange] = useForm({
    nombre: "",
    apellido: "",
    correo: "",
    edad: "",
    estado: "",
    telefono: ""
  });
  const estados = ['Nuevo', 'No interesado', 'Número equivodado', 'Información Equivocada', 'Alto potencial', 'Bajo potencial'];
  const { nombre, apellido, correo, edad, telefono, estado } = formValues;
  const handleCreate = (e) => {
    e.preventDefault();
    console.log(formValues)
    createUserService(formValues).then((data) => {
      if(data.data.ok){
        navigate("/user");
      }
    });
  }
  return (
    <Container>
      <HeadViews title="Crear Usuario" />
      <Row>
        <Col>
          <Form onSubmit={handleCreate}>
            <Form.Group className="mb-3">
              <Row>
                <Col>
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control
                    type="text"
                    name="nombre"
                    value={nombre}
                    onChange={handleInputChange}
                    placeholder="Nombre"
                  />
                </Col>
                <Col>
                  <Form.Label>Apellido</Form.Label>
                  <Form.Control
                    type="text"
                    name="apellido"
                    value={apellido}
                    onChange={handleInputChange}
                    placeholder="Apellido"
                  />
                </Col>
              </Row>
            </Form.Group>
            <Form.Group className="mb-3">
              <Row>
                <Col>
                  <Form.Label>Correo</Form.Label>
                  <Form.Control
                    type="text"
                    name="correo"
                    value={correo}
                    onChange={handleInputChange}
                    placeholder="Correo"
                  />
                </Col>
                <Col>
                  <Form.Label>Edad</Form.Label>
                  <Form.Control
                    type="number"
                    name="edad"
                    value={edad}
                    onChange={handleInputChange}
                    placeholder="Edad"
                  />
                </Col>
              </Row>
            </Form.Group>
            <Form.Group className="mb-3">
              <Row>
                <Col>
                  <Form.Label>Estado</Form.Label>
                  <Form.Select 
                    name="estado"
                    value={estado}
                    onChange={handleInputChange}>
                      <option value="">Seleccione un estado</option>
                    {estados.map((estado, index) => (
                      <option key={index} value={estado}>{estado}</option>
                    ))}
                  </Form.Select>
                </Col>
                <Col>
                  <Form.Label>Telefono</Form.Label>
                  <Form.Control
                    type="text"
                    name="telefono"
                    value={telefono}
                    onChange={handleInputChange}
                    placeholder="Telefono"
                  />
                </Col>
              </Row>
            </Form.Group>
            <Button variant="primary" type="submit">
              Guardar
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
