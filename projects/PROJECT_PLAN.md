# 프로젝트 포트폴리오 페이지 기획서
# Project Portfolio Page Planning Document

---

## 📋 프로젝트 개요 / Project Overview

### 목적 / Purpose
- 기존 메인 페이지의 간단한 프로젝트 소개를 확장하여 상세한 포트폴리오 페이지 구축
- 지속적으로 새로운 프로젝트와 아이디어를 추가할 수 있는 확장 가능한 구조 설계
- 기존 사이트의 디자인 시스템, i18n, 다크모드를 그대로 활용하여 일관된 사용자 경험 제공

### 타겟 사용자 / Target Users
- 잠재적 고용주 / 클라이언트
- 동료 개발자들
- 기술 커뮤니티 구성원들
- 프로젝트 협업 파트너들

---

## 🗺️ 사이트 구조 / Site Structure

### 개선된 계층 구조
```
/
├── profile/
│   ├── index.html                  # 메인 명함 페이지 (기존)
│   └── css/, js/, public/ (기존 파일들)
└── projects/
    ├── index.html                  # 프로젝트 허브 페이지
    ├── main/                       # 주요 프로젝트
    │   ├── parttime-study/
    │   │   ├── index.html          # 파트타임스터디 상세 페이지
    │   │   └── images/             # 프로젝트별 이미지
    │   └── offen-camp/
    │       ├── index.html          # OFFen-CAMP 상세 페이지
    │       └── images/
    ├── side/                       # 사이드 프로젝트
    │   ├── index.html              # 사이드 프로젝트 목록
    │   ├── portfolio-site/
    │   │   └── index.html          # 포트폴리오 사이트 개발기
    │   └── automation-tools/
    │       └── index.html          # 개발 자동화 도구들
    ├── experiments/                # 기술 실험
    │   ├── index.html              # 기술 실험 목록
    │   ├── tech-poc/
    │   │   └── index.html          # 기술 POC 프로젝트들
    │   └── learning-projects/
    │       └── index.html          # 학습 목적 프로젝트들
    ├── data/                       # 프로젝트 메타데이터
    │   ├── projects.json           # 전체 프로젝트 메타데이터
    │   ├── main-projects.json      # 주요 프로젝트 상세 정보
    │   ├── side-projects.json      # 사이드 프로젝트 정보
    │   └── experiments.json        # 실험 프로젝트 정보
    └── shared/                     # 공통 리소스
        ├── css/
        │   ├── project-base.css     # 기본 스타일
        │   ├── project-cards.css   # 카드 컴포넌트
        │   └── project-detail.css  # 상세 페이지
        ├── js/
        │   ├── project-common.js    # 공통 기능
        │   ├── filter.js           # 필터링 기능
        │   └── i18n-projects.js    # 프로젝트 전용 번역
        └── components/
            ├── project-header.html  # 재사용 헤더
            └── project-nav.html     # 재사용 네비게이션
```

### URL 구조
```
/profile/                           # 메인 허브
/projects/                          # 프로젝트 목록
/projects/main/parttime-study/      # 주요 프로젝트 상세
/projects/main/offen-camp/
/projects/side/                     # 사이드 프로젝트 목록
/projects/side/portfolio-site/      # 사이드 프로젝트 상세
/projects/experiments/              # 실험 프로젝트 목록
/projects/experiments/tech-poc/     # 실험 프로젝트 상세
```

### 네비게이션 플로우
```
profile/ (메인) → projects/ (허브) → main/side/experiments/ → 개별 프로젝트
     ↓              ↓                        ↓
   간단 미리보기  → 카테고리별 목록 → 프로젝트 상세 페이지
```

---

## 📄 페이지별 상세 기획

### 1. 프로젝트 허브 페이지 (`/projects/index.html`)

#### 목적
- 모든 프로젝트를 카테고리별로 정리하여 한눈에 볼 수 있는 중앙 허브 역할
- 방문자가 관심있는 분야의 프로젝트를 빠르게 찾을 수 있도록 지원
- 카테고리별 섹션을 통한 직관적인 프로젝트 탐색 경험 제공

#### 구성 요소
1. **헤더 섹션**
   - 네비게이션 (메인 페이지로 돌아가는 링크: `../profile/`)
   - 페이지 제목 및 소개
   - 다크모드/언어 토글 (기존 시스템 재사용)

2. **카테고리 네비게이션**
   - 주요 프로젝트 (Main Projects) - `/projects/main/`
   - 사이드 프로젝트 (Side Projects) - `/projects/side/`
   - 기술 실험 (Tech Experiments) - `/projects/experiments/`
   - 각 카테고리별 프로젝트 수 표시

3. **카테고리별 미리보기 섹션**
   - **주요 프로젝트 섹션**: 2-3개 핵심 프로젝트 카드
   - **사이드 프로젝트 섹션**: 최신 3-4개 프로젝트 카드
   - **기술 실험 섹션**: 최신 실험들 카드
   - 각 섹션별 "더 보기" 링크

4. **프로젝트 카드 (공통)**
   - 썸네일 이미지
   - 프로젝트 제목
   - 간단한 설명 (1-2줄)
   - 기술 스택 태그 (최대 3-4개)
   - 프로젝트 상태 배지 (완료/진행중/실험중)
   - 빠른 링크들 (라이브 사이트, GitHub)

5. **통계 대시보드** (선택사항)
   - 총 프로젝트 수
   - 활성 프로젝트 수
   - 주요 기술 스택 통계
   - 최근 업데이트된 프로젝트

#### 반응형 디자인
- Desktop: 카테고리별 3열 그리드
- Tablet: 카테고리별 2열 그리드
- Mobile: 카테고리별 1열 그리드, 카드 스와이프 지원

### 2. 개별 프로젝트 상세 페이지

#### 공통 구성 요소
1. **프로젝트 헤더**
   - 프로젝트 제목
   - 한줄 설명
   - 프로젝트 기간
   - 내 역할
   - 팀 규모
   - 상태 (완료/진행중 등)

2. **프로젝트 개요**
   - 프로젝트 배경 및 목적
   - 해결하고자 한 문제
   - 타겟 사용자

3. **기술적 상세**
   - 사용 기술 스택 (상세)
   - 아키텍처 다이어그램 (선택사항)
   - 주요 기술적 챌린지
   - 해결 방법

4. **주요 기능**
   - 핵심 기능들 소개
   - 스크린샷 또는 데모 비디오
   - 사용자 플로우

5. **성과 및 결과**
   - 정량적 성과 (사용자 수, 성능 개선 등)
   - 정성적 성과 (팀 문화, 학습 등)
   - 얻은 인사이트

6. **링크 및 자료**
   - 라이브 사이트
   - GitHub 저장소
   - 관련 문서
   - 데모 영상

### 3. 카테고리별 목록 페이지

#### 주요 프로젝트 페이지 (`/projects/main/index.html`)
- 상업적 가치가 높은 핵심 프로젝트들
- 팀 리더십 경험을 보여주는 프로젝트들
- 기술적 깊이와 비즈니스 임팩트를 모두 갖춘 프로젝트들
- 프로젝트별 상세한 메트릭스와 성과 지표

#### 사이드 프로젝트 페이지 (`/projects/side/index.html`)
- 개인적으로 진행한 소규모 프로젝트들
- 기술 학습 목적의 토이 프로젝트들
- 해커톤 참여 프로젝트들
- 오픈소스 기여 프로젝트들
- 자동화 도구 및 개발 생산성 개선 프로젝트들

#### 기술 실험 페이지 (`/projects/experiments/index.html`)
- 새로운 기술 스택 학습 과정
- POC (Proof of Concept) 프로젝트들
- 기술 트렌드 검증 프로젝트들
- 성능 최적화 실험들
- 아키텍처 패턴 검증 프로젝트들
- 기술 블로그 포스트 연동

---

## 🎨 디자인 시스템 및 공통 리소스

### 색상 체계 (기존 시스템 확장)
```css
/* shared/css/project-base.css */
:root {
  /* 기존 Primary Colors */
  --primary-50: #eff6ff;
  --primary-500: #3b82f6;
  --primary-600: #2563eb;
  --primary-700: #1d4ed8;
  
  /* 프로젝트 카테고리별 Colors */
  --main-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --side-gradient: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  --experiments-gradient: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  
  /* 상태별 Colors */
  --status-active: #10b981;
  --status-completed: #6b7280;
  --status-inprogress: #f59e0b;
  --status-experimental: #8b5cf6;
}
```

### 컴포넌트 시스템
```css
/* shared/css/project-cards.css */
.project-card {
  /* 기존 메인 페이지 카드 스타일 상속 */
}

.project-card--main { /* 주요 프로젝트 전용 */ }
.project-card--side { /* 사이드 프로젝트 전용 */ }
.project-card--experiment { /* 실험 프로젝트 전용 */ }

/* shared/css/project-detail.css */
.project-header {
  /* 상세 페이지 헤더 스타일 */
}

.project-content {
  /* 콘텐츠 영역 스타일 */
}
```

### 재사용 가능한 컴포넌트
```html
<!-- shared/components/project-header.html -->
<header class="project-header">
  <nav class="project-nav">
    <a href="/projects/" class="back-to-hub"><!-- 허브로 --></a>
    <a href="/profile/" class="back-to-main"><!-- 메인으로 --></a>
  </nav>
  <!-- 프로젝트 메타 정보 -->
</header>

<!-- shared/components/project-card.html -->
<article class="project-card" data-category="{category}">
  <!-- 카드 콘텐츠 -->
</article>
```

### 스타일 계층 구조
```
shared/css/
├── project-base.css        # 기본 변수, 리셋, 유틸리티
├── project-cards.css       # 프로젝트 카드 컴포넌트
├── project-detail.css      # 상세 페이지 레이아웃
├── project-nav.css         # 네비게이션 컴포넌트
└── project-responsive.css   # 반응형 디자인
```

### 기존 시스템과의 일관성
- **기존 메인 페이지** 스타일 완전 상속
- **TailwindCSS** 클래스 재사용
- **다크모드** 지원 유지
- **폰트 체계** 동일하게 적용
- **에니메이션** 가이드라인 유지

---

## 🌍 국제화 (i18n) 계획

### 번역 키 구조 (기존 시스템 확장)
```javascript
// shared/js/i18n-projects.js - 프로젝트 전용 번역 파일

// 허브 페이지
'projects.hub.title': '프로젝트 포트폴리오',
'projects.hub.subtitle': '제가 참여한 주요 프로젝트들을 소개합니다',
'projects.hub.viewAll': '전체 보기',
'projects.hub.viewMore': '더 보기',

// 카테고리
'projects.category.main': '주요 프로젝트',
'projects.category.side': '사이드 프로젝트', 
'projects.category.experiments': '기술 실험',
'projects.category.main.desc': '상업적 가치와 팀 리더십 경험이 담긴 핵심 프로젝트들',
'projects.category.side.desc': '개인적 학습과 창의적 실험을 위한 프로젝트들',
'projects.category.experiments.desc': '새로운 기술 검증과 혁신을 위한 실험적 프로젝트들',

// 프로젝트 상태
'projects.status.active': '운영중',
'projects.status.completed': '완료',
'projects.status.inprogress': '진행중',
'projects.status.paused': '중단',
'projects.status.experimental': '실험중',

// 프로젝트 메타데이터
'projects.meta.role': '역할',
'projects.meta.period': '기간',
'projects.meta.teamsize': '팀 규모',
'projects.meta.techstack': '기술 스택',
'projects.meta.features': '주요 기능',
'projects.meta.challenges': '기술적 챌린지',
'projects.meta.results': '성과 및 결과',
'projects.meta.links': '관련 링크',
'projects.meta.impact': '비즈니스 임팩트',
'projects.meta.learning': '학습 포인트',

// 네비게이션
'projects.nav.backToHub': '프로젝트 허브로',
'projects.nav.backToMain': '메인으로',
'projects.nav.viewLive': '서비스 보기',
'projects.nav.viewCode': '코드 보기',
'projects.nav.viewDetail': '상세 보기'
```

### 다국어 데이터 구조
```json
// data/projects.json에서 다국어 지원
{
  "projects": [
    {
      "id": "parttime-study",
      "category": "main",
      "title": {
        "ko": "파트타임스터디",
        "en": "PartTime Study"
      },
      "description": {
        "ko": "실시간 온라인 교육 플랫폼 개발 및 팀 리더십",
        "en": "Real-time online education platform development and team leadership"
      },
      "role": {
        "ko": "개발팀 리드 (2년)",
        "en": "Development Team Lead (2 years)"
      }
    }
  ]
}
```

### 프로젝트별 번역 전략
- **제목 및 설명**: 각 프로젝트의 제목, 설명, 주요 기능 등을 한/영 번역
- **기술적 용어**: 기술 스택, 도구명은 영어 유지 (Spring Boot, React 등)
- **역할 및 성과**: 역할, 기간, 성과 지표는 현지화하여 번역
- **메타데이터**: 프로젝트 카테고리, 상태, 태그 등은 번역 키로 관리
- **동적 로딩**: 언어 변경 시 프로젝트 데이터도 실시간 로딩

### 번역 파일 관리
```
profile/js/i18n.js           # 기존 메인 페이지 번역
projects/shared/js/
├── i18n-projects.js         # 프로젝트 공통 번역
├── i18n-main.js            # 주요 프로젝트 전용 번역
├── i18n-side.js            # 사이드 프로젝트 전용 번역
└── i18n-experiments.js     # 실험 프로젝트 전용 번역
```

---

## 📱 반응형 및 접근성

### 모바일 최적화
- 터치 친화적인 버튼 크기
- 스와이프 가능한 이미지 갤러리
- 모바일에서도 쉬운 네비게이션

### 접근성
- 적절한 heading 구조 (h1, h2, h3)
- alt 텍스트가 있는 이미지
- 키보드 네비게이션 지원
- 충분한 색상 대비

---

## 🚀 개발 우선순위

### Phase 1: 기본 구조 및 공통 시스템 (1-2일)
1. ✅ 개선된 폴더 구조 생성 (`main/`, `side/`, `experiments/`, `shared/`, `data/`)
2. ✅ 기획 문서 업데이트
3. **공통 리소스 시스템 구축** (`shared/css/`, `shared/js/`, `shared/components/`)
4. **프로젝트 허브 페이지** 기본 레이아웃 (`/projects/index.html`)
5. **프로젝트 메타데이터 구조** 설계 (`data/*.json`)
6. **i18n 키 확장** (프로젝트 전용 번역 파일)
7. 기존 메인 페이지 버튼 연결 수정

### Phase 2: 주요 프로젝트 및 카테고리 시스템 (2-3일)
1. **카테고리별 목록 페이지** (`main/index.html`, `side/index.html`, `experiments/index.html`)
2. **주요 프로젝트 상세 페이지**
   - `main/parttime-study/index.html`
   - `main/offen-camp/index.html`
3. **재사용 가능한 컴포넌트** 개발 (프로젝트 카드, 헤더, 네비게이션)
4. **이미지 및 미디어 최적화**
5. **프로젝트 데이터 파일** 작성 및 연동

### Phase 3: 사이드 프로젝트 및 고급 기능 (1-2일)
1. **사이드 프로젝트들** 추가
   - `side/portfolio-site/` (이 포트폴리오 사이트 개발기)
   - `side/automation-tools/` (개발 도구들)
2. **기술 실험 섹션** 구축
   - `experiments/tech-poc/`
   - `experiments/learning-projects/`
3. **필터링 및 검색 기능**
4. **통계 대시보드** (선택사항)

### Phase 4: 고도화 및 확장 (지속적)
1. **성능 최적화** (이미지 지연 로딩, 코드 스플리팅)
2. **SEO 최적화** (메타태그, 구조화된 데이터)
3. **애니메이션 및 인터랙션** 개선
4. **새로운 프로젝트들** 지속적 추가
5. **사용자 피드백** 반영 및 개선

### Phase 5: 고급 기능 (선택사항)
1. **프로젝트 타임라인** 뷰
2. **기술 스택별 필터링**
3. **다크모드 최적화**
4. **모바일 앱 지원** (PWA)
5. **방문자 분석** 대시보드

---

## 📊 데이터 관리 및 성과 측정

### 프로젝트 데이터 구조
```json
// data/projects.json - 전체 프로젝트 메타데이터
{
  "metadata": {
    "lastUpdated": "2024-01-01",
    "version": "1.0.0",
    "totalProjects": 12,
    "activeProjects": 8
  },
  "projects": [
    {
      "id": "parttime-study",
      "category": "main",
      "priority": 1,
      "status": "active",
      "featured": true,
      "title": {
        "ko": "파트타임스터디",
        "en": "PartTime Study"
      },
      "description": {
        "ko": "실시간 온라인 교육 플랫폼",
        "en": "Real-time online education platform"
      },
      "techStack": ["Spring Boot", "React", "PostgreSQL", "Redis", "AWS"],
      "metrics": {
        "users": "1000+",
        "uptime": "99.9%",
        "teamSize": 8,
        "duration": "24 months"
      },
      "links": {
        "live": "https://ptstudy.oopy.io/",
        "detail": "/projects/main/parttime-study/"
      },
      "images": {
        "thumbnail": "/projects/main/parttime-study/images/thumbnail.webp",
        "gallery": ["/projects/main/parttime-study/images/screen1.webp"]
      },
      "createdAt": "2022-01-01",
      "updatedAt": "2024-01-01"
    }
  ]
}

// data/main-projects.json - 주요 프로젝트 상세 정보
// data/side-projects.json - 사이드 프로젝트 정보
// data/experiments.json - 실험 프로젝트 정보
```

### 데이터 관리 전략
```javascript
// shared/js/project-data.js - 데이터 관리 유틸리티
class ProjectDataManager {
  async loadProjects(category = 'all') {
    // 카테고리별 프로젝트 로딩
  }
  
  filterProjects(projects, filters) {
    // 필터링 로직
  }
  
  sortProjects(projects, sortBy) {
    // 정렬 로직
  }
}
```

### 성과 측정 지표

#### 정량적 지표
- **페이지 방문**: Google Analytics 통합
- **프로젝트 상세 조회**: 카테고리별 조회 수
- **외부 링크 클릭**: GitHub, 라이브 사이트 링크 추적
- **사용자 인터랙션**: 필터 사용, 검색 행동
- **로딩 성능**: 페이지 로딩 속도, Core Web Vitals

#### 정성적 지표
- **채용 담당자 피드백**: 포트폴리오 구성 및 내용
- **동료 개발자 피드백**: 기술적 심도 및 전문성
- **비즈니스 기회**: 포트폴리오를 통한 협업/채용 기회
- **개인 브랜딩**: 전문성 인식 및 신뢰도

#### 성과 대시보드
```html
<!-- 옵션: 프로젝트 허브에 통계 섹션 추가 -->
<section class="project-stats">
  <div class="stat-card">
    <h3>총 프로젝트</h3>
    <span class="stat-number">12</span>
  </div>
  <div class="stat-card">
    <h3>활성 프로젝트</h3>
    <span class="stat-number">8</span>
  </div>
  <div class="stat-card">
    <h3>기술 스택</h3>
    <span class="stat-number">15+</span>
  </div>
</section>
```

---

## 🔄 유지보수 계획

### 정기적 업데이트
- 새로운 프로젝트 추가
- 기존 프로젝트 상태 업데이트
- 기술 스택 변화 반영

### 콘텐츠 관리
- 이미지 최적화 및 압축
- 링크 유효성 검사
- SEO 최적화 지속

### 기술적 개선
- 성능 최적화
- 새로운 기능 추가
- 사용자 경험 개선

---

## 🎯 예상 효과

### 개인 브랜딩
- 전문성 어필 강화
- 기술적 깊이 증명
- 프로젝트 경험 체계적 정리

### 커리어 발전
- 채용 과정에서 차별화
- 클라이언트 신뢰도 향상
- 네트워킹 기회 증대

### 개인 성장
- 프로젝트 회고 및 학습
- 포트폴리오 정리를 통한 성장 확인
- 미래 프로젝트 방향성 수립

---

## ✅ 다음 단계

1. **기획 승인** - 이 문서 리뷰 및 피드백
2. **와이어프레임** - 각 페이지별 레이아웃 스케치
3. **프로토타입** - 프로젝트 목록 페이지 MVP 개발
4. **콘텐츠 준비** - 프로젝트별 텍스트, 이미지 수집
5. **개발 시작** - Phase 1 구현 시작

---

*이 기획서는 개발 과정에서 필요에 따라 업데이트될 예정입니다.*
