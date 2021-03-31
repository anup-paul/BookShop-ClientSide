import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Book = ({ book }) => {

    const history = useHistory();

    const handleClick = (id) =>
    {
        history.push(`/checkOut/${id}`);

        // fetch(`http://localhost:7000/selectedBook/${id}`)
        // .then(res => res.json())
        // .then(data =>
        //     console.log(data))

    }

    return (
        <div className="col-md-4 mt-5">
            {/* <img alt="" /> */}

            <div className="card" style={{width:' 20rem'}}>
                <img style={{ height: '200px' }} src={book.imageURL}  className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{book.bookName}</h5>
                    <p className="card-text">{book.authorName}</p>
                    <h5>${book.price}</h5>
                    <Link onClick={()=>handleClick(book._id)} className="btn btn-primary">Buy Now</Link>
                </div>
            </div>

        </div>
    );
};

export default Book;