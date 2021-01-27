import React from 'react'
import styles from './ShoppingItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {useDispatch, useSelector } from 'react-redux';
import { addItem, selectShoppingCart } from '../../../features/shoppingCart/shoppingCartSlice';
const ShoppingItemList = ({Item}) => {
    const dispatch = useDispatch();
    const cart = useSelector(selectShoppingCart);
    return (
        <div className={styles.card}>
            <div className={styles.cardText}>
                <div className={styles.portada}>
                </div>
                <div className={styles.titleTotal}>   
                    <div className={styles.title}>
                        {Item.price.toFixed(2)} zł
                    </div>
                    <h2 className={styles.ha2}>{Item.title}</h2>
                    <div className={styles.desc}>
                        {Item.description}
                    </div>
                    <div className={styles.actions}>
                        
                        <button>
                            <FontAwesomeIcon icon="info-circle" /> 
                        </button>
                        <button onClick={() => dispatch(addItem(Item))}>
                            <FontAwesomeIcon icon="cart-plus" /> 
                        </button>

                    </div>
                </div>  
            </div>           
        </div>
        
    )
}

export default ShoppingItemList
