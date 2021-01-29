import React from 'react'

import {useSelector, useDispatch} from 'react-redux'
import {selectProduct} from '../../features/product/productSlice'
import {addItem} from '../../features/shoppingCart/shoppingCartSlice'
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import { Container, Row, Col, Button, Card } from 'react-bootstrap';


const ProductInfo = () => {
    const product = useSelector(selectProduct)
    const dispatch = useDispatch();
    const history = useHistory();

    return (
        <Container fluid={true} className="mt-3 ">
           <Card>
            <Card.Header>
                <Row>
                    <Col md={2  }>
                        <Button  variant="outline-primary"  onClick={() => history.goBack()} >
                            Wróc
                        </Button>
                    </Col>
                    <Col>
                     <h3>{product.title}</h3>
                    </Col>
                </Row>
            
            </Card.Header>
            <Card.Text>
                <Row className="mt-4">
                    <Col className="ml-4" lg={4}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                    </Col>
                    <Col>
                        <Row>
                            {product.description}
                        </Row>
                        <Row>
                            <Col></Col>
                            <Col><h1>{product.price.toFixed(2)}zł</h1></Col>
                        </Row>
                    </Col>
                </Row> 
            </Card.Text>
            <Card.Body>
                <Card.Link class="float-right" href="" onClick={()=>dispatch(addItem(product))}>Dodaj do koszyka</Card.Link>
            </Card.Body>
           </Card>
            
                
        </Container>

    )
}

export default ProductInfo
