import { useContext } from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import { userContext } from './../context/userContext';
import { useSelector } from 'react-redux';


const Header = ({ cartProducts }) => {


    const user = JSON.parse(localStorage.getItem('user'))

    const {setUserLogged} = useContext(userContext);

    

    const orders = useSelector(state => state.orders.filter(order => order?.artistId === user?._id));
    const requests = useSelector(state => state.orders.filter(order => order?.clientId === user?._id));

    const navigate = useNavigate();

    const logoutHandle = (e) => {
        localStorage.clear();
        setUserLogged(false);
        navigate('/login')
    }


    return (
        <Navbar sticky='top' collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="/landing">Art Corner</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                
                </Nav>
                <Nav>
                    {!user?.isAdmin?(
                        <Nav.Link><NavLink to='/gallary'>Gallary</NavLink></Nav.Link>
                    ):""}
                    {user?(
                        <>
                            {user?.isAdmin? (
                                <>
                                    <Nav.Link><NavLink to='/admin'>Dashboard</NavLink></Nav.Link>
                                    <NavDropdown title={` ${user?.fullName?.split(' ')[0]} `} id="collasible-nav-dropdown">
                                        <NavDropdown.Item style={{color:"#333"}} onClick={() => navigate(`/admin`)}><i className="fa-solid fa-user"></i> Dashboard</NavDropdown.Item>
                                        <NavDropdown.Item style={{color:"#333"}} onClick={logoutHandle}><i className="fa-solid fa-lock"></i> Logout</NavDropdown.Item>
                                    </NavDropdown>
                                </>
                            ):(
                                <>
                                <Nav.Link><NavLink to='/courses'>Courses</NavLink></Nav.Link>
                                <Nav.Link><NavLink to='/books'>Books</NavLink></Nav.Link>
                                    <img className='rounded-circle ' style={{marginTop:15, objectFit:"cover"}} src={user?.profile_picture?user?.profile_picture:"/defaultpp.png"} alt={user?.fullName} width="25px" height="25px" />
                                    <NavDropdown title={` ${user?.fullName?.split(' ')[0]} `} id="collasible-nav-dropdown">
                                        <NavDropdown.Item style={{color:"#333"}} onClick={() => navigate(`/user/${user?._id}`)}><i className="fa-solid fa-user"></i> Profile</NavDropdown.Item>


                                        {user?.account_type === 'artist'? (
                                            <NavDropdown.Item style={{color:"#333"}} onClick={() => navigate(`/orders/${user?._id}`)}> Orders{orders?.length?`(${orders?.length})`:""}</NavDropdown.Item>
                                        ):""}
                                        <NavDropdown.Item style={{color:"#333"}} onClick={() => navigate(`/requests/${user?._id}`)}><i className="fa-solid fa-arrow-down-wide-short"></i> Requests{requests?.length?`(${requests?.length})`:""}</NavDropdown.Item>
                                        <NavDropdown.Item style={{color:"#333"}} onClick={() => navigate('/settings')}><i className="fa-solid fa-gear"></i> Settings</NavDropdown.Item>
                                        <NavDropdown.Item style={{color:"#333"}} onClick={() => navigate('/contact')}><i className="fa-solid fa-id-card"></i> Contact</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item style={{color:"#333"}} onClick={logoutHandle}><i className="fa-solid fa-lock"></i> Logout</NavDropdown.Item>
                                    </NavDropdown>
                                </>
                            )}
                        </>
                    ):(
                        <>
                            <Nav.Link><NavLink to='/contact'>Contact</NavLink></Nav.Link>
                            <Nav.Link><NavLink to='/login'>Login</NavLink></Nav.Link>
                        </>
                    )}
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header