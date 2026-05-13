---
name: mypage-git-status
description: mypage git/GitHub/Vercel 배포 현황
metadata:
  type: project
---

- git user: `swanbay@dmate.kr` / `DMATE`
- 원격 저장소: `https://github.com/bass9995/mypage` (public, master 브랜치)
- Vercel 프로젝트: `bass9995s-projects/mypage`
- **GitHub ↔ Vercel 연동 완료** — `git push origin master` 하면 Vercel이 자동으로 빌드·배포

**Why:** 수동 `vercel --prod` 없이 push만으로 배포 가능
**How to apply:** 코드 수정 후 `git push origin master` 만 하면 됨. 별도 배포 명령 불필요.
