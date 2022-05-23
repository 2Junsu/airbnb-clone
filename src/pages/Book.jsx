import React from "react";
import "../css/book.css";
import logo from "../assets/imgs/airbnb.png";
import fb from "../assets/imgs/facebook.png";

const Book = () => {
    return (
        <div>
            <header>
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
                            <form>
                                <label className="nation-btn">
                                    <div>
                                        <span style={{ fontSize: 12 }}>
                                            국가/지역
                                        </span>
                                        <br />
                                        <span>한국 (+82)</span>
                                    </div>
                                    <div className="arrow">&gt;</div>
                                </label>
                                <div style={{ padding: "10px 12px" }}>
                                    <input type="tel" placeholder="전화번호" />
                                </div>
                            </form>
                            <div className="login-notice">
                                전화나 문자로 전화번호를 확인하겠습니다. 일반
                                문자 메시지 요금 및 데이터 요금이
                                부과됩니다.&nbsp;<span>개인정보 처리방침</span>
                            </div>
                            <div style={{ marginTop: 24 }}>
                                <button className="login-btn">
                                    <span>계속</span>
                                </button>
                            </div>
                        </div>
                        <div style={{ padding: "16px 0px" }}>
                            <hr />
                        </div>
                        <div className="social-login-container">
                            <div className="social-login">
                                <div className="social-login-element">
                                    <img
                                        src={fb}
                                        width="24px"
                                        height="24px"
                                        alt="facebook"
                                    />
                                </div>
                                <div className="social-login-element">
                                    <svg
                                        viewBox="0 0 18 18"
                                        role="presentation"
                                        aria-hidden="true"
                                        focusable="false"
                                        style={{
                                            height: 20,
                                            width: 20,
                                            display: "block",
                                        }}>
                                        <g fill="none" fillRule="evenodd">
                                            <path
                                                d="M9 3.48c1.69 0 2.83.73 3.48 1.34l2.54-2.48C13.46.89 11.43 0 9 0 5.48 0 2.44 2.02.96 4.96l2.91 2.26C4.6 5.05 6.62 3.48 9 3.48z"
                                                fill="#EA4335"></path>
                                            <path
                                                d="M17.64 9.2c0-.74-.06-1.28-.19-1.84H9v3.34h4.96c-.1.83-.64 2.08-1.84 2.92l2.84 2.2c1.7-1.57 2.68-3.88 2.68-6.62z"
                                                fill="#4285F4"></path>
                                            <path
                                                d="M3.88 10.78A5.54 5.54 0 0 1 3.58 9c0-.62.11-1.22.29-1.78L.96 4.96A9.008 9.008 0 0 0 0 9c0 1.45.35 2.82.96 4.04l2.92-2.26z"
                                                fill="#FBBC05"></path>
                                            <path
                                                d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.84-2.2c-.76.53-1.78.9-3.12.9-2.38 0-4.4-1.57-5.12-3.74L.97 13.04C2.45 15.98 5.48 18 9 18z"
                                                fill="#34A853"></path>
                                            <path d="M0 0h18v18H0V0z"></path>
                                        </g>
                                    </svg>
                                </div>
                                <div className="social-login-element">
                                    <svg
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        role="presentation"
                                        aria-hidden="true"
                                        focusable="false"
                                        style={{
                                            height: 20,
                                            width: 20,
                                            display: "block",
                                            fill: "currentcolor",
                                        }}>
                                        <path d="m13.3 2.1a5.1 5.1 0 0 1 3.8-2.1 5.1 5.1 0 0 1 -1.2 3.8 4.1 4.1 0 0 1 -3.6 1.7 4.5 4.5 0 0 1 1-3.4zm-5 3.7c-2.8 0-5.8 2.5-5.8 7.3 0 4.9 3.5 10.9 6.3 10.9 1 0 2.5-1 4-1s2.6.9 4 .9c3.1 0 5.3-6.4 5.3-6.4a5.3 5.3 0 0 1 -3.2-4.9 5.2 5.2 0 0 1 2.6-4.5 5.4 5.4 0 0 0 -4.7-2.4c-2 0-3.5 1.1-4.3 1.1-.9 0-2.4-1-4.2-1z"></path>
                                    </svg>
                                </div>
                            </div>
                            <div className="social-login-element">
                                <svg
                                    viewBox="0 0 24 24"
                                    role="presentation"
                                    aria-hidden="true"
                                    focusable="false"
                                    style={{
                                        position: "absolute",
                                        left: "23px",
                                        height: 20,
                                        width: 20,
                                        display: "block",
                                        fill: "currentcolor",
                                    }}>
                                    <path
                                        d="m22.5 4h-21c-.83 0-1.5.67-1.5 1.51v12.99c0 .83.67 1.5 1.5 1.5h20.99a1.5 1.5 0 0 0 1.51-1.51v-12.98c0-.84-.67-1.51-1.5-1.51zm.5 14.2-6.14-7.91 6.14-4.66v12.58zm-.83-13.2-9.69 7.36c-.26.2-.72.2-.98 0l-9.67-7.36h20.35zm-21.17.63 6.14 4.67-6.14 7.88zm.63 13.37 6.3-8.1 2.97 2.26c.62.47 1.57.47 2.19 0l2.97-2.26 6.29 8.1z"
                                        fillRule="evenodd"></path>
                                </svg>
                                <span>이메일로 로그인하기</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="sticky-view-container">
                    <div className="sticky-view">
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
