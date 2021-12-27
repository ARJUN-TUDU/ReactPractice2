import React from 'react'
import { Container,Navbar,Nav ,Row ,Col , Carousel } from 'react-bootstrap';
import "../App.css";
import tours from '../tours';
const Header = () => {
    return (
        <div>
        <Navbar className="bg-primary transparent"  style = {{opacity:'0.699'}}variant="light"  expand="lg">
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

        <Carousel>
                                <Carousel.Item style={{height:"300px", opacity:''}}>
                                    <img
                                    className="d-block w-100"
                                    src="https://trek.scene7.com/is/image/TrekBicycleProducts/Supercaliber_Marquee_6?wid=1200"
                                    alt="First slide" fluid
                                    />
                                    <Carousel.Caption>
                                    <h3 className = "mytext" style ={{fontSize:"50px", color:'white'}}>First slide label</h3>
                                    
                                    </Carousel.Caption>
                                </Carousel.Item>
                               
                               
                                </Carousel>

        </div>
    )
}

export default Header;
