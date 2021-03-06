import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Book = ({ book }) => {

    const history = useHistory();

    const handleClick = (id) =>
    {
        history.push(`/checkOut/${id}`);

    }

    return (
        <div className="col-md-4 mt-5">

            <div className="card" style={{width:' 20rem'}}>
                <img style={{ height: '200px' }} src={book.imageURL}  className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{book.bookName}</h5>
                    <p className="card-text">{book.authorName}</p>
                    <h5><strong>${book.price}</strong></h5>
                    <Link onClick={()=>handleClick(book._id)} className="btn btn-primary">Buy Now</Link>
                </div>
            </div>

        </div>
    );
};

export default Book;