import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from "react-router-dom"
import { Container, Row, Col, Button, Card , Badge} from 'react-bootstrap';

import {selectShoppingCart} from '../features/shoppingCart/shoppingCartSlice';
import { useSelector} from 'react-redux';

import Category from '../features/category/Category'

const Navbar = () => {
    const cart = useSelector(selectShoppingCart);
    const cartLenght = cart.reduce((prev)=>prev+1,0);
    return (
        <Row>
            <Col md={2}>
                SHOP
            </Col>
            <Col>
                <Category />
            </Col>
            <Col md={2}>
                <Link to="/cart">
                    <FontAwesomeIcon size="lg" icon="shopping-cart" />  
                    <Badge pill variant="danger">
                        {cartLenght}
                    </Badge>
                </Link>
            </Col>
        </Row>
        
    )
}

export default Navbar
