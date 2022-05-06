import React from 'react';

function Customer(props) {
    const items = [
        { id: 1, name: 'Smart Tv', price: '55000LKR' },
        { id: 2, name: 'AC 2500W', price: '155000LKR' }
    ];
    const itemList = items.map((item) =>
        <li key={item.id}><b>{item.name}</b> - {item.price} | <a href=''>add to cart</a> | <a href=''>add to wish list</a></li>
    );
   
    return (
        <div>
            <h1>Customer</h1>
            <ul>{itemList}</ul>

         
        </div>
    );
}

export default Customer;