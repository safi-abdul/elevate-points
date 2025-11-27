// ================================
// Elevate Points - Main JavaScript
// ================================

document.addEventListener('DOMContentLoaded', function () {

    // ================================
    // Smooth Scroll for Navigation Links
    // ================================

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const navHeight = document.querySelector('.nav').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ================================
    // Form Handling
    // ================================

    // Form submission is handled by Formspree
    // No JavaScript needed - the form posts directly to Formspree

    // ================================
    // Navigation Background on Scroll
    // ================================

    const nav = document.querySelector('.nav');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            nav.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            nav.style.boxShadow = 'none';
        }
    });

    // ================================
    // Animate Elements on Scroll
    // ================================

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Add animation to sections
    document.querySelectorAll('.section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    // Make hero visible immediately
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.opacity = '1';
        hero.style.transform = 'translateY(0)';
    }

});

// ================================
// Calendly Integration (when ready)
// ================================
// 
// To add Calendly, replace the .calendly-placeholder div in index.html with:
//
// <div class="calendly-inline-widget" 
//      data-url="https://calendly.com/YOUR-USERNAME/consultation"
//      style="min-width:320px;height:630px;">
// </div>
// <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
//
// Or use the popup widget:
//
// <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet">
// <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
// <a href="" onclick="Calendly.initPopupWidget({url: 'https://calendly.com/YOUR-USERNAME/consultation'});return false;">
//   Book a Consultation
// </a>

// ================================
// Form Backend Options
// ================================
//
// Option 1: Formspree (Easiest)
// - Go to formspree.io, create account, get form endpoint
// - Change form action to: action="https://formspree.io/f/YOUR_FORM_ID" method="POST"
// - Remove the JavaScript form handler above
//
// Option 2: Netlify Forms (If hosting on Netlify)
// - Add netlify attribute to form: <form name="checkup" netlify>
// - Add hidden input: <input type="hidden" name="form-name" value="checkup">
// - Forms will appear in Netlify dashboard
//
// Option 3: Google Forms
// - Create a Google Form with matching fields
// - Use the prefilled link format to submit via JavaScript