// Projects data
const projectsData = [
    {
        id: 'life-weekly-journal',
        title: '인생 주간 기록장',
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
    }
];

// Local storage keys
const STORAGE_KEYS = {
    THEME: 'dark_mode'
};

// Global state
let currentFilter = 'all';
let currentSort = 'date';

// DOM elements
let projectGrid, filterButtons, sortButtons, emptyState, darkModeToggle, projectModal, modalClose, modalInterestBtn;

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
}

// Load data from localStorage
function loadFromStorage() {
    try {
        const savedTheme = localStorage.getItem(STORAGE_KEYS.THEME);
        if (savedTheme === 'true') {
            document.documentElement.classList.add('dark');
        }
    } catch (error) {
        console.error('Error loading from storage:', error);
    }
}

// Save data to localStorage
function saveToStorage() {
    try {
        localStorage.setItem(STORAGE_KEYS.THEME, document.documentElement.classList.contains('dark'));
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