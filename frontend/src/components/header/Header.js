import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { accountSignOut } from '../../redux/actions/accountActions'
const Header = () => {
    const dispatch = useDispatch();
    const { accountLogin } = useSelector(state => state.accountLogin);
    const logoutHandler = () => {
        dispatch(accountSignOut());
    };

    return (
        <header>
            <Navbar className='p-0' bg='white' variant='light'>
                <Container>
                    <Nav className='ml-auto' >
                        {accountLogin
                            ? <>
                                <LinkContainer to='/' >
                                    <Nav.Link
                                        active
                                        onClick={logoutHandler}>
                                        Sign out
                                    </Nav.Link>
                                </LinkContainer>
                                <LinkContainer to='/contact' >
                                    <Nav.Link active> profile </Nav.Link>
                                </LinkContainer>
                            </>
                            : <>
                                <LinkContainer to='/profile/signin' >
                                    <Nav.Link active> Sign in</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to='/profile/create'>
                                    <Nav.Link active>Create Account</Nav.Link>
                                </LinkContainer>
                            </>
                        }
                    </Nav>
                </Container>
            </Navbar>
            <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand>ExampleShop</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav' >
                        <Nav className='ml-auto'>
                            <LinkContainer to='/shop'>
                                <Nav.Link active> Shop </Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/about'>
                                <Nav.Link active> About </Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/contact'>
                                <Nav.Link active> Contact </Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/cart'>
                                <Nav.Link active> <i className='fas fa-shopping-cart' /> Cart</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
