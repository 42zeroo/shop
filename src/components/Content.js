import React from 'react'
import Cart from '../features/shoppingCart/ShoppingCart'

import ShoppingList from './shop/ShoppingList'
import ProductInfo from '../components/shop/ProductInfo'

import {
    Switch,
    Route,
} from "react-router-dom";


const Content = () => {
   
    const contentStyle = {

        height: "100%",
        minHeight: "90vh",
        width: "100%",
        backgroundColor: "rgb(240, 240, 240)",

}
    return (
        <div style={contentStyle}>
            
                <Switch>
                    <Route path="/" exact >
                         HOME 
                    </Route>

                    <Route path="/cart"  >
                        <Cart />
                    </Route>
                    <Route exact path="/shop/category=:category/product=:title"  >
                        <ProductInfo />
                    </Route>
                    <Route path="/shop/category=:category">
                        <ShoppingList />
                    </Route>


                 </Switch>
            
        </div>
    )
}

export default Content
