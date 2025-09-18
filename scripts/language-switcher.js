// Function to change language
async function changeLanguage(lang) {
  // Save language preference to localStorage
  localStorage.setItem('language', lang)

  // Update HTML lang attribute
  document.documentElement.lang = lang

  // Set direction for RTL languages
  if (lang === 'ar') {
    document.documentElement.dir = 'rtl'
    // Load Arabic-specific stylesheet
    loadStylesheet('styles/style-ar.css')
  } else {
    document.documentElement.dir = 'ltr'
    // Remove Arabic-specific stylesheet
    removeStylesheet('styles/style-ar.css')
  }

  // Fetch and apply translations
  await applyTranslations(lang)
}

// Function to load a stylesheet
function loadStylesheet(href) {
  // Check if the stylesheet is already loaded
  if (document.querySelector(`link[href="${href}"]`)) {
    return
  }

  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = href
  document.head.appendChild(link)
}

// Function to remove a stylesheet
function removeStylesheet(href) {
  const link = document.querySelector(`link[href="${href}"]`)
  if (link) {
    link.remove()
  }
}

// Function to fetch and apply translations
async function applyTranslations(lang) {
  try {
    const response = await fetch(`languages/${lang}.json`)
    const translations = await response.json()

    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach((element) => {
      const key = element.getAttribute('data-i18n')
      if (translations[key]) {
        // For input elements, update placeholder or value
        if (element.tagName === 'INPUT') {
          if (element.type === 'submit' || element.type === 'button') {
            element.value = translations[key]
          } else {
            element.placeholder = translations[key]
          }
        } else {
          element.textContent = translations[key]
        }
      }
    })
  } catch (error) {
    console.error('Error loading translations:', error)
  }
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
  const savedLanguage = localStorage.getItem('language') || 'en'
  changeLanguage(savedLanguage)
})
