import React from 'react';
import Navbar from './components/Navbar'
import Content from './components/Content'
import {
  BrowserRouter as Router,
} from "react-router-dom";
import './App.css';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCartPlus, faInfoCircle, faShoppingCart, faMinusCircle} from '@fortawesome/free-solid-svg-icons';

library.add(faCartPlus, faInfoCircle, faShoppingCart, faMinusCircle);

function App() {
  return (
    <Container fluid={true}>
      <Row>
        <Col >
          <Router >
              <Navbar />
              <Content />
          </Router>
        </Col>
      
      </Row>
    
    </Container>

  );
}

export default App;
