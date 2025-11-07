// Detail page functionality
let currentImageIndex = 0
let currentVenue = null

document.addEventListener("DOMContentLoaded", () => {
  console.log("[v0] Detail page loaded")
  console.log("[v0] venuesData:", window.venuesData)
  console.log("[v0] currentLang:", window.currentLang)

  const urlParams = new URLSearchParams(window.location.search)
  const venueId = urlParams.get("id")

  console.log("[v0] Venue ID from URL:", venueId)

  if (!venueId) {
    console.log("[v0] No venue ID, redirecting to venues page")
    window.location.href = "venues.html"
    return
  }

  currentVenue = window.venuesData.find((v) => v.id === venueId)

  console.log("[v0] Found venue:", currentVenue)

  if (!currentVenue) {
    console.log("[v0] Venue not found, redirecting to venues page")
    window.location.href = "venues.html"
    return
  }

  displayVenueDetails()
  initializeGallery()
  initializeMap()
  generateQRCode()

  // Favorite button
  const favoriteBtn = document.getElementById("favoriteBtn")
  updateFavoriteButton()

  favoriteBtn.addEventListener("click", () => {
    window.toggleFavorite(currentVenue.id)
    updateFavoriteButton()
    window.updateFavoriteCount()
  })

  // Inquiry form
  document.getElementById("inquiryForm").addEventListener("submit", function (e) {
    e.preventDefault()
    alert("Thank you for your inquiry! We will contact you soon.")
    this.reset()
  })
})

function displayVenueDetails() {
  document.getElementById("venueName").textContent = currentVenue.name[window.currentLang]
  document.getElementById("venueCity").textContent = currentVenue.city
  document.getElementById("venueDescription").textContent = currentVenue.description[window.currentLang]
  document.getElementById("venueCapacity").textContent = currentVenue.capacity
  document.getElementById("venueCategory").textContent = currentVenue.category
  document.getElementById("venueAddress").textContent = currentVenue.address
  document.getElementById("venuePhone").textContent = currentVenue.phone
  document.getElementById("venueEmail").textContent = currentVenue.email

  document.title = `${currentVenue.name[window.currentLang]} - Marry.mk`
}

function initializeGallery() {
  const gallery = currentVenue.gallery || [currentVenue.image]
  const mainImg = document.getElementById("mainImg")
  const thumbnailGallery = document.getElementById("thumbnailGallery")

  mainImg.src = gallery[0]
  mainImg.alt = currentVenue.name[window.currentLang]

  gallery.forEach((img, index) => {
    const thumbnail = document.createElement("img")
    thumbnail.src = img
    thumbnail.alt = `${currentVenue.name[window.currentLang]} - Image ${index + 1}`
    thumbnail.className = "thumbnail" + (index === 0 ? " active" : "")
    thumbnail.addEventListener("click", () => {
      currentImageIndex = index
      updateMainImage()
    })
    thumbnailGallery.appendChild(thumbnail)
  })

  document.getElementById("prevImg").addEventListener("click", () => {
    currentImageIndex = (currentImageIndex - 1 + gallery.length) % gallery.length
    updateMainImage()
  })

  document.getElementById("nextImg").addEventListener("click", () => {
    currentImageIndex = (currentImageIndex + 1) % gallery.length
    updateMainImage()
  })
}

function updateMainImage() {
  const gallery = currentVenue.gallery || [currentVenue.image]
  const mainImg = document.getElementById("mainImg")
  mainImg.src = gallery[currentImageIndex]
  mainImg.alt = `${currentVenue.name[window.currentLang]} - Image ${currentImageIndex + 1}`

  document.querySelectorAll(".thumbnail").forEach((thumb, index) => {
    thumb.classList.toggle("active", index === currentImageIndex)
  })
}

function updateFavoriteButton() {
  const favoriteBtn = document.getElementById("favoriteBtn")
  const isFav = window.isFavorite(currentVenue.id)

  favoriteBtn.classList.toggle("active", isFav)
  favoriteBtn.querySelector(".heart").textContent = isFav ? "♥" : "♡"

  const buttonText = favoriteBtn.querySelector("span:last-child")
  if (isFav) {
    buttonText.setAttribute("data-en", "Remove from Favorites")
    buttonText.setAttribute("data-sq", "Hiq nga Favoritët")
    buttonText.setAttribute("data-mk", "Отстрани од Омилени")
    buttonText.setAttribute("data-tr", "Favorilerden Çıkar")
  } else {
    buttonText.setAttribute("data-en", "Add to Favorites")
    buttonText.setAttribute("data-sq", "Shto në Favoritet")
    buttonText.setAttribute("data-mk", "Додај во Омилени")
    buttonText.setAttribute("data-tr", "Favorilere Ekle")
  }

  // Update the text with current language
  const translation = buttonText.getAttribute(`data-${window.currentLang}`)
  if (translation) {
    buttonText.textContent = translation
  }
}

function initializeMap() {
  const map = window.L.map("map").setView([currentVenue.lat || 41.9973, currentVenue.lng || 21.428], 15)

  window.L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors",
  }).addTo(map)

  window.L.marker([currentVenue.lat || 41.9973, currentVenue.lng || 21.428])
    .addTo(map)
    .bindPopup(currentVenue.name[window.currentLang])
    .openPopup()
}

function generateQRCode() {
  const canvas = document.getElementById("qrCanvas")
  const ctx = canvas.getContext("2d")
  const url = window.location.href

  // Simple QR code placeholder (in production, use a QR library like qrcode.js)
  canvas.width = 200
  canvas.height = 200
  ctx.fillStyle = "#ffffff"
  ctx.fillRect(0, 0, 200, 200)
  ctx.fillStyle = "#000000"
  ctx.font = "12px Arial"
  ctx.textAlign = "center"
  ctx.fillText("QR Code", 100, 90)
  ctx.fillText("Scan to share", 100, 110)

  // Draw simple pattern
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if (Math.random() > 0.5) {
        ctx.fillRect(20 + i * 16, 20 + j * 16, 14, 14)
      }
    }
  }
}
