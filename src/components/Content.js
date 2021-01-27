import React from 'react'
import Cart from '../features/shoppingCart/ShoppingCart'

import ShoppingList from '../components/shop/ShoppingList/ShoppingList'

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
                    <Route path="/" exact > </Route>
                    <Route path="/shop/category/Sporty wodne">
                        <ShoppingList Category="Sporty wodne" />
                    </Route>
                    <Route path="/shop/category/Wspinaczka">
                        <ShoppingList Category="Wspinaczka" />
                    </Route>
                    <Route path="/shop/category/Pilka nozna">
                        <ShoppingList Category="Pilka nozna" />
                    </Route>
                    <Route path="/shop/category/Wyscigi">
                        <ShoppingList Category="Wyscigi" />
                    </Route>
                    <Route path="/cart"  >
                        <Cart />
                    </Route>
                 </Switch>
            
        </div>
    )
}

export default Content
