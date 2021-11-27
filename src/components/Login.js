import React, { useState } from 'react';
import { Button, Col, Container, Form, Row, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getUserContext } from '../store';

export default function Login() {
  const dispatch = useDispatch();
  const { globalState } = useSelector((state) => state);

  const [user, setUser] = useState({
    email: globalState.email,
    password: globalState.first_name,
  });

  React.useEffect(() => {});

  return (
    <Container className='container-md'>
      <Row className='flex-column justify-content-center d-lg-flex align-items-center p-2'>
        <Col className='m-2 p-2 col-lg-5'>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              dispatch(
                getUserContext({
                  email: user.email,
                  first_name: user.password,
                })
              );

              setUser({ email: '', password: '' });
            }}>
            <p className='h3'>
              <u>Login</u>
            </p>

            <Form.Group className='mb-3' controlId='formBasicEmail1'>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                className='form-control-md '
                type='email'
                placeholder='Enter email'
                value={user.email}
                onChange={({ target }) =>
                  setUser({ ...user, email: target.value })
                }
              />
            </Form.Group>

            <Form.Group className='mb-3' controlId='formBasicPassword1'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                className='form-control-md '
                placeholder='Password'
                value={user.password}
                onChange={({ target }) =>
                  setUser({ ...user, password: target.value })
                }
              />
            </Form.Group>
            <Button variant='primary' className='form-control-md' type='submit'>
              Submit
            </Button>
          </Form>
        </Col>
        <Col className='m-2 p-2  mw-100 col-lg-5'>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Email</th>
                <th>Password</th>
                <th>Admin</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>michael.lawson@reqres.in</td>
                <td>Michael</td>
                <td>True</td>
              </tr>
              <tr>
                <td>2</td>
                <td>lindsay.ferguson@reqres.in</td>
                <td>Lindsay</td>
                <td>False</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}
