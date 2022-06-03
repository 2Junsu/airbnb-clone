import React, { useState, useRef, useEffect } from "react";
import logo from "../assets/imgs/airbnb.png";
import { Link } from "react-router-dom";
import { SignupModal } from ".";
import styled from "styled-components";

const Header = () => {
    const [openMemberInfo, setOpenMemberInfo] = useState(false);
    const [isSignupOpen, setIsSignupOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const memberRef = useRef();
    const memberModalRef = useRef();

    const HandleSignupModal = () => {
        setIsSignupOpen(!isSignupOpen);
    };

    const HandleSearchModal = () => {
        setIsSearchOpen(!isSearchOpen);
    };

    const closeMember = (e) => {
        if (
            openMemberInfo &&
            !memberModalRef.current.contains(e.target) &&
            !memberRef.current.contains(e.target)
        )
            setOpenMemberInfo(false);
    };

    useEffect(() => {
        window.addEventListener("click", closeMember);

        return () => {
            window.removeEventListener("click", closeMember);
        };
    });

    return (
        <>
            <HeaderWrap>
                <HeaderLeftContainer>
                    <Link to="/">
                        <img
                            width="102px"
                            height="32px"
                            src={logo}
                            alt="logo"
                        />
                    </Link>
                </HeaderLeftContainer>
                <HeaderCenterContainer>
                    {isSearchOpen ? (
                        <SearchDetail>
                            <SearchTypeWrap>
                                <SearchType>
                                    <TypeBtn>
                                        <div>
                                            <span>숙소</span>
                                        </div>
                                    </TypeBtn>
                                    <TypeBtn>
                                        <div>
                                            <span>체험</span>
                                        </div>
                                    </TypeBtn>
                                </SearchType>
                                <Online>
                                    <div>온라인 체험</div>
                                </Online>
                            </SearchTypeWrap>
                        </SearchDetail>
                    ) : (
                        <Search onClick={HandleSearchModal}>
                            <WhereBtn>
                                <div>어디든지</div>
                            </WhereBtn>
                            <span></span>
                            <WhenBtn>
                                <div>언제든 일주일</div>
                            </WhenBtn>
                            <span></span>
                            <GuestBtn>
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
                            </GuestBtn>
                        </Search>
                    )}
                </HeaderCenterContainer>
                <NavbarWrap>
                    <Navbar>
                        <NavElem>
                            <Link
                                to="/host"
                                style={{
                                    textDecoration: "none",
                                    color: "inherit",
                                }}>
                                <HostBtn>호스트 되기</HostBtn>
                            </Link>
                            <NavLang>
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
                            </NavLang>
                        </NavElem>
                        <NavElem2
                            ref={memberRef}
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
                                <MemberInfoContainer ref={memberModalRef}>
                                    <div
                                        style={{
                                            paddingBottom: 8,
                                            borderBottom: "1px solid #cccccc",
                                        }}>
                                        <button
                                            style={{ fontWeight: "bold" }}
                                            onClick={HandleSignupModal}>
                                            회원 가입
                                        </button>
                                        <button onClick={HandleSignupModal}>
                                            로그인
                                        </button>
                                    </div>
                                    <div style={{ paddingTop: 8 }}>
                                        <button>숙소 호스트 되기</button>
                                        <button>체험 호스팅하기</button>
                                        <button>도움말</button>
                                    </div>
                                </MemberInfoContainer>
                            )}
                        </NavElem2>
                    </Navbar>
                </NavbarWrap>
                <SignupModal
                    modalStatus={isSignupOpen}
                    closeModal={HandleSignupModal}
                    width={500}
                />
            </HeaderWrap>
            {isSearchOpen && (
                <SearchDetailBarWrap>
                    <SearchDetailView>
                        <SearchDetailBar>
                            <SearchDetailElement>
                                <SearchDetailElementInner>
                                    <div>
                                        <span>여행지</span>
                                        <input placeholder="여행지 검색" />
                                    </div>
                                </SearchDetailElementInner>
                            </SearchDetailElement>
                            <SearchDetailElement
                                style={{
                                    width: 300,
                                }}>
                                <SearchDetailElementInner>
                                    <div
                                        style={{
                                            borderLeft: "1px solid #cccccc",
                                        }}>
                                        <span>날짜</span>
                                        <span>의 일주일</span>
                                    </div>
                                </SearchDetailElementInner>
                            </SearchDetailElement>
                            <SearchDetailElement>
                                <SearchDetailElementInner>
                                    <div
                                        style={{
                                            borderLeft: "1px solid #cccccc",
                                        }}>
                                        <span>여행자</span>
                                        <span>게스트 추가</span>
                                    </div>
                                    <SearchDetailBtnWrap>
                                        <SearchDetailBtn>
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
                                                    strokeWidth: "5.33333",
                                                    overflow: "visible",
                                                    padding: 8,
                                                    borderRadius: "50%",
                                                    color: "white",
                                                }}>
                                                <g fill="none">
                                                    <path d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"></path>
                                                </g>
                                            </svg>
                                        </SearchDetailBtn>
                                    </SearchDetailBtnWrap>
                                </SearchDetailElementInner>
                            </SearchDetailElement>
                        </SearchDetailBar>
                    </SearchDetailView>
                    <Overlay
                        onClick={() => {
                            setIsSearchOpen(false);
                        }}></Overlay>
                </SearchDetailBarWrap>
            )}
        </>
    );
};

const HeaderWrap = styled.header`
    display: flex;
    padding: 0px 80px;
    border-bottom: 1px solid #cccccc;
    & > div {
        flex: 1;
        padding: 24px 0px;
        display: flex;
        align-items: center;
    }
    & div > button > div {
        padding: 0px 8px;
    }
    & div span {
        border: 0.5px solid #cccccc;
        height: 20px;
    }
`;
const HeaderLeftContainer = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    & > img:hover {
        cursor: pointer;
    }
`;
const HeaderCenterContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Search = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid #cccccc;
    border-radius: 40px;
    padding: 0px 8px;
    white-space: nowrap;
    height: 48px;
    position: relative;
    &:hover {
        cursor: pointer;
        box-shadow: 0px 3px 10px #cccccc;
    }
`;
const SearchDetail = styled.div``;
const SearchTypeWrap = styled.div`
    display: flex;
    align-items: center;
    font-size: 18px;
`;
const SearchType = styled.div``;
const Online = styled.div`
    & > div {
        border: 2px solid transparent;
        margin: 0px 16px;
        padding: 10px 0px;
        &:hover {
            transition: 0.1s all linear;
            border-bottom: 2px solid black;
        }
    }
    &:hover {
        cursor: pointer;
    }
`;
const TypeBtn = styled.button`
    all: unset;
    border: 2px solid transparent;
    & > div:hover {
        cursor: pointer;
    }
    & > div > span {
        all: unset;
        margin: 0px 16px;
        padding: 10px 0px;
        &:hover {
            transition: 0.1s all linear;
            border-bottom: 2px solid black;
        }
    }
`;
const SearchDetailBarWrap = styled.div`
    z-index: 1;
    position: absolute;
    top: 84px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`;
const SearchDetailView = styled.div`
    padding: 20px 0px;
    width: 100%;
    background-color: white;
    display: flex;
    justify-content: center;
`;
const SearchDetailBar = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid rgb(221, 221, 221);
    border-radius: 48px;
`;
const SearchDetailElement = styled.div`
    font-size: 14px;
    display: flex;
    align-items: center;
`;
const SearchDetailElementInner = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 48px;
    border-radius: 36px;
    padding: 14px 0px;
    &:hover {
        cursor: pointer;
        background-color: white;
        filter: brightness(90%);
    }
    & > div {
        padding: 0px 24px;
        display: flex;
        flex-direction: column;
    }
    & > div > span {
        padding-bottom: 2px;
    }
    & > div > input {
        border: none;
        background-color: transparent;
        &:focus {
            outline: none;
        }
        &::placeholder {
            font-size: 16px;
        }
    }
`;
const SearchDetailBtnWrap = styled.div`
    /* padding-right: 9px; */
    position: relative;
`;
const SearchDetailBtn = styled.button`
    all: unset;
    display: flex;
    align-items: center;
    background-color: #ff385c;
    border-radius: 50%;
    padding: 8px;
    &:hover {
        cursor: pointer;
        filter: brightness(90%);
    }
`;
const Overlay = styled.div`
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.3;
`;
const WhereBtn = styled.button`
    display: flex;
    align-items: center;
    border: none;
    background-color: transparent;
    font-size: 16px;
    font-weight: 400;
    &:hover {
        cursor: pointer;
    }
`;
const WhenBtn = styled(WhereBtn)``;
const GuestBtn = styled(WhereBtn)`
    color: rgb(113, 113, 113);
`;
const NavbarWrap = styled.div`
    display: flex;
    justify-content: flex-end;
`;
const Navbar = styled.nav`
    display: flex;
    align-items: center;
`;
const NavElem = styled.div`
    display: flex;
    align-items: center;
`;
const HostBtn = styled.div`
    padding: 12px;
    font-size: 16px;
    font-weight: 400;
    border-radius: 30px;
    &:hover {
        background-color: #eeeeee;
        cursor: pointer;
    }
`;
const NavLang = styled.div`
    padding: 12px;
    border-radius: 30px;
    margin-right: 8px;
    &:hover {
        background-color: #eeeeee;
        cursor: pointer;
    }
`;
const NavElem2 = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    border: 1px solid #cccccc;
    border-radius: 50px;
    padding: 12px;
    &:hover {
        box-shadow: 0px 3px 5px #cccccc;
        cursor: pointer;
    }

    & > div {
        margin: 0px 6px;
    }
`;
const MemberInfoContainer = styled.div`
    position: absolute;
    top: 60px;
    right: 0px;
    width: 250px;
    background-color: white;
    z-index: 1;
    border-radius: 12px;
    box-shadow: 0px -3px 10px #cccccc;
    padding: 8px 0px;
    & > div {
        display: flex;
        flex-direction: column;
    }
    & > div > button {
        all: unset;
        padding: 16px;
    }
    & > div > button:hover {
        background-color: #eeeeee;
    }
`;
export default Header;
