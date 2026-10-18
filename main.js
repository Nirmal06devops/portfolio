(() => {
    'use strict';

    // ===============================
    // TYPING ANIMATION
    // ===============================
    if (window.Typed && document.querySelector('.typing-text')) {
        new Typed('.typing-text', {
            strings: [
                'Frontend Developer',
                'AI Chatbot Developer',
                'Java Developer',
                'UI Designer'
            ],
            typeSpeed: 70,
            backSpeed: 40,
            backDelay: 1400,
            loop: true
        });
    }

    // ===============================
    // MOBILE MENU
    // ===============================
    const header = document.querySelector('.header');
    const menuBtn = document.getElementById('menuBtn');
    const nav = document.getElementById('navbar');
    const navLinks = nav.querySelectorAll('a');

    function setMenu(open) {
        nav.classList.toggle('open', open);
        menuBtn.setAttribute('aria-expanded', String(open));
        menuBtn.firstElementChild.className = open ? 'bx bx-x' : 'bx bx-menu';
    }

    menuBtn.addEventListener('click', () => setMenu(!nav.classList.contains('open')));

    nav.addEventListener('click', (e) => {
        if (e.target.closest('a')) setMenu(false);
    });

    document.addEventListener('click', (e) => {
        if (!header.contains(e.target)) setMenu(false);
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) setMenu(false);
    });

    // ===============================
    // HEADER BORDER + BACK TO TOP
    // ===============================
    const topBtn = document.getElementById('topBtn');
    let ticking = false;

    window.addEventListener('scroll', () => {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(() => {
            header.classList.toggle('sticky', window.scrollY > 20);
            topBtn.classList.toggle('show', window.scrollY > 400);
            ticking = false;
        });
    }, { passive: true });

    topBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // ===============================
    // ACTIVE NAV LINK
    // ===============================
    const spy = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            navLinks.forEach((link) => {
                link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id);
            });
        });
    }, { rootMargin: '-45% 0px -50% 0px' });

    document.querySelectorAll('section[id]').forEach((sec) => spy.observe(sec));

    // ===============================
    // SUBTLE REVEAL ON SCROLL
    // ===============================
    const revealEls = document.querySelectorAll('.reveal');

    if ('IntersectionObserver' in window) {
        const revealObserver = new IntersectionObserver((entries, obs) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                const el = entry.target;
                el.classList.add('in');
                obs.unobserve(el);

                setTimeout(() => {
                    el.classList.remove('reveal');
                    el.style.transitionDelay = '';
                }, 1600);
            });
        }, { threshold: 0.12 });

        revealEls.forEach((el) => {
            if (el.matches('.skill, .project-card')) {
                const index = [...el.parentElement.children].indexOf(el);
                el.style.transitionDelay = (index % 2) * 80 + 'ms';
            }
            revealObserver.observe(el);
        });
    } else {
        revealEls.forEach((el) => el.classList.remove('reveal'));
    }

    // ===============================
    // CONTACT FORM
    // Opens the visitor's email app with the message filled in.
    // For in-page sending, connect Formspree or EmailJS here.
    // ===============================
    const RECEIVER_EMAIL = 'nirmal@gmail.com'; // TODO: your real email

    const form = document.getElementById('contactForm');
    const status = document.getElementById('formStatus');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const data = new FormData(form);
        const subject = data.get('subject') || 'Portfolio enquiry from ' + data.get('name');
        const body =
            'Name: ' + data.get('name') + '\n' +
            'Email: ' + data.get('email') + '\n\n' +
            data.get('message');

        window.location.href =
            'mailto:' + RECEIVER_EMAIL +
            '?subject=' + encodeURIComponent(subject) +
            '&body=' + encodeURIComponent(body);

        status.textContent = 'Opening your email app to send the message.';
        form.reset();
    });
})();