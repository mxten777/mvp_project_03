# 프로젝트 배포 및 Git 관리 가이드

## 1. Git 저장소 초기화 및 커밋

```bash
git init
git add .
git commit -m "프로젝트 초기화 및 디자인 개선: 메인/주문서 페이지 및 전체 UI 세련화"
```

## 2. 원격 저장소 연결

```bash
git remote add origin https://github.com/mxten777/mvp_project_01.git
```
*이미 연결되어 있다면 아래 명령으로 변경 가능:*
```bash
git remote set-url origin https://github.com/mxten777/mvp_project_01.git
```

## 3. 원격 저장소로 푸시

```bash
git branch -M main
git push -u origin main
```

## 4. Vercel 프로덕션 배포

1. Vercel CLI가 설치되어 있고, 프로젝트가 연결되어 있다면:

```bash
vercel --prod
```

2. 최초 연결 시:
```bash
vercel
```
(로그인 및 프로젝트 연결 후, 이후부터는 `vercel --prod` 사용)

---

- 배포가 완료되면 Vercel에서 제공하는 URL로 바로 서비스 확인 가능
- 추가 환경변수, 자동화, 배포 설정 등은 Vercel 대시보드에서 관리
