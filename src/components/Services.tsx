interface Service {
  icon: string;
  title: string;
  desc: string;
  items: string[];
  gradient: string;
  featured?: boolean;
}

const services: Service[] = [
  {
    icon: '💡',
    title: '전략 컨설팅',
    desc: '비즈니스 목표 달성을 위한 맞춤형 전략을 수립합니다.',
    items: ['시장 분석 및 경쟁사 조사', '성장 전략 수립', 'KPI 설계 및 로드맵'],
    gradient: 'linear-gradient(135deg, rgba(99,102,241,0.3), rgba(139,92,246,0.3))',
  },
  {
    icon: '🖥️',
    title: '디지털 트랜스포메이션',
    desc: '레거시 시스템을 현대화하고 디지털 역량을 강화합니다.',
    items: ['클라우드 마이그레이션', '업무 프로세스 자동화', 'ERP / CRM 구축'],
    gradient: 'linear-gradient(135deg, rgba(99,102,241,0.3), rgba(6,182,212,0.3))',
    featured: true,
  },
  {
    icon: '📊',
    title: '데이터 분석&AI',
    desc: '데이터에서 인사이트를 추출하고 AI로 의사결정을 고도화합니다.',
    items: ['BI 대시보드 구축', '머신러닝 모델 개발', '데이터 파이프라인 설계'],
    gradient: 'linear-gradient(135deg, rgba(59,130,246,0.3), rgba(6,182,212,0.3))',
  },
  {
    icon: '🎨',
    title: '브랜드&마케팅',
    desc: '강력한 브랜드 아이덴티티와 디지털 마케팅 전략을 제시합니다.',
    items: ['브랜드 전략 수립', '콘텐츠 마케팅', 'SNS 채널 운영'],
    gradient: 'linear-gradient(135deg, rgba(236,72,153,0.3), rgba(251,146,60,0.3))',
  },
  {
    icon: '🔐',
    title: '보안 컨설팅',
    desc: '사이버 위협으로부터 비즈니스 자산을 안전하게 보호합니다.',
    items: ['보안 취약점 진단', '정보보호 정책 수립', '컴플라이언스 대응'],
    gradient: 'linear-gradient(135deg, rgba(16,185,129,0.3), rgba(5,150,105,0.3))',
  },
  {
    icon: '🌐',
    title: '글로벌 진출 지원',
    desc: '해외 시장 진출을 위한 전략 수립부터 현지화까지 지원합니다.',
    items: ['해외 시장 조사', '현지화 전략', '글로벌 파트너십 구축'],
    gradient: 'linear-gradient(135deg, rgba(245,158,11,0.3), rgba(239,68,68,0.3))',
  },
];

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <div className="section-header reveal">
          <span className="badge">Services</span>
          <h2>우리가 제공하는 <span className="gradient-text">서비스</span></h2>
          <p>비즈니스의 모든 단계에서 최적의 솔루션을 제공합니다.</p>
        </div>
        <div className="services-grid">
          {services.map((service) => (
            <div
              key={service.title}
              className={`service-card reveal${service.featured ? ' featured' : ''}`}
            >
              {service.featured && <span className="featured-badge">추천</span>}
              <div
                className="service-icon"
                style={{ background: service.gradient }}
              >
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <ul className="service-list">
                {service.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
