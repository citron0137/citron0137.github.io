// Internationalization (i18n) System
// 국제화 시스템

// Translation data
const translations = {
    ko: {
        // Navigation
        'nav.home': '홈',
        'nav.about': '소개',
        'nav.portfolio': '포트폴리오',
        'nav.contact': '연락처',
        
        // Hero Section
        'hero.name': '라도훈',
        'hero.title': '소프트웨어 엔지니어 & 기술 리더',
        'hero.slogan.line1': '기민한 소프트웨어 설계와 긍정적인 조직 문화를 통해',
        'hero.slogan.line2': '<strong>서비스의 성장</strong>과 <strong>팀의 발전</strong>을 함께 만들어 나갑니다',
        'hero.slogan.combined': '기민한 소프트웨어 설계와 긍정적인 조직 문화를 통해\n<strong>서비스의 성장</strong>과 <strong>팀의 발전</strong>을 함께 만들어 나갑니다',
        'hero.cta.portfolio': '포트폴리오 보기',
        'hero.cta.contact': '연락하기',
        
        // About Section
        'about.title': 'About Me',
        'about.intro.p1': '안녕하세요! 소프트웨어 엔지니어이자 개발팀 리더 경험을 보유한 라도훈입니다. 현재 스터디워크(파트타임스터디)에서 기술 리더를 담당하고 있습니다.',
        'about.intro.p2': '백엔드 시스템 설계 및 구축에 특화되어 있으며, 기획부터 운영까지의 전 과정을 아우릅니다.',
        'about.intro.p3': '여러 프로젝트에서 기술 총괄 역할을 맡아 팀을 이끈 경험을 바탕으로, 서비스의 지속적인 성장과 팀원들의 발전을 위한 환경을 만들어갑니다.',
        'about.skills.title': '주요 기술',
        
        // Tech Stack Tooltips
        'tech.notion': '프로젝트 초기부터 운영까지 모든 정보를 체계적으로 관리하고, 팀원들과의 소통 효율성을 극대화하기 위함',
        'tech.figma': '디자이너와 개발자 간의 소통 비용을 줄이고, 사용자 경험을 구체적으로 설계하여 완성도 높은 서비스를 만들기 위함',
        'tech.react': '컴포넌트 재사용성을 통한 개발 생산성 향상과 풍부한 생태계를 활용하여 빠르고 안정적인 프론트엔드 개발을 하기 위함',
        'tech.springboot': '엔터프라이즈급 서비스의 안정성과 확장성을 보장하며, 풍부한 생태계와 자동 설정을 통해 빠른 개발을 하기 위함\n 빠른 개발 또는 라이브러리 호환을 위해 nestjs, fastapi를 고려할 수 있음',
        'tech.postgresql': '복잡한 비즈니스 로직과 데이터 무결성이 중요한 서비스에서 강력한 쿼리 성능과 안정성을 확보하기 위함\n팀원 역량에 따라 MySQL을 고려할 수 있음',
        'tech.redis': '사용자 경험 향상을 위한 응답 속도 최적화와 확장 가능한 세션 관리 시스템을 구축하기 위함',
        'tech.aws': '서비스 성장에 따른 유연한 확장성과 글로벌 서비스 제공을 위한 안정적인 인프라 환경을 구축하기 위함',
        'tech.docker': '개발 환경의 일관성 유지와 배포 프로세스 자동화를 통해 팀의 생산성과 서비스 안정성을 모두 확보하기 위함',
        'tech.github': '코드 품질 관리와 팀 협업 워크플로우 최적화, 그리고 자동화된 배포 파이프라인을 통한 안전한 서비스 운영을 하기 위함',
        'tech.grafana': '서비스 장애를 사전에 감지하고 빠른 대응을 통해 사용자 경험을 보호하며, 데이터 기반의 성능 개선을 하기 위함',
        'tech.networking': '최신 기술 트렌드를 빠르게 파악하고 팀의 기술적 성장을 촉진하며, 긍정적인 개발 문화를 조성하기 위함',
        'tech.networking.label': '개발자 네트워킹',
        
        // Portfolio Section
        'portfolio.title': 'Portfolio',
        'portfolio.subtitle': '주요 프로젝트들을 소개합니다',
        'portfolio.pts.title': '파트타임스터디',
        'portfolio.pts.category': '교육 플랫폼',
        'portfolio.pts.role': '개발팀 리드 (2년)',
        'portfolio.pts.description': '팀 문화 형성 • 24/7 고가용성 운영<br>• 동시 촬영 1000+명',
        'portfolio.pts.link': '서비스 보러가기',
        'portfolio.offencamp.title': 'OFFen-CAMP',
        'portfolio.offencamp.category': '사이버보안 훈련 플랫폼',
        'portfolio.offencamp.role': '테크 리드 (1년)',
        'portfolio.offencamp.description': 'OpenStack • Bare Metal • 국제화<br>• 동시 사용자 약 100명',
        'portfolio.offencamp.link': '서비스 보러가기',
        'portfolio.liveytqueue.title': 'LiveYTQueue',
        'portfolio.liveytqueue.category': '실시간 협업 플레이리스트',
        'portfolio.liveytqueue.description': '만들면서 바로 듣는 실시간 협업 플레이리스트',
        'portfolio.liveytqueue.link': '서비스 보러가기',
        'portfolio.more_projects': '더 많은 프로젝트 보러가기',
        
        // Contact Section
        'contact.title': 'Contact',
        'contact.subtitle': '언제든지 연락주세요! 함께 멋진 프로젝트를 만들어봐요.',
        'contact.email.title': '이메일',
        'contact.location.title': '위치',
        'contact.location.value': '서울, 대한민국',
        'contact.email.button': '이메일 보내기',
        'contact.linkedin.button': 'LinkedIn',
        'contact.github.button': 'GitHub',
        
        // Footer
        'footer.copyright': '© 2024 라도훈. Made with ❤️ and ☕',
        
        // Meta
        'meta.title': '라도훈 - 소프트웨어 엔지니어 & 기술 리더 | 디지털 명함',
        'meta.description': '라도훈(citron0137)의 디지털 명함 - 소프트웨어 엔지니어 & 기술 리더 포트폴리오',
        'meta.keywords': '소프트웨어엔지니어, 기술리더, 백엔드설계, 풀스택개발, 개발팀리더, 테크리드, 포트폴리오, 디지털명함',
        'meta.og.title': '라도훈 - 소프트웨어 엔지니어 & 기술 리더',
        'meta.og.description': '기민한 소프트웨어 설계와 긍정적인 조직 문화를 통해 서비스의 성장과 팀의 발전을 함께 만들어 나가는 엔지니어',
        'meta.og.image': 'https://rahoon.site/profile/public/thumbnail-ko.webp',
        
        // Console Messages
        'console.loaded': '🚀 디지털 명함 웹사이트가 로드되었습니다!',
        'console.mobile': '📱 모바일 최적화된 반응형 디자인',
        'console.darkmode': '🌙 다크모드 지원',
        'console.vcard': '💼 vCard 다운로드 기능',
        'console.email': '📧 연락처: citron0137@gmail.com',
        'console.darkmode.light': '🌞 라이트 모드로 전환되었습니다.',
        'console.darkmode.dark': '🌙 다크 모드로 전환되었습니다.',
        'console.scroll': '📍 {{section}} 섹션으로 스크롤됩니다.',
        'console.button.click': '📞 {{button}} 버튼이 클릭되었습니다.',
        'console.vcard.download': '📇 vCard가 다운로드되었습니다.',
        'console.image.error': '⚠️ 이미지 로드에 실패했습니다:',
        'console.loadtime': '⚡ 페이지 로드 시간: {{time}}ms',
        'console.device': '📱 디바이스 정보:',
        'console.connection.online': '🌐 연결 상태: 온라인',
        'console.connection.offline': '🌐 연결 상태: 오프라인',
        'console.initialized': '✅ 모든 기능이 초기화되었습니다!',
        'console.tip': '💡 팁: Ctrl+D (또는 Cmd+D)로 다크모드를 토글할 수 있습니다.'
    },
    
    en: {
        // Navigation
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.portfolio': 'Portfolio',
        'nav.contact': 'Contact',
        
        // Hero Section
        'hero.name': 'Dohoon Ra',
        'hero.title': 'Software Engineer & Tech Leader',
        'hero.slogan.line1': 'Through agile software design and positive organizational culture,',
        'hero.slogan.line2': 'we create <strong>service growth</strong> and <strong>team development</strong> together',
        'hero.slogan.combined': 'Through agile software design and positive organizational culture,\nwe create <strong>service growth</strong> and <strong>team development</strong> together',
        'hero.cta.portfolio': 'View Portfolio',
        'hero.cta.contact': 'Contact Me',
        
        // About Section
        'about.title': 'About Me',
        'about.intro.p1': 'Hello! I\'m Dohoon Ra, a software engineer with development team leadership experience. Currently serving as a tech leader at StudyWork (Parttime Study).',
        'about.intro.p2': 'Specialized in backend system design and implementation, covering the entire process from planning to operations.',
        'about.intro.p3': 'Based on my experience leading teams as a technical lead in various projects, I create environments for continuous service growth and team member development.',
        'about.skills.title': 'Technical Skills',
        
        // Tech Stack Tooltips
        'tech.notion': 'To systematically manage all information from project inception to operations and maximize communication efficiency with team members',
        'tech.figma': 'To reduce communication costs between designers and developers, and create high-quality services by concretely designing user experiences',
        'tech.react': 'To improve development productivity through component reusability and leverage the rich ecosystem for fast and stable frontend development',
        'tech.springboot': 'To ensure enterprise-level service stability and scalability, and enable rapid development through a rich ecosystem and auto-configuration',
        'tech.postgresql': 'To secure strong query performance and stability in services where complex business logic and data integrity are crucial',
        'tech.redis': 'To optimize response speed for improved user experience and build scalable session management systems',
        'tech.aws': 'To build stable infrastructure environments for flexible scalability according to service growth and global service provision',
        'tech.docker': 'To maintain development environment consistency and secure both team productivity and service stability through automated deployment processes',
        'tech.github': 'To manage code quality, optimize team collaboration workflows, and operate safe services through automated deployment pipelines',
        'tech.grafana': 'To detect service failures in advance, protect user experience through rapid response, and improve performance based on data',
        'tech.networking': 'To quickly grasp the latest technology trends, promote team technical growth, and foster a positive development culture',
        'tech.networking.label': 'Developer Networking',
        
        // Portfolio Section
        'portfolio.title': 'Portfolio',
        'portfolio.subtitle': 'Introducing key projects',
        'portfolio.pts.title': 'Parttime Study',
        'portfolio.pts.category': 'Education Platform',
        'portfolio.pts.role': 'Development Team Lead (2 years)',
        'portfolio.pts.description': 'Team culture building • 24/7 high availability operations<br>• 1000+ concurrent streaming',
        'portfolio.pts.link': 'View Service',
        'portfolio.offencamp.title': 'OFFen-CAMP',
        'portfolio.offencamp.category': 'Cybersecurity Training Platform',
        'portfolio.offencamp.role': 'Tech Lead (1 year)',
        'portfolio.offencamp.description': 'OpenStack • Bare Metal • Internationalization<br>• ~100 concurrent users',
        'portfolio.offencamp.link': 'View Service',
        'portfolio.liveytqueue.title': 'LiveYTQueue',
        'portfolio.liveytqueue.category': 'Realtime Collaborative Playlist',
        'portfolio.liveytqueue.description': 'Build and listen together in real time',
        'portfolio.liveytqueue.link': 'Open Service',
        'portfolio.more_projects': 'View More Projects',
        
        // Contact Section
        'contact.title': 'Contact',
        'contact.subtitle': 'Feel free to reach out anytime! Let\'s create amazing projects together.',
        'contact.email.title': 'Email',
        'contact.location.title': 'Location',
        'contact.location.value': 'Seoul, South Korea',
        'contact.email.button': 'Send Email',
        'contact.linkedin.button': 'LinkedIn',
        'contact.github.button': 'GitHub',
        
        // Footer
        'footer.copyright': '© 2024 Dohoon Ra. Made with ❤️ and ☕',
        
        // Meta
        'meta.title': 'Dohoon Ra - Software Engineer & Tech Leader | Digital Business Card',
        'meta.description': 'Dohoon Ra(citron0137)\'s digital business card - Software Engineer & Tech Leader portfolio',
        'meta.keywords': 'software engineer, tech leader, backend design, fullstack development, development team leader, tech lead, portfolio, digital business card',
        'meta.og.title': 'Dohoon Ra - Software Engineer & Tech Leader',
        'meta.og.description': 'An engineer who creates service growth and team development together through agile software design and positive organizational culture',
        'meta.og.image': 'https://rahoon.site/profile/public/thumbnail-en.webp',
        
        // Console Messages
        'console.loaded': '🚀 Digital business card website loaded!',
        'console.mobile': '📱 Mobile-optimized responsive design',
        'console.darkmode': '🌙 Dark mode support',
        'console.vcard': '💼 vCard download feature',
        'console.email': '📧 Contact: citron0137@gmail.com',
        'console.darkmode.light': '🌞 Switched to light mode.',
        'console.darkmode.dark': '🌙 Switched to dark mode.',
        'console.scroll': '📍 Scrolling to {{section}} section.',
        'console.button.click': '📞 {{button}} button clicked.',
        'console.vcard.download': '📇 vCard downloaded.',
        'console.image.error': '⚠️ Failed to load image:',
        'console.loadtime': '⚡ Page load time: {{time}}ms',
        'console.device': '📱 Device information:',
        'console.connection.online': '🌐 Connection status: Online',
        'console.connection.offline': '🌐 Connection status: Offline',
        'console.initialized': '✅ All features initialized!',
        'console.tip': '💡 Tip: Toggle dark mode with Ctrl+D (or Cmd+D).'
    }
};

// i18n System Class
class I18nSystem {
    constructor() {
        this.currentLanguage = this.getStoredLanguage() || this.detectBrowserLanguage() || 'ko';
        this.translations = translations;
        this.initialize();
    }
    
    getStoredLanguage() {
        return localStorage.getItem('language');
    }
    
    detectBrowserLanguage() {
        const browserLang = navigator.language || navigator.userLanguage;
        return browserLang.startsWith('en') ? 'en' : 'ko';
    }
    
    setLanguage(lang) {
        if (this.translations[lang]) {
            this.currentLanguage = lang;
            localStorage.setItem('language', lang);
            this.updateDocument();
            this.updateHtmlLang();
            this.updateMetaTags();
            console.log(`🌐 Language changed to: ${lang}`);
        }
    }
    
    translate(key, params = {}, convertToHtml = true) {
        const translation = this.translations[this.currentLanguage]?.[key] || key;
        
        // Simple template string replacement
        let result = Object.keys(params).reduce((text, param) => {
            return text.replace(new RegExp(`\\{\\{${param}\\}\\}`, 'g'), params[param]);
        }, translation);
        
        // Convert newlines to <br> tags for HTML rendering (only if convertToHtml is true)
        if (convertToHtml) {
            result = result.replace(/\n/g, '<br>');
        }
        
        return result;
    }
    
    updateDocument() {
        // Update elements with data-i18n attribute
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            const isHtml = element.getAttribute('data-i18n-html') === 'true';
            const translation = this.translate(key, {}, isHtml);
            
            if (isHtml) {
                element.innerHTML = translation;
            } else {
                element.textContent = translation;
            }
        });
        
        // Update tech tooltips
        const techItems = document.querySelectorAll('.tech-item[data-tech]');
        techItems.forEach(item => {
            const techKey = item.getAttribute('data-tech');
            const tooltipKey = `tech.${techKey}`;
            item.setAttribute('data-tooltip', this.translate(tooltipKey, {}, false));
        });
        
        // Update placeholder texts
        const placeholders = document.querySelectorAll('[data-i18n-placeholder]');
        placeholders.forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            element.placeholder = this.translate(key, {}, false);
        });
    }
    
    updateHtmlLang() {
        document.documentElement.setAttribute('lang', this.currentLanguage);
    }
    
    updateMetaTags() {
        // Update title
        document.title = this.translate('meta.title', {}, false);
        
        // Update meta description
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', this.translate('meta.description', {}, false));
        }
        
        // Update meta keywords
        const metaKeywords = document.querySelector('meta[name="keywords"]');
        if (metaKeywords) {
            metaKeywords.setAttribute('content', this.translate('meta.keywords', {}, false));
        }
        
        // Update Open Graph tags
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) {
            ogTitle.setAttribute('content', this.translate('meta.og.title', {}, false));
        }
        
        const ogDescription = document.querySelector('meta[property="og:description"]');
        if (ogDescription) {
            ogDescription.setAttribute('content', this.translate('meta.og.description', {}, false));
        }
        
        const ogImage = document.querySelector('meta[property="og:image"]');
        if (ogImage) {
            ogImage.setAttribute('content', this.translate('meta.og.image', {}, false));
        }
        
        // Update Twitter tags
        const twitterTitle = document.querySelector('meta[property="twitter:title"]');
        if (twitterTitle) {
            twitterTitle.setAttribute('content', this.translate('meta.og.title', {}, false));
        }
        
        const twitterDescription = document.querySelector('meta[property="twitter:description"]');
        if (twitterDescription) {
            twitterDescription.setAttribute('content', this.translate('meta.og.description', {}, false));
        }
        
        const twitterImage = document.querySelector('meta[property="twitter:image"]');
        if (twitterImage) {
            twitterImage.setAttribute('content', this.translate('meta.og.image', {}, false));
        }
    }
    
    initialize() {
        this.updateHtmlLang();
        // Wait for DOM to be ready before updating content
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.updateDocument();
                this.updateMetaTags();
            });
        } else {
            this.updateDocument();
            this.updateMetaTags();
        }
    }
    
    getCurrentLanguage() {
        return this.currentLanguage;
    }
}

// Initialize i18n system
const i18n = new I18nSystem();

// Export for global access
window.i18n = i18n; 