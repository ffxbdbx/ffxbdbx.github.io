// ===================================
// Smooth Scrolling for Navigation Links
// ===================================
document.addEventListener("DOMContentLoaded", () => {
  // Smooth scroll for all anchor links
  const links = document.querySelectorAll('a[href^="#"]')

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      if (targetId === "#") return

      const targetSection = document.querySelector(targetId)

      if (targetSection) {
        // Close mobile menu if open
        const navbarCollapse = document.querySelector(".navbar-collapse")
        if (navbarCollapse.classList.contains("show")) {
          navbarCollapse.classList.remove("show")
        }

        // Smooth scroll to target
        const headerOffset = 80
        const elementPosition = targetSection.offsetTop
        const offsetPosition = elementPosition - headerOffset

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        })
      }
    })
  })

  // ===================================
  // Active Navigation Link on Scroll
  // ===================================
  const sections = document.querySelectorAll("section[id]")
  const navLinks = document.querySelectorAll(".nav-link")

  function highlightNavLink() {
    const scrollPosition = window.scrollY + 100

    sections.forEach((section) => {
      const sectionTop = section.offsetTop
      const sectionHeight = section.offsetHeight
      const sectionId = section.getAttribute("id")

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach((link) => {
          link.classList.remove("active")
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active")
          }
        })
      }
    })
  }

  window.addEventListener("scroll", highlightNavLink)

  // ===================================
  // Navbar Background on Scroll
  // ===================================
  const navbar = document.getElementById("mainNav")

  function updateNavbar() {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled")
    } else {
      navbar.classList.remove("scrolled")
    }
  }

  window.addEventListener("scroll", updateNavbar)

  // ===================================
  // Scroll to Top Button
  // ===================================
  const scrollTopBtn = document.getElementById("scrollTopBtn")

  function toggleScrollTopButton() {
    if (window.scrollY > 300) {
      scrollTopBtn.classList.add("visible")
    } else {
      scrollTopBtn.classList.remove("visible")
    }
  }

  window.addEventListener("scroll", toggleScrollTopButton)

  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  })

  // ===================================
  // Animate Progress Bars on Scroll
  // ===================================
  const progressBars = document.querySelectorAll(".progress-bar")

  function animateProgressBars() {
    progressBars.forEach((bar) => {
      const barPosition = bar.getBoundingClientRect().top
      const screenPosition = window.innerHeight / 1.3

      if (barPosition < screenPosition) {
        const targetWidth = bar.getAttribute("style").match(/width:\s*(\d+)%/)[1]
        bar.style.width = targetWidth + "%"
      }
    })
  }

  // Reset progress bars
  progressBars.forEach((bar) => {
    bar.style.width = "0%"
  })

  window.addEventListener("scroll", animateProgressBars)
  animateProgressBars() // Initial check

  // ===================================
  // Intersection Observer for Fade-in Animation
  // ===================================
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-in")
      }
    })
  }, observerOptions)

  // Observe all cards, timeline items, and skill categories
  const animatedElements = document.querySelectorAll(
    ".portfolio-card, .timeline-item, .skill-category, .hobby-card, .contact-card, .interest-box",
  )

  animatedElements.forEach((element) => {
    element.style.opacity = "0"
    element.style.transform = "translateY(30px)"
    element.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(element)
  })

  // Add animate-in class styles dynamically
  const style = document.createElement("style")
  style.textContent = `
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `
  document.head.appendChild(style)

  // ===================================
  // Typed Text Effect for Hero Section
  // ===================================
  const typedTextElement = document.querySelector(".hero-section h2")
  if (typedTextElement) {
    const originalText = typedTextElement.textContent
    typedTextElement.textContent = ""

    let charIndex = 0

    function typeText() {
      if (charIndex < originalText.length) {
        typedTextElement.textContent += originalText.charAt(charIndex)
        charIndex++
        setTimeout(typeText, 50)
      }
    }

    // Start typing after page loads
    setTimeout(typeText, 1000)
  }

  // ===================================
  // Email and WhatsApp Link Validation
  // ===================================
  const emailLink = document.querySelector('a[href^="mailto:"]')
  const whatsappLink = document.querySelector('a[href^="https://wa.me/"]')

  if (emailLink) {
    emailLink.addEventListener("click", (e) => {
      console.log("Email clicked: Opening default email client")
    })
  }

  if (whatsappLink) {
    whatsappLink.addEventListener("click", (e) => {
      console.log("WhatsApp clicked: Opening WhatsApp chat")
    })
  }

  // ===================================
  // Portfolio Card Image Loading
  // ===================================
  const portfolioImages = document.querySelectorAll(".portfolio-card img, .hobby-card img")

  portfolioImages.forEach((img) => {
    img.addEventListener("error", function () {
      // Fallback if image fails to load
      this.style.backgroundColor = "#2a2a3e"
      this.style.display = "flex"
      this.style.alignItems = "center"
      this.style.justifyContent = "center"
      console.log("Image failed to load:", this.src)
    })
  })

  // ===================================
  // Form Validation (if contact form is added later)
  // ===================================
  const forms = document.querySelectorAll("form")

  forms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault()

      // Add your form validation logic here
      console.log("Form submitted")

      // Example: Show success message
      alert("Pesan Anda telah dikirim! Terima kasih.")
      form.reset()
    })
  })

  // ===================================
  // Mobile Menu Close on Outside Click
  // ===================================
  const navbarCollapse = document.querySelector(".navbar-collapse")
  const navbarToggler = document.querySelector(".navbar-toggler")

  document.addEventListener("click", (e) => {
    if (!navbarCollapse.contains(e.target) && !navbarToggler.contains(e.target)) {
      if (navbarCollapse.classList.contains("show")) {
        navbarCollapse.classList.remove("show")
      }
    }
  })

  // ===================================
  // Prevent Default Behavior for Empty Links
  // ===================================
  const emptyLinks = document.querySelectorAll('a[href="#"]')

  emptyLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault()
    })
  })

  // ===================================
  // Console Welcome Message
  // ===================================
  console.log(
    "%c👋 Halo! Welcome to Faisal Aditya Rahman's Portfolio",
    "color: #4a9eff; font-size: 20px; font-weight: bold;",
  )
  console.log("%cJika Anda tertarik untuk berkolaborasi, silakan hubungi saya!", "color: #00d4ff; font-size: 14px;")
  console.log("%c📧 Email: adityafaisal18@gmail.com", "color: #28a745; font-size: 12px;")

  // ===================================
  // Performance Monitoring
  // ===================================
  window.addEventListener("load", () => {
    const loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart
    console.log(`%c⚡ Page loaded in ${loadTime}ms`, "color: #ffc107; font-size: 12px;")
  })

  // ===================================
  // Badge Hover Animation Enhancement
  // ===================================
  const badges = document.querySelectorAll(".badge")

  badges.forEach((badge) => {
    badge.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-3px) scale(1.05)"
    })

    badge.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)"
    })
  })

  // ===================================
  // Social Links Analytics (Optional)
  // ===================================
  const socialLinks = document.querySelectorAll(".social-link")

  socialLinks.forEach((link) => {
    link.addEventListener("click", function () {
      const platform = this.getAttribute("title")
      console.log(`Social media clicked: ${platform}`)
      // Add analytics tracking here if needed
    })
  })
})

// ===================================
// Utility Functions
// ===================================

// Debounce function for scroll events
function debounce(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// Check if element is in viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect()
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
}

// ===================================
// Browser Compatibility Check
// ===================================
if (!window.IntersectionObserver) {
  console.warn("IntersectionObserver not supported. Some animations may not work.")
}

if (!("scrollBehavior" in document.documentElement.style)) {
  console.warn("Smooth scrolling not supported. Falling back to instant scroll.")
}
