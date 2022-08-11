import React, { useState } from 'react'
import "./login.css";
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    })

    const handleAddFormChange = (e) => {
        e.preventDefault();
        setFormData({...formData, [e.target.name]:e.target.value});
    }

    const navigate = useNavigate();

    const handleClick = async(e) => {
        e.preventDefault();
        navigate("/");
    }

    const error=true;


    return (
        <div className="logContainer">
            <div className="logWrapper">
                <h1 className="title">SIGN IN</h1>
                <form>
                    <input 
                        type="text" 
                        name="username"
                        placeholder="username"
                        onChange={handleAddFormChange}    
                    />
                    <input 
                        type="password" 
                        placeholder="Password"
                        name="password" 
                        onChange={handleAddFormChange}    
                    />
                    <button
                        className="btn"
                        onClick={handleClick}
                    >
                        LOGIN 
                    </button>
                    {error && (
                        <span className="err">Wrong Credentials! Please try again</span>
                    )}
                    <span className="forPass">DO NOT REMEMBER YOUR PASSWORD!</span>
                    <Link to="/register">
                        <span className="forReg">Not Registered! CREATE A NEW ACCOUNT</span>
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default Login