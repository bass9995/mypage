interface TeamMember {
  initials: string;
  name: string;
  role: string;
  desc: string;
  gradient: string;
}

const members: TeamMember[] = [
  {
    initials: 'KJ',
    name: '김준혁',
    role: 'CEO · 대표이사',
    desc: '10년 이상의 컨설팅 경력으로 국내외 200여 개 기업의 전략을 수립했습니다.',
    gradient: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
  },
  {
    initials: 'LM',
    name: '이민지',
    role: 'CTO · 기술이사',
    desc: '클라우드 및 AI 전문가로 디지털 트랜스포메이션 프로젝트를 진두지휘합니다.',
    gradient: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
  },
  {
    initials: 'PS',
    name: '박서연',
    role: '데이터 사이언티스트',
    desc: '머신러닝과 빅데이터 분석으로 비즈니스 인사이트를 발굴합니다.',
    gradient: 'linear-gradient(135deg, #10b981, #059669)',
  },
  {
    initials: 'CH',
    name: '최현우',
    role: '마케팅 디렉터',
    desc: '브랜드 전략과 디지털 마케팅으로 고객사의 시장 존재감을 강화합니다.',
    gradient: 'linear-gradient(135deg, #f59e0b, #ef4444)',
  },
];

export default function Team() {
  return (
    <section id="team" className="section">
      <div className="container">
        <div className="section-header reveal">
          <span className="badge">Our Team</span>
          <h2>최고의 <span className="gradient-text">전문가 팀</span></h2>
          <p>각 분야 최고의 전문가들이 고객사의 성공을 위해 함께합니다.</p>
        </div>
        <div className="team-grid">
          {members.map((member) => (
            <div key={member.name} className="team-card reveal">
              <div
                className="team-avatar"
                style={{ background: member.gradient }}
              >
                {member.initials}
              </div>
              <h3>{member.name}</h3>
              <span className="team-role">{member.role}</span>
              <p>{member.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
