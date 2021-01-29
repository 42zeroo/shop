
import { useSelector, useDispatch } from 'react-redux';
import {
  removeItem,
  addItem,
  selectShoppingCart,
} from './shoppingCartSlice';
import {Link} from "react-router-dom"


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';

import styled from 'styled-components'


import React from 'react'

const ShoppingCart = () => {
  const cart = useSelector(selectShoppingCart);
  const dispatch = useDispatch();
  const ScrollContainer = styled.div` 
  height: 75vh;
  margin-left: .3vw;
  overflow-x: hidden !important;
  &::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	background-color: #F5F5F5;
  border-radius: 4px;
}

&::-webkit-scrollbar
{
	width: 4px;
	background-color: #F5F5F5;
}

&::-webkit-scrollbar-thumb
{
	border-radius: 4px;
	background-image: -webkit-gradient(linear,
									   left bottom,
									   left top,
									   color-stop(0.05, rgb(25,25,25)),
									   color-stop(0.50, rgb(75,75,75)),
									   color-stop(0.95, rgb(25,25,25)));
}

  `
  return (
    <>
      <Row >

        <Col className="ml-2" lg={2}>
    <ScrollContainer className="overflow-auto">

        <Row>

       
              {
              cart.map(item=> 
                <Card className="mt-2" style={{ width: '14rem' }}>
                  <Card.Header>{(item.price).toFixed(2)}zł</Card.Header>
                  <Card.Body>
                    <Row>
                      <Col >{item.title}</Col>
                      <Col>
                        <Button variant="primary" onClick={()=>dispatch(removeItem(item))}>
                          <FontAwesomeIcon icon="minus-circle" /> 
                        </Button> 
                      </Col>
                    </Row>
                    
                    
                  </Card.Body>
                </Card>
              )
            }
 </Row>
 </ScrollContainer>
 <Col className="mt-2 ">
          <div style={{}}>
            <h3>Suma</h3>
            <h4>
              {cart.reduce((prev, curr) =>  prev + (curr.price), 0).toFixed(2)}zł
            </h4>
          </div>
        </Col>
        </Col>
        
        
        
        
        
      </Row>
      
      
      
    
    </>
  )
}

export default ShoppingCart;