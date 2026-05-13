import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'DMATE - 디지털 혁신의 파트너',
  description: '최신 기술과 창의적인 전략으로 고객의 비즈니스를 한 단계 더 끌어올립니다.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
