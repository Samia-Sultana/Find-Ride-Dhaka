import React from 'react';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import './Header.css';

const Header = () => {
    return (
        <div className="header-container">
            <h2>Find Ride-Dhaka</h2>
            <div className="navigation">
                <Link to="/">Home</Link>
                <Link to="/destination">Destination</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/login"><Button variant="primary">Login</Button></Link>
            </div>
            
        </div>
    );
};

export default Header;