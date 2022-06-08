import React, { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import {
    saveUserInfo,
    handleEmailValid,
    handleSignupNotice,
} from "../redux/reducer/signup";

const SignupDetail = (props) => {
    const { closeModal } = props;
    const dispatch = useDispatch();
    const email = useSelector((state) => state.signup.email);

    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        birth: "",
        email,
        agreeMarketing: true,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(saveUserInfo(form));
        closeModal();
        dispatch(handleSignupNotice(true));
    };

    const handleUserInfo = (e) => {
        const changed = {
            ...form,
            [e.target.name]: e.target.value,
        };
        setForm(changed);
    };

    return (
        <div style={{ width: "100%" }}>
            <BackBtn
                onClick={() => {
                    dispatch(handleEmailValid(false));
                }}>
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
                    <g fill="none">
                        <path d="m20 28-11.29289322-11.2928932c-.39052429-.3905243-.39052429-1.0236893 0-1.4142136l11.29289322-11.2928932"></path>
                    </g>
                </svg>
            </BackBtn>
            <Header>
                <h1>회원 가입 완료하기</h1>
            </Header>
            <Main>
                <form onSubmit={handleSubmit}>
                    <NameInputWrap>
                        <div>
                            <div style={{ borderBottom: "1px solid #cccccc" }}>
                                <input
                                    type="text"
                                    name="firstName"
                                    placeholder="이름(예: 길동)"
                                    onChange={handleUserInfo}
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    name="lastName"
                                    placeholder="성(예: 홍)"
                                    onChange={handleUserInfo}
                                    required
                                />
                            </div>
                        </div>
                        <NoticeWrap>
                            정부 발급 신분증에 표시된 이름과 일치하는지
                            확인하세요.
                        </NoticeWrap>
                    </NameInputWrap>
                    <BirthInputWrap>
                        <div>
                            <input
                                type="date"
                                name="birth"
                                placeholder="생년월일"
                                onChange={handleUserInfo}
                                required
                            />
                        </div>
                        <NoticeWrap>
                            만 18세 이상의 성인만 회원으로 가입할 수 있습니다.
                            생일은 에어비앤비의 다른 회원에게 공개되지 않습니다.
                        </NoticeWrap>
                    </BirthInputWrap>
                    <EmailInputWrap>
                        <div>
                            <input
                                type="email"
                                placeholder="이메일"
                                defaultValue={email}
                                required
                            />
                        </div>
                        <NoticeWrap>
                            예약 확인과 영수증을 이메일로 보내드립니다.
                        </NoticeWrap>
                    </EmailInputWrap>
                    <PasswordInputWrap>
                        <div>
                            <input
                                type="password"
                                placeholder="비밀번호"
                                required
                            />
                            <button>표시</button>
                        </div>
                    </PasswordInputWrap>
                    <NoticeWrap>
                        <span>
                            <b>동의 및 계속하기</b> 버튼을 선택하면 에어비앤비{" "}
                            <Em>서비스 약관</Em>, <Em>결제 서비스 약관</Em> 및{" "}
                            <Em>차별 금지 정책</Em>에 동의하며{" "}
                            <Em>개인정보 처리방침</Em> 정책을 이해하는 것입니다.
                        </span>
                    </NoticeWrap>
                    <ButtonWrap>
                        <Button type="submit">
                            <span>동의 및 계속하기</span>
                        </Button>
                    </ButtonWrap>
                    <hr
                        style={{
                            marginBottom: "16px",
                            width: "100%",
                            border: ".5px solid #cccccc",
                        }}
                    />
                    <NoticeWrap>
                        <span>
                            에어비앤비 회원 전용 할인, 추천 여행 정보, 마케팅
                            이메일, 푸시 알림을 보내드립니다. 계정 설정 또는
                            마케팅 알림에서 언제든지 메시지 수신을 거부할 수
                            있습니다.
                        </span>
                    </NoticeWrap>
                    <CheckboxWrap>
                        <input
                            type="checkbox"
                            id="checkbox"
                            onChange={(e) => {
                                setForm({
                                    ...form,
                                    agreeMarketing: !e.target.checked,
                                });
                            }}
                        />
                        <label htmlFor="checkbox">
                            에어비앤비에서 보내는 마케팅 메시지를 받고 싶지
                            않습니다.
                        </label>
                    </CheckboxWrap>
                </form>
            </Main>
        </div>
    );
};

const BackBtn = styled.div`
    border-radius: 20px;
    padding: 8px;
    position: absolute;
    left: 16px;
    top: 16px;
    &:hover {
        cursor: pointer;
        background-color: #eeeeee;
    }
`;
const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px;
    border-bottom: 1px solid #cccccc;
    & h1 {
        font-size: 16px;
    }
`;
const Main = styled.div`
    padding: 24px;
    display: flex;
    flex-direction: column;
`;
const NameInputWrap = styled.div`
    & > div:nth-child(1) {
        border: 1px solid #cccccc;
        border-radius: 8px;
    }
    & input {
        all: unset;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 16px;
        height: 40px;
        padding: 10px 12px;
    }
`;
const NoticeWrap = styled.div`
    margin: 8px 0px;
    font-size: 12px;
    color: rgb(113, 113, 113);
`;
const BirthInputWrap = styled(NameInputWrap)`
    border: none;
    margin: 24px 0px;
    & input {
        width: calc(100% - 24px);
    }
`;
const EmailInputWrap = styled(BirthInputWrap)``;
const PasswordInputWrap = styled(BirthInputWrap)`
    & > div {
        display: flex;
        align-items: center;
    }
    & button {
        all: unset;
        font-size: 14px;
        text-decoration: underline;
        margin-right: 12px;
        white-space: nowrap;
        &:hover {
            cursor: pointer;
        }
    }
`;
const Em = styled.span`
    color: rgb(0, 76, 196);
    text-decoration: underline;
    &:hover {
        cursor: pointer;
    }
`;
const ButtonWrap = styled.div`
    margin: 24px 0px;
`;
const Button = styled.button`
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
const CheckboxWrap = styled.div`
    padding: 16px 0px;
    display: flex;
    align-items: center;

    & input {
        width: 25px;
        height: 25px;
    }
    & label {
        font-size: 12px;
        margin-left: 16px;
    }
`;
export default SignupDetail;
