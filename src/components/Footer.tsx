export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-brand">
            <span className="logo">DMATE</span>
            <p>
              최신 기술과 창의적인 전략으로<br />
              고객의 비즈니스를 한 단계 더 끌어올립니다.
            </p>
          </div>
          <div className="footer-links">
            <div>
              <h4>서비스</h4>
              <ul>
                <li><a href="#services">전략 컨설팅</a></li>
                <li><a href="#services">디지털 트랜스포메이션</a></li>
                <li><a href="#services">데이터 분석&amp;AI</a></li>
                <li><a href="#services">브랜드&amp;마케팅</a></li>
                <li><a href="#services">보안 컨설팅</a></li>
              </ul>
            </div>
            <div>
              <h4>회사</h4>
              <ul>
                <li><a href="#about">회사 소개</a></li>
                <li><a href="#team">팀</a></li>
                <li><a href="#contact">문의하기</a></li>
                <li><a href="#contact">채용</a></li>
              </ul>
            </div>
            <div>
              <h4>법적고지</h4>
              <ul>
                <li><a href="#">이용약관</a></li>
                <li><a href="#">개인정보처리방침</a></li>
                <li><a href="#">쿠키 정책</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        © 2026 DMATE. All rights reserved.
      </div>
    </footer>
  );
}
