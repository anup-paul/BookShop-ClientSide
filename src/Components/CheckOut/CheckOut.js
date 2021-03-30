import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const CheckOut = () => {

    const { id } = useParams();
    const [book, setBook] = useState([])

    useEffect(()=>
    {
        fetch('http://localhost:7000/books')
        .then(res => res.json())
        .then(data =>
            {
                // console.log(data)
                setBook(data);
            })
    }, [])

     const selectedBook = book.find(bk=>bk._id === id);
     console.log(selectedBook);


    return (
        <div>
            <h1>This is our checkout page</h1>
           {/* <h1>BookName:{selectedBook.bookName}</h1> */}
        </div>
    );
};

export default CheckOut;