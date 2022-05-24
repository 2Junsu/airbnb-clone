import React, { useState, useRef } from "react";
import "../css/header.css";
import logo from "../assets/imgs/airbnb.png";
import { Link } from "react-router-dom";
import { SignupModal } from ".";
import Modal from "./Modal";

const Header = () => {
    const [openMemberInfo, setOpenMemberInfo] = useState(false);
    const [isSignupOpen, setIsSignupOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const memberRef = useRef();

    const openSignupModal = () => {
        setIsSignupOpen(true);
    };

    const openSearchModal = () => {
        setIsSearchOpen(true);
    };

    const closeSignupModal = () => {
        setIsSignupOpen(false);
    };

    const closeSearchModal = () => {
        setIsSearchOpen(false);
    };

    return (
        <header id="header">
            <div className="header-left-container">
                <Link to="/">
                    <img width="102px" height="32px" src={logo} alt="logo" />
                </Link>
            </div>
            <div className="header-center-container">
                <div className="search" onClick={openSearchModal}>
                    <button id="where">
                        <div>어디든지</div>
                    </button>
                    <span></span>
                    <button id="when">
                        <div>언제든 일주일</div>
                    </button>
                    <span></span>
                    <button id="guest">
                        <div>게스트 추가</div>
                        <div>
                            <svg
                                viewBox="0 0 32 32"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                                role="presentation"
                                focusable="false"
                                style={{
                                    display: "block",
                                    fill: "none",
                                    height: 12,
                                    width: 12,
                                    stroke: "currentcolor",
                                    strokeWidth: "5.33333",
                                    overflow: "visible",
                                    backgroundColor: "#ff385c",
                                    padding: 8,
                                    borderRadius: "50%",
                                    color: "white",
                                }}>
                                <g fill="none">
                                    <path d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"></path>
                                </g>
                            </svg>
                        </div>
                    </button>
                </div>
                {/* <Modal
                    modalStatus={isSearchOpen}
                    closeModal={closeSearchModal}
                    className="search-modal">
                    <div>지역으로 검색하기</div>
                    <button onClick={closeSearchModal}>close</button>
                </Modal> */}
            </div>
            <div className="navbar">
                <nav>
                    <div className="nav-elem">
                        <div className="host-btn">호스트 되기</div>
                        <div className="nav-lang">
                            <svg
                                viewBox="0 0 16 16"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                                role="presentation"
                                focusable="false"
                                style={{
                                    display: "block",
                                    height: 16,
                                    width: 16,
                                    fill: "currentcolor",
                                }}>
                                <path d="m8.002.25a7.77 7.77 0 0 1 7.748 7.776 7.75 7.75 0 0 1 -7.521 7.72l-.246.004a7.75 7.75 0 0 1 -7.73-7.513l-.003-.245a7.75 7.75 0 0 1 7.752-7.742zm1.949 8.5h-3.903c.155 2.897 1.176 5.343 1.886 5.493l.068.007c.68-.002 1.72-2.365 1.932-5.23zm4.255 0h-2.752c-.091 1.96-.53 3.783-1.188 5.076a6.257 6.257 0 0 0 3.905-4.829zm-9.661 0h-2.75a6.257 6.257 0 0 0 3.934 5.075c-.615-1.208-1.036-2.875-1.162-4.686l-.022-.39zm1.188-6.576-.115.046a6.257 6.257 0 0 0 -3.823 5.03h2.75c.085-1.83.471-3.54 1.059-4.81zm2.262-.424c-.702.002-1.784 2.512-1.947 5.5h3.904c-.156-2.903-1.178-5.343-1.892-5.494l-.065-.007zm2.28.432.023.05c.643 1.288 1.069 3.084 1.157 5.018h2.748a6.275 6.275 0 0 0 -3.929-5.068z"></path>
                            </svg>
                        </div>
                    </div>
                    <div
                        className="nav-elem2"
                        onClick={() => {
                            setOpenMemberInfo(!openMemberInfo);
                        }}>
                        <div>
                            <svg
                                viewBox="0 0 32 32"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                                role="presentation"
                                focusable="false"
                                style={{
                                    display: "block",
                                    fill: "none",
                                    height: 16,
                                    width: 16,
                                    stroke: "currentcolor",
                                    strokeWidth: 3,
                                    overflow: "visible",
                                }}>
                                <g fill="none" fillRule="nonzero">
                                    <path d="m2 16h28"></path>
                                    <path d="m2 24h28"></path>
                                    <path d="m2 8h28"></path>
                                </g>
                            </svg>
                        </div>
                        <div>
                            <svg
                                viewBox="0 0 32 32"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                                role="presentation"
                                focusable="false"
                                style={{
                                    display: "block",
                                    height: 30,
                                    width: 30,
                                    fill: "currentcolor",
                                }}>
                                <path d="m16 .7c-8.437 0-15.3 6.863-15.3 15.3s6.863 15.3 15.3 15.3 15.3-6.863 15.3-15.3-6.863-15.3-15.3-15.3zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4 6.507 6.507 0 0 1 -3.018-5.49c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 0 1 -3.019 5.491 12.42 12.42 0 0 1 6.452 4.4c-2.328 2.925-5.912 4.809-9.933 4.809z"></path>
                            </svg>
                        </div>
                        {openMemberInfo && (
                            <div
                                className="memberInfoContainer"
                                ref={memberRef}>
                                <div
                                    style={{
                                        paddingBottom: 8,
                                        borderBottom: "1px solid #cccccc",
                                    }}>
                                    <button
                                        style={{ fontWeight: "bold" }}
                                        onClick={openSignupModal}>
                                        회원 가입
                                    </button>
                                    <button onClick={openSignupModal}>
                                        로그인
                                    </button>
                                </div>
                                <div style={{ paddingTop: 8 }}>
                                    <button>숙소 호스트 되기</button>
                                    <button>체험 호스팅하기</button>
                                    <button>도움말</button>
                                </div>
                            </div>
                        )}
                    </div>
                </nav>
            </div>
            <SignupModal
                modalStatus={isSignupOpen}
                closeModal={closeSignupModal}
                width={500}
            />
        </header>
    );
};

export default Header;
