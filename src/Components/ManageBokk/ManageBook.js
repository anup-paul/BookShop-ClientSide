import React, { useEffect, useState } from 'react';
import SetManageBook from '../SetManageBook/SetManageBook';

const ManageBook = ({ book }) => {

    const [books, setBooks] = useState([])

    useEffect(() => {
        fetch('https://limitless-shelf-16314.herokuapp.com/books')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])

    return (
        <div className="container" >
            <div className="row">
                {
                    books.map(book => <SetManageBook book={book} ></SetManageBook>)
                }
            </div>
        </div>
    );
};

export default ManageBook;