// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById("mobileMenuBtn")
const navLinks = document.getElementById("navLinks")

if (mobileMenuBtn && navLinks) {
  mobileMenuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active")
  })

  document.addEventListener("click", (e) => {
    if (!mobileMenuBtn.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove("active")
    }
  })
}

// Close mobile menu when clicking a link
const navLinkItems = document.querySelectorAll(".nav-link")
navLinkItems.forEach((link) => {
  link.addEventListener("click", () => {
    if (navLinks) {
      navLinks.classList.remove("active")
    }
  })
})

// Update current year in footer
const yearElement = document.getElementById("year")
if (yearElement) {
  yearElement.textContent = new Date().getFullYear()
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Add scroll effect to navigation
let lastScroll = 0
const nav = document.getElementById("nav")

if (nav) {
  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset

    if (currentScroll > 100) {
      nav.style.boxShadow = "var(--shadow)"
    } else {
      nav.style.boxShadow = "none"
    }

    lastScroll = currentScroll
  })
}

const faqQuestions = document.querySelectorAll(".faq-question")
if (faqQuestions.length > 0) {
  faqQuestions.forEach((question) => {
    question.addEventListener("click", () => {
      const faqItem = question.parentElement
      const isActive = faqItem.classList.contains("active")

      // Close all FAQ items
      document.querySelectorAll(".faq-item").forEach((item) => {
        item.classList.remove("active")
      })

      // Open clicked item if it wasn't active
      if (!isActive) {
        faqItem.classList.add("active")
      }
    })
  })
}

const contactForm = document.getElementById("contactForm")
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault()

    // Get form data
    const formData = {
      fullName: document.getElementById("fullName").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      services: document.getElementById("services").value,
      date: document.getElementById("date").value,
      message: document.getElementById("message")?.value || "",
    }

    console.log("Form submitted:", formData)

    // Show success message
    alert("Thank you for your message! We will get back to you within 24 hours.")

    // Reset form
    contactForm.reset()
  })
}

if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault()
      navLinks.classList.toggle("active")
    }
  })
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && navLinks && navLinks.classList.contains("active")) {
    navLinks.classList.remove("active")
  }
})
