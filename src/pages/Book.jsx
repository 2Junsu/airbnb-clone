import React from "react";
import "../css/book.css";
import logo from "../assets/imgs/airbnb.png";
import fb from "../assets/imgs/facebook.png";
import { Signup } from "../components";

const Book = () => {
    return (
        <div>
            <header id="book-header">
                <div>
                    <img width="102px" height="32px" src={logo} alt="logo" />
                </div>
            </header>
            <main>
                <div style={{ width: "50%" }}>
                    <div className="book-title">
                        <span style={{ paddingRight: 32, fontSize: 24 }}>
                            &lt;
                        </span>
                        <h1>확인 및 결제</h1>
                    </div>
                    <div className="content">
                        <div className="book-info">
                            <h2>예약 정보</h2>
                            <div className="book-info-element">
                                <div>
                                    <h3>날짜</h3>
                                    <span>5월 20일~21일</span>
                                </div>
                                <div>
                                    <button className="edit">수정</button>
                                </div>
                            </div>
                            <div className="book-info-element">
                                <div>
                                    <h3>체크인 시간</h3>
                                    <span>오후 1:00 - 오후 3:00</span>
                                </div>
                                <div>
                                    <button className="edit">수정</button>
                                </div>
                            </div>
                            <div className="book-info-element">
                                <div>
                                    <h3>게스트</h3>
                                    <span>게스트 1명</span>
                                </div>
                                <div>
                                    <button className="edit">수정</button>
                                </div>
                            </div>
                        </div>
                        <div className="login">
                            <h3 style={{ fontSize: 22, marginBottom: 24 }}>
                                예약하려면 로그인 또는 회원 가입하세요
                            </h3>
                        </div>
                        <Signup />
                    </div>
                </div>
                <div id="sticky-view-container">
                    <div className="book-sticky-view">
                        <div className="sticky-info">
                            <img
                                src="https://a0.muscache.com/im/pictures/df9094ca-e87e-40be-8881-c01ae8c591f7.jpg?aki_policy=large"
                                alt="img"
                            />
                            <div style={{ paddingLeft: 12 }}>
                                <div>
                                    <span className="sticky-house-name">
                                        복토 주택
                                    </span>
                                    <span className="sticky-description">
                                        Container Suite: sospeso tra terra e
                                        mare
                                    </span>
                                </div>
                                <div className="sticky-house-review">
                                    <svg
                                        viewBox="0 0 32 32"
                                        xmlns="http://www.w3.org/2000/svg"
                                        aria-hidden="true"
                                        role="presentation"
                                        focusable="false"
                                        style={{
                                            height: 14,
                                            width: 14,
                                            display: "block",
                                            fill: "currentcolor",
                                            marginRight: 8,
                                        }}>
                                        <path
                                            d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z"
                                            fillRule="evenodd"></path>
                                    </svg>
                                    <div>
                                        4.91<span>&nbsp;(후기 60개)</span>
                                    </div>
                                    <span>&nbsp;·&nbsp;</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 16 16"
                                        aria-hidden="true"
                                        role="presentation"
                                        focusable="false"
                                        style={{
                                            height: 12,
                                            width: 12,
                                            display: "block",
                                            fill: "currentcolor",
                                        }}>
                                        <path d="M8.498 7.593l3.1-1.74c.5-.278.99-.552 1.474-.82a.833.833 0 0 0 .428-.729v-2.97A.833.833 0 0 0 12.667.5H3.333a.833.833 0 0 0-.833.833v2.97c0 .303.164.582.428.729l3 1.675 1.575.886c.348.195.647.195.995-.001zM8 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z"></path>
                                    </svg>
                                    <span>슈퍼호스트</span>
                                </div>
                            </div>
                        </div>
                        <div className="cost-container">
                            <div className="cost-text">
                                <h2>요금 세부정보</h2>
                            </div>
                            <div>
                                <div className="cost-info">
                                    <span>₩393,060 x 1박</span>
                                    <span>₩393,060</span>
                                </div>
                                <div className="cost-info">
                                    <span>서비스 수수료</span>
                                    <span>₩47,116</span>
                                </div>
                            </div>
                        </div>
                        <div className="total-cost">
                            <b>
                                총 합계 <span>(KRW)</span>
                            </b>
                            <b>₩393,060</b>
                        </div>
                    </div>
                </div>
            </main>
            <footer>
                <div style={{ display: "flex", padding: "24px 0px" }}>
                    <div>
                        <span>&copy; 2022 Airbnb, Inc.</span>
                        <span>·</span>
                        <span>개인정보 처리방침</span>
                        <span>·</span>
                        <span>이용약관</span>
                        <span>·</span>
                        <span>사이트맵</span>
                        <span>·</span>
                        <span>한국의 변경된 환불 정책</span>
                        <span>·</span>
                        <span>회사 세부 정보</span>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Book;
