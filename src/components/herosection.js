import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../images/mahesh.png';
const HeroSection = () => {
  return (
    <div className="container-fluid bg-dark text-light py-5">
     
      <div className="row justify-content-center">
        <div className="col-md-9 text-center">
          <h1 className="display-4 mb-4" style={{ fontWeight: 'bold', color:("to right, #089, #fff") }}>Bandaru Mahesh</h1>
          
          <div className="row align-items-center justify-content-center">
            <div className="col-md-4 mb-4 mb-md-0">
              <h5 className="text-light mb-2">BIOGRAPHY</h5>
              <p className='fw-bold'> Bandaru Mahesh, an Alumuni from IIT Kharagpur, 
            has emerged as a dynamic force in the tech industry. 
            Through OlewinTechSolutions, Mahesh continues to make a significant impact,
              showcasing his ability to bridge academic insight with real-world application, 
              fostering a reputation for reliability and ingenuity in the tech landscape.
              </p>
              <h5 className="text-muted mb-2 mt-4">SKILLS</h5>
              <p className="small">Web Development • UI & UX Design • Marketing • SEO • Management</p>
              
              <h5 className="text-light mb-2 mt-4">CONNECT</h5>
              <div className="d-flex justify-content-center">
                <i className="mx-2" size={24} />
                <i className="mx-2" size={24} />
                <i className="mx-2" size={24} />
              </div>
            </div>
            <div className="col-md-4 mb-4 mb-md-0 text-center">
              <img
                src={logo} // Placeholder image link
                alt="Profile"
                className="rounded-circle img-fluid"
                style={{ maxWidth: '350px' }}
              />
            </div>
            
            <div className="col-md-4 text-center">
              <div className="mb-4">
                <h2 className="display-4 fw-bold">432</h2>
                <p className="text-muted">PROJECTS DONE</p>
              </div>
              <div className="mb-4">
                <h2 className="display-4 fw-bold">13+</h2>
                <p className="text-muted">YEARS OF EXPERIENCE</p>
              </div>
              <div>
                <h2 className="display-4 fw-bold">900</h2>
                <p className="text-muted">WORLDWIDE CLIENTS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

