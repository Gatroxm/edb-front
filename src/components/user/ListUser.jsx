import React, { useEffect } from 'react'
import { 
    deleteUserService,
    getUsersService
} from '../../selectors/userService'

import {
    Container,
    Row,
    Col,
    Table,
    Button,
    ButtonGroup
} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { HeadViews } from '../shared/HeadViews';
export const ListUser = () => {
    
    const navigate = useNavigate();
    const [users, setUsers] = React.useState([]) 
    useEffect(() => {
        if(localStorage.getItem("users")){
            localStorage.removeItem("users");
        }
        getUsersService().then(data => {
            if(data.data.ok){
                localStorage.setItem('users', JSON.stringify(data.data.users))
                setUsers(data.data.users)
            }
        })
    }, [])
    
    const handleClick = (id) => {
        deleteUserService(id).then(data => {
            if(data.data.ok){
                setUsers(users.filter(users => users.id !== id))
            }
        })
    }
    const handleRedirect = ( id, lugar ) => {
        switch (lugar) {
            case 'edit':
                navigate(`/user/edit/${id}`)
                break;
            case 'view':
                navigate(`/user/view/${id}`)
                break;
        
            default:
                alert('Petición Incorrecta')
                break;
        }
    }
  return (
    <>
        <Container>
            <HeadViews title="Lista de Usuarios" />
            <Row>
                <Col>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Nombre</th>
                                <th>Correo</th>
                                <th>Estado</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{user.nombre}</td>
                                    <td>{user.correo}</td>
                                    <td>{user.estado}</td>
                                    <td>
                                    <ButtonGroup aria-label="Basic example">
                                        <Button variant="danger" onClick={() => handleClick(user.id)}>Eliminar</Button>
                                        <Button variant="warning" onClick={() => handleRedirect(user.id, 'edit')}>Editar</Button>
                                        <Button variant="info" onClick={() => handleRedirect(user.id, 'view')}>Ver</Button>
                                    </ButtonGroup>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    </>
  )
}
