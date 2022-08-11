import React from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css";

const Navbar = () => {
    const user = true;

    return (
        <div className="navbar">
            <div className="navContainer">
                <Link to="/">
                    <span className="logo">InstaaBoook</span>
                </Link>
                <div className="navItems">
                    {user ? (
                        <>
                            <span className="navName">Shahreyar</span>
                            <button
                                className="navButton"
                            >
                                Logout 
                            </button>
                        </>
                    ) : (
                        <>
                            <Link to="/register">
                                <button className="navButton">Register</button>
                            </Link>
                            <Link to="/login">
                                <button className="navButton">Sign in</button>
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Navbar