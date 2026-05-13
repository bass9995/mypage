export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" />
      <div className="container" style={{ width: '100%' }}>
        <div className="hero-content">
          <span className="badge">디지털 혁신의 파트너</span>
          <h1>
            비즈니스를<br />
            <span className="gradient-text">한 단계 더</span><br />
            끌어올립니다
          </h1>
          <p>
            최신 기술과 창의적인 전략으로 고객사의 성장을 가속화합니다.
            데이터 기반의 인사이트와 검증된 방법론으로 실질적인 변화를 만들어 냅니다.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary btn-lg">무료 상담 신청</a>
            <a href="#services" className="btn btn-outline btn-lg">서비스 보기</a>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-num gradient-text">200+</span>
              <span className="stat-label">완료 프로젝트</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-num gradient-text">98%</span>
              <span className="stat-label">고객 만족도</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-num gradient-text">10+</span>
              <span className="stat-label">업력(년)</span>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-visual">
        <div className="floating-card card1">
          <span className="card-icon">📈</span>
          <span>매출 32% 성장</span>
        </div>
        <div className="floating-card card2">
          <span className="card-icon">🚀</span>
          <span>디지털 전환</span>
        </div>
        <div className="floating-card card3">
          <span className="card-icon">🔒</span>
          <span>보안 인증 완료</span>
        </div>
      </div>
    </section>
  );
}
