import { useRef } from "react";
import "./featured.css";
import { faCircleArrowLeft, faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Featured = () => {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        const { current } = scrollRef;
        if(direction === "left"){
            current.scrollLeft -= 300;
        }else{
            current.scrollLeft += 300;
        }
    }

    return (
        <div className="featured" ref={scrollRef}>
            <div className="featuredItem">
                <img 
                    src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o=" 
                    alt="featured property" 
                    className="featuredImg"    
                />
                <div className="featuredTitles">
                    <div className="featuredCity">Darjeeling</div>
                    <div className="noProperty">5 Properties</div>
                </div>
            </div>

            <div className="featuredItem">
                <img 
                    src="https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o="
                    alt=""
                    className="featuredImg"
                />
                <div className="featuredTitles">
                    <div className="featuredCity">Austin</div>
                    <div className="noProperty">2 Properties</div>
                </div>
            </div>

            <div className="featuredItem">
                <img
                    src="https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o="
                    alt=""
                    className="featuredImg"
                />
                <div className="featuredTitles">
                    <div className="featuredCity">Oslo</div>
                    <div className="noProperty">3 Properties</div>
                </div>
            </div>

        </div>
    )
}

export default Featured