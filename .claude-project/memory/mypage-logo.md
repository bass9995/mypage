---
name: mypage-logo
description: mypage 로고 이미지 배치 및 Navbar/Footer 적용 규칙
metadata:
  type: project
---

- 로고 파일 위치: `public/logo.png`
- Navbar, Footer 모두 `next/image`로 렌더링 (width=120, height=36)
- `.logo` CSS: 텍스트 그래디언트 없음, `display:flex + margin-right:auto` 만 유지
- Contact 이메일: `swanbay@dmate.kr`

**Why:** next/image는 자동 최적화(lazy load, WebP 변환)를 제공하므로 `<img>` 태그 직접 사용 금지.
**How to apply:** 로고 교체 시 `public/logo.png` 파일만 덮어쓰면 전체 적용됨. `.logo` 클래스에 텍스트 그래디언트 스타일 추가하지 말 것.
