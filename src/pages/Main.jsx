import React from "react";
import "../css/main.css";
import { LodgingCard, CategoryItem, Header } from "../components";
import { useNavigate } from "react-router-dom";

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const category_list = [
    "디자인",
    "국립공원",
    "B&B",
    "기상천외한 숙소",
    "북극",
    "A자형 주택",
    "돔하우스",
    "캠핑장",
    "셰어하우스",
    "동굴",
    "서핑",
    "초소형 주택",
    "호숫가",
    "해변 근처",
    "한적한 시골",
    "복토 주택",
];

const category_img = [
    "https://a0.muscache.com/pictures/50861fca-582c-4bcc-89d3-857fb7ca6528.jpg",
    "https://a0.muscache.com/pictures/c0a24c04-ce1f-490c-833f-987613930eca.jpg",
    "https://a0.muscache.com/pictures/5ed8f7c7-2e1f-43a8-9a39-4edfc81a3325.jpg",
    "https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg",
    "https://a0.muscache.com/pictures/8b44f770-7156-4c7b-b4d3-d92549c8652f.jpg",
    "https://a0.muscache.com/pictures/1d477273-96d6-4819-9bda-9085f809dad3.jpg",
    "https://a0.muscache.com/pictures/89faf9ae-bbbc-4bc4-aecd-cc15bf36cbca.jpg",
    "https://a0.muscache.com/pictures/ca25c7f3-0d1f-432b-9efa-b9f5dc6d8770.jpg",
    "https://a0.muscache.com/pictures/52c8d856-33d0-445a-a040-a162374de100.jpg",
    "https://a0.muscache.com/pictures/4221e293-4770-4ea8-a4fa-9972158d4004.jpg",
    "https://a0.muscache.com/pictures/957f8022-dfd7-426c-99fd-77ed792f6d7a.jpg",
    "https://a0.muscache.com/pictures/35919456-df89-4024-ad50-5fcb7a472df9.jpg",
    "https://a0.muscache.com/pictures/677a041d-7264-4c45-bb72-52bff21eb6e8.jpg",
    "https://a0.muscache.com/pictures/10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg",
    "https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg",
    "https://a0.muscache.com/pictures/d7445031-62c4-46d0-91c3-4f29f9790f7a.jpg",
];

const Main = () => {
    const navigate = useNavigate();

    return (
        <div>
            <div className="header-notice">
                <div className="header-notice-text">
                    새로워진 에어비앤비를 소개합니다
                </div>
                <div className="header-notice-btns-container">
                    <button className="header-notice-btn">
                        <span
                            style={{
                                display: "flex",
                                alignItems: "center",
                                fontSize: 15,
                            }}>
                            <img
                                style={{ borderRadius: 8, marginRight: 12 }}
                                width="50px"
                                height="30px"
                                src="https://a0.muscache.com/im/pictures/286f3ac7-a344-45da-91ee-77caf6b1be66.jpg?im_q=highq&im_w=240"
                                alt="video"
                            />
                            동영상 보기
                        </span>
                    </button>
                    <div
                        style={{
                            height: 30,
                            border: "0.5px solid #cccccc",
                            margin: "0px 8px",
                        }}></div>
                    <button className="header-notice-btn">
                        자세히 알아보기
                    </button>
                </div>
            </div>
            <Header />
            <div id="category-container">
                <div id="category">
                    {category_list.map((data, idx) => (
                        <CategoryItem
                            key={idx}
                            id={idx}
                            name={data}
                            src={category_img[idx]}
                        />
                    ))}
                </div>
                <div id="filter-wrap">
                    <button id="filter">
                        <svg
                            viewBox="0 0 16 16"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{
                                display: "block",
                                height: 20,
                                width: 20,
                                fill: "currentcolor",
                            }}
                            aria-hidden="true"
                            role="presentation"
                            focusable="false">
                            <path d="M5 8c1.306 0 2.418.835 2.83 2H14v2H7.829A3.001 3.001 0 1 1 5 8zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm6-8a3 3 0 1 1-2.829 4H2V4h6.17A3.001 3.001 0 0 1 11 2zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
                        </svg>
                        <span>필터</span>
                    </button>
                </div>
            </div>
            <div id="main">
                {arr.map((data, idx) => (
                    <LodgingCard key={idx} id={idx + 1} />
                ))}
            </div>
            <div className="show-map-btn-container">
                <button>
                    <div>
                        <span>지도 표시하기</span>
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
                                marginLeft: 8,
                                fill: "rgb(255,255,255)",
                            }}>
                            <path d="M31.245 3.747a2.285 2.285 0 0 0-1.01-1.44A2.286 2.286 0 0 0 28.501 2l-7.515 1.67-10-2L2.5 3.557A2.286 2.286 0 0 0 .7 5.802v21.95a2.284 2.284 0 0 0 1.065 1.941A2.29 2.29 0 0 0 3.498 30l7.515-1.67 10 2 8.484-1.886a2.285 2.285 0 0 0 1.802-2.245V4.247a2.3 2.3 0 0 0-.055-.5zM12.5 25.975l-1.514-.303L9.508 26H9.5V4.665l1.514-.336 1.486.297v21.349zm10 1.36l-1.515.337-1.485-.297V6.025l1.514.304L22.493 6h.007v21.335z"></path>
                        </svg>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default Main;
