---
created: 2026-05-13T19:30:00+09:00
project: mypage
summary: 순수 HTML/CSS/JS에서 Next.js 16 + TypeScript로 마이그레이션 완료, logo.png 적용 및 Vercel 자동 배포 파이프라인 구축
---

## Session Digest

이전 세션에서 구축한 순수 HTML/CSS/JS 비즈니스 홈페이지를 Next.js 16 + React 19 + TypeScript 스택으로 전면 마이그레이션했다. 기존 단일 파일 구조에서 컴포넌트 단위(Navbar, Footer, Hero, Services, About, Team, CtaBanner, Contact, ScrollReveal)로 분리했고, `next/image`를 통한 logo.png 최적화 렌더링을 Navbar·Footer 양쪽에 적용했다. 연락처 이메일을 `swanbay@dmate.kr`로 수정했다. GitHub 저장소(bass9995/mypage)와 Vercel 프로젝트(prj_Sn0SXuSVP1OUfHgtpsZhLvBGzgoi)를 연동해 `git push origin master` 한 번으로 자동 배포되는 CI/CD 파이프라인을 완성했다. Windows PowerShell 실행 정책을 CurrentUser 스코프에서 RemoteSigned로 변경해 로컬 스크립트 실행 차단 문제도 해소했다.

## Progress

- Next.js 16.2.6 + React 19.2.4 + TypeScript 5 프로젝트 초기화 (`mypage-next`)
- 기존 HTML/CSS/JS → 아래 컴포넌트로 분리 완료
  - `src/app/layout.tsx` — 글로벌 메타데이터(title, description), html/body 래퍼
  - `src/app/page.tsx` — 최상위 페이지, 컴포넌트 조합
  - `src/app/globals.css` — 전역 스타일, CSS 변수 다크 테마
  - `src/components/Navbar.tsx` — 스크롤 감지, 모바일 햄버거 메뉴, logo.png
  - `src/components/Footer.tsx` — 브랜드 영역 logo.png, 링크 그룹
  - `src/components/Hero.tsx` — 히어로 섹션
  - `src/components/Services.tsx` — 서비스 6종 카드
  - `src/components/About.tsx` — 회사 소개
  - `src/components/Team.tsx` — 팀원 카드
  - `src/components/CtaBanner.tsx` — CTA 배너
  - `src/components/Contact.tsx` — 문의 폼 (setTimeout mock)
  - `src/components/ScrollReveal.tsx` — IntersectionObserver 기반 등장 애니메이션
- `public/logo.png` 배치, `next/image`로 최적화 렌더링 (`width=120, height=36`)
- Contact 섹션 이메일 `swanbay@dmate.kr` 반영
- Vercel CLI로 프로젝트 연결 (`.vercel/project.json` 생성)
- GitHub bass9995/mypage ↔ Vercel 자동 배포 연동 완료
- PowerShell 실행 정책 `Set-ExecutionPolicy RemoteSigned -Scope CurrentUser` 설정
- `git push origin master` → Vercel 자동 빌드·배포 확인

## Next Steps

1. **실제 회사 정보로 콘텐츠 교체**
   - `src/components/Contact.tsx`: 주소, 전화번호를 실제 정보로 수정
   - `src/components/Team.tsx`: 실제 팀원 이름, 직책, 사진 교체
   - `src/components/Services.tsx`: 실제 서비스 설명·아이콘 교체
   - `src/components/About.tsx`: 실제 회사 연혁·수치 업데이트
2. **실제 이미지 추가**
   - `public/` 하위에 팀원 사진, 서비스 아이콘, OG 이미지 배치
   - `next/image` 컴포넌트 활용 권장 (자동 최적화)
3. **SEO 메타태그 보강**
   - `src/app/layout.tsx`의 `metadata` 객체에 `openGraph`, `twitter`, `keywords`, `canonical` 추가
   - favicon 교체 (`public/favicon.ico` or `src/app/favicon.ico`)
4. **문의 폼 백엔드 연결**
   - `src/components/Contact.tsx`의 `setTimeout` mock을 실제 API 호출로 교체
   - 옵션 A: Next.js API Route (`src/app/api/contact/route.ts`) → 이메일 전송 (nodemailer / Resend)
   - 옵션 B: Formspree / EmailJS 같은 외부 서비스 연동

## Blockers

없음. 현재 배포 파이프라인은 정상 동작 중.

## Watch Out

- **브랜치명 주의**: 로컬·원격 모두 `master` 브랜치 사용 중. Vercel 연동 시 기본 브랜치로 `master`가 등록되어 있으므로 `main`으로 변경할 경우 Vercel 대시보드 → Settings → Git에서 Production Branch도 함께 변경해야 한다.
- **CSS 변수 규칙**: 색상 하드코딩 금지. `globals.css`의 `:root` 변수(`--bg`, `--surface`, `--accent` 등)를 반드시 사용할 것.
- **`next/image` 외부 도메인**: 외부 URL 이미지를 `<Image>`로 렌더링하려면 `next.config.ts`의 `images.remotePatterns`에 도메인을 등록해야 한다.
- **Contact 폼 mock 상태**: 현재 폼 제출은 1초 후 성공 메시지만 노출되며 실제 데이터가 전송되지 않는다. 운영 전 반드시 백엔드 연결 필요.
- **PowerShell 실행 정책**: 다른 Windows 계정이나 CI 환경에서는 RemoteSigned 정책이 적용되어 있지 않을 수 있으니 주의.

## Files Touched

```
src/app/layout.tsx
src/app/page.tsx
src/app/globals.css
src/app/page.module.css
src/app/favicon.ico
src/components/Navbar.tsx
src/components/Footer.tsx
src/components/Hero.tsx
src/components/Services.tsx
src/components/About.tsx
src/components/Team.tsx
src/components/CtaBanner.tsx
src/components/Contact.tsx
src/components/ScrollReveal.tsx
public/logo.png
next.config.ts
tsconfig.json
package.json
.vercel/project.json
.gitignore
```
