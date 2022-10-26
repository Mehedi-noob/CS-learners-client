import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import { FaKey, FaFilePdf } from "react-icons/fa";
import Pdf from "react-to-pdf";

const ref = React.createRef();



const CourseDemo = () => {
    const course = useLoaderData();
    return (
        <Container>
            <Row>
                <Col ref={ref} lg="10">
                    <div  className='container text-center'>
                        <small>This is demo version of course not premium</small>
                        <h1>{course.title}</h1>
                        <img className='img-fluid rounded mx-auto d-block border border-primary m-3 p-3' src={course.image} alt="" />
                        <p>◉ {course.details[0]}.....</p>
                        <Link to={`/courses/details/${course.id}`} ><Button variant="warning"><FaKey></FaKey> get premium version to unlock full content</Button></Link>
                    </div>
                </Col>
                <Col lg="2">
                    {/* pdf creation */}
                    <Pdf targetRef={ref} filename="code-example.pdf">
                        {({ toPdf }) => <Button variant="primary" onClick={toPdf}><FaFilePdf></FaFilePdf></Button>}
                    </Pdf>
                </Col>
            </Row>
        </Container>

    );
};

export default CourseDemo;