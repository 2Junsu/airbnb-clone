import React, { useState } from "react";
import fb from "../assets/imgs/facebook.png";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { handleEmailValid, updateEmail } from "../redux/reducer/signup";

const Signup = () => {
    const [loginMethod, setLoginMethod] = useState("phone");
    const [email, setEmail] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(handleEmailValid(true));
        dispatch(updateEmail(email));
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {loginMethod === "phone" ? (
                    <>
                        <FormInput>
                            <NationBtn>
                                <div>
                                    <span style={{ fontSize: 12 }}>
                                        국가/지역
                                    </span>
                                    <br />
                                    <span>한국 (+82)</span>
                                </div>
                                <Arrow className="arrow">&gt;</Arrow>
                            </NationBtn>
                            <div style={{ padding: "10px 12px" }}>
                                <input type="tel" placeholder="전화번호" />
                            </div>
                        </FormInput>
                        <LoginNotice>
                            전화나 문자로 전화번호를 확인하겠습니다. 일반 문자
                            메시지 요금 및 데이터 요금이 부과됩니다.&nbsp;
                            <span>개인정보 처리방침</span>
                        </LoginNotice>
                    </>
                ) : (
                    <FormInput style={{ padding: "10px 12px" }}>
                        <input
                            type="email"
                            placeholder="이메일"
                            onChange={handleEmail}
                        />
                    </FormInput>
                )}
                <div style={{ marginTop: 24 }}>
                    <LoginBtn type="submit">
                        <span>계속</span>
                    </LoginBtn>
                </div>
            </form>
            <div style={{ padding: "16px 0px" }}>
                <hr />
            </div>
            <div className="social-login-container">
                <SocialLogin>
                    <SocialLoginElement>
                        <img
                            src={fb}
                            width="24px"
                            height="24px"
                            alt="facebook"
                        />
                    </SocialLoginElement>
                    <SocialLoginElement>
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
                    </SocialLoginElement>
                    <SocialLoginElement>
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
                    </SocialLoginElement>
                </SocialLogin>
                {loginMethod === "phone" ? (
                    <SocialLoginElement onClick={() => setLoginMethod("email")}>
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
                    </SocialLoginElement>
                ) : (
                    <SocialLoginElement onClick={() => setLoginMethod("phone")}>
                        <svg
                            viewBox="0 0 32 32"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            role="presentation"
                            focusable="false"
                            style={{
                                position: "absolute",
                                left: "23px",
                                height: 20,
                                width: 20,
                                display: "block",
                                fill: "currentcolor",
                            }}>
                            <path d="m22 1c2.6887547 0 4.8818181 2.12230671 4.9953805 4.78311038l.0046195.21688962v20c0 2.6887547-2.1223067 4.8818181-4.7831104 4.9953805l-.2168896.0046195h-12c-2.6887547 0-4.88181811-2.1223067-4.99538049-4.7831104l-.00461951-.2168896v-20c0-2.6887547 2.12230671-4.88181811 4.78311038-4.99538049l.21688962-.00461951zm0 2h-12c-1.59768088 0-2.90366088 1.24891996-2.99490731 2.82372721l-.00509269.17627279v20c0 1.5976809 1.24891996 2.9036609 2.82372721 2.9949073l.17627279.0050927h12c1.5976809 0 2.9036609-1.24892 2.9949073-2.8237272l.0050927-.1762728v-20c0-1.59768088-1.24892-2.90366088-2.8237272-2.99490731zm-6 22c.5522847 0 1 .4477153 1 1s-.4477153 1-1 1-1-.4477153-1-1 .4477153-1 1-1zm4-4c.5522847 0 1 .4477153 1 1s-.4477153 1-1 1-1-.4477153-1-1 .4477153-1 1-1zm-4 0c.5522847 0 1 .4477153 1 1s-.4477153 1-1 1-1-.4477153-1-1 .4477153-1 1-1zm-4 0c.5522847 0 1 .4477153 1 1s-.4477153 1-1 1-1-.4477153-1-1 .4477153-1 1-1zm8-4c.5522847 0 1 .4477153 1 1s-.4477153 1-1 1-1-.4477153-1-1 .4477153-1 1-1zm-4 0c.5522847 0 1 .4477153 1 1s-.4477153 1-1 1-1-.4477153-1-1 .4477153-1 1-1zm-4 0c.5522847 0 1 .4477153 1 1s-.4477153 1-1 1-1-.4477153-1-1 .4477153-1 1-1zm8-4c.5522847 0 1 .4477153 1 1s-.4477153 1-1 1-1-.4477153-1-1 .4477153-1 1-1zm-4 0c.5522847 0 1 .4477153 1 1s-.4477153 1-1 1-1-.4477153-1-1 .4477153-1 1-1zm-4 0c.5522847 0 1 .4477153 1 1s-.4477153 1-1 1-1-.4477153-1-1 .4477153-1 1-1z"></path>
                        </svg>
                        <span>전화번호로 로그인하기</span>
                    </SocialLoginElement>
                )}
            </div>
        </div>
    );
};

const FormInput = styled.div`
    border: 1px solid #cccccc;
    border-radius: 8px;
    & input {
        all: unset;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 16px;
        height: 40px;
    }
`;
const NationBtn = styled.label`
    all: unset;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 12px;
    height: 40px;
    border-bottom: 1px solid #cccccc;
`;
const Arrow = styled.div`
    font-size: 22px;
    transform: rotate(90deg);
`;
const LoginNotice = styled.div`
    margin-top: 8px;
    font-size: 14px;
    & > span {
        text-decoration: underline;
        font-weight: bold;
        &:hover {
            cursor: pointer;
        }
    }
`;
const LoginBtn = styled.button`
    all: unset;
    border-radius: 8px;
    background-color: #ff0080;
    padding: 14px 0px;
    width: 100%;
    text-align: center;
    & > span {
        color: white;
        font-weight: bold;
        font-size: 16px;
    }
    &:hover {
        cursor: pointer;
    }
`;
const SocialLogin = styled.div`
    display: flex;
    justify-content: space-between;
`;
const SocialLoginElement = styled.div`
    margin-bottom: 16px;
    padding: 13px 23px;
    border: 1px solid black;
    border-radius: 8px;
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    position: relative;
    &:hover {
        background-color: #efefef;
        cursor: pointer;
    }
`;
export default Signup;
