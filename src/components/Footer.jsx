import React from "react";
import "../css/footer.css";

const Footer = () => {
    return (
        <footer>
            <div>
                <div className="footer-section">
                    <section>
                        <div>
                            <strong>에어비앤비 지원</strong>
                        </div>
                        <ul>
                            <li>도움말 센터</li>
                            <li>에어커버</li>
                            <li>안전 정보</li>
                            <li>장애인 지원</li>
                            <li>예약 취소 옵션</li>
                            <li>에어비앤비의 코로나19 대응 방안</li>
                            <li>이웃 민원 신고</li>
                        </ul>
                    </section>
                    <section>
                        <div>
                            <strong>커뮤니티</strong>
                        </div>
                        <ul>
                            <li>Airbnb.org: 재난 구호 숙소</li>
                            <li>아프간 난민 지원</li>
                            <li>차별 철폐를 위한 노력</li>
                        </ul>
                    </section>
                    <section>
                        <div>
                            <strong>호스팅</strong>
                        </div>
                        <ul>
                            <li>호스팅 시작하기</li>
                            <li>호스트를 위한 에어커버</li>
                            <li>호스팅 자료 둘러보기</li>
                            <li>커뮤니티 포럼 방문하기</li>
                            <li>책임감 있는 호스팅</li>
                        </ul>
                    </section>
                    <section>
                        <div>
                            <strong>소개</strong>
                        </div>
                        <ul>
                            <li>뉴스룸</li>
                            <li>새로운 기능에 대해 알아보기</li>
                            <li>에어비앤비 공동창업자의 메시지</li>
                            <li>채용정보</li>
                            <li>투자자 정보</li>
                        </ul>
                    </section>
                </div>
                <div style={{ display: "flex", padding: "24px 0px" }}>
                    <div>
                        <span>&copy; 2022 Airbnb, Inc.</span>
                        <span>·</span>
                        <span>개인정보 처리방침</span>
                        <span>·</span>
                        <span>이용약관</span>
                        <span>·</span>
                        <span>사이트맵</span>
                        <span>·</span>
                        <span>한국의 변경된 환불 정책</span>
                        <span>·</span>
                        <span>회사 세부 정보</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
