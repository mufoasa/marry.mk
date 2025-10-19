// Language Management
let currentLang = localStorage.getItem("language") || "sq"

const langFlags = {
  en: "🇬🇧",
  sq: "🇦🇱",
  mk: "🇲🇰",
  tr: "🇹🇷",
}

const langCodes = {
  en: "EN",
  sq: "SQ",
  mk: "MK",
  tr: "TR",
}

function updateLanguage(lang) {
  currentLang = lang
  localStorage.setItem("language", lang)

  // Update language button
  const langBtn = document.getElementById("langBtn")
  if (langBtn) {
    langBtn.querySelector(".flag").textContent = langFlags[lang]
    langBtn.querySelector(".lang-text").textContent = langCodes[lang]
  }

  // Update all translatable elements
  document.querySelectorAll("[data-en]").forEach((element) => {
    const translation = element.getAttribute(`data-${lang}`)
    if (translation) {
      element.textContent = translation
    }
  })

  // Update placeholders
  document.querySelectorAll("[data-en-placeholder]").forEach((element) => {
    const translation = element.getAttribute(`data-${lang}-placeholder`)
    if (translation) {
      element.placeholder = translation
    }
  })
}

// Initialize language on page load
document.addEventListener("DOMContentLoaded", () => {
  updateLanguage(currentLang)

  // Language dropdown toggle
  const langBtn = document.getElementById("langBtn")
  const langDropdown = document.getElementById("langDropdown")

  if (langBtn && langDropdown) {
    langBtn.addEventListener("click", (e) => {
      e.stopPropagation()
      langDropdown.classList.toggle("active")
    })

    // Language selection
    langDropdown.querySelectorAll("button").forEach((button) => {
      button.addEventListener("click", function () {
        const lang = this.getAttribute("data-lang")
        updateLanguage(lang)
        langDropdown.classList.remove("active")
      })
    })

    // Close dropdown when clicking outside
    document.addEventListener("click", () => {
      langDropdown.classList.remove("active")
    })
  }

  // Hamburger menu
  const hamburger = document.getElementById("hamburger")
  const nav = document.getElementById("nav")

  if (hamburger && nav) {
    hamburger.addEventListener("click", () => {
      nav.classList.toggle("active")
    })
  }

  // Sticky header
  const header = document.getElementById("header")
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      header.classList.add("scrolled")
    } else {
      header.classList.remove("scrolled")
    }
  })

  // Scroll to top button
  const scrollTop = document.getElementById("scrollTop")
  if (scrollTop) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        scrollTop.classList.add("visible")
      } else {
        scrollTop.classList.remove("visible")
      }
    })

    scrollTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    })
  }

  // Hero search button
  const heroSearchBtn = document.getElementById("heroSearchBtn")
  const heroCity = document.getElementById("heroCity")

  if (heroSearchBtn && heroCity) {
    heroSearchBtn.addEventListener("click", () => {
      const city = heroCity.value
      if (city) {
        window.location.href = `venues.html?city=${city}`
      } else {
        window.location.href = "venues.html"
      }
    })
  }
})

// Helper function to create venue cards
function createVenueCard(venue) {
  const card = document.createElement("a")
  card.href = `detail.html?id=${venue.id}`
  card.className = "venue-card"

  const name = typeof venue.name === "object" ? venue.name[currentLang] : venue.name

  card.innerHTML = `
        <img src="${venue.image}" alt="${name}" class="venue-image" loading="lazy">
        <div class="venue-info">
            <h3 class="venue-name">${name}</h3>
            <p class="venue-location">📍 ${venue.city}</p>
            <div class="venue-details">
                <span class="venue-capacity">${venue.capacity} ${getTranslation("guests")}</span>
                <span class="btn-primary" style="padding: 8px 16px; font-size: 14px;">${getTranslation("viewDetails")}</span>
            </div>
        </div>
    `

  return card
}

// Helper function to get translations
function getTranslation(key) {
  const translations = {
    guests: {
      en: "guests",
      sq: "mysafirë",
      mk: "гости",
      tr: "misafir",
    },
    viewDetails: {
      en: "View Details",
      sq: "Shiko Detajet",
      mk: "Погледни Детали",
      tr: "Detayları Görüntüle",
    },
  }

  return translations[key] ? translations[key][currentLang] : key
}

// Favorites Management
function getFavorites() {
  return JSON.parse(localStorage.getItem("favorites") || "[]")
}

function saveFavorites(favorites) {
  localStorage.setItem("favorites", JSON.stringify(favorites))
}

function toggleFavorite(venueId) {
  const favorites = getFavorites()
  const index = favorites.indexOf(venueId)

  if (index > -1) {
    favorites.splice(index, 1)
  } else {
    favorites.push(venueId)
  }

  saveFavorites(favorites)
  return favorites.includes(venueId)
}

function isFavorite(venueId) {
  return getFavorites().includes(venueId)
}

function updateFavoriteCount() {
  const favCount = document.getElementById("favCount")
  if (favCount) {
    favCount.textContent = getFavorites().length
  }
}

window.currentLang = currentLang
window.updateLanguage = updateLanguage
window.createVenueCard = createVenueCard
window.getTranslation = getTranslation
window.getFavorites = getFavorites
window.saveFavorites = saveFavorites
window.toggleFavorite = toggleFavorite
window.isFavorite = isFavorite
window.updateFavoriteCount = updateFavoriteCount
