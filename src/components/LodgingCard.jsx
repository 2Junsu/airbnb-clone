import React from "react";
import "../css/lodgingCard.css";
import { useNavigate } from "react-router-dom";

const LodgingCard = (props) => {
    const { id } = props;
    const navigate = useNavigate();

    return (
        <article
            onClick={() => {
                navigate(`/product/${id}`);
            }}>
            <img
                src="https://a0.muscache.com/im/pictures/ffea2065-5b15-4a33-88ce-eca502589521.jpg?im_w=720"
                alt="img"
            />
            <div className="article-contents">
                <strong>Gardone Riviera, 이탈리아</strong>
                <span>디자인: David Chipperfield</span>
                <span>8월 1일~6일</span>
                <strong>₩325,527/박</strong>
                <div className="rate">
                    <span>4.91</span>&nbsp;
                    <svg
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="presentation"
                        focusable="false"
                        style={{
                            display: "block",
                            height: 12,
                            width: 12,
                            fill: "currentcolor",
                        }}>
                        <path
                            d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z"
                            fillRule="evenodd"></path>
                    </svg>
                </div>
            </div>
        </article>
    );
};

export default LodgingCard;
