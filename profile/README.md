# Digital Business Card / 디지털 명함

라도훈(citron0137)의 개인 포트폴리오 및 디지털 명함 웹사이트  
Dohoon Ra(citron0137)'s personal portfolio and digital business card website

## 🌍 Internationalization / 국제화

이 웹사이트는 한국어와 영어를 지원하는 다국어 웹사이트입니다.  
This website supports multiple languages (Korean and English).

### 언어 변경 방법 / How to Change Language

1. **버튼 클릭**: 우상단의 언어 전환 버튼(KO/EN) 클릭  
   **Button Click**: Click the language toggle button (KO/EN) in the top-right corner

2. **키보드 단축키**: `Ctrl + L` (또는 `Cmd + L` on Mac)  
   **Keyboard Shortcut**: `Ctrl + L` (or `Cmd + L` on Mac)

### 지원 언어 / Supported Languages

- 🇰🇷 **한국어 (Korean)**: 기본 언어 / Default language
- 🇺🇸 **English**: Fully translated interface

## ✨ Features / 주요 기능

- 📱 **반응형 디자인** / Responsive design
- 🌙 **다크모드 지원** / Dark mode support  
- 🌍 **다국어 지원** / Multi-language support (Korean/English)
- ⚡ **빠른 로딩** / Fast loading
- 🎨 **현대적인 UI** / Modern UI design
- ♿ **접근성 최적화** / Accessibility optimized
- 📇 **vCard 다운로드** / vCard download
- 🔗 **소셜 링크** / Social links integration

## 🚀 Quick Start / 빠른 시작

1. 저장소 클론 / Clone the repository:
```bash
git clone https://github.com/citron0137/citron0137.github.io.git
cd citron0137.github.io
```

2. 웹 서버에서 실행 / Run on a web server:
```bash
# Python 3를 사용하는 경우 / Using Python 3
python -m http.server 8000

# Node.js live-server를 사용하는 경우 / Using Node.js live-server
npx live-server
```

3. 브라우저에서 접속 / Open in browser:
```
http://localhost:8000
```

## 🛠️ Tech Stack / 기술 스택

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: TailwindCSS
- **Internationalization**: Custom i18n system
- **Icons**: Heroicons, Custom SVG
- **Font**: System fonts for optimal performance

## 📂 Project Structure / 프로젝트 구조

```
profile/
├── index.html              # 메인 HTML 파일 / Main HTML file
├── css/
│   └── style.css           # 커스텀 스타일 / Custom styles
├── js/
│   ├── i18n.js            # 국제화 시스템 / Internationalization system
│   └── script.js          # 메인 JavaScript / Main JavaScript
├── public/
│   ├── profile.jpg        # 프로필 이미지 / Profile image
│   ├── pts.webp          # 프로젝트 이미지 / Project image
│   └── contact.vcf        # vCard 파일 / vCard file
└── README.md              # 프로젝트 문서 / Project documentation
```

## 🌍 Internationalization System / 국제화 시스템

### 번역 파일 구조 / Translation File Structure

번역 데이터는 `js/i18n.js` 파일에서 관리됩니다.  
Translation data is managed in the `js/i18n.js` file.

```javascript
const translations = {
    ko: {
        'nav.home': '홈',
        'hero.title': '소프트웨어 엔지니어 & 기술 리더',
        // ... more translations
    },
    en: {
        'nav.home': 'Home',
        'hero.title': 'Software Engineer & Tech Leader',
        // ... more translations
    }
};
```

### HTML 요소에 다국어 속성 추가 / Adding Multi-language Attributes to HTML Elements

```html
<!-- 기본 텍스트 번역 / Basic text translation -->
<h1 data-i18n="hero.title">소프트웨어 엔지니어 & 기술 리더</h1>

<!-- HTML 포함 텍스트 번역 / HTML-inclusive text translation -->
<p data-i18n="portfolio.description" data-i18n-html="true">
    프로젝트 설명<br>• 주요 기능들
</p>

<!-- 기술 스택 툴팁 / Tech stack tooltips -->
<span class="tech-item" data-tech="react" data-tooltip="...">
    React
</span>
```

### API 사용법 / API Usage

```javascript
// 언어 변경 / Change language
window.i18n.setLanguage('en');

// 현재 언어 확인 / Get current language
const currentLang = window.i18n.getCurrentLanguage();

// 텍스트 번역 / Translate text
const translatedText = window.i18n.translate('hero.title');

// 매개변수가 있는 번역 / Translation with parameters
const message = window.i18n.translate('console.scroll', { section: '#about' });
```

## ⌨️ Keyboard Shortcuts / 키보드 단축키

- `Ctrl + D` (또는 `Cmd + D`): 다크모드 전환 / Toggle dark mode
- `Ctrl + L` (또는 `Cmd + L`): 언어 전환 / Toggle language
- `Arrow Keys`: 네비게이션 포커스 이동 / Navigate through menu items

## 🎨 Customization / 커스터마이징

### 새로운 언어 추가 / Adding New Languages

1. `js/i18n.js` 파일의 `translations` 객체에 새 언어 추가:

```javascript
const translations = {
    ko: { /* ... */ },
    en: { /* ... */ },
    ja: {  // 일본어 추가 예시
        'nav.home': 'ホーム',
        'hero.title': 'ソフトウェアエンジニア＆テックリーダー',
        // ... 모든 키에 대한 번역 추가
    }
};
```

2. 언어 전환 로직 수정 (필요시):

```javascript
// 3개 언어 순환을 위한 로직 예시
const languages = ['ko', 'en', 'ja'];
const currentIndex = languages.indexOf(currentLang);
const newLang = languages[(currentIndex + 1) % languages.length];
```

### 색상 테마 변경 / Changing Color Theme

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

## 📱 Browser Support / 브라우저 지원

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers

## 🌐 Deployment / 배포

### GitHub Pages
1. GitHub 저장소의 Settings > Pages로 이동
2. Source: Deploy from a branch 선택
3. Branch: main, Folder: / (root) 선택
4. `https://username.github.io/repository-name`에서 접속

### Netlify
1. [Netlify](https://netlify.com)에 프로젝트 폴더 업로드
2. 자동 배포 및 도메인 제공

### Vercel
1. [Vercel](https://vercel.com)에 GitHub 저장소 연결
2. 자동 배포 및 도메인 제공

## 🐛 Troubleshooting / 문제 해결

### 언어가 변경되지 않는 경우 / Language Not Switching

- JavaScript 콘솔에서 오류 확인
- `i18n.js` 파일이 올바르게 로드되었는지 확인
- 브라우저 캐시 삭제 후 재시도

### 이미지가 보이지 않는 경우 / Images Not Loading

- `public/` 폴더의 이미지 파일 존재 확인
- HTTP 서버를 통한 접속 필요 (file:// 프로토콜 사용 금지)
- 이미지 파일 경로 및 확장자 확인

### 다크모드 문제 / Dark Mode Issues

- TailwindCSS CDN 로드 상태 확인
- 브라우저의 JavaScript 활성화 확인
- localStorage 액세스 권한 확인

## 🤝 Contributing / 기여하기

1. Fork this repository / 저장소 포크
2. Create a feature branch / 기능 브랜치 생성
3. Commit your changes / 변경사항 커밋
4. Push to the branch / 브랜치에 푸시
5. Open a Pull Request / Pull Request 생성

### 번역 기여 / Translation Contributions

새로운 언어 번역을 기여하고 싶으시다면:
1. `js/i18n.js`에 해당 언어 번역 추가
2. 모든 번역 키에 대해 완전한 번역 제공
3. 언어별 특수 문자나 레이아웃 고려사항 명시

## 📄 License / 라이선스

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact / 연락처

- **Email**: citron0137@gmail.com
- **GitHub**: [@citron0137](https://github.com/citron0137)
- **LinkedIn**: [도훈 라](https://www.linkedin.com/in/도훈-라-357b081a6)

---

**💡 Tip / 팁**: QR 코드를 생성하여 명함에 인쇄하면 쉽게 이 웹사이트를 공유할 수 있습니다!  
**💡 Tip**: Generate a QR code and print it on your business card for easy sharing of this website! 