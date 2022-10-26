import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <Navbar className='mb-3' collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>CS-Learners</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="">
                        <Link className='mx-5' to="/">Home</Link>
                        <Link className='mx-5' to="/courses">Courses</Link>
                        <Link className='mx-5' to="/faq">FAQ</Link>
                        <Link className='mx-5' to="/blog">Blog</Link>
                        <Link className='mx-5' to="/login">Login</Link>
                    </Nav>
                    {/* <Nav>
                        <Nav.Link href="#deets">More deets</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Dank memes
                        </Nav.Link>
                    </Nav> */}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;