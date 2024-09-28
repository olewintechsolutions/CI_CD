import React, { useState } from 'react';
import { Navbar, Nav, Button, Offcanvas, Container,Dropdown } from 'react-bootstrap';
import '../styles/navbar.css'; // For additional styles
import 'bootstrap/dist/css/bootstrap.min.css';

const MyNavbar = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleShowOffcanvas = () => setShowOffcanvas(true);
  const handleCloseOffcanvas = () => setShowOffcanvas(false);

  return (
    <>
      <Navbar  expand="lg" sticky="top" className="navbar-custom">
        <Container fluid>
          <Navbar.Brand href="/" className="d-flex align-items-center">
          Bandaru Mahesh
          </Navbar.Brand>

          {/* Offcanvas trigger for small screens */}
          <Button
            variant="dark"
            className="ms-auto d-lg-none"
            onClick={handleShowOffcanvas}
          >
            Menu
          </Button>

          {/* Navbar links and buttons visible for larger screens */}
          <Navbar.Collapse id="navbarNav" className="d-none d-lg-flex justify-content-between">
            <Nav className="mx-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/programs">Programs</Nav.Link>
              <Nav.Link href="/enroll">Enroll</Nav.Link>
              <Nav.Link href="/course">Interviews</Nav.Link>
              <Nav.Link href="/courses">Courses</Nav.Link>
              <Nav.Link href="/quantum">Quant</Nav.Link>
              <Dropdown>
        <Dropdown.Toggle  id="dropdown-basic">
          More
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="/about">About Us</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="/contact">Contact Us</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="/knowledgehub">Knowledge Hub</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="/faqs">FAQs</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
            </Nav>

            <div className="d-flex me-3">
              <Button variant="primary" className="me-2">
                Login
              </Button>
              <Button variant="dark">Sign Up</Button>
             
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Offcanvas Menu */}
      <Offcanvas
        show={showOffcanvas}
        onHide={handleCloseOffcanvas}
        placement="end"
        className="offcanvas-custom"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link href="/" onClick={handleCloseOffcanvas}>Home</Nav.Link>
            <Nav.Link href="/programs" onClick={handleCloseOffcanvas}>Programs</Nav.Link>
            <Nav.Link href="/courses" onClick={handleCloseOffcanvas}>Courses</Nav.Link>
            <Nav.Link href="/notes" onClick={handleCloseOffcanvas}>Notes</Nav.Link>
            <Nav.Link href="/course" onClick={handleCloseOffcanvas}>Enroll</Nav.Link>
          </Nav>

          <div className="d-flex justify-content-center mt-4">
            <Button variant="primary" className="me-2" onClick={handleCloseOffcanvas}>
              Login
            </Button>
            <Button variant="dark" onClick={handleCloseOffcanvas}>
              Sign Up
            </Button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default MyNavbar;
