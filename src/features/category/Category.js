import React from 'react'
import {changeCategory, selectCategory} from './categorySlice'
import {useDispatch} from 'react-redux'
import {Link, useHistory} from "react-router-dom"

import { Container, Row, Col, Button, Card } from 'react-bootstrap';


const categories = ["Sporty wodne", "Wspinaczka", "Pilka nozna", "Wyscigi"]
const Category = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    return (
        <>
        <Container fluid={true}>
        <Row >
            {
                categories.map(catName => {
                    const linkTo = "/shop/category="+catName;
                    return (
                        <Col lg={3}>
                            <Button variant="light" size="md" onClick={()=> history.push(linkTo, {from: "Kategoria: "+catName})}>

                            
                            <Link
                            to={linkTo}
                            onClick={()=> dispatch(changeCategory(catName))}
                            >
                                {catName}
                            </Link>
                            </Button>
                            </Col>
                        )
                }
                    
                )
            }
                </Row>

        </Container>
        
        </>
        
    )
}

export default Category
