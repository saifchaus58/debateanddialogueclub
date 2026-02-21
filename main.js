// --- UI Elements ---
const navbar = document.getElementById('navbar');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');
const yearSpan = document.getElementById('year');

// --- Global State ---
let isMobileMenuOpen = false;

// --- Initialization ---
const init = () => {
    yearSpan.textContent = new Date().getFullYear();
    setupEventListeners();
};

// --- Navbar Logic ---
const toggleMobileMenu = () => {
    isMobileMenuOpen = !isMobileMenuOpen;
    const spans = mobileMenuBtn.querySelectorAll('span');
    
    if (isMobileMenuOpen) {
        mobileMenu.classList.remove('opacity-0', '-translate-y-4', 'pointer-events-none');
        mobileMenu.classList.add('opacity-100', 'translate-y-0', 'pointer-events-auto');
        
        spans[0].classList.add('rotate-45', 'translate-y-2');
        spans[1].classList.add('opacity-0');
        spans[2].classList.add('-rotate-45', '-translate-y-2');
    } else {
        mobileMenu.classList.add('opacity-0', '-translate-y-4', 'pointer-events-none');
        mobileMenu.classList.remove('opacity-100', 'translate-y-0', 'pointer-events-auto');
        
        spans[0].classList.remove('rotate-45', 'translate-y-2');
        spans[1].classList.remove('opacity-0');
        spans[2].classList.remove('-rotate-45', '-translate-y-2');
    }
};

// --- Event Listeners ---
const setupEventListeners = () => {
    // Scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            navbar.classList.remove('bg-white/95', 'shadow-[0_8px_32px_rgba(166,58,47,0.15)]', 'border-ai-red/20', 'border');
            navbar.classList.add('bg-white/98', 'shadow-[0_12px_40px_rgba(166,58,47,0.2)]', 'border-ai-red/30');
        } else {
            navbar.classList.add('bg-white/95', 'shadow-[0_8px_32px_rgba(166,58,47,0.15)]', 'border-ai-red/20', 'border');
            navbar.classList.remove('bg-white/98', 'shadow-[0_12px_40px_rgba(166,58,47,0.2)]', 'border-ai-red/30');
        }
    });

    // Mobile Menu
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (isMobileMenuOpen) toggleMobileMenu();
        });
    });
};

// Start
init();