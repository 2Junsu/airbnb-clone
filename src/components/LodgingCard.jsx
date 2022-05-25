import React from "react";
import "../css/lodgingCard.css";
import { useNavigate } from "react-router-dom";

const LodgingCard = (props) => {
    const { id } = props;
    const navigate = useNavigate();

    return (
        <article
            className="lodging-article"
            onClick={() => {
                navigate(`/product/${id}`);
            }}>
            <div className="lodging-img-outer">
                <div className="lodging-img-inner">
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
                </div>
            </div>
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
