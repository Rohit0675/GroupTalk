import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const style = {
  homeBg: {
    backgroundImage: `url(https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80)`,
    height: '80vh',
    backgroundPosition: 'center',
    padding: '50px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    overflowX: 'hidden',
    boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.75)',
    borderRadius: '10px'
  },
  homeMessageIcon: {
    marginLeft: '10px',
    display: 'inline-block'
  },
  h1: {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    borderRight: '0.15em solid orange',
    fontSize: '2em',
    margin: '0 auto',
    letterSpacing: '0.15em',
    animation: 'typing 1.5s steps(30) forwards'
  }
};

function Home() {
  return (
    <Row>
      <Col
        md={6}
        className="d-flex flex-direction-column align-items-center justify-content-center"
      >
        <div style={{padding: '40px'}}>
          <h1 style={style.h1}>GroupTalk</h1>
          <p>Connect with the world in real-time with GroupTalk</p>
          <LinkContainer to="/chat">
            <Button variant="success">
              Get Started <i className="fas fa-comments home-message-icon" style={style.homeMessageIcon}></i>
            </Button>
          </LinkContainer>
        </div>
      </Col>
      <Col md={6} style={style.homeBg}></Col>
    </Row>
  );
}

export default Home;
