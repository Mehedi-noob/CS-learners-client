import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import RightNav from '../../Pages/RightNav/RightNav';

const Courses = () => {
    return (
        <Container>
            <Row>
                <Col lg="10">
                    <Outlet>
                        <h1>this is main courses</h1>
                    </Outlet>
                </Col>
                <Col lg="2">
                    <RightNav></RightNav>
                </Col>
            </Row>
        </Container>
    );
};

export default Courses;