import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';


class Header extends Component {
    render() {
        return (
            <div>
                <Navbar bg="light" expand="lg">
                        <Navbar.Brand href="#home">Heroes</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Link to="/" className="nav-link">Input</Link>
                            <Link to="/data" className="nav-link">Data</Link>
                        </Nav>
                        </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default Header;
