import React from 'react'
import ShoppingItem from '../ShoppingItem/ShoppingItem'

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

const ShoppingList = ({Category}) => {
    return (
        <>
        <div>
            Filtruj
        </div>
        <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(400px, 1fr))",
            gridGap: "0.9rem",
            alignItems: "center",
            justifyItems: "center",
            marginLeft: "20px",
        }}>
            
            {products.filter(product => product.category === Category).map(product => 
                <ShoppingItem 
                  Item={product} />)}
        </div>
        </>
    )
}

export default ShoppingList
