import React, {useRef, useState, useEffect} from 'react'
import ShoppingItem from './ShoppingItem'

import {useSelector} from 'react-redux'
import {selectCategory} from '../../features/category/categorySlice'
import { Container, Row, Form, Col, Button, Card } from 'react-bootstrap';

const products = [
    {
        id: 1,
        title: "Materac",
        description: "To jest super karabin do super strzelania mozna nim super ustrzelic usrzelonko super strzelanie super karabinem naszym bo ejst superowy karabinem",
        category: "Sporty wodne",
        price: 12.33,
    },
    {
        id: 2,
        title: "Pletwy",
        description: "To jest super karabin do super strzelania mozna nim super ustrzelic usrzelonko super strzelanie super karabinem naszym bo ejst superowy karabinem",
        category: "Sporty wodne",
        price: 32.23,
    },
    {
        id: 3,
        
        title: "Maska",
        description: "To jest super karabin do super strzelania mozna nim super ustrzelic usrzelonko super strzelanie super karabinem naszym bo ejst superowy karabinem",
        category: "Sporty wodne",
        price: 15.10,
    },
    {
        id: 4,
        title: "Rurka do nurkowania",
        description: "To jest super karabin do super strzelania mozna nim super ustrzelic usrzelonko super strzelanie super karabinem naszym bo ejst superowy karabinem",
        category: "Sporty wodne",
        price: 5.00,
    },
    {
        id: 5,
        title: "Pilka plazowa",
        description: "To jest super karabin do super strzelania mozna nim super ustrzelic usrzelonko super strzelanie super karabinem naszym bo ejst superowy karabinem",
        category: "Sporty wodne",
        price: 100,
    },
    {
        id: 6,
        title: "Karabin",
        description: "To jest super karabin do super strzelania mozna nim super ustrzelic usrzelonko super strzelanie super karabinem naszym bo ejst superowy karabinem",
        category: "Sporty wodne",
        price: 12.33,
    },
    {
        id: 7,
        title: "Lina",
        description: "To jest super karabin do super strzelania mozna nim super ustrzelic usrzelonko super strzelanie super karabinem naszym bo ejst superowy karabinem",
        category: "Wspinaczka",
        price: 44.11,
    },
    {
        id: 8,
        title: "Kolec",
        description: "To jest super karabin do super strzelania mozna nim super ustrzelic usrzelonko super strzelanie super karabinem naszym bo ejst superowy karabinem",
        category: "Wspinaczka",
        price: 20.11,
    },
    {
        id: 9,
        title: "Lina wspinaczkowa",
        description: "To jest super karabin do super strzelania mozna nim super ustrzelic usrzelonko super strzelanie super karabinem naszym bo ejst superowy karabinem",
        category: "Wspinaczka",
        price: 20.5,
    },
    {
        id: 10,
        title: "Lina do zacumowania",
        description: "To jest super karabin do super strzelania mozna nim super ustrzelic usrzelonko super strzelanie super karabinem naszym bo ejst superowy karabinem",
        category: "Wspinaczka",
        price: 50.55,
    },
    {
        id: 11,
        title: "Lina do spania",
        description: "To jest super karabin do super strzelania mozna nim super ustrzelic usrzelonko super strzelanie super karabinem naszym bo ejst superowy karabinem",
        category: "Wspinaczka",
        price: 100.11,
    },
    {
        id: 12,
        title: "Koszulka",
        description: "To jest super karabin do super strzelania mozna nim super ustrzelic usrzelonko super strzelanie super karabinem naszym bo ejst superowy karabinem",
        category: "Pilka nozna",
        price: 52.00,
    },
    {
        id: 13,
        title: "Pilka do nogi",
        description: "To jest super karabin do super strzelania mozna nim super ustrzelic usrzelonko super strzelanie super karabinem naszym bo ejst superowy karabinem",
        category: "Pilka nozna",
        price: 4.20,
    },
    {
        id: 14,
        title: "Bramka",
        description: "To jest super karabin do super strzelania mozna nim super ustrzelic usrzelonko super strzelanie super karabinem naszym bo ejst superowy karabinem",
        category: "Pilka nozna",
        price: 600.00,
    },
    {
        id: 15,
        title: "Samochod",
        description: "To jest super karabin do super strzelania mozna nim super ustrzelic usrzelonko super strzelanie super karabinem naszym bo ejst superowy karabinem",
        category: "Wyscigi",
        price: 4200.00,
    },
    {
        id: 16  ,
        title: "Rower",
        description: "To jest super karabin do super strzelania mozna nim super ustrzelic usrzelonko super strzelanie super karabinem naszym bo ejst superowy karabinem",
        category: "Wyscigi",
        price: 420.00,
    },
    
    
]   

const sortTypes = [
    {
        name: "Po cenie rosnaco",
        function: (a, b) => a.price > b.price ? 1 : -1,
    },
    {
        name: "Po cenie malejaco",
        function: (a, b) => a.price < b.price ? 1 : -1,
    },
    {
        name: "Po nazwie rosnaco",
        function: (a, b) => a.title < b.title ? 1 : -1,
    },
    {
        name: "Po nazwie malejaco",
        function: (a, b) => a.title < b.title ? 1 : -1,
    },
]

const ShoppingList = () => {

    const category = useSelector(selectCategory);

    const [productsList, setProductList] = useState(
        products.filter(product => product.category === category)
    )

    const [sortMethod, setSortMethod] = useState(sortTypes[0])
    const selectSortingEl = useRef(null);
    const sortMethodChangeHandler = () => {
        let type = sortTypes.find(x => x.name === selectSortingEl.current.value)
        setSortMethod(type)
    }
    useEffect(() =>{
        const newProductList = productsList.sort(sortMethod.function);
        setProductList(newProductList)
        return newProductList;
    }
    ,[sortMethod])
    useEffect(() =>{
        const newProductList = products.filter(product => product.category === category);
        setProductList(newProductList)
        return newProductList;
    }
    ,[category])


    return (
        <>
        <Row>
            <Col></Col>
            <Col lg={2} className="mr-5">
                <Form>
                    <Form.Group controlId="exampleForm.SelectCustom">
                        <Form.Label>Sortuj wedlug:</Form.Label>
                        <Form.Control ref={selectSortingEl} onChange={sortMethodChangeHandler} as="select" custom>
                            {
                                sortTypes.map(type => <>
                                    <option>{type.name}</option>
                                </>)
                            }
                        </Form.Control>
                    </Form.Group>
                </Form>
            </Col>
            <Col  md={2} ></Col>
        </Row>
        <Container>
            <Row className="d-flex justify-content-center "> 
                {productsList.map(product =>
                        <div style={{minWidth: "3rem"}}>
                            <ShoppingItem 
                            className="p2"
                            Item={product} />
                        </div>)}
            </Row>
        </Container>

        </>
    )
}

export default ShoppingList
