import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaIcons, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import './Header.css';
import Image from 'react-bootstrap/Image'
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import { DarkModeToggle } from '@anatoliygatt/dark-mode-toggle';

const Header = () => {

    let [color, setColor] = useState('');
    const [mode, setMode] = useState('dark');

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
    }

    return (
        <Navbar className='mb-3 text-primary' collapseOnSelect expand="lg" bg={mode} variant={mode}>
            <Container>
                <Navbar.Brand> <img className='cs-icon' src="https://cdn-icons-png.flaticon.com/512/5766/5766858.png" alt="" /> CS-Learners</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="">
                        <Link className='mx-5' to="/">Home</Link>
                        <Link className='mx-5' to="/courses">Courses</Link>
                        <Link className='mx-5' to="/faq">FAQ</Link>
                        <Link className='mx-5' to="/blog">Blog</Link>
                        {user?.uid ? <div>
                            <Button onClick={handleLogOut}>Logout</Button>
                        </div>
                            :
                            <div>
                                <Link className='mx-5' to="/login">Login</Link>
                                <Link className='mx-5' to="/register">Register</Link>
                            </div>
                        }

                    </Nav>
                    <Nav>
                        <Nav.Link eventKey={2}>
                            {user?.photoURL ?
                                <div className='visibility'>
                                    <Image style={{ height: '30px' }} roundedCircle src={user.photoURL}></Image>
                                    <h3>{user?.displayName}</h3>
                                </div>
                                :
                                <FaUser></FaUser>
                            }
                        </Nav.Link>
                
                        {/* toggle start */}
                        <DarkModeToggle
                            mode={mode}
                            dark="Dark"
                            light="Light"
                            size="lg"
                            inactiveTrackColor="#e2e8f0"
                            inactiveTrackColorOnHover="#f8fafc"
                            inactiveTrackColorOnActive="#cbd5e1"
                            activeTrackColor="#334155"
                            activeTrackColorOnHover="#1e293b"
                            activeTrackColorOnActive="#0f172a"
                            inactiveThumbColor="#1e293b"
                            activeThumbColor="#e2e8f0"
                            onChange={(mode) => {
                                setMode(mode);
                            }}
                        />
                        {/* toggle end */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;