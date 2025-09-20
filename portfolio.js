// ===== GSAP SETUP =====
gsap.registerPlugin(ScrollTrigger);

// ===== GLOBAL VARIABLES =====
let locomotiveScroll;
const preloader = document.querySelector('.preloader');
const progressBar = document.querySelector('.progress-bar');
const progressText = document.querySelector('.progress-text');
const loaderLogo = document.querySelector('.loader-logo');

// ===== PRELOADER ANIMATIONS =====
function initPreloader() {
    // Logo animation
    gsap.to(loaderLogo, {
        opacity: 1,
        duration: 1,
        ease: "power2.out"
    });

    // Progress bar animation
    let progress = 0;
    const progressInterval = setInterval(() => {
        progress += Math.random() * 15;
        if (progress >= 100) {
            progress = 100;
            clearInterval(progressInterval);
            
            gsap.to(progressBar, {
                width: "100%",
                duration: 0.5,
                ease: "power2.out",
                onComplete: () => {
                    setTimeout(() => {
                        gsap.to(preloader, {
                            opacity: 0,
                            scale: 0.9,
                            duration: 1,
                            ease: "power2.inOut",
                            onComplete: () => {
                                preloader.style.display = "none";
                                initMainAnimations();
                            }
                        });
                    }, 500);
                }
            });
        } else {
            gsap.to(progressBar, {
                width: progress + "%",
                duration: 0.3,
                ease: "none"
            });
        }
        progressText.textContent = `Loading Experience... ${Math.floor(progress)}%`;
    }, 100);
}

// ===== MAIN ANIMATIONS =====
function initMainAnimations() {
    // Navigation fade in
    gsap.to("nav", {
        opacity: 1,
        duration: 1,
        ease: "power2.out"
    });

    // Hero animations timeline
    const heroTl = gsap.timeline();
    
    heroTl.to(".spline-bg", {
        opacity: 0.8,
        duration: 2,
        ease: "power2.out"
    })
    .to(".hero-title", {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1.5,
        ease: "power3.out"
    }, "-=1")
    .to(".hero-subtitle", {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out"
    }, "-=0.5")
    .to(".cta-button", {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "back.out(1.7)"
    }, "-=0.3");

    // Floating orbs animations
    initFloatingOrbs();

    // CTA button pulse animation
    gsap.to(".cta-button", {
        boxShadow: "0 15px 40px rgba(102, 126, 234, 0.6)",
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut"
    });
}

// ===== FLOATING ORBS ANIMATIONS =====
function initFloatingOrbs() {
    gsap.to(".orb-1", {
        y: -30,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
    });

    gsap.to(".orb-2", {
        y: 40,
        x: -20,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
    });

    gsap.to(".orb-3", {
        y: -25,
        x: 15,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
    });
}

// ===== SCROLL TRIGGERED ANIMATIONS =====
function initScrollAnimations() {
    // About section animations
    gsap.fromTo(".profile-image", {
        opacity: 0,
        x: -100,
        scale: 0.8
    }, {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".about",
            start: "top 80%",
            end: "bottom 20%"
        }
    });

    gsap.fromTo(".about-content", {
        opacity: 0,
        y: 80,
        filter: "blur(10px)"
    }, {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".about",
            start: "top 70%",
            end: "bottom 20%"
        }
    });

    // Skills stagger animation
    gsap.fromTo(".skill-item", {
        opacity: 0,
        y: 50,
        scale: 0.8
    }, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
            trigger: ".skills-grid",
            start: "top 80%"
        }
    });

    // Projects animation
    gsap.fromTo(".project-card", {
        opacity: 0,
        y: 100,
        scale: 0.9,
        filter: "blur(10px)"
    }, {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".projects-grid",
            start: "top 80%",
            end: "bottom 20%"
        }
    });

    // Contact form animations
    gsap.fromTo(".contact-form", {
        opacity: 0,
        y: 80,
        scale: 0.95
    }, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".contact",
            start: "top 70%"
        }
    });

    // Form inputs stagger
    gsap.fromTo(".form-group input, .form-group textarea", {
        opacity: 0,
        x: -50
    }, {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".contact-form",
            start: "top 80%"
        }
    });

    gsap.fromTo(".submit-btn", {
        opacity: 0,
        scale: 0.8
    }, {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "back.out(1.7)",
        scrollTrigger: {
            trigger: ".contact-form",
            start: "top 60%"
        }
    });

    // Social links animation
    gsap.fromTo(".social-link", {
        opacity: 0,
        scale: 0.5,
        y: 30
    }, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
            trigger: ".social-links",
            start: "top 90%"
        }
    });

    // Footer particles animation
    gsap.to(".particle", {
        y: -20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        stagger: 0.5,
        ease: "power1.inOut"
    });
}

// ===== HOVER INTERACTIONS =====
function initHoverAnimations() {
    // CTA button hover
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('mouseenter', () => {
            gsap.to(ctaButton, {
                scale: 1.1,
                duration: 0.3,
                ease: "power2.out"
            });
        });

        ctaButton.addEventListener('mouseleave', () => {
            gsap.to(ctaButton, {
                scale: 1,
                duration: 0.3,
                ease: "power2.out"
            });
        });
    }

    // Project cards hover
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                y: -20,
                scale: 1.02,
                duration: 0.5,
                ease: "power2.out"
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                y: 0,
                scale: 1,
                duration: 0.5,
                ease: "power2.out"
            });
        });
    });

    // Skills hover
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(skill => {
        skill.addEventListener('mouseenter', () => {
            gsap.to(skill, {
                y: -10,
                scale: 1.05,
                duration: 0.3,
                ease: "power2.out"
            });
        });

        skill.addEventListener('mouseleave', () => {
            gsap.to(skill, {
                y: 0,
                scale: 1,
                duration: 0.3,
                ease: "power2.out"
            });
        });
    });

    // Profile image hover
    const profileImage = document.querySelector('.profile-image');
    if (profileImage) {
        profileImage.addEventListener('mouseenter', () => {
            gsap.to('.profile-image img', {
                rotation: 5,
                scale: 1.05,
                duration: 0.5,
                ease: "power2.out"
            });
        });

        profileImage.addEventListener('mouseleave', () => {
            gsap.to('.profile-image img', {
                rotation: 0,
                scale: 1,
                duration: 0.5,
                ease: "power2.out"
            });
        });
    }

    // Social links hover
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            gsap.to(link, {
                scale: 1.2,
                rotation: 360,
                duration: 0.5,
                ease: "power2.out"
            });
        });

        link.addEventListener('mouseleave', () => {
            gsap.to(link, {
                scale: 1,
                rotation: 0,
                duration: 0.5,
                ease: "power2.out"
            });
        });
    });

    // Form focus animations
    const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');
    formInputs.forEach(input => {
        input.addEventListener('focus', () => {
            gsap.to(input, {
                scale: 1.02,
                duration: 0.3,
                ease: "power2.out"
            });
        });

        input.addEventListener('blur', () => {
            gsap.to(input, {
                scale: 1,
                duration: 0.3,
                ease: "power2.out"
            });
        });
    });

    // Submit button hover
    const submitBtn = document.querySelector('.submit-btn');
    if (submitBtn) {
        submitBtn.addEventListener('mouseenter', () => {
            gsap.to(submitBtn, {
                scale: 1.05,
                duration: 0.3,
                ease: "power2.out"
            });
        });

        submitBtn.addEventListener('mouseleave', () => {
            gsap.to(submitBtn, {
                scale: 1,
                duration: 0.3,
                ease: "power2.out"
            });
        });
    }
}

// ===== FORM HANDLING =====
function initFormHandling() {
    const contactForm = document.getElementById('contactForm');
    const submitBtn = document.querySelector('.submit-btn');
    const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Submit button animation
            gsap.to(submitBtn, {
                scale: 0.95,
                duration: 0.1,
                ease: "power2.out",
                onComplete: () => {
                    gsap.to(submitBtn, {
                        scale: 1.1,
                        duration: 0.3,
                        ease: "back.out(1.7)",
                        onComplete: () => {
                            gsap.to(submitBtn, {
                                scale: 1,
                                duration: 0.2,
                                ease: "power2.out"
                            });
                        }
                    });
                }
            });

            // Show success message
            showSuccessMessage();

            // Reset form with animation
            setTimeout(() => {
                gsap.to(formInputs, {
                    opacity: 0.5,
                    duration: 0.3,
                    onComplete: () => {
                        contactForm.reset();
                        gsap.to(formInputs, {
                            opacity: 1,
                            duration: 0.3
                        });
                    }
                });
            }, 1000);
        });
    }
}

// ===== SUCCESS MESSAGE =====
function showSuccessMessage() {
    // Create success message element
    const successMsg = document.createElement('div');
    successMsg.innerHTML = `
        <div style="
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: rgba(102, 126, 234, 0.9);
            backdrop-filter: blur(20px);
            color: white;
            padding: 2rem 3rem;
            border-radius: 20px;
            border: 1px solid rgba(255, 255, 255, 0.2);
            z-index: 10001;
            text-align: center;
            font-weight: 600;
            box-shadow: 0 20px 40px rgba(102, 126, 234, 0.3);
        ">
            <i class="ph-check-circle" style="font-size: 3rem; margin-bottom: 1rem; display: block;"></i>
            Message Sent Successfully!<br>
            <span style="font-weight: 400; opacity: 0.9;">Thank you for reaching out. I'll get back to you soon.</span>
        </div>
    `;
    
    document.body.appendChild(successMsg);
    
    // Animate in
    gsap.fromTo(successMsg, {
        opacity: 0,
        scale: 0.5,
        y: 50
    }, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.8,
        ease: "back.out(1.7)"
    });
    
    // Remove after 3 seconds
    setTimeout(() => {
        gsap.to(successMsg, {
            opacity: 0,
            scale: 0.5,
            y: -50,
            duration: 0.5,
            ease: "power2.in",
            onComplete: () => {
                document.body.removeChild(successMsg);
            }
        });
    }, 3000);
}

// ===== NAVIGATION =====
function initNavigation() {
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

    // Mobile menu functionality
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
            
            if (navLinks.classList.contains('active')) {
                gsap.fromTo(navLinks, {
                    opacity: 0,
                    y: -50
                }, {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    ease: "power2.out"
                });
            }
        });

        // Close mobile menu when clicking on links
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }
}

// ===== CURSOR TRAIL =====
function initCursorTrail() {
    const cursor = document.createElement('div');
    cursor.className = 'cursor-trail';
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', (e) => {
        gsap.to(cursor, {
            x: e.clientX - 10,
            y: e.clientY - 10,
            opacity: 1,
            duration: 0.3,
            ease: "power2.out"
        });
    });

    document.addEventListener('mouseleave', () => {
        gsap.to(cursor, {
            opacity: 0,
            duration: 0.3
        });
    });
}

// ===== MOUSE PARALLAX =====
function initMouseParallax() {
    window.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;

        gsap.to('.orb-1', {
            x: mouseX * 30,
            y: mouseY * 30,
            duration: 2,
            ease: "power2.out"
        });

        gsap.to('.orb-2', {
            x: mouseX * -20,
            y: mouseY * -20,
            duration: 2,
            ease: "power2.out"
        });

        gsap.to('.orb-3', {
            x: mouseX * 15,
            y: mouseY * -15,
            duration: 2,
            ease: "power2.out"
        });
    });
}

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    // Start preloader
    initPreloader();
    
    // Initialize navigation
    initNavigation();
    
    // Initialize cursor trail
    initCursorTrail();
    
    // Initialize mouse parallax
    initMouseParallax();
    
    // Initialize form handling
    initFormHandling();
});

// Initialize scroll animations after page load
window.addEventListener('load', () => {
    initScrollAnimations();
    initHoverAnimations();
});

// ===== PERFORMANCE OPTIMIZATION =====
// Throttle function for performance
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Debounce function for performance
function debounce(func, wait, immediate) {
    let timeout;
    return function() {
        const context = this, args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// ===== RESIZE HANDLER =====
window.addEventListener('resize', debounce(() => {
    // Refresh ScrollTrigger on resize
    ScrollTrigger.refresh();
}, 250));

// ===== UTILITY FUNCTIONS =====
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// ===== CONSOLE WELCOME MESSAGE =====
console.log(`
🚀 Welcome to Milad's Portfolio
═══════════════════════════════
Built with:
• GSAP for animations
• Locomotive Scroll for smooth scrolling  
• Spline for 3D elements
• Modern CSS with glassmorphism
• Vanilla JavaScript

Made with ❤️ by MiladiCode
`);

// ===== ERROR HANDLING =====
window.addEventListener('error', (e) => {
    console.error('Portfolio Error:', e.error);
});

// Prevent context menu on production
if (window.location.hostname !== 'localhost') {
    document.addEventListener('contextmenu', e => e.preventDefault());
}