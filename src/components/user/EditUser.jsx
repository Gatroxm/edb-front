import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { updateUserService } from '../../selectors/userService';
import {
  Container,
  Row,
  Col,
  Button,
  Form
} from 'react-bootstrap';
import { HeadViews } from '../shared/HeadViews';
export const EditUser = () => {
  const params = useParams();
  const navigate = useNavigate();
  const estados = ['Nuevo', 'No interesado', 'Número equivodado', 'Información Equivocada', 'Alto potencial', 'Bajo potencial'];
  let defaultValues = {
    nombre: "",
    apellido: "",
    correo: "",
    edad: "",
    estado: "",
    telefono: ""
  };
  const getData =() => {

    const users = JSON.parse(localStorage.getItem("users"));
    const userById = users.find(
      (resp) => resp.id === parseFloat(params.id)
    );
    return userById;
  }
  defaultValues = getData();
  const [formValues, handleInputChange] = useForm({
    nombre: defaultValues.nombre,
    apellido: defaultValues.apellido,
    correo: defaultValues.correo,
    edad: defaultValues.edad,
    estado: defaultValues.estado,
    telefono: defaultValues.telefono,
  });
  const { nombre, apellido, correo, edad, telefono, estado } = formValues;
  const handleEdit = (e) => {
    e.preventDefault();
    const user = {
      id: parseFloat(params.id),
      nombre,
      apellido,
      correo,
      edad,
      telefono,
      estado
    }
    updateUserService(user).then((data) => {
      if(data.data.ok){
        navigate("/user");
      }
    });
  }
  return (

    <Container>
      <HeadViews title="Editar Usuario" />
      <Row>
        <Col>
          <Form onSubmit={handleEdit}>
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
              Editar
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
