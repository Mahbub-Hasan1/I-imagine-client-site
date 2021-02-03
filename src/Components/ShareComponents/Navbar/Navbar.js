import React from 'react';
import { Link } from 'react-router-dom';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="bg-nav">
            <nav className="navbar navbar-expand-lg navbar-light container-lg">
                <div className="container-fluid">

                    <Link className="navbar-brand" to="/">I-IMAGINE</Link>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Features</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Pricing</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Disabled</Link>
                            </li>
                            <li className="nav-item">
                                <button className="nav-login-btn"><AccountBoxIcon /> Log in</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;