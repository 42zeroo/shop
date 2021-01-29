import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {Link} from "react-router-dom"

import {useDispatch } from 'react-redux';
import { addItem } from '../../features/shoppingCart/shoppingCartSlice';
import { setProduct } from '../../features/product/productSlice'

import { Container, Row, Col, Button, Card } from 'react-bootstrap';

const ShoppingItemList = ({Item}) => {
    const dispatch = useDispatch();
    const productLink = "/shop/category="+Item.category+"/product="+Item.title;
    return (
        <Card style={{ width: '28rem', maxHeight: '30rem', minHeight: '15rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>
                    <Row className="ml-5">
                        <Col onClick={()=>dispatch(setProduct(Item))}>
                            <Link to={productLink} > 
                                <h4>{Item.title}</h4> 
                            </Link>
                        </Col>
                        <Col className="ml-auto mr-3">{Item.price.toFixed(2)}zł</Col>
                    </Row>
                </Card.Title>
                <Card.Text>
                    {Item.description}
                </Card.Text>
                <Button className="float-right" onClick={() => dispatch(addItem(Item))} variant="primary">
                    <FontAwesomeIcon icon="cart-plus" /> 
                </Button>
            </Card.Body>
        </Card>
       
        
    )
}

export default ShoppingItemList
