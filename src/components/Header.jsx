import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'

function Header(){
    return (
        <Navbar className="bg-black navbar-dark">
            <Container>
                <Navbar.Brand as={Link} to="/" className="fw-bold fs-3">
                    🎬 Movie Explorer
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default Header