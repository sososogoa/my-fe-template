## 기술 스택

### 프론트엔드
- **React 19** - 최신 React 기능
- **TypeScript** - 타입 안전성
- **Vite** - 빠른 빌드 도구
- **TailwindCSS** - 유틸리티 기반 CSS

### 상태 관리 & 라우팅
- **React Router 7** - Data Router 패턴
- **Zustand** - 경량 상태 관리
- **React Query** - 서버 상태 관리

### 개발 환경
- **ESLint & Prettier** - 코드 품질 관리
- **Vitest & Testing Library** - 테스트 환경
- **Git** - 버전 관리

## 📦 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 빌드
npm run build

# 빌드 결과 미리보기
npm run preview

# 린트 검사
npm run lint
```

## 프로젝트 구조

```
src/
├── assets/          # 정적 자산
├── components/      # 재사용 가능한 컴포넌트
├── data/           # 데이터 관련 파일
├── features/       # 기능별 컴포넌트
├── layouts/        # 레이아웃 컴포넌트
├── pages/          # 페이지 컴포넌트
├── shared/         # 공유 컴포넌트
├── store/          # 상태 관리
├── types/          # TypeScript 타입 정의
├── utils/          # 유틸리티 함수
├── index.css       # 글로벌 스타일
└── main.tsx        # 애플리케이션 진입점
```