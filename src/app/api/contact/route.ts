import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const TYPE_LABELS: Record<string, string> = {
  strategy: '전략 컨설팅',
  dx: '디지털 트랜스포메이션',
  data: '데이터 분석&AI',
  brand: '브랜드&마케팅',
  security: '보안 컨설팅',
  other: '기타',
};

export async function POST(req: NextRequest) {
  const { name, email, phone, type, message } = await req.json();

  if (!name || !email || !type || !message) {
    return NextResponse.json({ error: '필수 항목이 누락되었습니다.' }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: 'DMATE 문의 <onboarding@resend.dev>',
    to: process.env.CONTACT_RECEIVER!,
    subject: `[문의] ${TYPE_LABELS[type] ?? type} - ${name}`,
    replyTo: email,
    html: `
      <h2>새 문의가 접수되었습니다</h2>
      <table style="border-collapse:collapse;width:100%">
        <tr><td style="padding:8px;border:1px solid #ddd;background:#f5f5f5;width:120px"><strong>이름</strong></td><td style="padding:8px;border:1px solid #ddd">${name}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;background:#f5f5f5"><strong>이메일</strong></td><td style="padding:8px;border:1px solid #ddd">${email}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;background:#f5f5f5"><strong>연락처</strong></td><td style="padding:8px;border:1px solid #ddd">${phone || '-'}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;background:#f5f5f5"><strong>문의 유형</strong></td><td style="padding:8px;border:1px solid #ddd">${TYPE_LABELS[type] ?? type}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;background:#f5f5f5"><strong>문의 내용</strong></td><td style="padding:8px;border:1px solid #ddd;white-space:pre-wrap">${message}</td></tr>
      </table>
    `,
  });

  if (error) {
    console.error('resend error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
