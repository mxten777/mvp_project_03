# 한국코프론 웹앱 배포 가이드

## 🚀 배포 옵션

### 1. Vercel (추천) - 가장 쉬운 방법

1. **Vercel 계정 생성**
   - https://vercel.com 에서 GitHub/Google 계정으로 가입

2. **프로젝트 압축**
   ```bash
   # 프로젝트 폴더를 zip으로 압축
   ```

3. **Vercel에서 배포**
   - Vercel 대시보드에서 "New Project" 클릭
   - "Import from ZIP file" 또는 GitHub 연동
   - 자동으로 빌드 및 배포 완료

### 2. Netlify

1. **Netlify 계정 생성**
   - https://netlify.com 에서 가입

2. **드래그 앤 드롭 배포**
   - `npm run build` 실행
   - `out` 폴더를 Netlify에 드래그 앤 드롭

### 3. GitHub Pages (정적 배포)

1. **Next.js 정적 내보내기 설정**
   ```bash
   npm run build
   npm run export
   ```

2. **GitHub 저장소에 업로드**
   - GitHub Pages 설정에서 배포

## 🔧 배포 전 체크리스트

- ✅ 빌드 성공 (`npm run build`)
- ✅ 모든 페이지 정상 작동 확인
- ✅ 반응형 디자인 테스트
- ✅ SEO 메타데이터 확인
- ✅ 성능 최적화 완료

## 📊 현재 프로젝트 상태

- **빌드 상태**: ✅ 성공
- **페이지 수**: 3개 (홈, 주문, 404)
- **번들 크기**: 101 kB (최적화됨)
- **정적 생성**: 모든 페이지

## 🌐 도메인 연결

배포 후 커스텀 도메인을 연결할 수 있습니다:
- 예: `www.koreacofron.co.kr`
- DNS 설정 필요

## 📈 향후 업그레이드 계획

1. **관리자 대시보드** 구현
2. **데이터베이스** 연동 (PostgreSQL/MongoDB)
3. **API 서버** 구축
4. **이메일/SMS** 알림 시스템
5. **결제 시스템** 연동
6. **사용자 인증** 시스템

## 🛠 기술 스택

- **Frontend**: Next.js 15 + TypeScript
- **Styling**: Tailwind CSS
- **Hosting**: Vercel (추천)
- **Domain**: 추후 설정
- **Analytics**: Google Analytics (추후 추가)
