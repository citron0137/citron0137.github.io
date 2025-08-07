// Projects data
const projectsData = [
    {
        id: 'life-weekly-journal',
        title: '인생 주간 기록장',
        isMainProject: false,
        summary: '매주 목표와 성장을 기록하며, 삶의 의미를 되새기는 주간 기록 웹서비스',
        description: `미래에 대한 고민이 많고, 삶을 의미있게 살아가고 싶어하는 사람들을 위한 종합 인생 기록 플랫폼입니다.

**🎯 핵심 기능**
• **주간 목표 설정**: 매주 개인적인 목표와 다짐을 기록
• **성장 추적**: 주차별 성취도와 느낀 점을 상세하게 기록
• **인생 주차 시각화**: "내 인생의 1,234번째 주"처럼 각 주의 의미를 시각적으로 표현
• **감정적 지원**: 힘든 주차에도 따뜻한 위로와 격려 메시지 제공

**🔗 자동 데이터 연동**
• **직장 정보**: LinkedIn, 사내 시스템 연동으로 업무 성과와 커리어 변화 자동 기록
• **금융 내역**: 은행 API, 카드사 연동으로 소비 패턴과 저축 목표 달성률 추적
• **SNS 활동**: Instagram, Twitter 연동으로 소셜 활동과 인간관계 변화 분석
• **건강 데이터**: Apple Health, Google Fit 연동으로 운동량과 수면 패턴 모니터링
• **학습 기록**: 온라인 강의 플랫폼, 독서 앱 연동으로 자기계발 현황 파악
• **위치 정보**: 방문 장소 분석으로 라이프스타일 변화와 새로운 경험 기록

**💝 서비스 가치**
단순한 기록을 넘어 데이터 기반의 인사이트를 제공하여, 사용자가 자신의 삶을 객관적으로 분석하고 개선 방향을 찾을 수 있도록 돕습니다. AI 분석을 통해 개인화된 조언과 목표 설정을 지원합니다.

**🎨 UI/UX 컨셉**
- 따뜻하고 위로가 되는 색감과 타이포그래피  
- 인생 타임라인을 시각화한 직관적인 대시보드
- 다양한 데이터를 아름다운 차트와 인포그래픽으로 표현
- 개인정보 보호를 최우선으로 하는 안전한 데이터 관리`,
        category: 'web',
        tags: ['웹 프론트엔드', '백엔드', 'AI', '데이터베이스', '외부 API'],
        icon: '📖',
        status: 'idea',
        createdAt: '2024-03-15',
        estimatedDuration: '8개월',
        targetUsers: '20-40대 자기계발과 성장에 관심 있는 직장인, 프리랜서, 창업가',
        expectedImpact: '데이터 기반 자기 분석으로 목표 달성률 35% 향상, 생활 패턴 개선을 통한 삶의 질 증대, 장기적 인생 설계 능력 강화',
        challenges: [
            '다양한 플랫폼 API 연동 및 데이터 표준화',
            '개인정보보호법 준수 및 데이터 보안 강화',
            '사용자별 맞춤형 인사이트 AI 알고리즘 개발',
            '지속적인 사용을 유도하는 UX 설계',
            '금융기관과의 파트너십 및 API 사용 승인'
        ],
        competitors: `**🌟 하루 조각** - 감정 기록 중심의 일기 앱
• 특징: 깔끔한 UI, 감정 추적 기능, 월간/연간 리포트
• 접근 방식: 수동 기록을 통한 감정 패턴 파악

**📱 Day One** - 프리미엄 저널링 앱
• 특징: 멀티미디어 지원, 클라우드 동기화, 검색 기능
• 접근 방식: 전통적인 저널링에 디지털 편의성 추가

**🎯 우리만의 접근 방식**
• **데이터 통합**: 흩어진 디지털 발자국을 하나로 연결
• **자동화**: 수동 입력 부담 없이 자연스러운 기록
• **시간 철학**: 인생 주차라는 독특한 시간 개념 도입
• **성장 중심**: 단순 기록을 넘어 목표 달성과 성장 지원`,
        inspiration: '현대인들이 SNS, 금융, 업무 등 각종 플랫폼에 흩어진 자신의 데이터를 통합적으로 보고 삶의 패턴을 이해할 수 있게 하고 싶어서 시작'
    },
    {
        id: 'mikro-orm-transactional-events',
        title: 'MikroORM 트랜잭션 도메인 이벤트',
        isMainProject: false,
        summary: 'MikroORM에서 트랜잭션 커밋 후에만 도메인 이벤트가 발행되는 안전한 이벤트 시스템 구현',
        description: `데이터 일관성과 이벤트 발행 간의 안전성을 보장하는 MikroORM 확장 라이브러리입니다.

**🎯 핵심 기능**
• **트랜잭션 범위 이벤트**: 트랜잭션 내에서 큐에 저장된 이벤트들이 커밋 후에만 발행
• **롤백 시 이벤트 폐기**: 트랜잭션이 실패하면 모든 이벤트가 자동으로 삭제
• **동시성 안전**: 각 트랜잭션마다 독립적인 이벤트 큐로 충돌 방지
• **Hook 시스템**: MikroORM의 기존 이벤트 매니저와 seamless 통합

**🔧 기술적 구현**
\`\`\`typescript
await em.transactional(async (em) => {
  const user = em.create(User, { name });
  await em.persistAndFlush(user);

  eventPublisher.enqueue(em, new UserCreatedEvent(user.id));
  await eventPublisher.publishAfterCommit(em);
});
\`\`\`

**🎨 설계 원칙**
- **Zero-config**: 기존 MikroORM 코드에 최소한의 변경으로 적용
- **Type-safe**: TypeScript 기반의 강력한 타입 안전성
- **Framework agnostic**: NestJS, Express 등 어떤 프레임워크에서도 사용 가능
- **Memory efficient**: WeakMap 기반으로 메모리 누수 방지

**💡 활용 시나리오**
• **DDD 아키텍처**: 도메인 이벤트와 영속성 간의 일관성 보장
• **CQRS 패턴**: Command와 Query 간의 안전한 동기화
• **이벤트 소싱**: 데이터 변경과 이벤트 발행의 원자적 처리
• **마이크로서비스**: 서비스 간 안전한 메시지 전달`,
        category: 'dev-tool',
        tags: ['TypeScript', 'MikroORM', 'Domain Events', 'Transaction', 'Event Sourcing'],
        icon: '⚡',
        status: 'idea',
        createdAt: '2024-08-04',
        estimatedDuration: '3개월',
        targetUsers: 'MikroORM을 사용하는 백엔드 개발자, DDD/CQRS 아키텍처 적용 팀, 이벤트 드리븐 시스템 구축자',
        expectedImpact: 'MikroORM 생태계 기여로 오픈소스 인지도 향상, 데이터 일관성 문제 해결로 서비스 안정성 증대, npm 패키지 배포로 개발자 커뮤니티 기여',
        challenges: [
            'MikroORM 내부 구조 깊이 있는 이해 필요',
            'TypeScript 고급 타입 시스템 활용한 안전한 API 설계',
            '다양한 데이터베이스 드라이버와의 호환성 확보',
            '메모리 효율성과 성능 최적화',
            '오픈소스 커뮤니티와의 협업 및 코드 리뷰 과정'
        ],
        competitors: `**🏗️ TypeORM** - 기존 ORM 솔루션
• 특징: 데코레이터 기반, 엔티티 관리
• 한계: 트랜잭션 이벤트 지원 부족

**📦 Outbox Pattern 라이브러리들** - 이벤트 안전성 보장
• 특징: 별도 테이블을 통한 이벤트 저장
• 한계: 복잡한 설정, DB 스키마 변경 필요

**🎯 우리만의 접근 방식**
• **Zero-config**: 기존 스키마 변경 없이 적용 가능
• **Memory-based**: 별도 테이블 없이 메모리에서 효율적 관리
• **MikroORM 특화**: 프레임워크 내부 Hook 시스템 최적 활용
• **TypeScript First**: 컴파일 타임 타입 안전성 보장`,
        inspiration: 'GitHub 이슈 #6789에서 MikroORM 커뮤니티의 니즈를 발견하고, 실제 프로덕션에서 겪었던 데이터 일관성 문제를 해결하고 싶어서 시작',
        relatedLinks: [
            {
                title: 'GitHub Issue #6789',
                description: 'MikroORM에서 트랜잭션 도메인 이벤트 지원 요청',
                url: 'https://github.com/mikro-orm/mikro-orm/issues/6789',
                icon: 'github'
            },
            {
                title: 'MikroORM 공식 문서',
                description: 'EntityManager와 트랜잭션 관리 가이드',
                url: 'https://mikro-orm.io/docs/transactions',
                icon: 'docs'
            },
            {
                title: 'Domain Events Pattern',
                description: 'Martin Fowler의 도메인 이벤트 패턴 설명',
                url: 'https://martinfowler.com/eaaDev/DomainEvent.html',
                icon: 'article'
            }
        ]
    }
];

// Local storage keys
const STORAGE_KEYS = {
    THEME: 'dark_mode',
    SHOW_ALL_PROJECTS: 'show_all_projects'
};

// Global state
let currentFilter = 'all';
let currentSort = 'date';
let showAllProjects = false;

// DOM elements
let projectGrid, filterButtons, sortButtons, emptyState, darkModeToggle, projectModal, modalClose, modalInterestBtn, allProjectsToggle;

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    initializeElements();
    loadFromStorage();
    setupEventListeners();
    renderProjects();
    updateFilterButtons();
});

// Initialize DOM elements
function initializeElements() {
    projectGrid = document.getElementById('projectGrid');
    emptyState = document.getElementById('emptyState');
    darkModeToggle = document.getElementById('darkModeToggle');
    filterButtons = document.querySelectorAll('.filter-btn');
    sortButtons = document.querySelectorAll('.sort-btn');
    projectModal = document.getElementById('projectModal');
    modalClose = document.getElementById('modalClose');
    modalInterestBtn = document.getElementById('modalInterestBtn');
    allProjectsToggle = document.getElementById('ideaToggle');
}

// Load data from localStorage
function loadFromStorage() {
    try {
        const savedTheme = localStorage.getItem(STORAGE_KEYS.THEME);
        if (savedTheme === 'true') {
            document.documentElement.classList.add('dark');
        }
        
        const savedShowAllProjects = localStorage.getItem(STORAGE_KEYS.SHOW_ALL_PROJECTS);
        showAllProjects = savedShowAllProjects === 'true';
        if (allProjectsToggle) {
            allProjectsToggle.checked = showAllProjects;
        }
    } catch (error) {
        console.error('Error loading from storage:', error);
    }
}

// Save data to localStorage
function saveToStorage() {
    try {
        localStorage.setItem(STORAGE_KEYS.THEME, document.documentElement.classList.contains('dark'));
        localStorage.setItem(STORAGE_KEYS.SHOW_ALL_PROJECTS, showAllProjects);
    } catch (error) {
        console.error('Error saving to storage:', error);
        showToast('저장 중 오류가 발생했습니다.', 'error');
    }
}

// Setup event listeners
function setupEventListeners() {
    // Dark mode toggle
    darkModeToggle?.addEventListener('click', toggleDarkMode);
    
    // Filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const filter = e.target.getAttribute('data-filter');
            setFilter(filter);
        });
    });
    
    // Sort buttons
    document.getElementById('sortByStatus')?.addEventListener('click', () => setSortBy('status'));
    document.getElementById('sortByDate')?.addEventListener('click', () => setSortBy('date'));
    
    // Keyboard navigation
    document.addEventListener('keydown', handleKeyboardNavigation);
    
    // All projects toggle
    allProjectsToggle?.addEventListener('change', toggleAllProjects);
    
    // Modal event listeners
    modalClose?.addEventListener('click', closeModal);
    projectModal?.addEventListener('click', (e) => {
        if (e.target === projectModal) closeModal();
    });
    modalInterestBtn?.addEventListener('click', () => {
        const projectId = modalInterestBtn.getAttribute('data-project-id');
        if (projectId) {
            sendProjectEmail(projectId);
            closeModal();
        }
    });
}

// Toggle dark mode
function toggleDarkMode() {
    document.documentElement.classList.toggle('dark');
    saveToStorage();
    
    // Update icon
    const icon = darkModeToggle.querySelector('svg path');
    if (document.documentElement.classList.contains('dark')) {
        icon.setAttribute('d', 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z');
    } else {
        icon.setAttribute('d', 'M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z');
    }
}

// Toggle all projects visibility
function toggleAllProjects() {
    showAllProjects = allProjectsToggle.checked;
    saveToStorage();
    renderProjects();
}

// Set filter
function setFilter(filter) {
    currentFilter = filter;
    updateFilterButtons();
    renderProjects();
}

// Set sort method
function setSortBy(sortMethod) {
    currentSort = sortMethod;
    updateSortButtons();
    renderProjects();
}

// Update filter button states
function updateFilterButtons() {
    filterButtons.forEach(button => {
        const filter = button.getAttribute('data-filter');
        if (filter === currentFilter) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}

// Update sort button states
function updateSortButtons() {
    sortButtons.forEach(button => {
        button.classList.remove('bg-primary-500', 'text-white');
        button.classList.add('bg-gray-100', 'dark:bg-gray-700');
    });
    
    const activeSort = currentSort === 'status' ? 'sortByStatus' : 'sortByDate';
    const activeButton = document.getElementById(activeSort);
    if (activeButton) {
        activeButton.classList.remove('bg-gray-100', 'dark:bg-gray-700');
        activeButton.classList.add('bg-primary-500', 'text-white');
    }
}

// Filter projects
function getFilteredProjects() {
    let filtered = projectsData;
    
    // Apply main projects filter
    if (!showAllProjects) {
        filtered = filtered.filter(project => project.isMainProject !== false);
    }
    
    // Apply category filter
    if (currentFilter !== 'all') {
        filtered = filtered.filter(project => project.category === currentFilter);
    }
    
    // Apply sorting
    filtered.sort((a, b) => {
        if (currentSort === 'status') {
            const statusOrder = { 'development': 0, 'planning': 1, 'idea': 2, 'completed': 3 };
            const aOrder = statusOrder[a.status] || 99;
            const bOrder = statusOrder[b.status] || 99;
            if (aOrder !== bOrder) {
                return aOrder - bOrder; // 개발 중 > 기획 중 > 아이디어 > 완료 순
            }
        }
        // 날짜 순 (최신 순)
        return new Date(b.createdAt) - new Date(a.createdAt);
    });
    
    return filtered;
}

// Send email for a project
function sendProjectEmail(projectId) {
    const project = projectsData.find(p => p.id === projectId);
    if (!project) {
        showToast('프로젝트를 찾을 수 없습니다.', 'error');
        return;
    }
    
    const subject = encodeURIComponent(`[프로젝트 관심] ${project.title}에 대한 문의`);
    const body = encodeURIComponent(`안녕하세요 라도훈님,

"${project.title}" 프로젝트에 관심이 있어서 연락드립니다.

📋 프로젝트 정보:
- 제목: ${project.title}
- 카테고리: ${getCategoryName(project.category)}
- 상태: ${getStatusName(project.status)}
- 예상 기간: ${project.estimatedDuration}
- 기술 스택: ${project.tags.join(', ')}

💬 문의 내용:
[여기에 질문이나 의견을 작성해주세요]

감사합니다.`);
    
    const mailtoUrl = `mailto:citron0137@gmail.com?subject=${subject}&body=${body}`;
    
    try {
        window.open(mailtoUrl, '_blank');
        showToast('메일 앱이 열렸습니다! 📧');
    } catch (error) {
        console.error('Error opening email client:', error);
        showToast('메일 앱을 열 수 없습니다. 직접 citron0137@gmail.com으로 연락주세요.', 'error');
    }
}

// Get category name in Korean
function getCategoryName(category) {
    const categoryNames = {
        'web': '웹 서비스',
        'mobile': '모바일 앱',
        'ai': 'AI/ML',
        'dev-tool': '개발도구'
    };
    return categoryNames[category] || category;
}

// Get status name in Korean
function getStatusName(status) {
    const statusNames = {
        'idea': '아이디어',
        'planning': '기획 중',
        'development': '개발 중',
        'completed': '완료'
    };
    return statusNames[status] || status;
}

// Render projects
function renderProjects() {
    const filteredProjects = getFilteredProjects();
    
    if (filteredProjects.length === 0) {
        projectGrid.style.display = 'none';
        emptyState.classList.remove('hidden');
        return;
    }
    
    projectGrid.style.display = 'grid';
    emptyState.classList.add('hidden');
    
    // Add fade out animation
    projectGrid.classList.add('fade-out');
    
    setTimeout(() => {
        projectGrid.innerHTML = filteredProjects.map(project => createProjectCard(project)).join('');
        
        // Setup interest button event listeners
        projectGrid.querySelectorAll('.interest-button').forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                const projectId = button.closest('.project-card').getAttribute('data-project-id');
                sendProjectEmail(projectId);
            });
        });
        
        // Setup card click event listeners
        projectGrid.querySelectorAll('.project-card').forEach(card => {
            card.addEventListener('click', (e) => {
                // 관심 버튼 클릭이 아닌 경우에만 모달 열기
                if (!e.target.closest('.interest-button')) {
                    const projectId = card.getAttribute('data-project-id');
                    openProjectModal(projectId);
                }
            });
            
            // 카드에 커서 포인터 추가
            card.style.cursor = 'pointer';
        });
        
        // Add fade in animation
        projectGrid.classList.remove('fade-out');
        projectGrid.classList.add('fade-in');
        
        setTimeout(() => {
            projectGrid.classList.remove('fade-in');
        }, 500);
    }, 150);
}

// Create project card HTML
function createProjectCard(project) {
    const statusMap = {
        'idea': { text: '아이디어', class: 'status-idea' },
        'planning': { text: '기획 중', class: 'status-planning' },
        'development': { text: '개발 중', class: 'status-development' },
        'completed': { text: '완료', class: 'status-completed' }
    };
    
    const status = statusMap[project.status] || statusMap.idea;
    
    // 태그 제한 로직 (최대 4개까지만 표시)
    const maxTags = 4;
    const displayTags = project.tags.slice(0, maxTags);
    const hasMoreTags = project.tags.length > maxTags;
    const remainingCount = project.tags.length - maxTags;
    
    return `
        <div class="project-card category-${project.category} fade-in" data-project-id="${project.id}">
            <div class="project-header">
                <div class="project-icon">${project.icon}</div>
                <div class="project-status ${status.class}">${status.text}</div>
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.summary}</p>
                <div class="project-tags">
                    ${displayTags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                    ${hasMoreTags ? `<span class="project-tag-more">+${remainingCount}</span>` : ''}
                </div>
                <div class="project-bottom flex justify-between items-center text-sm">
                    <span class="text-gray-500 dark:text-gray-400">예상 기간: ${project.estimatedDuration}</span>
                    <button class="interest-button" title="이 프로젝트에 대해 메일 보내기">
                        <span>📧</span>
                        관심있어요
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Show toast notification
function showToast(message, type = 'success') {
    const existingToast = document.querySelector('.toast');
    if (existingToast) {
        existingToast.remove();
    }
    
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    
    document.body.appendChild(toast);
    
    // Show toast
    setTimeout(() => {
        toast.classList.add('show');
    }, 100);
    
    // Hide toast
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            if (toast.parentNode) {
                toast.parentNode.removeChild(toast);
            }
        }, 300);
    }, 3000);
}

// Open project modal
function openProjectModal(projectId) {
    const project = projectsData.find(p => p.id === projectId);
    if (!project) return;
    
    // Populate modal content
    document.querySelector('.modal-icon').textContent = project.icon;
    document.querySelector('.modal-title').textContent = project.title;
    
    // Description with markdown-like formatting
    const modalDescription = document.querySelector('.modal-description');
    modalDescription.innerHTML = formatDescription(project.description);
    
    document.querySelector('.modal-category').textContent = getCategoryName(project.category);
    document.querySelector('.modal-duration').textContent = project.estimatedDuration;
    document.querySelector('.modal-status-text').textContent = getStatusName(project.status);
    document.querySelector('.modal-created').textContent = formatDate(project.createdAt);
    
    // Set status badge
    const statusMap = {
        'idea': { text: '아이디어', class: 'status-idea' },
        'planning': { text: '기획 중', class: 'status-planning' },
        'development': { text: '개발 중', class: 'status-development' },
        'completed': { text: '완료', class: 'status-completed' }
    };
    const status = statusMap[project.status] || statusMap.idea;
    const modalStatus = document.querySelector('.modal-status');
    modalStatus.textContent = status.text;
    modalStatus.className = `modal-status ${status.class}`;
    
    // Populate detailed information
    document.querySelector('.modal-target-users').textContent = project.targetUsers || '정보 없음';
    document.querySelector('.modal-expected-impact').textContent = project.expectedImpact || '정보 없음';
    document.querySelector('.modal-inspiration').textContent = project.inspiration || '정보 없음';
    
    // Populate challenges
    const modalChallenges = document.querySelector('.modal-challenges');
    if (project.challenges && project.challenges.length > 0) {
        modalChallenges.innerHTML = `<ul>${project.challenges.map(challenge => `<li>${challenge}</li>`).join('')}</ul>`;
    } else {
        modalChallenges.textContent = '정보 없음';
    }
    
    // Populate competitors
    const modalCompetitors = document.querySelector('.modal-competitors');
    if (project.competitors) {
        modalCompetitors.innerHTML = formatDescription(project.competitors);
    } else {
        modalCompetitors.textContent = '정보 없음';
    }
    
    // Populate tags
    const modalTags = document.querySelector('.modal-tags');
    modalTags.innerHTML = project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('');
    
    // Populate related links
    const modalRelatedLinksSection = document.querySelector('.modal-related-links-section');
    const modalRelatedLinks = document.querySelector('.modal-related-links');
    if (project.relatedLinks && project.relatedLinks.length > 0) {
        modalRelatedLinksSection.style.display = 'block';
        modalRelatedLinks.innerHTML = project.relatedLinks.map(link => createRelatedLinkHTML(link)).join('');
    } else {
        modalRelatedLinksSection.style.display = 'none';
    }
    
    // Set project ID on interest button
    modalInterestBtn.setAttribute('data-project-id', projectId);
    
    // Show modal
    projectModal.classList.remove('hidden');
    setTimeout(() => {
        projectModal.classList.add('show');
    }, 10);
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
}

// Close project modal
function closeModal() {
    projectModal.classList.remove('show');
    setTimeout(() => {
        projectModal.classList.add('hidden');
        document.body.style.overflow = '';
    }, 300);
}

// Format date
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

// Format description with basic markdown-like formatting
function formatDescription(text) {
    if (!text) return '';
    
    return text
        // Bold text: **text** -> <strong>text</strong>
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        // Line breaks
        .replace(/\n\n/g, '</p><p>')
        .replace(/\n/g, '<br>')
        // Bullet points: • text -> <li>text</li>
        .replace(/^• (.*$)/gm, '<li>$1</li>')
        // Wrap in paragraphs and lists
        .replace(/(<li>.*<\/li>)/gs, '<ul>$1</ul>')
        // Add paragraph tags
        .replace(/^(?!<[uo]l>|<li>)(.*?)$/gm, '<p>$1</p>')
        // Clean up empty paragraphs
        .replace(/<p><\/p>/g, '')
        .replace(/<p><br><\/p>/g, '');
}

// Create related link HTML
function createRelatedLinkHTML(link) {
    const icons = {
        github: `<svg fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>`,
        docs: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
        </svg>`,
        article: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/>
        </svg>`
    };
    
    return `
        <a href="${link.url}" target="_blank" class="modal-related-link">
            <div class="modal-related-link-icon">
                ${icons[link.icon] || icons.article}
            </div>
            <div class="modal-related-link-content">
                <div class="modal-related-link-title">${link.title}</div>
                <div class="modal-related-link-description">${link.description}</div>
            </div>
            <svg class="modal-related-link-external" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
            </svg>
        </a>
    `;
}

// Keyboard navigation
function handleKeyboardNavigation(e) {
    if (e.key === 'Escape') {
        // Close modal if open, otherwise reset filters
        if (projectModal && !projectModal.classList.contains('hidden')) {
            closeModal();
        } else {
            setFilter('all');
        }
    } else if (e.key >= '1' && e.key <= '5') {
        // Quick filter selection (only if modal is closed)
        if (projectModal && projectModal.classList.contains('hidden')) {
            const filters = ['all', 'web', 'mobile', 'ai', 'dev-tool'];
            const filterIndex = parseInt(e.key) - 1;
            if (filters[filterIndex]) {
                setFilter(filters[filterIndex]);
            }
        }
    }
}

// Add some helpful methods for future enhancements
window.ProjectsApp = {
    // Send email for specific project
    sendEmail: (projectId) => {
        sendProjectEmail(projectId);
    },
    
    // Get project data
    getProject: (projectId) => {
        return projectsData.find(p => p.id === projectId);
    },
    
    // Get project statistics
    getStats: () => {
        return {
            totalProjects: projectsData.length,
            categoryCounts: projectsData.reduce((acc, project) => {
                acc[project.category] = (acc[project.category] || 0) + 1;
                return acc;
            }, {}),
            statusCounts: projectsData.reduce((acc, project) => {
                acc[project.status] = (acc[project.status] || 0) + 1;
                return acc;
            }, {})
        };
    },
    
    // Get all projects data (for external access)
    getAllProjects: () => {
        return [...projectsData];
    }
};