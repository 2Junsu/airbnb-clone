import React from "react";
import { Modal, Signup, SignupDetail } from ".";
import "../css/signupModal.css";
import { useSelector } from "react-redux";

const SignupModal = (props) => {
    const { modalStatus, closeModal, width } = props;
    const isEmailValid = useSelector((state) => state.signup.isEmailValid);

    return (
        <Modal modalStatus={modalStatus} closeModal={closeModal} width={width}>
            {isEmailValid ? (
                <SignupDetail />
            ) : (
                <div style={{ width: "100%" }}>
                    <div className="x-btn" onClick={closeModal}>
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
                            <path d="m6 6 20 20"></path>
                            <path d="m26 6-20 20"></path>
                        </svg>
                    </div>
                    <header className="signup-modal-header">
                        <h1 style={{ fontSize: 16 }}>로그인 또는 회원 가입</h1>
                    </header>
                    <div className="signup-main">
                        <div>
                            <h3
                                style={{
                                    fontSize: 22,
                                    marginTop: 8,
                                    marginBottom: 24,
                                }}>
                                에어비앤비에 오신 것을 환영합니다.
                            </h3>
                            <Signup />
                        </div>
                    </div>
                </div>
            )}
        </Modal>
    );
};

export default SignupModal;
