
import { useSelector, useDispatch } from 'react-redux';
import {
  removeItem,
  addItem,
  selectShoppingCart,
} from './shoppingCartSlice';
import {Link} from "react-router-dom"
import styles from './ShoppingCart.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import React from 'react'

const ShoppingCart = () => {
  const cart = useSelector(selectShoppingCart);
  const dispatch = useDispatch();
  return (
    <ul>
      {
        cart.map(item=> 
          <li>{item.title} - {(item.price).toFixed(2)}zł
            <button onClick={()=>dispatch(removeItem(item))}>
              <FontAwesomeIcon className={styles.deleteIcon} icon="minus-circle" /> 
            </button>
          </li>
        )
      }
      <p>Suma</p>
      <p>
        {cart.reduce((prev, curr) =>  prev + (curr.price), 0).toFixed(2)}zł
      </p>
    </ul>
  )
}

export default ShoppingCart;