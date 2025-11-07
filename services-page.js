// Services page functionality
let currentPage = 1
const itemsPerPage = 12
let filteredServices = []
let showingFavorites = false

document.addEventListener("DOMContentLoaded", () => {
  console.log("[v0] Services page loaded")
  console.log("[v0] servicesData:", window.servicesData)
  console.log("[v0] currentLang:", window.currentLang)

  // Initialize
  window.updateFavoriteCount()
  applyFilters()

  // Filter selects
  document.getElementById("categoryFilter").addEventListener("change", applyFilters)
  document.getElementById("serviceCityFilter").addEventListener("change", applyFilters)

  // Favorites button
  document.getElementById("favoritesBtn") &&
    document.getElementById("favoritesBtn").addEventListener("click", function () {
      showingFavorites = !showingFavorites
      this.classList.toggle("active")
      applyFilters()
    })
})

function applyFilters() {
  console.log("[v0] Applying service filters...")
  const categoryFilter = document.getElementById("categoryFilter").value
  const cityFilter = document.getElementById("serviceCityFilter").value

  filteredServices = window.servicesData.filter((service) => {
    // Category filter
    const matchesCategory = !categoryFilter || service.category === categoryFilter

    // City filter
    const matchesCity = !cityFilter || service.city === cityFilter

    // Favorites filter
    const matchesFavorites = !showingFavorites || window.isFavorite(service.id)

    return matchesCategory && matchesCity && matchesFavorites
  })

  console.log("[v0] Filtered services:", filteredServices.length)
  currentPage = 1
  displayServices()
  updatePagination()
}

function displayServices() {
  const servicesGrid = document.getElementById("servicesGrid")
  const resultsCount = document.getElementById("servicesCount")

  resultsCount.textContent = filteredServices.length

  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const servicesToShow = filteredServices.slice(startIndex, endIndex)

  console.log("[v0] Displaying services:", servicesToShow.length)
  servicesGrid.innerHTML = ""

  if (servicesToShow.length === 0) {
    servicesGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 40px;">No services found</p>'
    return
  }

  servicesToShow.forEach((service) => {
    const card = window.createServiceCard(service)
    servicesGrid.appendChild(card)
  })
}

function updatePagination() {
  const pagination = document.getElementById("servicePagination")
  const totalPages = Math.ceil(filteredServices.length / itemsPerPage)

  pagination.innerHTML = ""

  if (totalPages <= 1) return

  // Previous button
  const prevBtn = document.createElement("button")
  prevBtn.textContent = "←"
  prevBtn.disabled = currentPage === 1
  prevBtn.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--
      displayServices()
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
        displayServices()
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
      displayServices()
      updatePagination()
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  })
  pagination.appendChild(nextBtn)
}
