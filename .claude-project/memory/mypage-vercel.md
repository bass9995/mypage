---
name: mypage-vercel
description: Vercel 배포 설정 및 GitHub 연동 정보
metadata:
  type: project
---

- Vercel 프로젝트명: `bass9995s-projects/mypage`
- 프로덕션 URL: `https://dmate-three-ashy.vercel.app`
- 배포 브랜치: `master`
- **GitHub 연동:** `bass9995/mypage` 저장소와 연결 완료 → push 시 자동 배포
- `vercel.json`: `framework: nextjs`, 보안 헤더, `/_next/static/` 캐시 설정

**Why:** 사용자가 Vercel 대시보드에서 GitHub 저장소를 직접 연결함 (2026-05-13)
**How to apply:** 추가 배포 설정 변경은 Vercel 대시보드 또는 `vercel.json` 수정. 배포는 push로 자동.
