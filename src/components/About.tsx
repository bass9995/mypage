export default function About() {
  return (
    <section id="about" className="section section-dark">
      <div className="container">
        <div className="about-grid">
          <div className="about-img-wrap reveal">
            <div className="about-img-placeholder">🏢</div>
            <div className="about-badge-float">
              <span className="big-num">10</span>
              <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>년의 신뢰</span>
            </div>
          </div>
          <div className="about-content reveal">
            <span className="badge">About Us</span>
            <h2>
              신뢰와 혁신으로<br />
              <span className="gradient-text">함께 성장합니다</span>
            </h2>
            <p>
              DMATE는 2014년 설립 이후 200여 개 기업의 디지털 혁신을 성공적으로 이끌어 왔습니다.
              전략 컨설팅부터 기술 구현까지 비즈니스의 전 과정을 책임지는 토탈 파트너입니다.
            </p>
            <p>
              고객사의 성공이 곧 우리의 성공이라는 신념 아래, 데이터 기반의 인사이트와
              검증된 방법론으로 실질적이고 지속 가능한 성과를 만들어 냅니다.
            </p>
            <div className="about-features">
              <div className="feature-item">
                <span className="feature-icon">✅</span>
                <div>
                  <strong>검증된 방법론</strong>
                  <p>10년간 축적된 프로젝트 경험을 바탕으로 한 체계적 프레임워크</p>
                </div>
              </div>
              <div className="feature-item">
                <span className="feature-icon">✅</span>
                <div>
                  <strong>전담 프로젝트 매니저</strong>
                  <p>프로젝트 시작부터 완료까지 전담 PM이 밀착 관리합니다</p>
                </div>
              </div>
              <div className="feature-item">
                <span className="feature-icon">✅</span>
                <div>
                  <strong>투명한 커뮤니케이션</strong>
                  <p>진행 상황을 실시간으로 공유하며 신뢰를 쌓아갑니다</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
