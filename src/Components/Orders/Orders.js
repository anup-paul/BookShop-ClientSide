import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import './Orders.css'

const Orders = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    const [orders, setOrders] = useState([])

    useEffect(()=>
    {
        fetch('https://limitless-shelf-16314.herokuapp.com/orders?email='+loggedInUser.email)
        .then(res => res.json())
        .then(data => setOrders(data))
    },[])

    return (
        <div>
            <h4 style={{textAlign:"center"}} >You have total : {orders.length} orders</h4>
            <h4 style={{textAlign:"center"}} >name : {loggedInUser.displayName}</h4>
            <h4 style={{textAlign:"center"}} >email : {loggedInUser.email}</h4>
            {
                orders.map(order =><ul className="design-order" >
                   <h5>Book Name:{order.bookName}</h5>
                    <h5>Author Name:{order.authorName}</h5>
                    <p>Price: ${order.price}</p>
                    </ul>)
            }
        </div>
    );
};

export default Orders;