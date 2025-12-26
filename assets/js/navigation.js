// Shared Navigation JavaScript for all pages

// Enhanced Mobile menu toggle
function initMobileNavigation() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuClose = document.getElementById('mobileMenuClose');
    const body = document.body;
    
    function openMobileMenu() {
        if (mobileMenu) {
            mobileMenu.classList.remove('hidden');
            setTimeout(() => {
                mobileMenu.classList.add('show');
            }, 10);
            mobileMenu.setAttribute('aria-hidden', 'false');
            body.style.overflow = 'hidden';
            if (mobileMenuBtn) {
                mobileMenuBtn.setAttribute('aria-expanded', 'true');
                const icon = mobileMenuBtn.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times');
                }
            }
        }
    }
    
    function closeMobileMenu() {
        if (mobileMenu) {
            mobileMenu.classList.remove('show');
            mobileMenu.setAttribute('aria-hidden', 'true');
            body.style.overflow = '';
            setTimeout(() => {
                if (!mobileMenu.classList.contains('show')) {
                    mobileMenu.classList.add('hidden');
                }
            }, 300);
            if (mobileMenuBtn) {
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
                const icon = mobileMenuBtn.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        }
    }
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', openMobileMenu);
        
        if (mobileMenuClose) {
            mobileMenuClose.addEventListener('click', closeMobileMenu);
        }
        
        // Close when clicking overlay
        mobileMenu.addEventListener('click', (e) => {
            if (e.target === mobileMenu) {
                closeMobileMenu();
            }
        });
        
        // Close when clicking nav links
        const mobileNavLinks = mobileMenu.querySelectorAll('.mobile-nav-link');
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                setTimeout(closeMobileMenu, 300);
            });
        });
        
        // Close on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && mobileMenu.classList.contains('show')) {
                closeMobileMenu();
            }
        });
    }
}

// Navbar scroll effect
function initNavbarScroll() {
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 100) {
                navbar.classList.add('nav-scroll');
            } else {
                navbar.classList.remove('nav-scroll');
            }
        });
    }
}

// Active navigation link
function setActiveNavLink() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPath || (currentPath === '/' && href === '/')) {
            link.classList.add('text-blue-600', 'font-semibold');
            if (link.classList.contains('mobile-nav-link')) {
                link.classList.add('bg-blue-50');
            }
        }
    });
}

// Initialize all navigation functions
document.addEventListener('DOMContentLoaded', () => {
    initMobileNavigation();
    initNavbarScroll();
    setActiveNavLink();
});

// Export for use in other scripts
window.Navigation = {
    initMobileNavigation,
    initNavbarScroll,
    setActiveNavLink
};

