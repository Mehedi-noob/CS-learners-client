import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';


const Courses = () => {
    return (
        <Container>
            <Row>
                <Col lg="10">
                    <Outlet>
                        <h1>the main course column</h1>
                    </Outlet>
                </Col>
                <Col lg="2">
                    <h1>right column</h1>
                </Col>
            </Row>
        </Container>
    );
};

export default Courses;