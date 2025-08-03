# 📱 디지털 명함 웹사이트

QR 코드 접속용 개인 브랜딩 디지털 명함 웹사이트입니다.

## ✨ 특징

- 📱 **모바일 퍼스트**: QR 코드를 통한 스마트폰 접속에 최적화
- 🌙 **다크모드 지원**: 시스템 설정에 따른 자동 다크모드 + 수동 토글
- 🎨 **현대적 디자인**: TailwindCSS 기반의 깔끔한 카드형 UI
- ⚡ **빠른 로딩**: 순수 HTML/CSS/JS로 가벼운 정적 사이트
- 📇 **vCard 다운로드**: 연락처 정보를 바로 주소록에 저장
- 🔗 **소셜 링크**: GitHub, LinkedIn, 이메일 등 원클릭 연결
- 📅 **미팅 예약**: Google Calendar 연동 (설정 필요)
- ♿ **접근성**: 키보드 내비게이션, 스크린 리더 지원

## 🛠️ 기술 스택

- **HTML5**: 시맨틱 마크업
- **TailwindCSS**: CDN 방식의 유틸리티 CSS
- **Vanilla JavaScript**: 프레임워크 없는 순수 JS
- **CSS3**: 커스텀 애니메이션 및 스타일

## 📁 프로젝트 구조

```
business_card_2/
├── index.html          # 메인 HTML 파일
├── css/
│   └── style.css       # 커스텀 CSS
├── js/
│   └── script.js       # JavaScript 기능
├── public/
│   ├── contact.vcf     # vCard 연락처 파일
│   └── profile.jpg     # 프로필 이미지
└── README.md           # 프로젝트 설명
```

## 🚀 설치 및 실행

### 1. 파일 다운로드
```bash
git clone <repository-url>
cd business_card_2
```

### 2. 개인정보 수정
다음 파일들을 본인의 정보로 수정하세요:

#### `index.html`
- 이름, 직함, 슬로건
- 자기소개 텍스트
- 기술 스택 태그
- 포트폴리오 프로젝트
- 연락처 정보 (이메일, GitHub, LinkedIn 등)

#### `public/contact.vcf`
```vcf
FN:본인이름
EMAIL:your-email@domain.com
URL:https://github.com/yourusername
URL:https://linkedin.com/in/yourusername
TEL:+82-10-0000-0000
```

#### `public/profile.jpg`
- 본인의 프로필 사진으로 교체
- 권장: 400x400px, 정사각형, 1MB 이하

### 3. 로컬 실행
HTTP 서버가 필요합니다:

```bash
# Python 3
python -m http.server 8000

# Node.js
npx serve .

# VS Code Live Server 확장 사용
```

브라우저에서 `http://localhost:8000` 접속

## 🌐 배포

### GitHub Pages
1. GitHub 저장소 생성
2. Settings > Pages > Source: Deploy from a branch
3. Branch: main, Folder: / (root)
4. 몇 분 후 `https://username.github.io/repository-name` 에서 접속 가능

### Netlify
1. [Netlify](https://netlify.com) 가입
2. 프로젝트 폴더를 드래그 앤 드롭
3. 자동으로 배포 완료

### Vercel
1. [Vercel](https://vercel.com) 가입
2. GitHub 저장소 연결 또는 폴더 업로드
3. 자동 배포 및 도메인 제공

## 🎨 커스터마이징

### 색상 변경
`index.html`의 TailwindCSS 설정에서 색상 팔레트 수정:

```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#eff6ff',
                    500: '#3b82f6',  // 메인 색상
                    600: '#2563eb',
                    700: '#1d4ed8'
                }
            }
        }
    }
}
```

### 폰트 변경
`css/style.css`에서 커스텀 폰트 추가:

```css
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap');

body {
    font-family: 'Noto Sans KR', sans-serif;
}
```

## 📱 QR 코드 생성

1. **온라인 QR 코드 생성기** 사용:
   - [QR Code Generator](https://www.qr-code-generator.com/)
   - [QRStuff](https://www.qrstuff.com/)

2. **설정 옵션**:
   - URL: 배포된 웹사이트 주소
   - 크기: 300x300px 이상
   - 오류 수정: Medium (15%) 이상
   - 형식: PNG, SVG

3. **명함 인쇄**:
   - QR 코드 + 기본 연락처 정보
   - "QR 코드 스캔으로 더 많은 정보 확인"

## 🔧 기능 설명

### 다크모드
- 시스템 설정 자동 감지
- 우상단 토글 버튼
- `Ctrl+D` (또는 `Cmd+D`) 키보드 단축키
- localStorage에 설정 저장

### 내비게이션
- 고정 헤더 내비게이션
- 부드러운 스크롤 애니메이션
- 현재 섹션 하이라이팅
- 키보드 화살표 키 내비게이션

### 포트폴리오 카드
- 호버 효과
- 클릭 시 알림 (추후 모달이나 상세 페이지로 확장 가능)
- 그라데이션 배경

### 연락처 기능
- 이메일 클릭 시 메일 앱 실행
- vCard 파일 다운로드
- 소셜 링크 새 탭 열기
- Google Calendar 미팅 예약 연결

## 🐛 문제 해결

### 이미지가 보이지 않는 경우
- `public/profile.jpg` 파일이 존재하는지 확인
- 파일 경로가 올바른지 확인
- HTTP 서버를 통해 접속하고 있는지 확인 (file:// 프로토콜 사용 금지)

### vCard 다운로드가 안 되는 경우
- 브라우저 팝업 차단 설정 확인
- HTTPS 연결 권장
- `public/contact.vcf` 파일 존재 확인

### 다크모드가 작동하지 않는 경우
- JavaScript가 활성화되어 있는지 확인
- 브라우저 콘솔에서 오류 메시지 확인
- TailwindCSS CDN 로드 확인

## 📄 라이선스

MIT License - 자유롭게 사용, 수정, 배포 가능

## 📞 지원

문제나 제안사항이 있으시면 이슈를 등록하거나 이메일로 연락주세요.

---

**💡 팁**: QR 코드를 명함에 인쇄할 때는 충분한 크기(최소 2cm x 2cm)로 인쇄하여 스캔이 용이하도록 하세요! 