// Venues page functionality
let currentPage = 1
const itemsPerPage = 12
let filteredVenues = []
let showingFavorites = false

document.addEventListener("DOMContentLoaded", () => {
  console.log("[v0] Venues page loaded")
  console.log("[v0] venuesData:", window.venuesData)
  console.log("[v0] currentLang:", window.currentLang)

  // Get URL parameters
  const urlParams = new URLSearchParams(window.location.search)
  const cityParam = urlParams.get("city")
  const categoryParam = urlParams.get("category")

  // Set filters from URL
  if (cityParam) {
    document.getElementById("cityFilter").value = cityParam
  }

  // Initialize
  window.updateFavoriteCount()
  applyFilters()

  // Search input
  const searchInput = document.getElementById("searchInput")
  searchInput.addEventListener("input", debounce(applyFilters, 300))

  // Filter selects
  document.getElementById("cityFilter").addEventListener("change", applyFilters)
  document.getElementById("capacityFilter").addEventListener("change", applyFilters)

  // Favorites button
  document.getElementById("favoritesBtn").addEventListener("click", function () {
    showingFavorites = !showingFavorites
    this.classList.toggle("active")
    applyFilters()
  })
})

function applyFilters() {
  console.log("[v0] Applying filters...")
  const searchTerm = document.getElementById("searchInput").value.toLowerCase()
  const cityFilter = document.getElementById("cityFilter").value
  const capacityFilter = document.getElementById("capacityFilter").value

  filteredVenues = window.venuesData.filter((venue) => {
    // Search filter
    const name = venue.name[window.currentLang].toLowerCase()
    const matchesSearch = name.includes(searchTerm) || venue.city.toLowerCase().includes(searchTerm)

    // City filter
    const matchesCity = !cityFilter || venue.city === cityFilter

    // Capacity filter
    let matchesCapacity = true
    if (capacityFilter) {
      if (capacityFilter === "0-100") {
        matchesCapacity = venue.capacity <= 100
      } else if (capacityFilter === "100-200") {
        matchesCapacity = venue.capacity > 100 && venue.capacity <= 200
      } else if (capacityFilter === "200-300") {
        matchesCapacity = venue.capacity > 200 && venue.capacity <= 300
      } else if (capacityFilter === "300+") {
        matchesCapacity = venue.capacity > 300
      }
    }

    // Favorites filter
    const matchesFavorites = !showingFavorites || window.isFavorite(venue.id)

    return matchesSearch && matchesCity && matchesCapacity && matchesFavorites
  })

  console.log("[v0] Filtered venues:", filteredVenues.length)
  currentPage = 1
  displayVenues()
  updatePagination()
}

function displayVenues() {
  const venuesGrid = document.getElementById("venuesGrid")
  const resultsCount = document.getElementById("resultsCount")

  resultsCount.textContent = filteredVenues.length

  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const venuesToShow = filteredVenues.slice(startIndex, endIndex)

  console.log("[v0] Displaying venues:", venuesToShow.length)
  venuesGrid.innerHTML = ""

  if (venuesToShow.length === 0) {
    venuesGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 40px;">No venues found</p>'
    return
  }

  venuesToShow.forEach((venue) => {
    const card = window.createVenueCard(venue)
    venuesGrid.appendChild(card)
  })
}

function updatePagination() {
  const pagination = document.getElementById("pagination")
  const totalPages = Math.ceil(filteredVenues.length / itemsPerPage)

  pagination.innerHTML = ""

  if (totalPages <= 1) return

  // Previous button
  const prevBtn = document.createElement("button")
  prevBtn.textContent = "←"
  prevBtn.disabled = currentPage === 1
  prevBtn.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--
      displayVenues()
      updatePagination()
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  })
  pagination.appendChild(prevBtn)

  // Page numbers
  for (let i = 1; i <= totalPages; i++) {
    if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
      const pageBtn = document.createElement("button")
      pageBtn.textContent = i
      pageBtn.classList.toggle("active", i === currentPage)
      pageBtn.addEventListener("click", () => {
        currentPage = i
        displayVenues()
        updatePagination()
        window.scrollTo({ top: 0, behavior: "smooth" })
      })
      pagination.appendChild(pageBtn)
    } else if (i === currentPage - 2 || i === currentPage + 2) {
      const dots = document.createElement("span")
      dots.textContent = "..."
      dots.style.padding = "10px"
      pagination.appendChild(dots)
    }
  }

  // Next button
  const nextBtn = document.createElement("button")
  nextBtn.textContent = "→"
  nextBtn.disabled = currentPage === totalPages
  nextBtn.addEventListener("click", () => {
    if (currentPage < totalPages) {
      currentPage++
      displayVenues()
      updatePagination()
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  })
  pagination.appendChild(nextBtn)
}

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
