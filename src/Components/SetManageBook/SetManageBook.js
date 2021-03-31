import React from 'react';
import { Link } from 'react-router-dom';

const SetManageBook = ({book}) => {

    const handleDelete = (id) =>
    {
        console.log("click delete", id);
        fetch(`https://limitless-shelf-16314.herokuapp.com/delete/${id}`,
        {
            method:'DELETE'
        })
        .then(result =>
            {
                console.log("delete successfully")
            })
    }

    return (
        <div className="col-md-4 mt-5">
            <div className="card" style={{width:' 20rem'}}>
                <div className="card-body">
                    <h5 className="card-title">{book.bookName}</h5>
                    <p className="card-text">{book.authorName}</p>
                    <h5>${book.price}</h5>
                    <Link onClick={()=>handleDelete(book._id)} className="btn btn-primary">Delete Book</Link>
                </div>
            </div>
        </div>
    );
};

export default SetManageBook;