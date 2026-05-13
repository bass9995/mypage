---
name: mypage-design-system
description: mypage CSS 변수 기반 다크 테마 디자인 시스템
metadata:
  type: project
---

다크 테마 CSS 변수 기준값 (`style.css :root`):
- 배경: `#0f172a` (`--dark`), `#1e293b` (`--dark-2`), `#334155` (`--dark-3`)
- Primary: `#6366f1` (`--primary`), `#4f46e5` (`--primary-dark`)
- Accent: `#06b6d4` (`--accent`)
- 텍스트: `#f8fafc` (`--text`), `#94a3b8` (`--text-muted`)
- 카드 배경: `rgba(255,255,255,0.04)` (`--card-bg`)
- 테두리: `rgba(255,255,255,0.08)` (`--border`)

**Why:** CSS 변수 방식으로 전체 테마 일관성 유지, 추후 라이트 모드 추가 용이
**How to apply:** 새 컴포넌트 추가 시 하드코딩 색상 대신 반드시 CSS 변수 사용.
