import React from "react";
import styled from "styled-components";
import { LodgingCard, CategoryItem, Header, SimpleHeader } from "../components";
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
            <Header />
            <SimpleHeader />
            <CategoryWrap>
                <Category>
                    {category_list.map((data, idx) => (
                        <CategoryItem
                            key={idx}
                            id={idx}
                            name={data}
                            src={category_img[idx]}
                        />
                    ))}
                </Category>
                <FilterWrap>
                    <Filter>
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
                    </Filter>
                </FilterWrap>
            </CategoryWrap>
            <MainWrap>
                {arr.map((data, idx) => (
                    <LodgingCard key={idx} id={idx + 1} />
                ))}
            </MainWrap>
            <ShowMapBtnWrap>
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
            </ShowMapBtnWrap>
            <SimpleFooterNav>
                <NavElemWrap>
                    <NavElem>
                        <svg
                            viewBox="0 0 32 32"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            role="presentation"
                            focusable="false"
                            style={{
                                display: "block",
                                fill: "none",
                                height: 24,
                                width: 24,
                                stroke: "currentcolor",
                                strokeWidth: 4,
                                overflow: "visible",
                            }}>
                            <g fill="none">
                                <path d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"></path>
                            </g>
                        </svg>
                        <span>둘러보기</span>
                    </NavElem>
                    <NavElem>
                        <svg
                            viewBox="0 0 32 32"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            role="presentation"
                            focusable="false"
                            style={{
                                display: "block",
                                fill: "none",
                                height: 24,
                                width: 24,
                                stroke: "currentcolor",
                                strokeWidth: 2.66667,
                                overflow: "visible",
                            }}>
                            <path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"></path>
                        </svg>
                        <span>위시리스트</span>
                    </NavElem>
                    <NavElem>
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
                            <path d="m16 1c8.2842712 0 15 6.71572875 15 15 0 8.2842712-6.7157288 15-15 15-8.28427125 0-15-6.7157288-15-15 0-8.28427125 6.71572875-15 15-15zm0 8c-2.7614237 0-5 2.2385763-5 5 0 2.0143973 1.2022141 3.7998876 2.9996346 4.5835001l.0003231 2.0984999-.1499943.0278452c-2.8326474.5613112-5.31897338 2.2230336-6.93575953 4.5872979 2.34343054 2.291067 5.54974273 3.7028569 9.08579613 3.7028569 3.5355506 0 6.7414538-1.4113884 9.0850203-3.701476-1.6141801-2.3628535-4.0978119-4.0247647-6.929184-4.5867938l-.1558786-.0287302.001228-2.0991413c1.7288399-.7547474 2.9066959-2.4357565 2.9936498-4.355479l.0051645-.2283797c0-2.7614237-2.2385763-5-5-5zm0-6c-7.17970175 0-13 5.82029825-13 13 0 2.9045768.95257276 5.5866683 2.56235849 7.7509147 1.42074739-1.9134907 3.33951478-3.4002416 5.53860831-4.2955956l.3480332-.1363191-.0229565-.0189706c-1.43704227-1.2411241-2.34462949-3.045583-2.42083359-5.0285539l-.00520991-.2714755c0-3.8659932 3.1340068-7 7-7s7 3.1340068 7 7c0 1.9941317-.8415062 3.8279876-2.224566 5.1193683l-.225434.2006317.0447787.0163138c2.3268368.8792152 4.3570558 2.4138611 5.8430586 4.4127726 1.6098837-2.1632453 2.5621627-4.8449575 2.5621627-7.7490864 0-7.17970175-5.8202983-13-13-13z"></path>
                        </svg>
                        <span>로그인</span>
                    </NavElem>
                </NavElemWrap>
            </SimpleFooterNav>
        </div>
    );
};

const CategoryWrap = styled.div`
    padding: 24px 80px;
    @media only screen and (max-width: 1127px) {
        padding: 24px 40px;
    }
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Category = styled.div`
    display: flex;
    align-items: center;
    overflow: auto;
`;
const MainWrap = styled.div`
    padding: 0px 80px;
    @media only screen and (max-width: 1127px) {
        padding: 0px 40px;
    }
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 20px;
    row-gap: 40px;

    @media only screen and (max-width: 1605px) {
        grid-template-columns: repeat(4, 1fr);
    }

    @media only screen and (max-width: 1127px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media only screen and (max-width: 949px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media only screen and (max-width: 549px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;
const FilterWrap = styled.div`
    padding-left: 24px;
    @media only screen and (max-width: 743px) {
        display: none;
    }
`;
const Filter = styled.button`
    all: unset;
    border: 1px solid #cccccc;
    border-radius: 10px;
    padding: 16px 20px;
    display: flex;
    align-items: center;
    white-space: nowrap;

    &:hover {
        cursor: pointer;
    }
`;
const ShowMapBtnWrap = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    bottom: 40px;

    @media only screen and (max-width: 743px) {
        display: none;
    }

    & > button {
        all: unset;
        background-color: black;
        border-radius: 24px;
        &:hover {
            cursor: pointer;
            transform: scale(1.1);
            transition: all 0.2s ease;
        }

        & > div {
            color: white;
            font-weight: bold;
            display: flex;
            align-items: center;
            padding: 14px 19px;
        }
    }
`;
const SimpleFooterNav = styled.nav`
    width: 100%;
    height: 44px;
    position: fixed;
    bottom: 0;
    background-color: #fff;
    display: flex;
    justify-content: center;
    border-top: 1px solid #eeeeee;
    padding: 8px 0px;

    @media only screen and (min-width: 744px) {
        display: none;
    }
`;
const NavElemWrap = styled.div`
    display: flex;
    width: 60%;
`;
const NavElem = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    line-height: 12px;
    & > svg {
        margin-bottom: 2px;
    }
    &:hover {
        cursor: pointer;
    }
`;
export default Main;
