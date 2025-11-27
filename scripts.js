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

    const checkupForm = document.getElementById('checkupForm');

    if (checkupForm) {
        checkupForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Gather form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                cards: document.getElementById('cards').value,
                points: document.getElementById('points').value,
                travel: document.getElementById('travel').value
            };

            // For now, log the data and show a success message
            // Replace this with your actual form submission logic
            // Options: 
            //   - Formspree (formspree.io) - easy email forwarding
            //   - Netlify Forms - if hosting on Netlify
            //   - Custom backend endpoint
            //   - Google Forms integration

            console.log('Form submitted:', formData);

            // Show success message
            showFormSuccess();
        });
    }

    function showFormSuccess() {
        const form = document.getElementById('checkupForm');
        const successMessage = document.createElement('div');
        successMessage.className = 'form-success';
        successMessage.innerHTML = `
            <div class="success-icon">✓</div>
            <h3>Thanks! We'll be in touch soon.</h3>
            <p>Check your email for your free points checkup within 24 hours.</p>
        `;

        // Add success styles
        successMessage.style.cssText = `
            text-align: center;
            padding: 3rem 2rem;
        `;

        const successIcon = successMessage.querySelector('.success-icon');
        successIcon.style.cssText = `
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 64px;
            height: 64px;
            background: #1a5f4a;
            color: white;
            font-size: 2rem;
            border-radius: 50%;
            margin-bottom: 1.5rem;
        `;

        const h3 = successMessage.querySelector('h3');
        h3.style.cssText = `
            font-size: 1.5rem;
            margin-bottom: 0.5rem;
            color: #0a0a0a;
        `;

        const p = successMessage.querySelector('p');
        p.style.cssText = `
            color: #666;
            margin-bottom: 0;
        `;

        // Replace form with success message
        form.parentNode.replaceChild(successMessage, form);
    }

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