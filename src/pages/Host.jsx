import React from "react";
import "../css/host.css";
import { Link } from "react-router-dom";

const Host = () => {
    return (
        <div className="host-container">
            <div className="start-hosting-container">
                <div className="start-hosting-left">
                    <Link to="/">
                        <svg
                            viewBox="0 0 32 32"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{
                                display: "block",
                                height: 36,
                                width: 36,
                                fill: "#fff",
                                position: "absolute",
                                top: 36,
                                left: 36,
                            }}
                            aria-label="에어비앤비 홈페이지"
                            role="img"
                            focusable="false">
                            <path d="M16 1c2.008 0 3.463.963 4.751 3.269l.533 1.025c1.954 3.83 6.114 12.54 7.1 14.836l.145.353c.667 1.591.91 2.472.96 3.396l.01.415.001.228c0 4.062-2.877 6.478-6.357 6.478-2.224 0-4.556-1.258-6.709-3.386l-.257-.26-.172-.179h-.011l-.176.185c-2.044 2.1-4.267 3.42-6.414 3.615l-.28.019-.267.006C5.377 31 2.5 28.584 2.5 24.522l.005-.469c.026-.928.23-1.768.83-3.244l.216-.524c.966-2.298 6.083-12.989 7.707-16.034C12.537 1.963 13.992 1 16 1zm0 2c-1.239 0-2.053.539-2.987 2.21l-.523 1.008c-1.926 3.776-6.06 12.43-7.031 14.692l-.345.836c-.427 1.071-.573 1.655-.605 2.24l-.009.33v.206C4.5 27.395 6.411 29 8.857 29c1.773 0 3.87-1.236 5.831-3.354-2.295-2.938-3.855-6.45-3.855-8.91 0-2.913 1.933-5.386 5.178-5.42 3.223.034 5.156 2.507 5.156 5.42 0 2.456-1.555 5.96-3.855 8.907C19.277 27.766 21.37 29 23.142 29c2.447 0 4.358-1.605 4.358-4.478l-.004-.411c-.019-.672-.17-1.296-.714-2.62l-.248-.6c-1.065-2.478-5.993-12.768-7.538-15.664C18.053 3.539 17.24 3 16 3zm.01 10.316c-2.01.021-3.177 1.514-3.177 3.42 0 1.797 1.18 4.58 2.955 7.044l.21.287.174-.234c1.73-2.385 2.898-5.066 2.989-6.875l.006-.221c0-1.906-1.167-3.4-3.156-3.421h-.001z"></path>
                        </svg>
                    </Link>
                    <div className="start-hosting-text">
                        <h1>
                            호스팅을
                            <br />
                            시작해보세요
                        </h1>
                    </div>
                    <button className="start-hosting-btn">
                        호스팅 시작하기
                    </button>
                </div>
                <div>
                    <video width="100%" height="100%" autoPlay loop>
                        <source
                            src="https://a0.muscache.com/v/a9/a7/a9a7873c-95de-5e37-8995-a5abb5b6b02f/a9a7873c95de5e378995a5abb5b6b02f_4000k_1.mp4?imformat=h265"
                            type="video/mp4; codecs=hevc"
                        />
                        <source
                            src="https://a0.muscache.com/v/a9/a7/a9a7873c-95de-5e37-8995-a5abb5b6b02f/a9a7873c95de5e378995a5abb5b6b02f_4000k_1.mp4"
                            type="video/mp4"
                        />
                    </video>
                </div>
            </div>
            <div className="hosting-income-container">
                <div className="hosting-income-text">
                    <h2>
                        호스팅으로 올릴 수 있는
                        <br /> 수입을 확인하세요
                    </h2>
                </div>
                <div className="hosting-avg-income-container">
                    <div>
                        <div style={{ marginRight: 16 }}>
                            <div
                                style={{
                                    fontSize: 12,
                                    color: "#717171",
                                    marginBottom: 8,
                                }}>
                                동일 지역 내 호스트의 평균 수입은 다음과
                                같습니다.*
                            </div>
                            <div
                                style={{
                                    fontSize: 32,
                                    color: "rgb(255,56,92)",
                                    fontWeight: "600",
                                }}>
                                ₩1,889,638 /월
                            </div>
                        </div>
                        <div style={{ marginRight: 16 }}>
                            <div
                                style={{
                                    fontSize: 12,
                                    color: "#717171",
                                    marginBottom: 8,
                                }}>
                                호스팅 수입
                            </div>
                            <div
                                style={{
                                    fontSize: 32,
                                    color: "rgb(255,56,92)",
                                    fontWeight: "600",
                                }}>
                                ₩82,158 /박
                            </div>
                        </div>
                        <div>
                            <div
                                style={{
                                    fontSize: 12,
                                    color: "#717171",
                                    marginBottom: 8,
                                }}>
                                예약 일수:
                            </div>
                            <div
                                style={{
                                    fontSize: 32,
                                    color: "rgb(255,56,92)",
                                    fontWeight: "600",
                                }}>
                                23박/월
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hosting-map-container">
                <h3>숙소를 소개해주세요</h3>
                <div
                    style={{
                        backgroundColor: "skyblue",
                        height: 528,
                        marginBottom: 24,
                    }}></div>
                <div className="hosting-map-bottom-btn">
                    *<button>에어비앤비가 예상 수입을 산정하는 방법</button>
                </div>
            </div>
            <div className="hosting-anywhere-container">
                <h2>
                    언제 어디서든
                    <br />
                    호스팅하실 수 있습니다
                </h2>
                <div className="hosting-anywhere"></div>
            </div>
            <div style={{ margin: "96px 10%" }}>
                <div
                    style={{
                        backgroundColor: "rgb(255,56,92)",
                        height: 450,
                        borderRadius: 12,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center",
                    }}>
                    <div
                        style={{
                            margin: 48,
                            color: "white",
                            fontSize: 48,
                            fontWeight: 600,
                        }}>
                        10만 명에 달하는 우크라이나 피란민에게 임시 숙소를
                        제공해주세요
                        <div style={{ marginTop: 24 }}>
                            <button className="more-detail-btn">
                                자세히 알아보기
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hosting-qna-container">
                <div className="hosting-qna">
                    <div className="hosting-qna-text">
                        호스팅에 관해 궁금하신 점이 있나요?
                        <br />
                        슈퍼호스트에게 물어보세요.
                    </div>
                    <div style={{ marginTop: 48 }}>
                        <button className="hosting-qna-more-btn">
                            자세히 알아보기
                        </button>
                    </div>
                </div>
            </div>
            <div className="hosting-aircover-container">
                <div className="hosting-aircover-text">
                    <img
                        style={{ width: "80%" }}
                        src="https://a0.muscache.com/im/pictures/d3537125-14e0-48e1-b760-97490570d937.jpg"
                        alt="aircover"
                    />
                    <div style={{ marginTop: 40, marginBottom: 50 }}>
                        <p>호스팅 전반에 대한 보호.</p>
                        <p>모든 예약에 항상 무료로 제공.</p>
                        <p>오직 에어비앤비에서만.</p>
                    </div>
                    <button
                        className="hosting-qna-more-btn"
                        style={{ border: "1px solid black" }}>
                        자세히 알아보기
                    </button>
                </div>
                <div>
                    <img
                        style={{ width: "100%" }}
                        src="https://a0.muscache.com/im/pictures/11e10d64-867e-4dba-b0b4-896026a4f0e0.jpg?im_w=2560&im_q=highq"
                        alt="aircover"
                    />
                </div>
            </div>
            <div className="hosting-start-container">
                <div>
                    <video width="100%" height="100%" autoPlay loop>
                        <source
                            src="https://a0.muscache.com/v/9a/7a/9a7ad4a1-cfab-5f7d-96e6-fda8abceabe7/9a7ad4a1cfab5f7d96e6fda8abceabe7_4000k_1.mp4?imformat=h265"
                            type="video/mp4; codecs=hevc"
                        />
                        <source
                            src="https://a0.muscache.com/v/9a/7a/9a7ad4a1-cfab-5f7d-96e6-fda8abceabe7/9a7ad4a1cfab5f7d96e6fda8abceabe7_4000k_1.mp4"
                            type="video/mp4"
                        />
                    </video>
                </div>
                <div className="hosting-start-right">
                    <div className="hosting-start-text">
                        <h2>
                            에어비앤비에서
                            <br />
                            호스팅을 시작해보세요
                        </h2>
                        <div style={{ marginTop: 32, fontSize: 18 }}>
                            에어비앤비 호스트가 되어보세요. 에어비앤비가 모든
                            단계에서 도와드립니다.
                        </div>
                    </div>
                    <div className="hosting-start-btn-container">
                        <button>시작하기</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Host;
