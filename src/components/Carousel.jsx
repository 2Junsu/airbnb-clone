import React, { useState, useEffect, useRef, Fragment } from "react";
import "../css/carousel.css";
import leftArrow from "../assets/imgs/leftArrow.png";
import rightArrow from "../assets/imgs/rightArrow.png";

const Carousel = (props) => {
    const { images } = props;
    const ref = useRef();
    const [curSlide, setCurSlide] = useState(0);
    const totalSlide = images.length - 1;
    const width = ref.current?.scrollWidth;

    const moveLeft = () => {
        if (curSlide === 0) setCurSlide(totalSlide);
        else setCurSlide(curSlide - 1);
    };

    const moveRight = () => {
        if (curSlide >= totalSlide) setCurSlide(0);
        else setCurSlide(curSlide + 1);
    };

    useEffect(() => {
        ref.current.style.transition = "all 0.5s ease-in-out";
        ref.current.style.transform = `translate(${
            (-width / images.length) * curSlide
        }px)`;
    }, [curSlide]);

    return (
        <div className="carousel-wrap">
            <div
                className="carousel-container"
                ref={ref}
                style={{ width: `${images.length * 100}%` }}>
                {images.map((data, idx) => (
                    <div key={idx} className="carousel-image-view">
                        <div
                            className="carousel-image"
                            style={{ backgroundImage: `url(${data})` }}></div>
                    </div>
                ))}
            </div>
            <svg
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                style={{
                    display: "block",
                    fill: "rgba(0, 0, 0, 0.5)",
                    height: 24,
                    width: 24,
                    strokeWidth: 2,
                    stroke: "white",
                    overflow: "visible",
                    position: "absolute",
                    top: 16,
                    right: 16,
                }}>
                <path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"></path>
            </svg>
            <button
                className="carousel-btn"
                style={{ left: 10 }}
                onClick={moveLeft}>
                <img src={leftArrow} alt="arrow" width="20px" height="20px" />
            </button>
            <button
                className="carousel-btn"
                style={{ right: 10 }}
                onClick={moveRight}>
                <img src={rightArrow} alt="arrow" width="20px" height="20px" />
            </button>
            {/* </div> */}
        </div>
    );
};

export default Carousel;
