import React from 'react'
import  styles from './Navbar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from "react-router-dom"

import {selectShoppingCart} from '../../features/shoppingCart/shoppingCartSlice';
import { useSelector} from 'react-redux';

import Category from '../../features/category/Category'

const Navbar = () => {
    const cart = useSelector(selectShoppingCart);
    const cartLenght = cart.reduce((prev)=>prev+1,0);
    return (
        <div className={styles.sidebar}>
            <h1 className={styles.logo}>SHOP</h1>
            <div className={styles.category}>
             <Category />

            </div>
            <div className={styles.cartContainer}>
                <div className={styles.cart}>
                    <Link to="/cart">
                      <FontAwesomeIcon icon="shopping-cart" />  
                      <div className={styles.cartItemsLenght}>
                        <p> {cartLenght}</p> 
                      </div>

                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar
