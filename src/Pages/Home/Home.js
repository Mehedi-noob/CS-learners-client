import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <Container className='bg-keyboard'>
            <Row>
                <Col lg="6">
                    <div className='m-5 p-5 border border-danger rounded-5'>
                        <h1>Learn CS</h1>
                        <p>Computer science is the study of computation, automation, and information.[1] Computer science spans theoretical disciplines (such as algorithms, theory of computation, information theory, and automation) to practical disciplines (including the design and implementation of hardware and software).[2][3][4] Computer science is generally considered an area of academic research and distinct from computer programming.[5]

                            Algorithms and data structures are central to computer science.[6] The theory of computation concerns abstract models of computation and general classes of problems that can be solved using them. The fields of cryptography and computer security involve studying the means for secure communication and for preventing security vulnerabilities. Computer graphics and computational geometry address the generation of images. Programming language theory considers different ways to describe computational processes, and database theory concerns the management of repositories of data. Human–computer interaction investigates the interfaces through which humans and computers interact, and software engineering focuses on the design and principles behind developing software. Areas such as operating systems, networks and embedded systems investigate the principles and design behind complex systems. Computer architecture describes the construction of computer components and computer-operated equipment. Artificial intelligence and machine learning aim to synthesize goal-orientated processes such as problem-solving, decision-making, environmental adaptation, planning and learning found in humans and animals. Within artificial intelligence, computer vision aims to understand and process image and video data, while natural language processing aims to understand and process textual and linguistic data.

                            The fundamental concern of computer science is determining what can and cannot be automated.[7][8][9][10][11] The Turing Award is generally recognized as the highest distinction in computer science.[12][13]</p>
                    </div>
                </Col>
                <Col lg="6">
                    <Row>
                        <Col lg="12">
                            <div className='m-5 p-5 border border-primary rounded-5'>
                                <h1>Explore the sublimity</h1>
                                <p>explore the world of computer science</p>
                            </div>
                        </Col>
                        <Col lg="12">
                            <div className='m-5 p-5 border border-primary rounded-5'>
                                <h1>Swim in the endless</h1>
                                <p>explore the world of computer science</p>
                            </div>
                        </Col>
                        <Col lg="12">
                            <Row>
                                <Col lg="6">
                                    <div className='border border-primary rounded-5'>
                                        <Image fluid rounded src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Mandelpart2_red.png/1280px-Mandelpart2_red.png'></Image>
                                    </div>
                                </Col>
                                <Col lg="6" className='align-items-center'>
                                    <h3>Because the complexity is greater than you and me. with a world of possibilities</h3>
                                    <h3>hurry and join our <Link to='/courses'><Button variant="outline-dark">Courses</Button></Link></h3>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                </Col>
            </Row>
        </Container>
    );
};

export default Home;