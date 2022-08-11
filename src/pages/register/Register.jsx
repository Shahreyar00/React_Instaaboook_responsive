import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [registerData, setRegisterData] = useState({
        username: "", 
        email: "",
        country: "",
        city: "", 
        phone: "", 
        password: "", 
        error: "",
    });

    const handleAddFormChange = (e) => {
        e.preventDefault();
        setRegisterData({...registerData, [e.target.name]:e.target.value});
    }

    let navigate = useNavigate();

    const handleClick = async(e) => {
        e.preventDefault();
        navigate("/login");
    };

    console.log(registerData);
    const error = "hello there";

    return (
        <div className="logContainer">
            <div className="logWrapper">
                <h1 className="title">REGISTER</h1>
                <form>
                    <input 
                        type="text" 
                        name="username"
                        placeholder="Username"  
                        value={registerData.username} 
                        onChange={handleAddFormChange} 
                    />
                    <input 
                        type="email" 
                        name="email"
                        placeholder="Email" 
                        value={registerData.email} 
                        onChange={handleAddFormChange}    
                    />
                    <input 
                        type="text" 
                        name="country" 
                        placeholder="Country"
                        value={registerData.country} 
                        onChange={handleAddFormChange}
                    />
                    <input 
                        type="text" 
                        name="city" 
                        placeholder="city"
                        value={registerData.city} 
                        onChange={handleAddFormChange}
                    />
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="password"
                        value={registerData.password} 
                        onChange={handleAddFormChange}
                    />
                    <button
                        className="btn" 
                        onClick={handleClick}
                    > 
                        REGISTER
                    </button>
                    {error.length>1 && 
                    <button className="btn-2">
                        <span>{error}</span>, please choose unique username & email and fill all the fields.
                    </button>}
                </form>
            </div>
        </div>
    )
}

export default Register