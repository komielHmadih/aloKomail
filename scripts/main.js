// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger')
  const navMenu = document.getElementById('nav-menu')

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active')
      hamburger.classList.toggle('active')
    })
  }

  // Close mobile menu when clicking on a link
  document.querySelectorAll('.nav-menu a').forEach((link) => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active')
      hamburger.classList.remove('active')
    })
  })
})

// Scroll animations
document.addEventListener('DOMContentLoaded', () => {
  const revealElements = document.querySelectorAll(
    '.category-item, .footer-section'
  )

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active')
        }
      })
    },
    {
      threshold: 0.1,
    }
  )

  revealElements.forEach((element) => {
    observer.observe(element)
  })
})
