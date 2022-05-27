import React from "react";
import { Header, Review, Footer } from "../components";
import "../css/product.css";
import notice from "../assets/imgs/notice.png";
import superhost from "../assets/imgs/superhost.png";
import { useNavigate } from "react-router-dom";

const Product = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Header />
            <main>
                <div className="product-container">
                    <div>
                        <strong className="title">라이트 하우스</strong>
                        <div className="under-title">
                            <div className="tag">
                                <span>Vestervig</span>,&nbsp;
                                <span>덴마크</span>
                            </div>
                            <div className="under-title-button-container">
                                <div className="under-title-button">
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
                                            strokeWidth: 2,
                                            overflow: "visible",
                                        }}>
                                        <g fill="none">
                                            <path d="M27 18v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-9"></path>
                                            <path d="M16 3v23V3z"></path>
                                            <path d="M6 13l9.293-9.293a1 1 0 0 1 1.414 0L26 13"></path>
                                        </g>
                                    </svg>
                                    <span style={{ marginLeft: 8 }}>
                                        공유하기
                                    </span>
                                </div>
                                <div className="under-title-button">
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
                                            strokeWidth: 2,
                                            overflow: "visible",
                                        }}>
                                        <path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"></path>
                                    </svg>
                                    <span style={{ marginLeft: 8 }}>저장</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="image-container">
                        <div style={{ flex: 2 }}>
                            <img
                                id="main-image"
                                className="main-image"
                                src="https://a0.muscache.com/im/pictures/ffea2065-5b15-4a33-88ce-eca502589521.jpg?im_w=960"
                                alt="main"
                            />
                        </div>
                        <div className="sub-image-container">
                            <img
                                className="sub-image"
                                src="https://a0.muscache.com/im/pictures/df9094ca-e87e-40be-8881-c01ae8c591f7.jpg?im_w=480"
                                alt="sub"
                            />
                            <img
                                style={{ paddingTop: 8 }}
                                className="sub-image"
                                src="https://a0.muscache.com/im/pictures/df9094ca-e87e-40be-8881-c01ae8c591f7.jpg?im_w=480"
                                alt="sub"
                            />
                        </div>
                        <div className="sub-image-container">
                            <img
                                style={{ borderTopRightRadius: 12 }}
                                className="sub-image"
                                src="https://a0.muscache.com/im/pictures/df9094ca-e87e-40be-8881-c01ae8c591f7.jpg?im_w=480"
                                alt="sub"
                            />
                            <img
                                style={{
                                    borderBottomRightRadius: 12,
                                    paddingTop: 8,
                                }}
                                className="sub-image"
                                src="https://a0.muscache.com/im/pictures/df9094ca-e87e-40be-8881-c01ae8c591f7.jpg?im_w=480"
                                alt="sub"
                            />
                        </div>
                        <button className="show-all-imgs">
                            <div>
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
                                    <path
                                        d="m3 11.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-10-5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-10-5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"
                                        fillRule="evenodd"></path>
                                </svg>
                                <span>사진 모두 보기</span>
                            </div>
                        </button>
                    </div>
                    <div
                        style={{
                            width: "100%",
                            display: "flex",
                        }}>
                        <div style={{ width: "60%" }}>
                            <section id="profile">
                                <div>
                                    <h2>제이님이 호스팅하는 저택 전체</h2>
                                    <ol
                                        style={{
                                            padding: 0,
                                            display: "flex",
                                            listStyleType: "none",
                                        }}>
                                        <li>
                                            <span>최대 인원 6명</span>
                                        </li>
                                        <li>
                                            <span> · </span>
                                            <span>침실 3개</span>
                                        </li>
                                        <li>
                                            <span> · </span>
                                            <span>침대 2개</span>
                                        </li>
                                        <li>
                                            <span> · </span>
                                            <span>욕실 2개</span>
                                        </li>
                                    </ol>
                                </div>
                                <div className="profile-img-container">
                                    <img
                                        className="profile-img"
                                        src="https://a0.muscache.com/im/pictures/user/5b9f0066-fc4d-4f7f-befc-4d61cc7d54b1.jpg?im_w=240"
                                        alt="profile"
                                    />
                                </div>
                            </section>
                            <section id="feature">
                                <div>
                                    <svg
                                        viewBox="0 0 32 32"
                                        xmlns="http://www.w3.org/2000/svg"
                                        aria-hidden="true"
                                        role="presentation"
                                        focusable="false"
                                        style={{
                                            display: "block",
                                            height: 24,
                                            width: 24,
                                            fill: "currentcolor",
                                        }}>
                                        <path d="m24.3334 1.66675c1.0543745 0 1.9181663.81587127 1.9945143 1.85073677l.0054857.14926323-.00065 24.666 3.00065.00075v2h-26.66665v-2l3-.00075v-24.666c0-1.05436681.81587301-1.91816558 1.850737-1.99451429l.149263-.00548571zm-4.00065 2h-12.666l-.00075 24.66625 12.66675-.00025zm4.00065 0h-2.00065v24.666l2.00025.00025zm-7.0001 11.00002c.7363778 0 1.33333.5969522 1.33333 1.33333s-.5969522 1.33333-1.33333 1.33333-1.33333-.5969522-1.33333-1.33333.5969522-1.33333 1.33333-1.33333z"></path>
                                    </svg>
                                    <div>
                                        <strong>셀프 체크인</strong>
                                        <span>
                                            스마트 도어록을 이용해 체크인하세요
                                        </span>
                                    </div>
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
                                            height: 36,
                                            width: 36,
                                            fill: "currentcolor",
                                        }}>
                                        <path d="m16 17c3.8659932 0 7 3.1340068 7 7s-3.1340068 7-7 7-7-3.1340068-7-7 3.1340068-7 7-7zm0 2c-2.7614237 0-5 2.2385763-5 5s2.2385763 5 5 5 5-2.2385763 5-5-2.2385763-5-5-5zm9.6666667-18.66666667c1.0543618 0 1.9181651.81587779 1.9945142 1.85073766l.0054858.14926234v6.38196601c0 .70343383-.3690449 1.35080636-.9642646 1.71094856l-.1413082.0779058-9.6666667 4.8333334c-.5067495.2533747-1.0942474.2787122-1.6171466.0760124l-.1717078-.0760124-9.66666666-4.8333334c-.62917034-.3145851-1.04315599-.93418273-1.09908674-1.62762387l-.00648607-.16123049v-6.38196601c0-1.05436179.81587779-1.91816512 1.85073766-1.99451426l.14926234-.00548574zm0 2h-19.33333337v6.38196601l9.66666667 4.83333336 9.6666667-4.83333336z"></path>
                                    </svg>
                                    <div>
                                        <strong>
                                            제이님은 슈퍼호스트입니다
                                        </strong>
                                        <span>
                                            슈퍼호스트는 풍부한 경험과 높은
                                            평점을 자랑하며 게스트가 숙소에서
                                            편안히 머무를 수 있도록 최선을
                                            다하는 호스트입니다.
                                        </span>
                                    </div>
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
                                            height: 24,
                                            width: 24,
                                            fill: "currentcolor",
                                        }}>
                                        <path d="M16 0c6.627 0 12 5.373 12 12 0 6.337-3.814 12.751-11.346 19.257L16 31.82l-1.076-.932C7.671 24.509 4 18.218 4 12 4 5.423 9.397 0 16 0zm0 2C10.504 2 6 6.525 6 12c0 5.44 3.249 11.118 9.831 17.02l.169.149.576-.518c6.178-5.65 9.293-11.092 9.42-16.318L26 12c0-5.523-4.477-10-10-10zm0 5a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"></path>
                                    </svg>
                                    <div>
                                        <strong>훌륭한 숙소 위치</strong>
                                        <span>
                                            최근 숙박한 게스트 중 100%가 위치에
                                            별점 5점을 준 숙소입니다.
                                        </span>
                                    </div>
                                </div>
                            </section>
                            <section id="aircover">
                                <img
                                    style={{ marginBottom: 16 }}
                                    width="98px"
                                    height="26px"
                                    src="https://a0.muscache.com/im/pictures/51a7f002-b223-4e05-a2af-0d4838411d92.jpg"
                                    alt="aircover"
                                />
                                <span style={{ marginBottom: 16 }}>
                                    모든 예약에는 호스트가 예약을 취소하거나
                                    숙소 정보가 정확하지 않은 경우 또는 체크인에
                                    문제가 있는 상황에 대비한 무료 보호
                                    프로그램이 포함됩니다.
                                </span>
                                <button className="more-btn">
                                    더 알아보기
                                </button>
                            </section>
                            <section id="description">
                                <div className="translation">
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
                                            marginRight: 12,
                                        }}>
                                        <path d="M9 0a1 1 0 0 1 .993.883L10 1v5h5a1 1 0 0 1 .993.883L16 7v8a1 1 0 0 1-.883.993L15 16H7a1 1 0 0 1-.993-.883L6 15v-5H1a1 1 0 0 1-.993-.883L0 9V1A1 1 0 0 1 .883.007L1 0h8zm1.729 7l-1.393.495.233.217.13.132c.125.127.227.245.308.352l.073.103.048.073.045.077H7.308v1.309h1.207l.166.52.09.266.112.29a6.294 6.294 0 0 0 1.109 1.789c-.495.315-1.119.607-1.87.87l-.331.112-.346.108-.445.134L7.72 15l.407-.125.386-.128c1.007-.349 1.836-.752 2.486-1.214.57.405 1.277.764 2.12 1.08l.369.134.386.128.406.125.72-1.153-.445-.134-.26-.08-.345-.115c-.783-.27-1.43-.57-1.94-.895a6.3 6.3 0 0 0 1.068-1.694l.128-.32.114-.33.165-.521h1.208V8.449H11.64l-.093-.231a3.696 3.696 0 0 0-.554-.917l-.126-.149-.14-.152zm1.35 2.758l-.042.133-.076.224-.103.264A4.985 4.985 0 0 1 11 11.76a4.952 4.952 0 0 1-.743-1.127l-.115-.254-.103-.264-.076-.224-.042-.133h2.158zM9 1H1v8h5V7c0-.057.005-.113.014-.167H3.827L3.425 8H2l2.257-6h1.486l1.504 4H9V1zM5 3.411L4.253 5.6h1.502L5 3.411z"></path>
                                    </svg>
                                    <span>
                                        일부 정보는 자동 번역되었습니다.&nbsp;
                                    </span>
                                    <button className="more-btn">
                                        원문 보기
                                    </button>
                                </div>
                                <div
                                    style={{
                                        paddingTop: 32,
                                        textOverflow: "ellipsis",
                                    }}>
                                    <span
                                        style={{
                                            display: "block",
                                            lineHeight: "24px",
                                        }}>
                                        Qiandao Lake Green Lake View Resort
                                        Villa에는 4개의 침실, 5개의 침실, 6개의
                                        침실로 구분된 3개의 인접한 호수가 보이는
                                        저택이 있습니다. 빌라는 에메랄드 섬의
                                        유명한 풍경에 있습니다. 디자이너 Kengo
                                        Kuma가 디자인했습니다. 치안다오 레이크
                                        타운에서 가장 친환경적이고 프라이빗한
                                        빌라 지역입니다. 시내 중심가에서 8분
                                        거리에 있어 교통이 편리합니다.단체예약은
                                        문의바랍니다. 6베드룸 빌라는 북쪽과
                                        남쪽을 향하고 있으며, 산과 물로 둘러싸여
                                        있으며, 새와 꽃이 있으며, 항상 다른
                                        경치가 있습니다.빌라에는 총 6개의 객실이
                                        있으며, 각각 호수 전망을 자랑하며,
                                        세련되고 완비된 스타일로 중저가 호텔
                                        기준으로 꾸며져 있습니다.거실, 대형
                                        테라스, 오픈 키친은 전망과 교류는 물론
                                        프로젝션, ktv, 마작을 즐길 수 있는 공용
                                        공간으로, 편안한 휴가를 보내기에 좋은
                                        선택입니다.
                                    </span>
                                    <button
                                        style={{ marginTop: 16 }}
                                        className="more-btn">
                                        더 보기 &gt;
                                    </button>
                                </div>
                            </section>
                            <section id="amenities-container">
                                <div style={{ paddingBottom: 24 }}>
                                    <h2>숙소 편의시설</h2>
                                </div>
                                <div>
                                    <div className="amenities-item">
                                        <svg
                                            viewBox="0 0 32 32"
                                            xmlns="http://www.w3.org/2000/svg"
                                            aria-hidden="true"
                                            role="presentation"
                                            focusable="false"
                                            style={{
                                                display: "block",
                                                height: 24,
                                                width: 24,
                                                fill: "currentcolor",
                                                marginRight: 16,
                                            }}>
                                            <path d="M28 2a2 2 0 0 1 1.995 1.85L30 4v24a2 2 0 0 1-1.85 1.995L28 30H4a2 2 0 0 1-1.995-1.85L2 28V4a2 2 0 0 1 1.85-1.995L4 2zm-5.92 19.995L22 22H10l-.08-.005L4 27.916V28h24v-.085zM28 4H4v21.084l12-11.998 12 12zM16 15.915L11.915 20h8.17zM22 7a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
                                        </svg>
                                        <span>산 전망</span>
                                    </div>
                                    <div className="amenities-item">
                                        <svg
                                            viewBox="0 0 32 32"
                                            xmlns="http://www.w3.org/2000/svg"
                                            aria-hidden="true"
                                            role="presentation"
                                            focusable="false"
                                            style={{
                                                display: "block",
                                                height: 24,
                                                width: 24,
                                                fill: "currentcolor",
                                                marginRight: 16,
                                            }}>
                                            <path d="M28 2a2 2 0 0 1 1.995 1.85L30 4v24a2 2 0 0 1-1.85 1.995L28 30H4a2 2 0 0 1-1.995-1.85L2 28V4a2 2 0 0 1 1.85-1.995L4 2zm-5.92 19.995L22 22H10l-.08-.005L4 27.916V28h24v-.085zM28 4H4v21.084l12-11.998 12 12zM16 15.915L11.915 20h8.17zM22 7a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
                                        </svg>
                                        <span>숲 전망</span>
                                    </div>
                                    <div className="amenities-item">
                                        <svg
                                            viewBox="0 0 32 32"
                                            xmlns="http://www.w3.org/2000/svg"
                                            aria-hidden="true"
                                            role="presentation"
                                            focusable="false"
                                            style={{
                                                display: "block",
                                                height: 24,
                                                width: 24,
                                                fill: "currentcolor",
                                                marginRight: 16,
                                            }}>
                                            <path d="M28 2a2 2 0 0 1 1.995 1.85L30 4v24a2 2 0 0 1-1.85 1.995L28 30H4a2 2 0 0 1-1.995-1.85L2 28V4a2 2 0 0 1 1.85-1.995L4 2zm-5.92 19.995L22 22H10l-.08-.005L4 27.916V28h24v-.085zM28 4H4v21.084l12-11.998 12 12zM16 15.915L11.915 20h8.17zM22 7a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
                                        </svg>
                                        <span>호수로 연결됨</span>
                                    </div>
                                    <div className="amenities-item">
                                        <svg
                                            viewBox="0 0 32 32"
                                            xmlns="http://www.w3.org/2000/svg"
                                            aria-hidden="true"
                                            role="presentation"
                                            focusable="false"
                                            style={{
                                                display: "block",
                                                height: 24,
                                                width: 24,
                                                fill: "currentcolor",
                                                marginRight: 16,
                                            }}>
                                            <path d="M28 2a2 2 0 0 1 1.995 1.85L30 4v24a2 2 0 0 1-1.85 1.995L28 30H4a2 2 0 0 1-1.995-1.85L2 28V4a2 2 0 0 1 1.85-1.995L4 2zm-5.92 19.995L22 22H10l-.08-.005L4 27.916V28h24v-.085zM28 4H4v21.084l12-11.998 12 12zM16 15.915L11.915 20h8.17zM22 7a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
                                        </svg>
                                        <span>주방</span>
                                    </div>
                                    <div className="amenities-item">
                                        <svg
                                            viewBox="0 0 32 32"
                                            xmlns="http://www.w3.org/2000/svg"
                                            aria-hidden="true"
                                            role="presentation"
                                            focusable="false"
                                            style={{
                                                display: "block",
                                                height: 24,
                                                width: 24,
                                                fill: "currentcolor",
                                                marginRight: 16,
                                            }}>
                                            <path d="M28 2a2 2 0 0 1 1.995 1.85L30 4v24a2 2 0 0 1-1.85 1.995L28 30H4a2 2 0 0 1-1.995-1.85L2 28V4a2 2 0 0 1 1.85-1.995L4 2zm-5.92 19.995L22 22H10l-.08-.005L4 27.916V28h24v-.085zM28 4H4v21.084l12-11.998 12 12zM16 15.915L11.915 20h8.17zM22 7a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
                                        </svg>
                                        <span>무선 인터넷</span>
                                    </div>
                                </div>
                                <div style={{ marginTop: 24 }}>
                                    <button className="more-amenities">
                                        편의시설 51개 모두 보기
                                    </button>
                                </div>
                            </section>
                            <section id="accommodation-container">
                                <div>
                                    <h2>체크인 날짜를 선택해주세요.</h2>
                                </div>
                                <div style={{ paddingTop: 8 }}>
                                    <span
                                        style={{ color: "rgb(113, 113, 113)" }}>
                                        여행 날짜를 입력하여 정확한 요금을
                                        확인하세요.
                                    </span>
                                </div>
                                <div
                                    style={{
                                        width: "100%",
                                        height: 367,
                                        backgroundColor: "lightgray",
                                    }}></div>
                            </section>
                        </div>
                        <div id="sticky-view-container">
                            <div className="sticky-view">
                                <div className="sticky-view-text">
                                    <span style={{ fontSize: 22 }}>
                                        요금을 확인하려면 날짜를 입력하세요.
                                    </span>
                                    <div
                                        style={{
                                            display: "flex",
                                            marginTop: 8,
                                        }}>
                                        <svg
                                            viewBox="0 0 32 32"
                                            xmlns="http://www.w3.org/2000/svg"
                                            aria-hidden="true"
                                            role="presentation"
                                            focusable="false"
                                            style={{
                                                display: "block",
                                                height: 18,
                                                width: 18,
                                                fill: "currentcolor",
                                                marginRight: 8,
                                            }}>
                                            <path
                                                d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z"
                                                fillRule="evenodd"></path>
                                        </svg>
                                        <span>4.91 · 후기 60개</span>
                                    </div>
                                </div>
                                <div className="sticky-view-option-container">
                                    <div className="sticky-view-option">
                                        <button className="checkin-btn">
                                            <div
                                                style={{
                                                    borderRight:
                                                        "1px solid #cccccc",
                                                }}>
                                                <span style={{ fontSize: 12 }}>
                                                    체크인
                                                </span>
                                                <br />
                                                <span>날짜 추가</span>
                                            </div>
                                            <div>
                                                <span style={{ fontSize: 12 }}>
                                                    체크아웃
                                                </span>
                                                <br />
                                                <span>날짜 추가</span>
                                            </div>
                                        </button>
                                        <button className="guest-btn">
                                            <div>
                                                <span style={{ fontSize: 12 }}>
                                                    인원
                                                </span>
                                                <br />
                                                <span>게스트 1명</span>
                                            </div>
                                            <div className="arrow">&gt;</div>
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <button
                                        className="observation-btn"
                                        onClick={() => {
                                            navigate("/book");
                                        }}>
                                        <b>예약 가능 여부 보기</b>
                                    </button>
                                </div>
                            </div>
                            <div className="report-btn">
                                <svg
                                    viewBox="0 0 32 32"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                    role="presentation"
                                    focusable="false"
                                    style={{
                                        display: "block",
                                        height: 16,
                                        width: 16,
                                        fill: "currentcolor",
                                        marginRight: 16,
                                    }}>
                                    <path d="M28 6H17V4a2 2 0 0 0-2-2H3v28h2V18h10v2a2 2 0 0 0 2 2h11l.115-.006a1 1 0 0 0 .847-1.269L27.039 14l1.923-6.724A1 1 0 0 0 28 6z"></path>
                                </svg>
                                <span>숙소 신고하기</span>
                            </div>
                        </div>
                    </div>
                    <section id="review-container">
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                fontSize: 22,
                                marginBottom: 32,
                            }}>
                            <svg
                                viewBox="0 0 32 32"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                                role="presentation"
                                focusable="false"
                                style={{
                                    display: "block",
                                    height: 18,
                                    width: 18,
                                    fill: "currentcolor",
                                    marginRight: 8,
                                }}>
                                <path
                                    d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z"
                                    fillRule="evenodd"></path>
                            </svg>
                            <h2 style={{ fontSize: 22 }}>4.91 · 후기 60개</h2>
                        </div>
                        <div className="review-feature-container">
                            <div className="review-feature-wrap">
                                <div className="review-feature">
                                    <span>청결도</span>
                                    <div className="review-feature-rating">
                                        <div>
                                            <div className="outer"></div>
                                            <div className="inner"></div>
                                        </div>
                                        <span className="rating">4.0</span>
                                    </div>
                                </div>
                            </div>
                            <div className="review-feature-wrap">
                                <div className="review-feature">
                                    <span>정확성</span>
                                    <div className="review-feature-rating">
                                        <div>
                                            <div className="outer"></div>
                                            <div className="inner"></div>
                                        </div>
                                        <span className="rating">4.0</span>
                                    </div>
                                </div>
                            </div>
                            <div className="review-feature-wrap">
                                <div className="review-feature">
                                    <span>의사소통</span>
                                    <div className="review-feature-rating">
                                        <div>
                                            <div className="outer"></div>
                                            <div className="inner"></div>
                                        </div>
                                        <span className="rating">4.0</span>
                                    </div>
                                </div>
                            </div>
                            <div className="review-feature-wrap">
                                <div className="review-feature">
                                    <span>위치</span>
                                    <div className="review-feature-rating">
                                        <div>
                                            <div className="outer"></div>
                                            <div className="inner"></div>
                                        </div>
                                        <span className="rating">4.0</span>
                                    </div>
                                </div>
                            </div>
                            <div className="review-feature-wrap">
                                <div className="review-feature">
                                    <span>체크인</span>
                                    <div className="review-feature-rating">
                                        <div>
                                            <div className="outer"></div>
                                            <div className="inner"></div>
                                        </div>
                                        <span className="rating">4.0</span>
                                    </div>
                                </div>
                            </div>
                            <div className="review-feature-wrap">
                                <div className="review-feature">
                                    <span>가격 대비 만족도</span>
                                    <div className="review-feature-rating">
                                        <div>
                                            <div className="outer"></div>
                                            <div className="inner"></div>
                                        </div>
                                        <span className="rating">4.0</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="review-comment-container">
                            <div>
                                <Review />
                                <Review />
                                <Review />
                                <Review />
                                <Review />
                                <Review />
                            </div>
                            <div>
                                <button className="more-amenities">
                                    후기 22개 모두 보기
                                </button>
                            </div>
                        </div>
                    </section>
                    <section id="hosting-area">
                        <div style={{ paddingBottom: 24 }}>
                            <h2>호스팅 지역</h2>
                        </div>
                        <div style={{ marginBottom: 32 }}>
                            <div
                                style={{
                                    width: "100%",
                                    height: 480,
                                    backgroundColor: "skyblue",
                                }}></div>
                        </div>
                        <div>
                            <div style={{ marginBottom: 16 }}>
                                <strong>Terrasini, Sicilia, 이탈리아</strong>
                            </div>
                            <span>
                                팔레르모 중심지에서 차로 50분 이내에 테라시니로
                                이동할 수 있습니다.
                            </span>
                        </div>
                        <div style={{ marginTop: 16 }}>
                            <button className="more-btn">더 보기 &gt;</button>
                        </div>
                    </section>
                    <section id="host-info-container">
                        <div className="host-profile">
                            <div style={{ marginRight: 16 }}>
                                <img
                                    className="profile-img"
                                    src="https://a0.muscache.com/im/pictures/user/05b60272-2245-4b9e-b583-6ec590b5b9bf.jpg?im_w=240"
                                    alt="profile"
                                />
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                }}>
                                <strong>호스트: Vittorio Emanuele님</strong>
                                <span
                                    style={{ paddingTop: 8, color: "#717171" }}>
                                    회원 가입일: 2020년 9월
                                </span>
                            </div>
                        </div>
                        <div>
                            <div style={{ display: "flex", marginBottom: 36 }}>
                                <div
                                    className="host-badge"
                                    style={{ padding: "0px 12px" }}>
                                    <svg
                                        viewBox="0 0 32 32"
                                        xmlns="http://www.w3.org/2000/svg"
                                        aria-hidden="true"
                                        role="presentation"
                                        focusable="false"
                                        style={{
                                            display: "block",
                                            height: 16,
                                            width: 16,
                                            fill: "currentcolor",
                                            marginRight: 8,
                                        }}>
                                        <path
                                            d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z"
                                            fillRule="evenodd"></path>
                                    </svg>
                                    <span>후기 240개</span>
                                </div>
                                <div
                                    className="host-badge"
                                    style={{ padding: "0px 12px" }}>
                                    <svg
                                        viewBox="0 0 32 32"
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
                                        <path d="M16 .798l.555.37C20.398 3.73 24.208 5 28 5h1v12.5C29 25.574 23.21 31 16 31S3 25.574 3 17.5V5h1c3.792 0 7.602-1.27 11.445-3.832L16 .798zm7 9.08l-9.5 9.501-4.5-4.5L6.879 17l6.621 6.621L25.121 12 23 9.879z"></path>
                                    </svg>
                                    <span>본인 인증 완료</span>
                                </div>
                                <div
                                    className="host-badge"
                                    style={{ padding: "0px 12px" }}>
                                    <img src={superhost} alt="superhost" />
                                    <span>슈퍼호스트</span>
                                </div>
                            </div>
                            <div style={{ width: "50%" }}>
                                <div style={{ marginBottom: 16 }}>
                                    <strong>
                                        Vittorio Emanuele님은 슈퍼호스트입니다.
                                    </strong>
                                </div>
                                <span>
                                    슈퍼호스트는 풍부한 경험과 높은 평점을
                                    자랑하며 게스트가 숙소에서 편안히 머무를 수
                                    있도록 최선을 다하는 호스트입니다.
                                </span>
                            </div>
                            <ul className="host-ul">
                                <li>언어: English, Italiano</li>
                                <li>응답률: 100%</li>
                                <li>응답시간: 1시간 이내</li>
                            </ul>
                            <div style={{ marginTop: 32 }}>
                                <button className="more-amenities">
                                    호스트에게 연락하기
                                </button>
                            </div>
                            <div style={{ display: "flex", marginTop: 24 }}>
                                <svg
                                    viewBox="0 0 48 48"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                    role="presentation"
                                    focusable="false"
                                    style={{
                                        display: "block",
                                        height: 24,
                                        width: 24,
                                        stroke: "currentcolor",
                                        fill: "rgb(227,28,95)",
                                        marginRight: 16,
                                    }}>
                                    <g>
                                        <g stroke="none">
                                            <path
                                                d="m25 5 .5846837.00517475c4.2905015.07574932 8.8374917.98334075 13.644943 2.73687823l.7703733.28794702v27.3705076l-.0084766.1301365c-.0392237.2994207-.2122236.5656263-.4699074.7230756l-.1154775.0605995-11.4234694 5.0774159c.0623636-.7458456-.0433445-1.4943022-.3209346-2.2783707-.2495178-.7044496-.7667703-1.7805075-1.0418654-2.3950548-1.9094732-4.1561789-3.9589781-8.3688465-6.0912876-12.5211487l-.3317555-.6369277c-.4686141-.9115826-.8248653-1.6297768-1.3147672-2.2052384-.743401-.8737317-1.7668654-1.3549948-2.8821508-1.3549948-1.1154695 0-2.1391179.4816323-2.8828868 1.3557332-.6050254.7114646-1.0306408 1.6819288-1.6457867 2.8412431-.4956822.9653459-.9868615 1.9338929-1.47282629 2.9041739l.00159179-19.0721502.769087-.28647781c4.798406-1.75037189 9.3373349-2.65799308 13.6207364-2.73688762z"
                                                fillOpacity=".2"></path>
                                            <path d="m25 1c5.5985197 0 11.5175072 1.27473768 17.7548231 3.81642897.7027419.28641855 1.1783863.94329535 1.2386823 1.69066764l.0064946.16143432v28.73197667c0 1.8999458-1.0758761 3.6285379-2.7638433 4.4721215l-.2054644.0969363-15.0427818 6.6856808c-.4614217.2050763-1.8621146.3276624-2.7955525.3430957l-.192358.0016581.0009065-1.0005013c.6483674-.0069073 1.2843321-.1330366 1.8784107-.3747752.8327784-.3388673 1.5457548-.8939986 2.0790671-1.5885618l13.2600311-5.8942194c1.023196-.4547538 1.7028179-1.4383245 1.7751735-2.5449525l.0064111-.1964822v-28.73197667l-.6916987-.27704554c-5.7517231-2.26330416-11.1871718-3.39148539-16.3083013-3.39148539-5.1211255 0-10.5565697 1.12817946-16.3082877 3.39148006l-.6917123.27707479-.00030284 24.49382405c-.68067737 1.4079172-1.34834149 2.8151846-2.00083161 4.2173468l.00113445-28.71117085c0-.81311953.4922453-1.5453083 1.24525131-1.85215622 6.23725069-2.54166294 12.15623339-3.81639863 17.75474869-3.81639863z"></path>
                                        </g>
                                        <path
                                            d="m15.999908 41.6930234.6867258-.8851772c1.5957359-2.0328613 2.5919668-3.8873951 2.9612752-5.511912.2804314-1.2318637.2318527-2.5167089-.4804505-3.5591688-.6801015-.9952012-1.8642067-1.5894421-3.1673665-1.5894421-1.3033438 0-2.487633.5940563-3.1675505 1.5890729-.7099111 1.039137-.761802 2.3201055-.4810025 3.5580612.3689403 1.6247015 1.3653552 3.4796045 2.9616432 5.5133888l.6867258.8851772.6447715.7192179c1.1495113 1.2599236 2.1735278 2.122579 3.2227536 2.7149739.8151649.4602182 1.6400823.7413704 2.4521191.8358878.8812245.1033783 1.7585848-.0123685 2.559765-.3383795 1.6422905-.6682672 2.8186673-2.1775911 3.0700251-3.9387151.1205267-.8438258.0264975-1.6854363-.2876078-2.572644-.2495178-.7044496-.7667703-1.7805075-1.0418654-2.3950548-1.9094732-4.1561789-3.9589781-8.3688465-6.0912876-12.5211487-.6486357-1.2222643-1.0477537-2.1388241-1.6465227-2.8421661-.743401-.8737317-1.7668654-1.3549948-2.8821508-1.3549948-1.1154695 0-2.1391179.4816323-2.8828868 1.3557332-.6050254.7114646-1.0306408 1.6819288-1.6457867 2.8412431-2.1326775 4.1534098-4.1819984 8.3660775-6.09128759 12.5211487-.28227155.6306079-.79308369 1.6933742-1.04168139 2.3948702-.3141053.8872077-.40813448 1.7288182-.28760784 2.5731978.25117384 1.7609394 1.42736664 3.2700787 3.06965711 3.9385305.81939715.3333951 1.69418134.4397272 2.55958102.3385641.81295679-.0948866 1.63805829-.3760388 2.45248709-.8360724 1.0492258-.5922103 2.0732422-1.4550503 3.2227536-2.7149739z"
                                            fill="none"
                                            strokeWidth="2"></path>
                                    </g>
                                </svg>
                                <span>
                                    안전한 결제를 위해 에어비앤비 웹사이트나 앱
                                    외부에서 송금하거나 대화를 나누지 마세요.
                                </span>
                            </div>
                        </div>
                    </section>
                    <section id="notice">
                        <div style={{ paddingBottom: 24 }}>
                            <h2>알아두어야 할 사항</h2>
                        </div>
                        <div className="notice-content">
                            <div>
                                <div style={{ marginBottom: 12 }}>
                                    <strong>숙소 이용 규칙</strong>
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
                                            height: 16,
                                            width: 16,
                                            fill: "currentcolor",
                                            marginRight: 12,
                                        }}>
                                        <path d="M16 1C7.716 1 1 7.716 1 16s6.716 15 15 15 15-6.716 15-15S24.284 1 16 1zm7.895 22.954l-9.526-5.5a1.5 1.5 0 0 1-.743-1.154l-.007-.145v-11h3V16.29l8.776 5.067-1.5 2.598z"></path>
                                    </svg>
                                    <span>체크인: 오후 3:00 이후</span>
                                </div>
                            </div>
                            <div>
                                <div style={{ marginBottom: 12 }}>
                                    <strong>건강과 안전</strong>
                                </div>
                                <div>
                                    <img src={notice} alt="notice" />
                                    <span>
                                        에어비앤비 코로나19 방역 수칙을
                                        준수하셔야 합니다.
                                    </span>
                                </div>
                                <div>
                                    <img src={notice} alt="notice" />
                                    <span>일산화탄소 경보기 없음</span>
                                </div>
                                <div>
                                    <img src={notice} alt="notice" />
                                    <span>화재경보기 없음</span>
                                </div>
                                <div>
                                    <img src={notice} alt="notice" />
                                    <span>보안 카메라/녹화 장치</span>
                                </div>
                            </div>
                            <div>
                                <div style={{ marginBottom: 12 }}>
                                    <strong>환불 정책</strong>
                                </div>
                                <div>
                                    <span>5월 21일 전까지 무료 취소 가능</span>
                                </div>
                                <div style={{ marginTop: 24 }}>
                                    <button className="more-btn">
                                        더 보기 &gt;
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Product;
