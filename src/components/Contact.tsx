'use client';
import { useState, FormEvent } from 'react';

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const form = e.target as HTMLFormElement;
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
      type: (form.elements.namedItem('type') as HTMLSelectElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error('전송 실패');

      setSuccess(true);
      form.reset();
    } catch {
      setError('전송 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section section-dark">
      <div className="container">
        <div className="section-header reveal">
          <span className="badge">Contact</span>
          <h2>문의 <span className="gradient-text">하기</span></h2>
          <p>무엇이든 물어보세요. 전문가가 빠르게 답변드립니다.</p>
        </div>
        <div className="contact-grid">
          <div className="contact-info reveal">
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <div>
                <strong>주소</strong>
                <p>서울특별시 강남구 테헤란로 123, DMATE빌딩 10층</p>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <div>
                <strong>전화</strong>
                <p>02-1234-5678</p>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">✉️</span>
              <div>
                <strong>이메일</strong>
                <p>swanbay@dmate.kr</p>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">🕐</span>
              <div>
                <strong>운영시간</strong>
                <p>평일 09:00 – 18:00 (주말·공휴일 휴무)</p>
              </div>
            </div>
          </div>
          <div className="reveal">
            {success ? (
              <p className="form-success">
                문의가 성공적으로 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.
              </p>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">이름</label>
                    <input id="name" name="name" type="text" placeholder="홍길동" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">이메일</label>
                    <input id="email" name="email" type="email" placeholder="example@email.com" required />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="phone">연락처</label>
                  <input id="phone" name="phone" type="tel" placeholder="010-0000-0000" />
                </div>
                <div className="form-group">
                  <label htmlFor="type">문의 유형</label>
                  <select id="type" name="type" required>
                    <option value="">선택해주세요</option>
                    <option value="strategy">전략 컨설팅</option>
                    <option value="dx">디지털 트랜스포메이션</option>
                    <option value="data">데이터 분석&amp;AI</option>
                    <option value="brand">브랜드&amp;마케팅</option>
                    <option value="security">보안 컨설팅</option>
                    <option value="other">기타</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">문의 내용</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="문의 내용을 자유롭게 작성해 주세요."
                    required
                  />
                </div>
                {error && <p style={{ color: '#ef4444', fontSize: '0.9rem' }}>{error}</p>}
                <button type="submit" className="btn btn-primary btn-full btn-lg" disabled={loading}>
                  {loading ? '전송 중...' : '문의 보내기'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
