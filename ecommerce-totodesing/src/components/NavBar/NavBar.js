import React from 'react'
import { Navbar, Container,Nav, NavDropdown } from 'react-bootstrap'
import CartWidget from './CartWidget'

export const NavBar = () => {
    return (
       
      <>
  <Navbar bg="light" variant="light">
    <Container>
    <Navbar.Brand href="#home">TOTO</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Inicio</Nav.Link>
      <Nav.Link href="#features">Productos</Nav.Link>
      <Nav.Link href="#pricing">Contacto</Nav.Link>
      <CartWidget></CartWidget>
    </Nav>
   
    </Container>
  </Navbar>
 
</>
       
    )
}
export default NavBar