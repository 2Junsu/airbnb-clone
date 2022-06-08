import React from "react";
import styled from "styled-components";

const SimpleHeader = () => {
    return (
        <Wrap>
            <SearchBarWrap>
                <SearchBar>
                    <SearchBtn>
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
                                }}>
                                <path
                                    d="M13 0c7.18 0 13 5.82 13 13 0 2.868-.929 5.519-2.502 7.669l7.916 7.917-2.828 2.828-7.917-7.916A12.942 12.942 0 0 1 13 26C5.82 26 0 20.18 0 13S5.82 0 13 0zm0 4a9 9 0 1 0 0 18 9 9 0 0 0 0-18z"
                                    opacity=".8"></path>
                            </svg>
                        </div>
                        <div>
                            <span>어디로 여행가세요?</span>
                        </div>
                    </SearchBtn>
                </SearchBar>
                <FilterBtnWrap>
                    <button>
                        <svg
                            viewBox="0 0 16 16"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{
                                display: "block",
                                height: 16,
                                width: 16,
                                fill: "currentcolor",
                            }}
                            aria-hidden="true"
                            role="presentation"
                            focusable="false">
                            <path d="M5 8c1.306 0 2.418.835 2.83 2H14v2H7.829A3.001 3.001 0 1 1 5 8zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm6-8a3 3 0 1 1-2.829 4H2V4h6.17A3.001 3.001 0 0 1 11 2zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
                        </svg>
                    </button>
                </FilterBtnWrap>
            </SearchBarWrap>
        </Wrap>
    );
};

const Wrap = styled.div`
    min-width: 350px;
    padding: 14px 24px 0px 24px;
    @media only screen and (min-width: 744px) {
        display: none;
    }
`;
const SearchBarWrap = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    border-radius: 1000px;
    box-shadow: 0px 3px 10px #cccccc;
    &:hover {
        cursor: pointer;
    }
`;
const SearchBar = styled.div`
    display: flex;
    align-items: center;
`;
const SearchBtn = styled.button`
    all: unset;
    display: flex;
    align-items: center;
    height: 56px;
    & > div:nth-child(1) {
        padding-left: 20px;
        padding-right: 16px;
    }

    & > div:nth-child(2) {
        font-size: 16px;
    }
`;
const FilterBtnWrap = styled.div`
    position: absolute;
    right: 10px;
    & button {
        all: unset;
        border: 1px solid #cccccc;
        border-radius: 50%;
        padding: 8px;
        &:hover {
            cursor: pointer;
        }
    }
`;
export default SimpleHeader;
