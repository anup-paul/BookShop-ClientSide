import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './CheckOut.css'

const CheckOut = () => {

    const { id } = useParams();
    const [book, setBook] = useState([])

    useEffect(() => {
        fetch(`http://localhost:7000/selectedBook/${id}`)
            .then(res => res.json())
            .then(data => setBook(data[0]))
    }, [])

    //  const selectedBook = book.find(bk=>bk._id === id);
    //  console.log(selectedBook);


    return (
        <div>
            <h4 style={{color:"blue", textAlign:"center"}} >CheckOut</h4>
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
                <br/>
            <button className="btn btn-primary checkOut-button " >CheckOut</button>

        </div>
    );
};

export default CheckOut;