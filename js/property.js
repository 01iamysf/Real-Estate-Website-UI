/* ============================================================
   Meridian & Co. — Property Detail Page Logic
   Reads ?id=<index> from URL and renders property from
   the shared properties array (cfg.properties.items).
   ============================================================ */

(function () {
  "use strict";

  /* ─── SHARED PROPERTY DATA ────────────────────────────────────
     Mirrors the items in script.js cfg.properties.items
     with additional fields: desc, rera, amenities, floorplan,
     lat, lng, nearby, and extra images.
  ─────────────────────────────────────────────────────────────── */
  var PROPERTIES = [
    {
      id: 0,
      name: "Villa Lumiere",
      location: "Gomti Nagar Extension, Lucknow",
      price: "₹12.5 Crores",
      priceNum: 12.5,
      beds: 6,
      baths: 8,
      sqft: 12400,
      status: "Signature",
      rera: "UPRERAPRJ12345",
      desc: "Villa Lumiere is a masterpiece of contemporary architecture set within lush curated gardens. Six en-suite bedrooms, a climate-controlled wine cellar, a full home theatre, and a resort-style infinity pool elevate this residence far above its peers. Designed for those who demand the finest without compromise — every finish is custom, every material sourced internationally.",
      amenities: ["Infinity Pool", "Home Theatre", "Wine Cellar", "4-Car Garage", "Smart Home Automation", "24/7 Security", "Landscaped Gardens", "Solar Power System", "Private Gym", "Staff Quarters", "Terrace Garden", "EV Charging"],
      lat: 26.8880,
      lng: 81.0020,
      nearby: [
        { icon: "🏫", label: "City Montessori School — 2.1 km" },
        { icon: "🏥", label: "Sahara Hospital — 3.5 km" },
        { icon: "🛍️", label: "Phoenix Palassio Mall — 1.8 km" },
        { icon: "✈️", label: "Lucknow Airport — 18 km" }
      ],
      images: [
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=85"
      ],
      floorplan: "https://images.unsplash.com/photo-1574691250077-03a929faece5?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 1,
      name: "The Meridian House",
      location: "Hazratganj, Lucknow",
      price: "₹8.9 Crores",
      priceNum: 8.9,
      beds: 5,
      baths: 6,
      sqft: 9200,
      status: "New",
      rera: "UPRERAPRJ56789",
      desc: "Nestled in the historic heart of Lucknow, The Meridian House is a refined five-bedroom residence that blends colonial architecture with modern interiors. The property features arched verandahs, original teakwood floors restored to perfection, and a private courtyard garden. Walking distance to fine dining, art galleries, and the iconic Hazratganj market.",
      amenities: ["Private Courtyard", "Restored Teakwood Floors", "Home Office", "3-Car Garage", "Smart Security", "Modular Kitchen", "Rooftop Terrace", "Staff Quarters", "Backup Generator", "Solar Water Heater"],
      lat: 26.8613,
      lng: 80.9230,
      nearby: [
        { icon: "🏛️", label: "Hazratganj Market — 0.3 km" },
        { icon: "🏥", label: "King George Medical University — 2.2 km" },
        { icon: "🏫", label: "La Martiniere College — 1.5 km" },
        { icon: "🍽️", label: "Tunday Kababi — 0.8 km" }
      ],
      images: [
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1400&q=85"
      ],
      floorplan: "https://images.unsplash.com/photo-1574691250077-03a929faece5?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 2,
      name: "Stone & Cedar Estate",
      location: "Mussoorie, Uttarakhand",
      price: "₹15.75 Crores",
      priceNum: 15.75,
      beds: 7,
      baths: 9,
      sqft: 14800,
      status: "Private",
      rera: "UKREAPRJ10023",
      desc: "Perched at 2,100 metres above sea level with unobstructed views of the Himalayan range, Stone & Cedar Estate is the pinnacle of mountain luxury. Seven suites dressed in hand-cut stone and reclaimed cedar, radiant floor heating throughout, and a sunken fire-pit terrace make this year-round retreat incomparable. Accessed via private gated driveway, this estate offers absolute seclusion.",
      amenities: ["Mountain View Terraces", "Heated Floors", "Sunken Fire Pit", "Private Driveway", "Helipad (Prep-ready)", "Home Theatre", "Chef's Kitchen", "4WD Garage", "Staff Quarters", "Vegetable Garden", "Meditation Pavilion", "Emergency Generator"],
      lat: 30.4598,
      lng: 78.0664,
      nearby: [
        { icon: "🌲", label: "Camel's Back Reserve Forest — 1.1 km" },
        { icon: "🛍️", label: "Mall Road Mussoorie — 2.5 km" },
        { icon: "🏥", label: "Community Health Centre — 3.8 km" },
        { icon: "✈️", label: "Jolly Grant Airport, Dehradun — 58 km" }
      ],
      images: [
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1400&q=85"
      ],
      floorplan: "https://images.unsplash.com/photo-1574691250077-03a929faece5?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 3,
      name: "Observatory Penthouse",
      location: "Sushant Golf City, Lucknow",
      price: "₹22.0 Crores",
      priceNum: 22.0,
      beds: 4,
      baths: 5,
      sqft: 7100,
      status: "Featured",
      rera: "UPRERAPRJ99001",
      desc: "Crowning the tallest tower in Sushant Golf City, the Observatory Penthouse offers 270-degree views over the Lucknow skyline and the lush fairways below. Four meticulously designed suites, a private rooftop observatory terrace, and double-height living ceilings create an atmosphere of quiet grandeur. A truly singular address.",
      amenities: ["Private Rooftop Terrace", "Golf Course View", "Double-Height Ceilings", "Private Elevator Foyer", "Home Automation", "Swimming Pool Access", "Concierge Service", "Valet Parking", "Wine Room", "Smart Security", "Gym Access", "EV Charging"],
      lat: 26.7606,
      lng: 81.0090,
      nearby: [
        { icon: "⛳", label: "Sushant Golf Course — 0.5 km" },
        { icon: "🏥", label: "Medanta Hospital — 4.2 km" },
        { icon: "🛍️", label: "DLF Mall of India — 6.5 km" },
        { icon: "✈️", label: "Lucknow Airport — 12 km" }
      ],
      images: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85"
      ],
      floorplan: "https://images.unsplash.com/photo-1574691250077-03a929faece5?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 4,
      name: "Serene Courtyard Home",
      location: "Kursi Road, Lucknow",
      price: "₹4.25 Crores",
      priceNum: 4.25,
      beds: 4,
      baths: 4,
      sqft: 5600,
      status: "New",
      rera: "UPRERAPRJ34521",
      desc: "A contemporary four-bedroom home wrapped around a private central courtyard. Natural light floods every room, and the landscaped inner garden creates an oasis of calm within the city. Built by an award-winning architect with sustainability at its core — solar panels, a rainwater harvesting system, and insulated walls maintain comfort year-round.",
      amenities: ["Central Courtyard Garden", "Solar Panels", "Rainwater Harvesting", "Modular Kitchen", "Home Office", "2-Car Garage", "Smart Security", "Terrace", "Study Room", "Staff Quarter"],
      lat: 26.9192,
      lng: 81.0470,
      nearby: [
        { icon: "🏫", label: "Integral University — 1.2 km" },
        { icon: "🏥", label: "Shekhar Hospital — 3.1 km" },
        { icon: "🛍️", label: "Kursi Road Market — 0.7 km" },
        { icon: "✈️", label: "Lucknow Airport — 22 km" }
      ],
      images: [
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1400&q=85"
      ],
      floorplan: "https://images.unsplash.com/photo-1574691250077-03a929faece5?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 5,
      name: "Glasshouse on the Bay",
      location: "Candolim, Goa",
      price: "₹19.8 Crores",
      priceNum: 19.8,
      beds: 5,
      baths: 7,
      sqft: 10300,
      status: "Signature",
      rera: "GOAREAPRJ78321",
      desc: "An architectural statement on the Candolim coastline — the Glasshouse on the Bay is defined by its floor-to-ceiling glass walls that dissolve the boundary between interior and ocean. Five suites, all with sea-facing balconies, a private infinity pool at the edge of the property, and a gourmet kitchen equipped for serious entertainers.",
      amenities: ["Beachfront Access", "Infinity Pool", "Ocean-View Suites", "Gourmet Kitchen", "Floor-to-Ceiling Glass", "Smart Home System", "4-Car Garage", "Staff Quarters", "Private Bar", "Yoga Pavilion", "Landscaped Gardens", "Solar Power"],
      lat: 15.5189,
      lng: 73.7640,
      nearby: [
        { icon: "🏖️", label: "Candolim Beach — 0.2 km" },
        { icon: "🍽️", label: "Fisherman's Wharf — 1.5 km" },
        { icon: "🏥", label: "Goa Medical College — 18 km" },
        { icon: "✈️", label: "Goa International Airport — 32 km" }
      ],
      images: [
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=85"
      ],
      floorplan: "https://images.unsplash.com/photo-1574691250077-03a929faece5?auto=format&fit=crop&w=1200&q=80"
    }
  ];

  /* ─── HELPERS ─────────────────────────────────────────────── */
  function qs(sel) { return document.querySelector(sel); }
  function fill(id, html) {
    var el = document.getElementById(id);
    if (el && html != null) el.innerHTML = html;
  }

  /* ─── GET PROPERTY FROM URL ───────────────────────────────── */
  var params = new URLSearchParams(window.location.search);
  var propId = parseInt(params.get("id"), 10);
  if (isNaN(propId) || propId < 0 || propId >= PROPERTIES.length) {
    propId = 0; // default to first property
  }
  var P = PROPERTIES[propId];

  /* ─── UPDATE PAGE TITLE & META ────────────────────────────── */
  document.title = P.name + " — Meridian & Co.";
  var ogTitle = document.getElementById("ogTitle");
  if (ogTitle) ogTitle.setAttribute("content", P.name + " — Meridian & Co.");

  /* ─── BREADCRUMB ──────────────────────────────────────────── */
  fill("breadcrumbName", P.name);

  /* ─── GALLERY ─────────────────────────────────────────────── */
  var galleryMain = document.getElementById("galleryMain");
  if (galleryMain) {
    galleryMain.src = P.images[0];
    galleryMain.alt = P.name;
  }

  var galleryThumbs = document.getElementById("galleryThumbs");
  var maxThumbs = 4;
  if (galleryThumbs) {
    P.images.slice(1, maxThumbs + 1).forEach(function (src, i) {
      var div = document.createElement("div");
      div.className = "gallery__thumb" + (i === maxThumbs - 1 && P.images.length > maxThumbs + 1 ? " gallery__thumb--more" : "");
      if (i === maxThumbs - 1 && P.images.length > maxThumbs + 1) {
        div.setAttribute("data-count", "+" + (P.images.length - maxThumbs));
      }
      var img = document.createElement("img");
      img.src = src;
      img.alt = P.name + " photo " + (i + 2);
      img.loading = "lazy";
      div.appendChild(img);
      div.addEventListener("click", function () { openLightbox(i + 1); });
      galleryThumbs.appendChild(div);
    });
  }

  // Main image click → lightbox
  if (galleryMain) {
    galleryMain.parentElement.addEventListener("click", function (e) {
      if (!e.target.closest(".gallery__expand")) {
        openLightbox(0);
      }
    });
  }

  document.getElementById("galleryExpandBtn").addEventListener("click", function () {
    openLightbox(0);
  });

  /* ─── PROPERTY HEAD ───────────────────────────────────────── */
  fill("propStatus", P.status);
  fill("propLoc", P.location);
  fill("propName", P.name);

  var priceEl = document.getElementById("propPrice");
  if (priceEl) {
    // Insert price text node before the button
    priceEl.insertAdjacentText("afterbegin", P.price + " ");
  }

  // Sidebar
  fill("sidebarName", P.name);
  fill("sidebarPrice", P.price);

  // Sidebar WhatsApp with property context
  var propWaBtn = document.getElementById("propWhatsAppBtn");
  if (propWaBtn) {
    var waMsg = encodeURIComponent("Hello Meridian & Co., I'm interested in " + P.name + " (" + P.location + ") priced at " + P.price + ". Please get in touch.");
    propWaBtn.href = "https://wa.me/915222890730?text=" + waMsg;
  }

  /* ─── KEY FACTS ───────────────────────────────────────────── */
  var facts = [
    { icon: "🛏", val: P.beds, key: "Bedrooms" },
    { icon: "🚿", val: P.baths, key: "Bathrooms" },
    { icon: "📐", val: P.sqft.toLocaleString("en-IN") + " sq ft", key: "Area" },
    { icon: "🏷", val: P.status, key: "Status" }
  ];
  var factsEl = document.getElementById("propFacts");
  if (factsEl) {
    facts.forEach(function (f) {
      var li = document.createElement("li");
      li.className = "prop-fact";
      li.innerHTML = '<span class="prop-fact__icon">' + f.icon + '</span>' +
        '<span class="prop-fact__val">' + f.val + '</span>' +
        '<span class="prop-fact__key">' + f.key + '</span>';
      factsEl.appendChild(li);
    });
  }

  /* ─── RERA ────────────────────────────────────────────────── */
  fill("propRera", P.rera || "Pending Registration");

  /* ─── DESCRIPTION ─────────────────────────────────────────── */
  fill("propDesc", P.desc);

  /* ─── AMENITIES ───────────────────────────────────────────── */
  var amenList = document.getElementById("propAmenities");
  if (amenList && P.amenities) {
    P.amenities.forEach(function (a) {
      var li = document.createElement("li");
      li.textContent = a;
      amenList.appendChild(li);
    });
  }

  /* ─── FLOOR PLAN ──────────────────────────────────────────── */
  var floorplanImg = document.getElementById("propFloorplan");
  if (floorplanImg && P.floorplan) {
    floorplanImg.src = P.floorplan;
    floorplanImg.alt = P.name + " floor plan";
  }

  /* ─── NEARBY ──────────────────────────────────────────────── */
  var nearbyEl = document.getElementById("propNearby");
  if (nearbyEl && P.nearby) {
    P.nearby.forEach(function (n) {
      var tag = document.createElement("span");
      tag.className = "nearby-tag";
      tag.innerHTML = '<span class="nearby-tag__icon">' + n.icon + '</span>' + n.label;
      nearbyEl.appendChild(tag);
    });
  }

  /* ─── LEAFLET MAP ─────────────────────────────────────────── */
  function initMap() {
    if (typeof L === "undefined") return;
    var map = L.map("propMap", {
      center: [P.lat, P.lng],
      zoom: 14,
      scrollWheelZoom: false,
      zoomControl: true
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 19
    }).addTo(map);

    // Custom marker
    var icon = L.divIcon({
      className: "",
      html: '<div style="background:' +
        '#17130c;color:#fbf8f1;width:40px;height:40px;display:flex;' +
        'align-items:center;justify-content:center;font-size:18px;' +
        'border-radius:50% 50% 50% 0;transform:rotate(-45deg);' +
        'box-shadow:0 4px 12px rgba(23,19,12,0.4);">' +
        '<span style="transform:rotate(45deg)">🏠</span></div>',
      iconSize: [40, 40],
      iconAnchor: [20, 40]
    });

    L.marker([P.lat, P.lng], { icon: icon })
      .addTo(map)
      .bindPopup(
        "<strong>" + P.name + "</strong><br>" +
        "<span style='font-size:0.82rem;color:#7c7467'>" + P.location + "</span>"
      )
      .openPopup();
  }

  // Init map after DOM ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initMap);
  } else {
    initMap();
  }

  /* ─── LIGHTBOX ────────────────────────────────────────────── */
  var lightbox = document.getElementById("lightbox");
  var lightboxImg = document.getElementById("lightboxImg");
  var lightboxCounter = document.getElementById("lightboxCounter");
  var lightboxStrip = document.getElementById("lightboxStrip");
  var currentLightboxIndex = 0;

  // Build strip thumbnails
  if (lightboxStrip) {
    P.images.forEach(function (src, i) {
      var img = document.createElement("img");
      img.src = src;
      img.alt = "Photo " + (i + 1);
      img.loading = "lazy";
      img.addEventListener("click", function () { goToLightbox(i); });
      lightboxStrip.appendChild(img);
    });
  }

  function openLightbox(index) {
    lightbox.hidden = false;
    document.body.style.overflow = "hidden";
    goToLightbox(index);
  }

  function closeLightbox() {
    lightbox.hidden = true;
    document.body.style.overflow = "";
  }

  function goToLightbox(index) {
    currentLightboxIndex = (index + P.images.length) % P.images.length;
    lightboxImg.src = P.images[currentLightboxIndex];
    lightboxImg.alt = P.name + " — photo " + (currentLightboxIndex + 1);
    if (lightboxCounter) lightboxCounter.textContent = (currentLightboxIndex + 1) + " / " + P.images.length;
    // Update strip active
    var strips = lightboxStrip.querySelectorAll("img");
    strips.forEach(function (img, i) {
      img.classList.toggle("is-active", i === currentLightboxIndex);
    });
  }

  document.getElementById("lightboxClose").addEventListener("click", closeLightbox);
  document.getElementById("lightboxPrev").addEventListener("click", function () { goToLightbox(currentLightboxIndex - 1); });
  document.getElementById("lightboxNext").addEventListener("click", function () { goToLightbox(currentLightboxIndex + 1); });

  // Keyboard navigation
  document.addEventListener("keydown", function (e) {
    if (lightbox.hidden) return;
    if (e.key === "ArrowLeft") goToLightbox(currentLightboxIndex - 1);
    if (e.key === "ArrowRight") goToLightbox(currentLightboxIndex + 1);
    if (e.key === "Escape") closeLightbox();
  });

  // Click outside image to close
  lightbox.addEventListener("click", function (e) {
    if (e.target === lightbox) closeLightbox();
  });

  /* ─── EMI CALCULATOR ──────────────────────────────────────── */
  var emiOverlay = document.getElementById("emiOverlay");
  var emiOpenBtn = document.getElementById("emiOpenBtn");
  var emiClose = document.getElementById("emiClose");
  var emiDownSlider = document.getElementById("emiDown");
  var emiRateSlider = document.getElementById("emiRate");
  var emiTenureSlider = document.getElementById("emiTenure");

  // Fill property price in modal
  fill("emiPropertyName", P.name + " · " + P.location);
  fill("emiPriceFixed", P.price);

  function croreToNum(str) {
    // Parse "₹12.5 Crores" → 12500000 (in lakhs, then to raw rupees)
    var match = str.match(/[\d.]+/);
    if (!match) return 0;
    return parseFloat(match[0]) * 1e7; // 1 crore = 10,000,000
  }

  function formatINR(n) {
    if (n >= 1e7) return "₹" + (n / 1e7).toFixed(2) + " Cr";
    if (n >= 1e5) return "₹" + (n / 1e5).toFixed(1) + " L";
    return "₹" + Math.round(n).toLocaleString("en-IN");
  }

  function calcEMI() {
    var totalPrice = croreToNum(P.price);
    var downPct = parseInt(emiDownSlider.value, 10) / 100;
    var loanAmt = totalPrice * (1 - downPct);
    var annualRate = parseFloat(emiRateSlider.value) / 100;
    var monthlyRate = annualRate / 12;
    var months = parseInt(emiTenureSlider.value, 10) * 12;

    var emi;
    if (monthlyRate === 0) {
      emi = loanAmt / months;
    } else {
      emi = (loanAmt * monthlyRate * Math.pow(1 + monthlyRate, months)) /
            (Math.pow(1 + monthlyRate, months) - 1);
    }

    var totalPayable = emi * months;
    var totalInterest = totalPayable - loanAmt;

    // Update display values
    document.getElementById("emiDownVal").textContent = emiDownSlider.value + "% (" + formatINR(totalPrice * downPct) + ")";
    document.getElementById("emiRateVal").textContent = parseFloat(emiRateSlider.value).toFixed(1) + "%";
    document.getElementById("emiTenureVal").textContent = emiTenureSlider.value + " years";
    fill("emiLoanAmt", formatINR(loanAmt));
    fill("emiMonthly", "₹" + Math.round(emi).toLocaleString("en-IN"));
    fill("emiTotalInterest", formatINR(totalInterest));
    fill("emiTotalPayable", formatINR(totalPayable));
  }

  function openEMI() {
    calcEMI();
    emiOverlay.hidden = false;
    document.body.style.overflow = "hidden";
  }

  function closeEMI() {
    emiOverlay.hidden = true;
    document.body.style.overflow = "";
  }

  if (emiOpenBtn) emiOpenBtn.addEventListener("click", openEMI);
  if (emiClose) emiClose.addEventListener("click", closeEMI);
  emiOverlay.addEventListener("click", function (e) { if (e.target === emiOverlay) closeEMI(); });

  [emiDownSlider, emiRateSlider, emiTenureSlider].forEach(function (slider) {
    if (slider) slider.addEventListener("input", calcEMI);
  });

  document.addEventListener("keydown", function (e) {
    if (!emiOverlay.hidden && e.key === "Escape") closeEMI();
  });

  /* ─── ENQUIRY FORM ────────────────────────────────────────── */
  var form = document.getElementById("propEnquiryForm");
  var formStatus = document.getElementById("propFormStatus");
  var formSubmit = document.getElementById("propFormSubmit");

  var formFields = {
    pName: {
      el: document.getElementById("pName"),
      validate: function (v) { return v.trim().length >= 2 ? "" : "Please enter your full name."; }
    },
    pEmail: {
      el: document.getElementById("pEmail"),
      validate: function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) ? "" : "Please enter a valid email."; }
    },
    pPhone: {
      el: document.getElementById("pPhone"),
      validate: function (v) { return v.trim().replace(/\D/g, "").length >= 7 ? "" : "Please enter a valid phone number."; }
    },
    pMsg: {
      el: document.getElementById("pMsg"),
      validate: function (v) { return v.trim().length >= 5 ? "" : "Please write a short message."; }
    }
  };

  function validateFormField(name, show) {
    var f = formFields[name];
    var err = f.validate(f.el.value);
    var errEl = form.querySelector('[data-error="' + name + '"]');
    var wrap = f.el.closest(".form__field");
    if (err && show) {
      wrap.classList.add("is-invalid");
      f.el.setAttribute("aria-invalid", "true");
    } else {
      wrap.classList.remove("is-invalid");
      f.el.removeAttribute("aria-invalid");
    }
    if (errEl) errEl.textContent = show ? err : "";
    return err === "";
  }

  Object.keys(formFields).forEach(function (name) {
    var f = formFields[name];
    f.el.addEventListener("blur", function () { validateFormField(name, true); });
    f.el.addEventListener("input", function () {
      if (f.el.closest(".form__field").classList.contains("is-invalid")) {
        validateFormField(name, true);
      }
    });
  });

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var valid = true;
      Object.keys(formFields).forEach(function (n) {
        if (!validateFormField(n, true)) valid = false;
      });
      if (!valid) return;

      formSubmit.disabled = true;
      formSubmit.textContent = "Sending…";

      // Demo mode: simulate submission
      setTimeout(function () {
        formSubmit.disabled = false;
        formSubmit.textContent = "Request Private Viewing";
        form.reset();
        Object.keys(formFields).forEach(function (n) { validateFormField(n, false); });
        if (formStatus) {
          formStatus.textContent = "Thank you. Your enquiry for " + P.name + " has been received. We'll be in touch within one business day.";
          formStatus.classList.add("is-visible");
          formStatus.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }
      }, 800);
    });
  }

  /* ─── MOBILE NAV TOGGLE ───────────────────────────────────── */
  var navToggle = document.getElementById("navToggle");
  var navLinks = document.getElementById("navLinks");
  if (navToggle && navLinks) {
    navToggle.addEventListener("click", function () {
      var open = navLinks.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(open));
    });
    navLinks.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navLinks.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ─── SCROLL REVEAL ───────────────────────────────────────── */
  if ("IntersectionObserver" in window) {
    var revealObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll(".reveal").forEach(function (el, i) {
      el.style.setProperty("--d", (i % 4) * 0.08 + "s");
      revealObs.observe(el);
    });
  } else {
    document.querySelectorAll(".reveal").forEach(function (el) {
      el.classList.add("is-visible");
    });
  }

  /* ─── FOOTER YEAR ─────────────────────────────────────────── */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

})();
