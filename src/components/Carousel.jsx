import React, { useState, useEffect, useRef } from "react";
import "../css/carousel.css";
import leftArrow from "../assets/imgs/leftArrow.png";
import rightArrow from "../assets/imgs/rightArrow.png";
import { useNavigate } from "react-router-dom";

const Carousel = (props) => {
    const { images, id } = props;
    const carouselRef = useRef();
    const ref = useRef([]);
    const navigate = useNavigate();

    const [curSlide, setCurSlide] = useState(0);
    const totalSlide = images.length - 1;
    const width = carouselRef.current?.scrollWidth;

    const moveLeft = () => {
        if (curSlide === 0) setCurSlide(totalSlide);
        else setCurSlide(curSlide - 1);
    };

    const moveRight = () => {
        if (curSlide >= totalSlide) setCurSlide(0);
        else setCurSlide(curSlide + 1);
    };

    useEffect(() => {
        carouselRef.current.style.transition = "all 0.5s ease-in-out";
        carouselRef.current.style.transform = `translate(${
            (-width / images.length) * curSlide
        }px)`;
    }, [curSlide]);

    const Routing = (e) => {
        if (
            !ref.current[0].contains(e.target) &&
            !ref.current[1].contains(e.target) &&
            !ref.current[2].contains(e.target) &&
            carouselRef.current.contains(e.target)
        )
            navigate(`product/${id}`);
    };

    useEffect(() => {
        window.addEventListener("click", Routing);

        return () => {
            window.removeEventListener("click", Routing);
        };
    });

    return (
        <div className="carousel-wrap">
            <div
                className="carousel-container"
                ref={carouselRef}
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
                ref={(e) => (ref.current[0] = e)}
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
                ref={(e) => (ref.current[1] = e)}
                className="carousel-btn"
                style={{ left: 10 }}
                onClick={moveLeft}>
                <img src={leftArrow} alt="arrow" width="20px" height="20px" />
            </button>
            <button
                ref={(e) => (ref.current[2] = e)}
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
