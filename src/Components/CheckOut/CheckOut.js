import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../App';
import './CheckOut.css'

function CheckOut() {

    const { id } = useParams();
    const [book, setBook] = useState([]);

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);


    useEffect(() => {
        fetch(`https://limitless-shelf-16314.herokuapp.com/selectedBook/${id}`)
            .then(res => res.json())
            .then(data => setBook(data[0]))
    }, [])


    const handlePlaceOrder = () => {
        const placeOrder = { ...loggedInUser, ...book };

        fetch('https://limitless-shelf-16314.herokuapp.com/addOrder',
            {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(placeOrder)
            })
            .then(res => res.json)
            .then(data => console.log(data))
    }


    return (
        <div>
            <h4 style={{ color: "blue", textAlign: "center" }} >CheckOut</h4>
            <table className="table table table-hover table-design " >
                <thead>
                    <tr>
                        <th scope="col">Quantity</th>
                        <th scope="col">BookName</th>
                        <th scope="col">AuthorName</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>{book.bookName}</td>
                        <td>{book.authorName}</td>
                        <td>{book.price}</td>
                    </tr>
                    <tr>
                        <th scope="row">1</th>
                        <td>{book.bookName}</td>
                        <td>{book.authorName}</td>
                        <td>{book.price}</td>
                    </tr>
                    <tr>
                        <th scope="row">1</th>
                        <td>{book.bookName}</td>
                        <td>{book.authorName}</td>
                        <td>{book.price}</td>
                    </tr>
                </tbody>
            </table>
            <br />
            <button onClick={handlePlaceOrder} className="btn btn-primary checkOut-button" >Place Order</button>
        </div>
    );
};

export default CheckOut;