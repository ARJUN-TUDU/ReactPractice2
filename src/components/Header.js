import React from 'react'
import { Container,Navbar,Nav ,Row ,Col } from 'react-bootstrap';
import "../App.css";
const Header = () => {
    return (
        <div>
        <Navbar className="bg-primary" variant="light"  expand="lg">
            <Container className="p-4">
            <Navbar.Brand className='text-white' href="/">Rastafari</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link className='text-white'  href="#home">Home</Nav.Link>
            <Nav.Link className='text-white'  href="#link">Link</Nav.Link>
            </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>

         <Container className="mysection" >
             
                 <h1 style={{fontSize:'100px'}}>RastFaari</h1>
                 
                
                
         </Container>

        </div>
    )
}

export default Header;
