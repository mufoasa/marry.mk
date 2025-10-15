// Services page functionality
let filteredServices = []

document.addEventListener("DOMContentLoaded", () => {
  console.log("[v0] Services page loaded")
  console.log("[v0] Services data:", window.servicesData)
  console.log("[v0] Current language:", window.currentLang)

  filteredServices = [...window.servicesData]

  // Get URL parameters
  const urlParams = new URLSearchParams(window.location.search)
  const categoryParam = urlParams.get("category")

  // Set filters from URL
  if (categoryParam) {
    document.getElementById("categoryFilter").value = categoryParam
  }

  // Initialize
  applyServiceFilters()

  // Filter selects
  document.getElementById("categoryFilter").addEventListener("change", applyServiceFilters)
  document.getElementById("serviceCityFilter").addEventListener("change", applyServiceFilters)
})

function applyServiceFilters() {
  const categoryFilter = document.getElementById("categoryFilter").value
  const cityFilter = document.getElementById("serviceCityFilter").value

  filteredServices = window.servicesData.filter((service) => {
    const matchesCategory = !categoryFilter || service.category === categoryFilter
    const matchesCity = !cityFilter || service.city === cityFilter

    return matchesCategory && matchesCity
  })

  console.log("[v0] Filtered services:", filteredServices.length)
  displayServices()
}

function displayServices() {
  const servicesGrid = document.getElementById("servicesGrid")
  const servicesCount = document.getElementById("servicesCount")

  servicesCount.textContent = filteredServices.length
  servicesGrid.innerHTML = ""

  if (filteredServices.length === 0) {
    servicesGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 40px;">No services found</p>'
    return
  }

  filteredServices.forEach((service) => {
    const card = createServiceCard(service)
    servicesGrid.appendChild(card)
  })
}

function createServiceCard(service) {
  const card = document.createElement("div")
  card.className = "service-card"

  const name = typeof service.name === "object" ? service.name[window.currentLang] : service.name

  card.innerHTML = `
        <img src="${service.image}" alt="${name}" class="service-image" loading="lazy">
        <div class="service-info">
            <h3 class="service-name">${name}</h3>
            <span class="service-category">${service.category}</span>
            <p class="venue-location">📍 ${service.city}</p>
            <div class="service-contact">
                <p>📞 ${service.phone}</p>
                <p>📧 ${service.email}</p>
            </div>
        </div>
    `

  return card
}
