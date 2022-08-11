import React from 'react';
import "./searchItem.css";
import { Link } from 'react-router-dom';

const SearchItem = ({ item }) => {
    return (
        <div className="searchItem">
            <img 
                src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1" 
                alt="" 
                className="siImg"
            />
            <div className="siDesc">
                <h1 className="siTitle">Comfort Suites Airport</h1>
                <span className="siDistance">500m from center </span>
                <span className="siTaxiOp">Free airport taxi</span>
                <span className="siSubtitle"> Studio Apartment with Air conditioning </span>
                <span className="siFeatures">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis alias accusamus aliquam porro beatae sint eaque officia minus optio nisi ullam inventore, voluptatum maiores unde esse placeat enim autem libero.</span>
                <span className="siCancelOp">Free cancellation </span>
                <span className="siCancelOpSubtitle">You can cancel later, so lock in this great price today! </span>
            </div>
            <div className="siDetails">
                <div className="siRating">
                    <span>Excellent</span>
                    <button>9.3</button>
                </div>
                <div className="siDetailTexts">
                    <span className="siPrice">Rs.4000</span>
                    <span className="siTaxOp">Includes taxes and fees</span>
                    <Link to={`/hotels/123`}>
                        <button className="siCheckButton">See availability</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SearchItem