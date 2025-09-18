# 한국코프론 웹앱

에어컨 가스 및 냉매 관련 부자재를 전문으로 하는 한국코프론의 B2B 웹 애플리케이션입니다.

## 🏢 회사 정보

- **업체명**: 한국코프론
- **대표자**: 송하선  
- **사업위치**: 용인시 기흥구 지곡동 381-6
- **주요제품**: 에어컨 가스 및 냉매 관련 부자재

## ✨ 주요 기능

1. **랜딩페이지** - 회사소개 및 제품안내
2. **온라인 주문 접수** - B2B 고객을 위한 주문 시스템
3. **관리자 대시보드** - 주문 관리 (개발 예정)
4. **알림 시스템** - 이메일/카카오톡 연동 (개발 예정)

## 🛠 기술 스택

- **Frontend**: Next.js 15 with TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Architecture**: App Router with src directory

## 🚀 시작하기

### 개발 환경 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

### 빌드

```bash
npm run build
npm start
```

### 린트 검사

```bash
npm run lint
```

## 📁 프로젝트 구조

```
src/
├── app/
│   ├── order/          # 주문 페이지
│   ├── layout.tsx      # 메인 레이아웃
│   └── page.tsx        # 홈페이지
├── components/
│   ├── Header.tsx      # 네비게이션 헤더
│   └── Footer.tsx      # 푸터
├── types/
│   └── index.ts        # TypeScript 타입 정의
└── lib/
    └── utils.ts        # 유틸리티 함수
```

## 🎨 디자인 시스템

- **Primary Color**: Blue (blue-900, blue-600)
- **Secondary Colors**: Green, Orange, Purple
- **Typography**: Geist Sans (기본), Geist Mono (코드)
- **Responsive**: Mobile-first 접근 방식

## 📋 TODO

- [ ] 제품 상세 페이지 구현
- [ ] 관리자 대시보드 개발
- [ ] API 엔드포인트 구현
- [ ] 이메일/SMS 알림 시스템
- [ ] 결제 시스템 연동 (선택사항)
- [ ] 재고 관리 시스템
- [ ] 사용자 인증 시스템

## 📞 문의

프로젝트 관련 문의는 개발팀에게 연락주세요.
