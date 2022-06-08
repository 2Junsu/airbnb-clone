import React from "react";
import styled from "styled-components";
import { Modal, Button } from ".";
import { useSelector } from "react-redux";

const SignupNoticeModal = (props) => {
    const { modalStatus, closeModal, width } = props;
    const userInfo = useSelector((state) => state.signup.userInfo);

    const login = () => {
        closeModal();
        localStorage.setItem("userInfo", JSON.stringify(userInfo));
    };

    return (
        <Modal modalStatus={modalStatus} closeModal={closeModal} width={width}>
            <Wrap>
                <ContentWrap>
                    <LogoWrap>
                        <svg
                            viewBox="0 0 32 32"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{
                                display: "block",
                                height: 42,
                                width: 42,
                                fill: "#FF5A5F",
                            }}
                            aria-hidden="true"
                            role="presentation"
                            focusable="false">
                            <path d="M16 1c2.008 0 3.463.963 4.751 3.269l.533 1.025c1.954 3.83 6.114 12.54 7.1 14.836l.145.353c.667 1.591.91 2.472.96 3.396l.01.415.001.228c0 4.062-2.877 6.478-6.357 6.478-2.224 0-4.556-1.258-6.709-3.386l-.257-.26-.172-.179h-.011l-.176.185c-2.044 2.1-4.267 3.42-6.414 3.615l-.28.019-.267.006C5.377 31 2.5 28.584 2.5 24.522l.005-.469c.026-.928.23-1.768.83-3.244l.216-.524c.966-2.298 6.083-12.989 7.707-16.034C12.537 1.963 13.992 1 16 1zm0 2c-1.239 0-2.053.539-2.987 2.21l-.523 1.008c-1.926 3.776-6.06 12.43-7.031 14.692l-.345.836c-.427 1.071-.573 1.655-.605 2.24l-.009.33v.206C4.5 27.395 6.411 29 8.857 29c1.773 0 3.87-1.236 5.831-3.354-2.295-2.938-3.855-6.45-3.855-8.91 0-2.913 1.933-5.386 5.178-5.42 3.223.034 5.156 2.507 5.156 5.42 0 2.456-1.555 5.96-3.855 8.907C19.277 27.766 21.37 29 23.142 29c2.447 0 4.358-1.605 4.358-4.478l-.004-.411c-.019-.672-.17-1.296-.714-2.62l-.248-.6c-1.065-2.478-5.993-12.768-7.538-15.664C18.053 3.539 17.24 3 16 3zm.01 10.316c-2.01.021-3.177 1.514-3.177 3.42 0 1.797 1.18 4.58 2.955 7.044l.21.287.174-.234c1.73-2.385 2.898-5.066 2.989-6.875l.006-.221c0-1.906-1.167-3.4-3.156-3.421h-.001z"></path>
                        </svg>
                    </LogoWrap>
                    <h1>에어비앤비 커뮤니티 차별반대 서약</h1>
                    <h2>
                        에어비앤비는 누구나 어디에서나 우리 집처럼 편안함을 느낄
                        수 있는 커뮤니티를 지향합니다.
                    </h2>
                    <h3>이를 위해 다음에 동의해 주실 것을 부탁드립니다.</h3>
                    <Content>
                        <div>
                            인종, 종교, 출신 국가, 민족, 피부색, 장애, 성별, 성
                            정체성, 성적 지향, 연령 등과 관계없이 에어비앤비
                            커뮤니티의 모든 사람을 존중하며 편견이나 선입견 없이
                            대하는 것에 동의합니다.
                        </div>
                        <MoreBtnWrap>
                            <MoreBtn>
                                <span>더 알아보기</span>
                                <svg
                                    viewBox="0 0 32 32"
                                    xmlns="http://www.w3.org/2000/svg"
                                    style={{
                                        display: "block",
                                        fill: "none",
                                        height: 12,
                                        width: 12,
                                        stroke: "currentColor",
                                        strokeWidth: 4,
                                        overflow: "visible",
                                    }}
                                    aria-hidden="true"
                                    role="presentation"
                                    focusable="false">
                                    <g fill="none">
                                        <path d="m12 4 11.2928932 11.2928932c.3905243.3905243.3905243 1.0236893 0 1.4142136l-11.2928932 11.2928932"></path>
                                    </g>
                                </svg>
                            </MoreBtn>
                        </MoreBtnWrap>
                    </Content>
                </ContentWrap>
                <ButtonWrap>
                    <Button color onClick={login}>
                        <span>동의 및 계속하기</span>
                    </Button>
                    <Button style={{ marginTop: 16 }}>
                        <span>거절하기</span>
                    </Button>
                </ButtonWrap>
            </Wrap>
        </Modal>
    );
};

const Wrap = styled.section`
    width: 100%;
    & h1 {
        margin: 16px 0px;
        font-size: 14px;
        font-weight: bold;
    }
    & h2 {
        margin: 16px 0px 24px 0px;
        font-size: 26px;
        font-weight: bold;
    }
    & h3 {
        margin: 24px 0px;
        font-size: 16px;
        font-weight: 400;
    }
`;
const ContentWrap = styled.div`
    padding: 0px 24px;
    margin-bottom: 24px;
    display: flex;
    flex-direction: column;
`;
const LogoWrap = styled.div`
    margin: 40px 0px;
`;
const Content = styled.div`
    font-size: 16px;
    font-weight: 400;
`;
const MoreBtnWrap = styled.div`
    padding: 16px 0px;
`;
const MoreBtn = styled.button`
    all: unset;
    display: flex;
    align-items: center;
    &:hover {
        cursor: pointer;
    }

    & > span {
        margin-right: 4px;
        font-weight: 600;
        text-decoration: underline;
    }
`;
const ButtonWrap = styled.div`
    margin: 24px;
`;
export default SignupNoticeModal;
