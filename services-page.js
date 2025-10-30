// Services page functionality
let filteredServices = []
let currentServicePage = 1
const servicesPerPage = 12

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
  currentServicePage = 1
  displayServices()
  updateServicePagination()
}

function displayServices() {
  const servicesGrid = document.getElementById("servicesGrid")
  const servicesCount = document.getElementById("servicesCount")

  servicesCount.textContent = filteredServices.length
  servicesGrid.innerHTML = ""

  if (filteredServices.length === 0) {
    servicesGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 40px;">No services found</p>'
    document.getElementById("servicePagination").innerHTML = ""
    return
  }

  const startIndex = (currentServicePage - 1) * servicesPerPage
  const endIndex = startIndex + servicesPerPage
  const servicesToShow = filteredServices.slice(startIndex, endIndex)

  servicesToShow.forEach((service) => {
    const card = createServiceCard(service)
    servicesGrid.appendChild(card)
  })
}

function updateServicePagination() {
  const pagination = document.getElementById("servicePagination")
  const totalPages = Math.ceil(filteredServices.length / servicesPerPage)

  pagination.innerHTML = ""

  if (totalPages <= 1) return

  // Previous button
  const prevBtn = document.createElement("button")
  prevBtn.textContent = "←"
  prevBtn.disabled = currentServicePage === 1
  prevBtn.addEventListener("click", () => {
    if (currentServicePage > 1) {
      currentServicePage--
      displayServices()
      updateServicePagination()
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  })
  pagination.appendChild(prevBtn)

  // Page numbers
  for (let i = 1; i <= totalPages; i++) {
    if (i === 1 || i === totalPages || (i >= currentServicePage - 1 && i <= currentServicePage + 1)) {
      const pageBtn = document.createElement("button")
      pageBtn.textContent = i
      pageBtn.classList.toggle("active", i === currentServicePage)
      pageBtn.addEventListener("click", () => {
        currentServicePage = i
        displayServices()
        updateServicePagination()
        window.scrollTo({ top: 0, behavior: "smooth" })
      })
      pagination.appendChild(pageBtn)
    } else if (i === currentServicePage - 2 || i === currentServicePage + 2) {
      const dots = document.createElement("span")
      dots.textContent = "..."
      dots.style.padding = "10px"
      pagination.appendChild(dots)
    }
  }

  // Next button
  const nextBtn = document.createElement("button")
  nextBtn.textContent = "→"
  nextBtn.disabled = currentServicePage === totalPages
  nextBtn.addEventListener("click", () => {
    if (currentServicePage < totalPages) {
      currentServicePage++
      displayServices()
      updateServicePagination()
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  })
  pagination.appendChild(nextBtn)
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
