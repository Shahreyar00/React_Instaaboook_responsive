import React, { useState } from 'react';
import "./reserve.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";


const Reserve = ({ setOpen, hotelId }) => {
    const [selectedRooms, setSelectedRooms] = useState([]);
    
    const getDatesInRange = (startDate, endDate) => {
        const start = new Date(startDate);
        const end = new Date(endDate);
        const date = new Date(start.getTime());

        const dates = [];

        while (date <= end) {
            dates.push(new Date(date).getTime());
            date.setDate(date.getDate() + 1);
        }
        return dates;
    };

    const handleSelect = (e) => {
        const checked = e.target.checked;
        const value = e.target.value; 

    }

    const handleClick = () => {
        setOpen(false);
    }

    return (
        <div className="reserve">
            <div className="rContainer">
                <FontAwesomeIcon
                    icon={faCircleXmark}
                    className="rClose"
                    onClick={() => setOpen(false)}
                />
                <span>Select your rooms:</span>
                <div className="rItem">
                    <div className="rItemInfo">
                        <div className="rTitle">Comfort Suites Airport</div>
                        <div className="rDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, consequatur.</div>
                        <div className="rMax">
                            Max people: <b>2</b>
                        </div>
                        <div className="rPrice">Rs.4000</div>
                    </div>
                    <div className="rSelectRooms">
                        <div className="room">
                            <label>101</label>
                            <input  
                                type="checkbox" 
                                value="101" 
                                onChange={handleSelect}    
                            />
                        </div>
                        <div className="room">
                            <label>102</label>
                            <input  
                                type="checkbox" 
                                value="102" 
                                onChange={handleSelect}    
                            />
                        </div>
                        <div className="room">
                            <label>103</label>
                            <input  
                                type="checkbox" 
                                value="103" 
                                onChange={handleSelect}    
                            />
                        </div>
                    </div>
                </div>
                <button onClick={handleClick} className="rButton">
                    Reserve Now!
                </button>
            </div>
        </div>
    )
}

export default Reserve