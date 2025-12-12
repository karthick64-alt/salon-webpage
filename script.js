// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Update active navigation based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    const navDots = document.querySelectorAll('.nav-dot');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 150) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
    
    navDots.forEach(dot => {
        dot.classList.remove('active');
        if (dot.getAttribute('href') === `#${current}`) {
            dot.classList.add('active');
        }
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-section');
    if (hero && scrolled < window.innerHeight) {
        const heroContent = hero.querySelector('.hero-content');
        if (heroContent) {
            heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
            heroContent.style.opacity = 1 - scrolled / 600;
        }
    }
});

// Form submission
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    this.reset();
});

// Service booking buttons
document.querySelectorAll('.service-book-btn').forEach(button => {
    button.addEventListener('click', function() {
        const serviceName = this.closest('.service-card').querySelector('.service-card-title').textContent;
        alert(`Booking ${serviceName}. This would normally redirect to a booking page.`);
    });
});

// Stylist booking buttons
document.querySelectorAll('.stylist-book-btn').forEach(button => {
    button.addEventListener('click', function() {
        const stylistName = this.closest('.stylist-card').querySelector('.stylist-name').textContent;
        alert(`Booking appointment with ${stylistName}. This would normally redirect to a booking page.`);
    });
});

// Gallery items click effect
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', function() {
        const image = this.querySelector('.gallery-image');
        if (image) {
            image.style.transform = 'scale(0.95)';
            setTimeout(() => {
                image.style.transform = '';
            }, 200);
        }
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe sections for animations
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Initial load - show hero immediately
window.addEventListener('load', () => {
    const hero = document.querySelector('.hero-section');
    if (hero) {
        hero.style.opacity = '1';
        hero.style.transform = 'translateY(0)';
    }
});

// Sidebar toggle button functionality
const sidebarToggleBtn = document.getElementById('sidebarToggleBtn');
const body = document.body;

if (sidebarToggleBtn) {
    sidebarToggleBtn.addEventListener('click', () => {
        body.classList.toggle('sidebar-collapsed');
        sidebarToggleBtn.classList.toggle('collapsed');
    });
}

// Mobile menu toggle
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const sidebarNav = document.getElementById('sidebarNav');
const sidebarOverlay = document.getElementById('sidebarOverlay');

function toggleSidebar() {
    if (window.innerWidth <= 1024) {
        sidebarNav.classList.toggle('active');
        if (sidebarOverlay) {
            sidebarOverlay.classList.toggle('active');
        }
        const icon = mobileMenuToggle.querySelector('i');
        if (sidebarNav.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    }
}

function closeSidebar() {
    if (window.innerWidth <= 1024) {
        sidebarNav.classList.remove('active');
        if (sidebarOverlay) {
            sidebarOverlay.classList.remove('active');
        }
        const icon = mobileMenuToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
}

if (mobileMenuToggle && sidebarNav) {
    mobileMenuToggle.addEventListener('click', toggleSidebar);

    // Close sidebar when clicking on overlay
    if (sidebarOverlay) {
        sidebarOverlay.addEventListener('click', closeSidebar);
    }

    // Close sidebar when clicking on a link on mobile
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            closeSidebar();
        });
    });

    // Handle window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 1024) {
            sidebarNav.classList.remove('active');
            if (sidebarOverlay) {
                sidebarOverlay.classList.remove('active');
            }
            const icon = mobileMenuToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
}

