import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import Form from 'react-bootstrap/Form';


const Login = () => {

    const { providerLogin } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSign = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
    }
    return (
        <Container>
            <Row>
                <Col lg="10">

                    {/* login form start */}
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                    {/* login form end */}

                </Col>
                <Col lg="2">
                    <ButtonGroup vertical>
                        <Button onClick={handleGoogleSign} variant="outline-primary"><FaGoogle></FaGoogle> Log in with google</Button>
                        <Button variant="outline-dark"><FaGithub></FaGithub> Log in with github</Button>


                    </ButtonGroup>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;