import React from 'react';
import { Link } from 'react-router-dom';

const Admin = () => {
    return (
        <div>

            <ul className="nav justify-content-center mt-5">
                <li className="nav-item mx-5">
                    <Link to="/addBook" className="nav-link active btn btn-primary" aria-current="page">Add Book</Link>
                </li>
                <li className="nav-item">
                    <Link to="/manageBook" className="nav-link active btn btn-primary" aria-current="page">Manage Books</Link>
                </li>
            </ul>
            
        </div>
    );
};

export default Admin;