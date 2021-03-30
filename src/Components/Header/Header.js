import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link to="/home" className="nav-link active" aria-current="page">Home</Link>
                            <Link to="/orders" className="nav-link active" aria-current="page">Orders</Link>
                            <Link to="/admin" className="nav-link active" aria-current="page">Admin</Link>
                            <Link to="/deals" className="nav-link active" aria-current="page">Deals</Link>
                            <Link to="/login" className="nav-link active" aria-current="page">Login</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;