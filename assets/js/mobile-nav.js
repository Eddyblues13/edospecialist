// Mobile Navigation JavaScript - Shared across all pages

(function() {
    'use strict';
    
    // Wait for DOM to be ready
    function initMobileNavigation() {
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mobileMenu = document.getElementById('mobileMenu');
        const mobileMenuClose = document.getElementById('mobileMenuClose');
        const body = document.body;
        
        if (!mobileMenu || !mobileMenuBtn) {
            return; // Navigation elements not found
        }
        
        function openMobileMenu() {
            mobileMenu.classList.remove('hidden');
            // Force reflow to ensure transition works
            void mobileMenu.offsetHeight;
            mobileMenu.classList.add('show');
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
        
        function closeMobileMenu() {
            if (mobileMenu.classList.contains('show')) {
                mobileMenu.classList.remove('show');
                mobileMenu.setAttribute('aria-hidden', 'true');
                body.style.overflow = '';
                
                // Wait for animation to complete before hiding
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
        
        // Open/Close menu toggle
        mobileMenuBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            e.preventDefault();
            if (mobileMenu.classList.contains('show')) {
                closeMobileMenu();
            } else {
                openMobileMenu();
            }
        });
        
        // Close menu button
        if (mobileMenuClose) {
            mobileMenuClose.addEventListener('click', function(e) {
                e.stopPropagation();
                e.preventDefault();
                closeMobileMenu();
            });
        }
        
        // Close when clicking overlay (but not the menu panel itself)
        mobileMenu.addEventListener('click', function(e) {
            if (e.target === mobileMenu) {
                closeMobileMenu();
            }
        });
        
        // Close when clicking nav links
        const mobileNavLinks = mobileMenu.querySelectorAll('.mobile-nav-link, a[href^="/"]');
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', function() {
                setTimeout(closeMobileMenu, 200);
            });
        });
        
        // Close on escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && mobileMenu.classList.contains('show')) {
                closeMobileMenu();
            }
        });
        
        // Prevent body scroll when menu is open
        const observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                    if (mobileMenu.classList.contains('show')) {
                        body.style.overflow = 'hidden';
                    } else {
                        body.style.overflow = '';
                    }
                }
            });
        });
        
        observer.observe(mobileMenu, {
            attributes: true,
            attributeFilter: ['class']
        });
    }
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initMobileNavigation);
    } else {
        initMobileNavigation();
    }
    
    // Export for manual initialization if needed
    window.MobileNav = {
        init: initMobileNavigation
    };
})();

