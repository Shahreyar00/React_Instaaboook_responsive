import React from "react";
import "./list.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";
import { faCircleArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const List = () => {
    const location = useLocation();
    const [destination, setDestination] = useState(location.state.destination);
    const [dates, setDates] = useState(location.state.dates);
    const [openDate, setOpenDate] = useState(false);
    const [options, setOptions] = useState(location.state.options);
    const [min, setMin] = useState(undefined);
    const [max, setMax] = useState(undefined);

    const handleClick = () => {

    }

    const handleScroll = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    return (
        <div>
            <Navbar />
            <Header type="list" />
            <div className="listContainer">
                <div className="listWrapper">
                    <div className="listSearch">
                        <h1 className="lsTitle">Search</h1>
                        <div className="lsItem">
                            <label>Destination</label>
                            <input 
                                type="text" 
                                placeholder="Delhi"
                                onChange={(e)=>setDestination(e.target.value)}    
                            />
                        </div>
                        <div className="lsItem">
                            <label>Check-in Date</label>
                            <span
                                onClick={() => setOpenDate(!openDate)}
                            >
                                {`${format(dates[0].startDate, "dd/MM/yyyy")} to ${format(dates[0].endDate,"dd/MM/yyyy")}`}
                            </span>
                            {openDate && (
                                <DateRange 
                                    onChange={(item)=>setDates([item.selection])} 
                                    minDate={new Date()} 
                                    ranges={dates} 
                                />
                            )}
                        </div>
                        <div className="lsItem">
                            <label>Options</label>
                            <div className="lsOptions">
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">
                                        Min price <small>(per night)</small>
                                    </span>
                                    <input 
                                        type="number" 
                                        className="lsOptionInput"
                                        onChange={(e)=>setMin(e.target.value)}    
                                    />
                                </div>
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">
                                        Max price <small>(per night)</small>
                                    </span>
                                    <input 
                                        type="number" 
                                        className="lsOptionInput"
                                        onChange={(e)=>setMax(e.target.value)}    
                                    />
                                </div>
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">Adult</span>
                                    <input 
                                        type="number" 
                                        min={1} 
                                        className="lsOptionInput" 
                                        placeholder={options.adult}
                                    />
                                </div>
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">Children</span>
                                    <input
                                        type="number"
                                        min={0}
                                        className="lsOptionInput"
                                        placeholder={options.children}
                                    />
                                </div>
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">Room</span>
                                    <input
                                        type="number"
                                        min={1}
                                        className="lsOptionInput"
                                        placeholder={options.room}
                                    />
                                </div>
                            </div>
                        </div>
                        <button onClick={handleClick}>Search</button>
                    </div>
                    <div className="listResult">
                        <div className="arrowUp" onClick={handleScroll}>
                            <FontAwesomeIcon icon={faCircleArrowUp} />
                        </div>
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default List