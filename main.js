document.addEventListener('DOMContentLoaded', function() {
  // ==========================================
  // 1. MOBILE MENU TOGGLE
  // ==========================================
  const mobileToggle = document.querySelector('.mobile-toggle');
  const nav = document.querySelector('nav');
  const navLinks = document.querySelectorAll('nav a');

  if (mobileToggle && nav) {
    // Toggle menu on button click
    mobileToggle.addEventListener('click', function(e) {
      e.stopPropagation();
      nav.classList.toggle('active');
    });

    // Close menu when clicking a nav link
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        nav.classList.remove('active');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
      const isClickInsideNav = nav.contains(e.target);
      const isClickOnToggle = mobileToggle.contains(e.target);

      if (!isClickInsideNav && !isClickOnToggle && nav.classList.contains('active')) {
        nav.classList.remove('active');
      }
    });
  }

  // ==========================================
  // 2. HEADER SCROLL EFFECT
  // ==========================================
  const header = document.querySelector('header');

  if (header) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  // ==========================================
  // 3. HERO SLIDESHOW
  // ==========================================
  const heroSlides = document.querySelectorAll('.hero-slide');

  if (heroSlides.length > 0) {
    let currentSlide = 0;

    function nextSlide() {
      // Remove active class from current slide
      heroSlides[currentSlide].classList.remove('active');

      // Move to next slide
      currentSlide = (currentSlide + 1) % heroSlides.length;

      // Add active class to new slide
      heroSlides[currentSlide].classList.add('active');
    }

    // Set initial slide as active
    heroSlides[0].classList.add('active');

    // Change slide every 5 seconds
    setInterval(nextSlide, 5000);
  }

  // ==========================================
  // 4. FAQ ACCORDION
  // ==========================================
  const faqQuestions = document.querySelectorAll('.faq-question');

  faqQuestions.forEach(question => {
    question.addEventListener('click', function() {
      const faqItem = this.closest('.faq-item');
      const isActive = faqItem.classList.contains('active');

      // Close all FAQ items
      document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
      });

      // Open clicked item if it wasn't already open
      if (!isActive) {
        faqItem.classList.add('active');
      }
    });
  });

  // ==========================================
  // 5. CONTACT FORM HANDLING
  // ==========================================
  const contactForm = document.querySelector('form[name="contact"], form[id*="contact"]');

  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();

      // Create success message
      const successMessage = document.createElement('div');
      successMessage.className = 'success-message';
      successMessage.innerHTML = `
        <h3>Thank you!</h3>
        <p>Your message has been sent successfully. We'll get back to you soon.</p>
      `;

      // Replace form with success message
      contactForm.replaceWith(successMessage);

      // Optional: Log form data if needed for backend integration
      const formData = new FormData(contactForm);
      console.log('Form submitted with data:', Object.fromEntries(formData));
    });
  }

  // ==========================================
  // 6. SMOOTH SCROLL
  // ==========================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');

      // Skip if href is just "#"
      if (href === '#') {
        return;
      }

      e.preventDefault();

      const targetElement = document.querySelector(href);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // ==========================================
  // 7. ACTIVE NAV HIGHLIGHTING
  // ==========================================
  function highlightActiveNavLink() {
    const currentUrl = window.location.pathname;

    navLinks.forEach(link => {
      // Remove active class from all links
      link.classList.remove('active');

      // Get the href and extract the path
      const linkHref = link.getAttribute('href');

      // Check if link matches current page
      if (linkHref && linkHref !== '#') {
        // Handle both relative paths and absolute paths
        const linkPath = linkHref.startsWith('/') ? linkHref : '/' + linkHref;

        // Check for exact match or parent page match
        if (currentUrl === linkPath || currentUrl.startsWith(linkPath + '/')) {
          link.classList.add('active');
        }

        // Also check if current URL ends with the link href
        if (currentUrl.endsWith(linkHref)) {
          link.classList.add('active');
        }
      }
    });
  }

  // Run on page load
  highlightActiveNavLink();

  // Also run on popstate (back/forward navigation)
  window.addEventListener('popstate', highlightActiveNavLink);
});
