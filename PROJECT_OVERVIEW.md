# MVP Project 03 - 직원 공유용 프로젝트 문서

## 프로젝트 개요
- **목적:** B2B 냉매/부자재 전문 홈페이지 리뉴얼 및 고도화
- **기술스택:** Next.js(App Router, TypeScript), Tailwind CSS, React Icons, Vercel 배포
- **주요 기능:** 반응형 UI, 디자인 시스템, 이미지 최적화, SEO, 접근성, 섹션별 컴포넌트 구조, 애니메이션

## 폴더 구조
```
app/           # Next.js App Router 구조
src/
  components/  # 주요 섹션별 컴포넌트(Hero, CompanyIntro, ProductSection, StrengthSection, ...)
  lib/         # 유틸리티 함수
  types/       # 타입 정의
public/        # 정적 파일 및 이미지
```

## 주요 작업 내역
- 디자인 시스템 확장(Tailwind 커스텀)
- 모바일/데스크탑 반응형 개선
- 카드, 버튼, 배지, 아이콘, 강조 텍스트 등 세부 디자인 적용
- Next.js Image 컴포넌트로 이미지 최적화
- 각 섹션별 컴포넌트 고도화 및 분리
- SEO/오픈그래프 메타데이터 적용
- 접근성(aria-label, focus ring 등) 강화
- 애니메이션 효과(페이드인, 팝, 바운스 등) 적용
- Vercel production 배포

## 개발/배포 명령어
- 개발 서버 실행: `npm run dev`
- 패키지 설치: `npm install <패키지명>`
- 커밋/푸시: `git add .; git commit -m "메시지"; git push origin main`
- Vercel 배포: `vercel --prod`

## 참고/공유
- GitHub: https://github.com/mxten777/mvp_project_03
- Vercel: https://mvp-project-03-jhbjp3e6e-dongyeol-jungs-projects.vercel.app

## 담당자 연락처
- 대표번호: 02-1234-5678
- 이메일: info@corp.com

---
**프로젝트 관련 문의/피드백은 언제든 환영합니다!**
