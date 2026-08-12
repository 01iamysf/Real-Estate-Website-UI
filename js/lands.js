/* ============================================================
   Meridian & Co. — Lands & Plots Controller
   A clean, simple script to manage searching, filtering,
   sorting, and pagination for land listings.
   ============================================================ */

(function () {
  "use strict";

  // Pagination states
  var currentPage = 1;
  var itemsPerPage = 6;

  // The collection of Land & Plots (12 total items to test paging)
  var landCollection = [
    {
      name: "Green Valley Heights Plot",
      location: "Kursi Road, Lucknow",
      price: "₹35 Lakhs",
      sqft: 1500,
      type: "Residential",
      status: "Freehold",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
      alt: "Green valley residential plot"
    },
    {
      name: "Highway Junction Commercial Plot",
      location: "Gomti Nagar Extension, Lucknow",
      price: "₹3.2 Crores",
      sqft: 4500,
      type: "Commercial",
      status: "Corner Plot",
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
      alt: "Commercial plot near highway"
    },
    {
      name: "Valley View Apple Orchard",
      location: "Nainital, Uttarakhand",
      price: "₹1.4 Crores",
      sqft: 12000,
      type: "Agricultural",
      status: "Scenic View",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
      alt: "Valley agricultural land"
    },
    {
      name: "Candolim Beachside Villa Plot",
      location: "Candolim, Goa",
      price: "₹4.8 Crores",
      sqft: 6500,
      type: "Residential",
      status: "Premium",
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
      alt: "Beachside plot in Goa"
    },
    {
      name: "Royal Heritage Enclave",
      location: "Hazratganj, Lucknow",
      price: "₹1.9 Crores",
      sqft: 3200,
      type: "Residential",
      status: "Signature",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
      alt: "Hazratganj residential plot"
    },
    {
      name: "Misty Mountain Ridge Plot",
      location: "Mussoorie, Uttarakhand",
      price: "₹2.7 Crores",
      sqft: 8000,
      type: "Residential",
      status: "Freehold",
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
      alt: "Mountain view plot"
    },
    {
      name: "Shalimar Gateway Avenue Plot",
      location: "Gomti Nagar Extension, Lucknow",
      price: "₹95 Lakhs",
      sqft: 2400,
      type: "Residential",
      status: "New",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
      alt: "Shalimar luxury plot"
    },
    {
      name: "Hilltop Agricultural Meadow",
      location: "Dehradun, Uttarakhand",
      price: "₹48 Lakhs",
      sqft: 15000,
      type: "Agricultural",
      status: "Organic Soil",
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
      alt: "Dehradun agricultural farm land"
    },
    {
      name: "Calangute Market Commercial Space",
      location: "Calangute, Goa",
      price: "₹3.8 Crores",
      sqft: 5200,
      type: "Commercial",
      status: "Hot Deal",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
      alt: "Commercial plot Goa"
    },
    {
      name: "Kursi Road Industrial Yard",
      location: "Kursi Road, Lucknow",
      price: "₹1.1 Crores",
      sqft: 10000,
      type: "Commercial",
      status: "Industrial Zone",
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
      alt: "Kursi Road commercial plot"
    },
    {
      name: "Nainital Pine View Retreat",
      location: "Nainital, Uttarakhand",
      price: "₹85 Lakhs",
      sqft: 4000,
      type: "Residential",
      status: "Hillside",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
      alt: "Pine forest view land"
    },
    {
      name: "Mandovi Riverfront Estate Land",
      location: "Goa Velha, Goa",
      price: "₹5.5 Crores",
      sqft: 18000,
      type: "Residential",
      status: "Exclusive",
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
      alt: "Riverfront land Goa"
    }
  ];

  // Helper to create HTML elements easily
  function makeEl(tag, className, html) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (html != null) node.innerHTML = html;
    return node;
  }

  // Parses prices like "₹35 Lakhs" or "₹3.2 Crores" into a number for price filtering/sorting
  function parsePriceToNumber(priceString) {
    var cleanString = priceString.replace(/[^\d.]/g, ""); // removes symbols, keeps numbers and decimal
    var number = parseFloat(cleanString);
    
    // If it contains "Lakhs", multiply by 100,000 (0.01 Crores)
    if (priceString.indexOf("Lakhs") > -1) {
      return number * 0.01; // Scale to Crore units so comparision is equal
    }
    // If it contains "Crores", it is already in Crore units
    return number;
  }

  // Primary rendering function
  function renderFilteredLands() {
    var searchEl = document.getElementById("filterSearch");
    var locEl = document.getElementById("filterLocation");
    var typeEl = document.getElementById("filterType");
    var priceEl = document.getElementById("filterPrice");
    var sortEl = document.getElementById("sortOrder");

    var searchVal = searchEl ? searchEl.value.toLowerCase().trim() : "";
    var locVal = locEl ? locEl.value : "all";
    var typeVal = typeEl ? typeEl.value : "all";
    var priceVal = priceEl ? priceEl.value : "all";
    var sortVal = sortEl ? sortEl.value : "default";

    // Toggle reset button visibility
    var resetBtn = document.getElementById("btnResetFilters");
    if (resetBtn) {
      var hasActiveFilters = (
        searchVal !== "" ||
        locVal !== "all" ||
        typeVal !== "all" ||
        priceVal !== "all" ||
        sortVal !== "default"
      );
      if (hasActiveFilters) {
        resetBtn.style.display = "inline-block";
      } else {
        resetBtn.style.display = "none";
      }
    }

    // Filter array
    var filtered = landCollection.filter(function (item) {
      // 1. Search Query
      if (searchVal) {
        var nameMatch = item.name.toLowerCase().indexOf(searchVal) > -1;
        var locMatch = item.location.toLowerCase().indexOf(searchVal) > -1;
        if (nameMatch === false && locMatch === false) {
          return false;
        }
      }
      // 2. Location
      if (locVal !== "all") {
        if (item.location.toLowerCase().indexOf(locVal) === -1) {
          return false;
        }
      }
      // 3. Land Type
      if (typeVal !== "all") {
        if (item.type.toLowerCase() !== typeVal) {
          return false;
        }
      }
      // 4. Price Bracket
      if (priceVal !== "all") {
        var priceInCrores = parsePriceToNumber(item.price);
        if (priceVal === "under50") {
          // Under 50 Lakhs (which is 0.5 Crores)
          if (priceInCrores >= 0.5) return false;
        } else if (priceVal === "50to200") {
          // Between 50 Lakhs (0.5 Cr) and 2 Crores (2 Cr)
          if (priceInCrores < 0.5 || priceInCrores > 2.0) return false;
        } else if (priceVal === "above200") {
          // Above 2 Crores (2 Cr)
          if (priceInCrores <= 2.0) return false;
        }
      }
      return true;
    });

    // Sort order
    if (sortVal === "price-asc") {
      filtered.sort(function (a, b) {
        return parsePriceToNumber(a.price) - parsePriceToNumber(b.price);
      });
    } else if (sortVal === "price-desc") {
      filtered.sort(function (a, b) {
        return parsePriceToNumber(b.price) - parsePriceToNumber(a.price);
      });
    }

    // Pagination calculations
    var totalPages = Math.ceil(filtered.length / itemsPerPage);
    if (totalPages < 1) totalPages = 1;
    if (currentPage > totalPages) currentPage = totalPages;
    if (currentPage < 1) currentPage = 1;

    var startIndex = (currentPage - 1) * itemsPerPage;
    var endIndex = startIndex + itemsPerPage;
    var pageItems = filtered.slice(startIndex, endIndex);

    var grid = document.getElementById("landsGrid");
    if (!grid) return;
    grid.innerHTML = "";

    // Show empty message if nothing matches
    if (pageItems.length === 0) {
      var emptyMsg = makeEl("div", "properties__empty", "No plots match your current filters.");
      grid.appendChild(emptyMsg);
      
      var paginationContainer = document.getElementById("landsPagination");
      if (paginationContainer) paginationContainer.innerHTML = "";
      return;
    }

    // Render cards
    pageItems.forEach(function (item, i) {
      var card = makeEl("article", "card reveal");
      card.innerHTML =
        '<figure class="card__media">' +
        '<img src="' + item.image + '" alt="' + item.alt + '" loading="lazy" />' +
        '<span class="card__status">' + item.status + '</span>' +
        '</figure>' +
        '<div class="card__body">' +
        '<p class="card__loc">' + item.location + '</p>' +
        '<h3 class="card__name">' + item.name + '</h3>' +
        '<p class="card__price">' + item.price + '</p>' +
        '<ul class="card__facts">' +
        '<li>' + item.type + ' Plot</li>' +
        '<li>' + item.sqft.toLocaleString("en-IN") + ' Sq Ft</li>' +
        '</ul>' +
        '<a href="index.html#contact" class="card__link">Request private viewing</a>' +
        '</div>';
      grid.appendChild(card);

      // Staggered reveal animation
      card.style.setProperty("--d", (i % 6) * 0.05 + "s");
      setTimeout(function () {
        card.classList.add("is-visible");
      }, 50);
    });

    // Render Pagination elements
    var paginationContainer = document.getElementById("landsPagination");
    if (paginationContainer) {
      if (filtered.length <= itemsPerPage) {
        paginationContainer.innerHTML = "";
      } else {
        paginationContainer.innerHTML =
          '<button type="button" id="btnPrevPage" class="pagination__btn pagination__btn--prev"' + (currentPage === 1 ? ' disabled' : '') + '>' +
            '<span class="pagination__arrow">←</span> Previous plots' +
          '</button>' +
          '<span class="pagination__info">' + currentPage + ' &nbsp;/&nbsp; ' + totalPages + '</span>' +
          '<button type="button" id="btnNextPage" class="pagination__btn pagination__btn--next"' + (currentPage === totalPages ? ' disabled' : '') + '>' +
            'Next plots <span class="pagination__arrow">→</span>' +
          '</button>';

        var prevBtn = document.getElementById("btnPrevPage");
        var nextBtn = document.getElementById("btnNextPage");

        if (prevBtn) {
          prevBtn.addEventListener("click", function () {
            currentPage--;
            renderFilteredLands();
            var section = document.getElementById("landsSection");
            if (section) section.scrollIntoView({ behavior: "smooth" });
          });
        }
        if (nextBtn) {
          nextBtn.addEventListener("click", function () {
            currentPage++;
            renderFilteredLands();
            var section = document.getElementById("landsSection");
            if (section) section.scrollIntoView({ behavior: "smooth" });
          });
        }
      }
    }
  }

  // Attaches event listeners
  function setupLandFilters() {
    var searchInput = document.getElementById("filterSearch");
    var locSelect = document.getElementById("filterLocation");
    var typeSelect = document.getElementById("filterType");
    var priceSelect = document.getElementById("filterPrice");
    var sortSelect = document.getElementById("sortOrder");
    var resetBtn = document.getElementById("btnResetFilters");

    function handleFilterChange() {
      currentPage = 1;
      renderFilteredLands();
    }

    if (searchInput) searchInput.addEventListener("input", handleFilterChange);
    if (locSelect) locSelect.addEventListener("change", handleFilterChange);
    if (typeSelect) typeSelect.addEventListener("change", handleFilterChange);
    if (priceSelect) priceSelect.addEventListener("change", handleFilterChange);
    if (sortSelect) sortSelect.addEventListener("change", handleFilterChange);

    if (resetBtn) {
      resetBtn.addEventListener("click", function () {
        if (searchInput) searchInput.value = "";
        if (locSelect) locSelect.value = "all";
        if (typeSelect) typeSelect.value = "all";
        if (priceSelect) priceSelect.value = "all";
        if (sortSelect) sortSelect.value = "default";
        currentPage = 1;
        renderFilteredLands();
      });
    }
  }

  // Footer year updater
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  // Parse URL parameters on page load for ad campaigns (e.g. ?location=goa)
  var urlParams = new URLSearchParams(window.location.search);
  var locationParam = urlParams.get('location');
  var typeParam = urlParams.get('type');

  if (locationParam) {
    var locSelect = document.getElementById("filterLocation");
    if (locSelect) {
      locSelect.value = locationParam;
    }
  }
  if (typeParam) {
    var typeSelect = document.getElementById("filterType");
    if (typeSelect) {
      typeSelect.value = typeParam;
    }
  }

  // Start executing rendering
  renderFilteredLands();
  setupLandFilters();

})();
