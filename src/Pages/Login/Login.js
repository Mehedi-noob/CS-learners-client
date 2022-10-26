import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import ManualLogin from '../ManualLogin/ManualLogin';


const Login = () => {

    const { providerLogin } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
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
                    <ManualLogin></ManualLogin>
                </Col>
                <Col lg="2">
                    <ButtonGroup vertical>
                        <Button onClick={handleGoogleSignIn} variant="outline-primary"><FaGoogle></FaGoogle> Log in with google</Button>
                        <Button variant="outline-dark"><FaGithub></FaGithub> Log in with github</Button>


                    </ButtonGroup>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;