import React from 'react';
import {Link} from 'react-router-dom';


function Header(){
    return(
        <div className="header-container">
            <div className="logo"></div>
            <ul className="nav-bar">
                <Link to='/'>
                <li>Home</li>
                </Link>
                <Link to="/shop">
                <li>Shop</li>
                </Link>
                <Link to="/cart">
                <li>Cart</li>
                </Link>
                <Link to="/about">
                <li>About</li>
                </Link>
            </ul>
            <div className="categories">
                <ul>cat 1</ul>
                <ul>cat 2</ul>
                <ul>cat 3</ul>
            </div>
            <div className="social-icons">
                <ul>icon 1</ul>
                <ul>icon 2</ul>
                <ul>icon 3</ul>
            </div>
            
            
        </div>
    )    
}
export default Header;