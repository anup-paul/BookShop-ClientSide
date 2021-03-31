import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';


const Home = () => {

    const [books, setBooks] = useState([])

    useEffect(() => {
        fetch('https://limitless-shelf-16314.herokuapp.com/books')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])

    return (
        <div className="container">
            <div className="row">
                {
                    books.length === 0 && 
                    <div class="spinner-grow" role="status" style={{marginLeft:"50%"}}>
                        <span class="visually-hidden"></span>
                    </div>
                }
                {
                    books.map(book => <Book book={book} ></Book>)
                }
            </div>
        </div>
    );
};

export default Home;