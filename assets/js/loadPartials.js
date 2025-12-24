// Load header and footer partials
function loadPartials() {
    // Load header
    const headerContainer = document.getElementById('header-container');
    if (headerContainer) {
        fetch('/partials/header.html')
            .then(res => {
                if (!res.ok) {
                    throw new Error(`Failed to load header: ${res.status}`);
                }
                return res.text();
            })
            .then(html => {
                headerContainer.innerHTML = html;
                // Reinitialize all functions after loading header
                if (typeof initMobileMenu === 'function') initMobileMenu();
                if (typeof initNavigationLinks === 'function') initNavigationLinks();
                if (typeof setActiveNavLink === 'function') setActiveNavLink();
            })
            .catch(error => {
                console.error('Error loading header:', error);
                headerContainer.innerHTML = '<p class="text-red-500 p-4">Error loading navigation. Please refresh the page.</p>';
            });
    }

    // Load footer
    const footerContainer = document.getElementById('footer-container');
    if (footerContainer) {
        fetch('/partials/footer.html')
            .then(res => {
                if (!res.ok) {
                    throw new Error(`Failed to load footer: ${res.status}`);
                }
                return res.text();
            })
            .then(html => {
                footerContainer.innerHTML = html;
            })
            .catch(error => {
                console.error('Error loading footer:', error);
                footerContainer.innerHTML = '<p class="text-red-500 p-4">Error loading footer.</p>';
            });
    }
}

// Load partials when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadPartials);
} else {
    // DOM is already ready
    loadPartials();
}

