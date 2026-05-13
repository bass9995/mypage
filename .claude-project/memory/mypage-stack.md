---
name: mypage-stack
description: mypage 프로젝트 기술 스택 (Next.js + TypeScript)
metadata:
  type: project
---

프로젝트 경로: `C:\개발\mypage`.

- **프레임워크:** Next.js 16.2.6 (App Router, Turbopack)
- **언어:** TypeScript
- **스타일:** globals.css (CSS 변수 기반 다크 테마, 빌드 도구 없이 전역 CSS 사용)
- **구조:** `src/app/` (layout.tsx, page.tsx, globals.css) + `src/components/` (Navbar, Hero, Services, About, Team, CtaBanner, Contact, Footer, ScrollReveal)
- **로컬 실행:** `npm run dev` (PowerShell 실행 정책 CurrentUser=RemoteSigned 설정 완료)
- **빌드:** `npm run build`

**Why:** 초기 HTML/CSS/JS에서 Next.js + TypeScript로 마이그레이션
**How to apply:** `npm run dev`로 개발, `git push`하면 Vercel 자동 배포됨. lint/type 검증 포함.
