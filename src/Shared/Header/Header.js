import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaIcons } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import './Header.css';


const Header = () => {
    const {user } = useContext(AuthContext);
    return (
        <Navbar className='mb-3' collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand> <img className='cs-icon' src="https://cdn-icons-png.flaticon.com/512/5766/5766858.png" alt="" /> CS-Learners</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="">
                        <Link className='mx-5' to="/">Home</Link>
                        <Link className='mx-5' to="/courses">Courses</Link>
                        <Link className='mx-5' to="/faq">FAQ</Link>
                        <Link className='mx-5' to="/blog">Blog</Link>
                        <Link className='mx-5' to="/login">Login</Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">{user?.name}</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Dank memes
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;