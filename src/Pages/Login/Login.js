import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub } from "react-icons/fa";


const Login = () => {
    return (
        <Container>
            <Row>
                <Col lg="10">
                    <h1>this is manual login</h1>
                </Col>
                <Col lg="2">
                    <ButtonGroup vertical>
                        <Button variant="outline-primary"><FaGoogle></FaGoogle> Log in with google</Button>
                        <Button variant="outline-dark"><FaGithub></FaGithub> Log in with github</Button>


                    </ButtonGroup>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;