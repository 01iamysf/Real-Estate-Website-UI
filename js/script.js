/* ============================================================
   Meridian & Co. — Interactivity
   All content on the page is rendered from config.js.
   ============================================================ */

(function () {
  "use strict";

  var currentPage = 1;
  var itemsPerPage = 6;

  var cfg = {
    brand: {
      name: "Meridian & Co.",
      tagline: "Estate Brokerage"
    },
    nav: [
      { href: "#properties", label: "Properties" },
      { href: "lands.html", label: "Lands & Plots", cta: true },
      { href: "#about", label: "The Firm" },
      { href: "#testimonials", label: "Testimonials" },
      { href: "#contact", label: "Book a Tour", cta: true }
    ],
    hero: {
      overline: "Est. 1998 &nbsp;·&nbsp; Private Brokerage",
      title: "Homes Beyond<br />",
      titleEm: "Ordinary",
      lede: "Meridian &amp; Co. curates a private collection of extraordinary residences — matched to the people who will call them home.",
      primaryBtn: { href: "#properties", label: "Explore the Collection" },
      secondaryBtn: { href: "#contact", label: "Speak with an Advisor" },
      meta: "Current Portfolio — 48 residences",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=80"
    },
    properties: {
      overline: "01 — The Collection",
      title: "Featured Properties",
      note: "Six residences, curated from six thousand. Each one vetted, each one singular.",
      items: [
        {
          name: "Villa Lumiere",
          location: "Gomti Nagar Extension, Lucknow",
          price: "₹12.5 Crores",
          beds: 6,
          baths: 8,
          sqft: 12400,
          status: "Signature",
          image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
          alt: "Villa Lumiere exterior with pool"
        },
        {
          name: "The Meridian House",
          location: "Hazratganj, Lucknow",
          price: "₹8.9 Crores",
          beds: 5,
          baths: 6,
          sqft: 9200,
          status: "New",
          image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
          alt: "The Meridian House"
        },
        {
          name: "Stone & Cedar Estate",
          location: "Mussoorie, Uttarakhand",
          price: "₹15.75 Crores",
          beds: 7,
          baths: 9,
          sqft: 14800,
          status: "Private",
          image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
          alt: "Stone and Cedar Estate in the mountains"
        },
        {
          name: "Observatory Penthouse",
          location: "Sushant Golf City, Lucknow",
          price: "₹22.0 Crores",
          beds: 4,
          baths: 5,
          sqft: 7100,
          status: "Featured",
          image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
          alt: "Observatory Penthouse interior"
        },
        {
          name: "Serene Courtyard Home",
          location: "Kursi Road, Lucknow",
          price: "₹4.25 Crores",
          beds: 4,
          baths: 4,
          sqft: 5600,
          status: "New",
          image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
          alt: "Serene Courtyard Home"
        },
        {
          name: "Glasshouse on the Bay",
          location: "Candolim, Goa",
          price: "₹19.8 Crores",
          beds: 5,
          baths: 7,
          sqft: 10300,
          status: "Signature",
          image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
          alt: "Glasshouse on the Bay"
        },
        {
          name: "The Grand Horizon Penthouse",
          location: "Gomti Nagar, Lucknow",
          price: "₹7.5 Crores",
          beds: 4,
          baths: 4,
          sqft: 4800,
          status: "Featured",
          image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
          alt: "The Grand Horizon Penthouse"
        },
        {
          name: "Whispering Pines Cabin",
          location: "Nainital, Uttarakhand",
          price: "₹3.8 Crores",
          beds: 3,
          baths: 3,
          sqft: 3200,
          status: "New",
          image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
          alt: "Whispering Pines Cabin"
        },
        {
          name: "Royal Heritage Manor",
          location: "Hazratganj, Lucknow",
          price: "₹18.2 Crores",
          beds: 5,
          baths: 6,
          sqft: 9800,
          status: "Signature",
          image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80",
          alt: "Royal Heritage Manor"
        },
        {
          name: "The Palm Villa",
          location: "Calangute, Goa",
          price: "₹14.5 Crores",
          beds: 5,
          baths: 5,
          sqft: 8500,
          status: "Private",
          image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
          alt: "The Palm Villa"
        },
        {
          name: "Golf View Mansion",
          location: "Sushant Golf City, Lucknow",
          price: "₹11.2 Crores",
          beds: 4,
          baths: 5,
          sqft: 6700,
          status: "Featured",
          image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
          alt: "Golf View Mansion"
        },
        {
          name: "Misty Heights Estate",
          location: "Mussoorie, Uttarakhand",
          price: "₹24.5 Crores",
          beds: 6,
          baths: 7,
          sqft: 11200,
          status: "Signature",
          image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
          alt: "Misty Heights Estate"
        }
      ]
    },
    stats: [
      { value: 27, label: "Years of Practice" },
      { value: 1400, label: "Homes Placed" },
      { value: 98, label: "Percent Client Satisfaction" },
      { value: 41, label: "Industry Awards" }
    ],
    about: {
      overline: "02 — The Firm",
      title: "A quieter way<br />to buy a <em>home</em>.",
      body: "For over a quarter century, Meridian &amp; Co. has represented a deliberately small number of residences and clients. No volume. No noise. Only discretion, taste, and a standard we refuse to compromise.",
      quote: "The finest homes are never listed. They are spoken of.",
      button: "Meet Our Advisors",
      image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80",
      caption: "The drawing room at Villa Lumiere, our 2019 Collection."
    },
    testimonials: {
      overline: "03 — In Their Words",
      title: "Testimonials",
      items: [
        {
          quote: "They understood the house before we did. Three showings, one signature — and a home we will keep for a lifetime.",
          name: "Eleanor & Marcus Hale",
          role: "Purchased · Villa Lumiere, Gomti Nagar"
        },
        {
          quote: "Discreet, exacting, and entirely without pressure. Meridian turned a daunting search into a pleasure.",
          name: "James Whitfield",
          role: "Purchased · Observatory Penthouse, Sushant Golf City",
          alt: true
        },
        {
          quote: "They sold our family estate for a sum we considered impossible — quietly, and on our timetable.",
          name: "The Cavendish Family",
          role: "Sold · The Meridian House, Hazratganj"
        }
      ]
    },
    contact: {
      overline: "04 — Enquiries",
      title: "Begin the conversation",
      note: "All enquiries are treated with complete discretion.",
      phone: "+91 522 2890730",
      phoneHref: "tel:+915222890730",
      email: "contact@meridianandco.in",
      address: ["Kursi Road, Dasauli", "Lucknow, Uttar Pradesh 226026"],
      hours: "Monday — Saturday · 9am to 6pm",
      form: {
        endpoint: "",
        emailjs: {
          serviceId: "",
          templateId: "",
          publicKey: ""
        },
        subjectPrefix: "New enquiry from website",
        successMessage: "Thank you. Your enquiry has been received — our advisors will be in touch within one business day."
      }
    },
    footer: {
      note: "Cultivating exceptional homes and the people who live in them since 1998.",
      columns: [
        {
          heading: "Explore",
          links: [
            { href: "#properties", label: "The Collection" },
            { href: "lands.html", label: "Lands & Plots" },
            { href: "#about", label: "The Firm" },
            { href: "#testimonials", label: "Testimonials" },
            { href: "#contact", label: "Book a Tour" }
          ]
        },
        {
          heading: "Contact",
          links: [
            { href: "tel:+915222890730", label: "+91 522 2890730" },
            { href: "mailto:contact@meridianandco.in", label: "contact@meridianandco.in" }
          ],
          flat: ["Kursi Road, Dasauli, Lucknow"]
        }
      ]
    }
  };

  /* ---------- Small helpers ---------- */
  function makeEl(tag, className, html) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (html != null) node.innerHTML = html;
    return node;
  }

  function fill(id, content) {
    var node = document.getElementById(id);
    if (node && content != null) node.innerHTML = content;
  }

  function renderLink(tag, className, text, href) {
    var a = makeEl(tag, className, text);
    a.href = href;
    return a;
  }

  /* ---------- Filter properties function ---------- */
  function renderFilteredProperties() {
    // 1. Get the values that the user typed or selected in the filters
    var searchEl = document.getElementById("filterSearch");
    var locEl = document.getElementById("filterLocation");
    var bedsEl = document.getElementById("filterBeds");
    var priceEl = document.getElementById("filterPrice");
    var sortEl = document.getElementById("sortOrder");

    var searchVal = searchEl ? searchEl.value.toLowerCase().trim() : "";
    var locVal = locEl ? locEl.value : "all";
    var bedsVal = bedsEl ? bedsEl.value : "all";
    var priceVal = priceEl ? priceEl.value : "all";
    var sortVal = sortEl ? sortEl.value : "default";

    // Toggle reset button visibility
    var resetBtn = document.getElementById("btnResetFilters");
    if (resetBtn) {
      var hasActiveFilters = (
        searchVal !== "" ||
        locVal !== "all" ||
        bedsVal !== "all" ||
        priceVal !== "all" ||
        sortVal !== "default"
      );
      if (hasActiveFilters) {
        resetBtn.style.display = "inline-block";
      } else {
        resetBtn.style.display = "none";
      }
    }

    // 2. Filter properties based on user options
    var items = (cfg.properties && cfg.properties.items) || [];
    var filtered = items.filter(function (item) {
      // Search Box Filter
      if (searchVal) {
        var nameMatch = item.name.toLowerCase().indexOf(searchVal) > -1;
        var locMatch = item.location.toLowerCase().indexOf(searchVal) > -1;
        if (nameMatch === false && locMatch === false) {
          return false;
        }
      }
      // Location Filter
      if (locVal !== "all") {
        var locLower = item.location.toLowerCase();
        if (locLower.indexOf(locVal) === -1) {
          return false;
        }
      }
      // Beds Filter
      if (bedsVal !== "all") {
        var minBeds = parseInt(bedsVal, 10);
        if (item.beds < minBeds) {
          return false;
        }
      }
      // Price Filter
      if (priceVal !== "all") {
        var numericPrice = parseFloat(item.price.replace(/[^\d.]/g, ""));
        if (priceVal === "under10") {
          if (numericPrice >= 10) return false;
        } else if (priceVal === "10to20") {
          if (numericPrice < 10 || numericPrice > 20) return false;
        } else if (priceVal === "above20") {
          if (numericPrice <= 20) return false;
        }
      }
      return true;
    });

    // 3. Sort properties
    if (sortVal === "price-asc") {
      filtered.sort(function (a, b) {
        var priceA = parseFloat(a.price.replace(/[^\d.]/g, ""));
        var priceB = parseFloat(b.price.replace(/[^\d.]/g, ""));
        return priceA - priceB;
      });
    } else if (sortVal === "price-desc") {
      filtered.sort(function (a, b) {
        var priceA = parseFloat(a.price.replace(/[^\d.]/g, ""));
        var priceB = parseFloat(b.price.replace(/[^\d.]/g, ""));
        return priceB - priceA;
      });
    }

    // 4. Calculate total pages (6 items per page)
    var totalPages = Math.ceil(filtered.length / itemsPerPage);
    if (totalPages < 1) {
      totalPages = 1;
    }

    // Make sure current page is within boundaries
    if (currentPage > totalPages) {
      currentPage = totalPages;
    }
    if (currentPage < 1) {
      currentPage = 1;
    }

    // 5. Get the properties for the current page only
    var startIndex = (currentPage - 1) * itemsPerPage;
    var endIndex = startIndex + itemsPerPage;
    var pageItems = filtered.slice(startIndex, endIndex);

    // 6. Draw properties to the screen
    var grid = document.getElementById("propertiesGrid");
    if (!grid) return;
    grid.innerHTML = "";

    if (pageItems.length === 0) {
      var emptyMsg = makeEl("div", "properties__empty", "No properties match your current filters.");
      grid.appendChild(emptyMsg);
      
      // Clear pagination buttons if no items
      var paginationContainer = document.getElementById("propertiesPagination");
      if (paginationContainer) {
        paginationContainer.innerHTML = "";
      }
      return;
    }

    pageItems.forEach(function (item, i) {
      var card = makeEl("article", "card reveal");
      card.innerHTML =
        '<figure class="card__media">' +
        '<img src="' + item.image + '" alt="' + item.alt + '" loading="lazy" />' +
        '<span class="card__status">' + item.status + "</span>" +
        "</figure>" +
        '<div class="card__body">' +
        '<p class="card__loc">' + item.location + "</p>" +
        '<h3 class="card__name">' + item.name + "</h3>" +
        '<p class="card__price">' + item.price + "</p>" +
        '<ul class="card__facts">' +
        "<li>" + item.beds + " Beds</li>" +
        "<li>" + item.baths + " Baths</li>" +
        "<li>" + item.sqft.toLocaleString("en-US") + " sq ft</li>" +
        "</ul>" +
        '<a href="#contact" class="card__link">Request private viewing</a>' +
        "</div>";
      grid.appendChild(card);
      
      // Staggered reveal animation
      card.style.setProperty("--d", (i % 6) * 0.05 + "s");
      setTimeout(function () {
        card.classList.add("is-visible");
      }, 50);
    });

    // 7. Draw Pagination buttons (Prev, Page 1 of 2, Next)
    var paginationContainer = document.getElementById("propertiesPagination");
    if (paginationContainer) {
      if (filtered.length <= itemsPerPage) {
        // If all items fit on one page, we don't need buttons
        paginationContainer.innerHTML = "";
      } else {
        paginationContainer.innerHTML =
          '<button type="button" id="btnPrevPage" class="pagination__btn pagination__btn--prev"' + (currentPage === 1 ? ' disabled' : '') + '>' +
            '<span class="pagination__arrow">←</span> Previous Collection' +
          '</button>' +
          '<span class="pagination__info">' + currentPage + ' &nbsp;/&nbsp; ' + totalPages + '</span>' +
          '<button type="button" id="btnNextPage" class="pagination__btn pagination__btn--next"' + (currentPage === totalPages ? ' disabled' : '') + '>' +
            'Next Collection <span class="pagination__arrow">→</span>' +
          '</button>';

        // Get buttons and add clicks
        var prevBtn = document.getElementById("btnPrevPage");
        var nextBtn = document.getElementById("btnNextPage");

        if (prevBtn) {
          prevBtn.addEventListener("click", function () {
            currentPage--;
            renderFilteredProperties();
            var section = document.getElementById("properties");
            if (section) section.scrollIntoView({ behavior: "smooth" });
          });
        }

        if (nextBtn) {
          nextBtn.addEventListener("click", function () {
            currentPage++;
            renderFilteredProperties();
            var section = document.getElementById("properties");
            if (section) section.scrollIntoView({ behavior: "smooth" });
          });
        }
      }
    }
  }

  function setupFilters() {
    var searchInput = document.getElementById("filterSearch");
    var locSelect = document.getElementById("filterLocation");
    var bedsSelect = document.getElementById("filterBeds");
    var priceSelect = document.getElementById("filterPrice");
    var sortSelect = document.getElementById("sortOrder");
    var resetBtn = document.getElementById("btnResetFilters");

    // Helper: resets page back to 1 and runs the filter code
    function handleFilterChange() {
      currentPage = 1;
      renderFilteredProperties();
    }

    if (searchInput) searchInput.addEventListener("input", handleFilterChange);
    if (locSelect) locSelect.addEventListener("change", handleFilterChange);
    if (bedsSelect) bedsSelect.addEventListener("change", handleFilterChange);
    if (priceSelect) priceSelect.addEventListener("change", handleFilterChange);
    if (sortSelect) sortSelect.addEventListener("change", handleFilterChange);

    if (resetBtn) {
      resetBtn.addEventListener("click", function () {
        if (searchInput) searchInput.value = "";
        if (locSelect) locSelect.value = "all";
        if (bedsSelect) bedsSelect.value = "all";
        if (priceSelect) priceSelect.value = "all";
        if (sortSelect) sortSelect.value = "default";
        currentPage = 1;
        renderFilteredProperties();
      });
    }
  }

  /* ---------- Render site from config ---------- */
  function renderSite() {
    if (!cfg.brand) return;

    /* Brand */
    fill("brandName", cfg.brand.name);
    fill("brandTag", cfg.brand.tagline);
    fill("footerBrandName", cfg.brand.name);
    fill("footerBrandTag", cfg.brand.tagline);
    fill("footerBrandBase", cfg.brand.name);
    document.title = cfg.brand.name + " — " + cfg.brand.tagline;

    /* Nav */
    var navLinks = document.getElementById("navLinks");
    if (navLinks && cfg.nav) {
      cfg.nav.forEach(function (link) {
        var cls = "nav__link" + (link.cta ? " nav__link--cta" : "");
        navLinks.appendChild(renderLink("a", cls, link.label, link.href));
      });
    }

    /* Hero */
    if (cfg.hero) {
      var hero = cfg.hero;
      fill("heroOverline", hero.overline);
      var heroTitle = document.getElementById("heroTitle");
      if (heroTitle) heroTitle.innerHTML = hero.title + "<em>" + hero.titleEm + "</em>";
      fill("heroLede", hero.lede);
      fill("heroMeta", hero.meta);
      var heroImg = document.getElementById("heroImage");
      if (heroImg) heroImg.src = hero.image;
      var heroActions = document.getElementById("heroActions");
      if (heroActions && hero.primaryBtn) {
        heroActions.appendChild(
          renderLink("a", "btn btn--solid", hero.primaryBtn.label, hero.primaryBtn.href)
        );
        if (hero.secondaryBtn) {
          heroActions.appendChild(
            renderLink("a", "btn btn--ghost", hero.secondaryBtn.label, hero.secondaryBtn.href)
          );
        }
      }
    }

    /* Properties */
    if (cfg.properties) {
      var p = cfg.properties;
      fill("propertiesOverline", p.overline);
      fill("propertiesTitle", p.title);
      fill("propertiesNote", p.note);
      renderFilteredProperties();
      setupFilters();
    }

    /* Stats */
    var statsGrid = document.getElementById("statsGrid");
    if (statsGrid && cfg.stats) {
      cfg.stats.forEach(function (stat) {
        var div = makeEl("div", "stat reveal");
        div.innerHTML =
          '<span class="stat__num" data-count="' + stat.value + '">0</span>' +
          '<span class="stat__label">' + stat.label + "</span>";
        statsGrid.appendChild(div);
      });
    }

    /* About */
    if (cfg.about) {
      var ab = cfg.about;
      fill("aboutOverline", ab.overline);
      fill("aboutTitle", ab.title);
      fill("aboutBody", ab.body);
      fill("aboutQuote", "\u201C" + ab.quote + "\u201D");
      fill("aboutCaption", ab.caption);
      var aboutImg = document.getElementById("aboutImage");
      if (aboutImg) {
        aboutImg.src = ab.image;
        aboutImg.alt = ab.caption;
      }
      var aboutActions = document.getElementById("aboutActions");
      if (aboutActions && ab.button) {
        aboutActions.appendChild(renderLink("a", "btn btn--solid", ab.button, "#contact"));
      }
    }

    /* Testimonials */
    if (cfg.testimonials) {
      var t = cfg.testimonials;
      fill("testimonialsOverline", t.overline);
      fill("testimonialsTitle", t.title);
      var tg = document.getElementById("testimonialsGrid");
      if (tg) {
        (t.items || []).forEach(function (item) {
          var fig = makeEl(
            "figure",
            "testimonial" + (item.alt ? " testimonial--alt" : "") + " reveal"
          );
          fig.innerHTML =
            '<blockquote class="testimonial__quote">' + item.quote + "</blockquote>" +
            '<figcaption class="testimonial__author">' +
            '<span class="testimonial__name">' + item.name + "</span>" +
            '<span class="testimonial__role">' + item.role + "</span>" +
            "</figcaption>";
          tg.appendChild(fig);
        });
      }
    }

    /* Contact */
    if (cfg.contact) {
      var c = cfg.contact;
      fill("contactOverline", c.overline);
      fill("contactTitle", c.title);
      fill("contactNote", c.note);
      fill("contactHours", c.hours);
      var phone = document.getElementById("contactPhone");
      if (phone) {
        phone.textContent = c.phone;
        phone.href = c.phoneHref || "tel:" + c.phone.replace(/\s/g, "");
      }
      var email = document.getElementById("contactEmail");
      if (email) {
        email.textContent = c.email;
        email.href = "mailto:" + c.email;
      }
      var address = document.getElementById("contactAddress");
      if (address) address.innerHTML = c.address.join("<br />");
      if (c.form && c.form.successMessage) {
        fill("formStatus", c.form.successMessage);
      }
    }

    /* Footer columns */
    var columns = document.getElementById("footerColumns");
    if (columns && cfg.footer) {
      (cfg.footer.columns || []).forEach(function (col) {
        var div = makeEl("div", "footer__col");
        var html = '<h4 class="footer__heading">' + col.heading + "</h4>";
        (col.links || []).forEach(function (link) {
          html +=
            '<a href="' + link.href + '" class="footer__link">' + link.label + "</a>";
        });
        (col.flat || []).forEach(function (text) {
          html += '<span class="footer__link footer__link--flat">' + text + "</span>";
        });
        div.innerHTML = html;
        columns.appendChild(div);
      });
    }
  }

  renderSite();

  /* ---------- Footer year ---------- */
  document.getElementById("year").textContent = String(new Date().getFullYear());

  /* ---------- Navbar scroll state ---------- */
  var navbar = document.getElementById("navbar");
  var onScroll = function () { 
    navbar.classList.toggle("nav--scrolled", window.scrollY > 40);
  }; 
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------- Mobile menu ---------- */
  var toggle = document.getElementById("navToggle");
  var links = document.getElementById("navLinks");

  toggle.addEventListener("click", function () {
    var open = links.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
  });

  links.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      links.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });

  /* ---------- Scroll reveal ---------- */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
    revealEls.forEach(function (el, i) {
      el.style.setProperty("--d", (i % 6) * 0.08 + "s");
      revealObserver.observe(el);
    });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }

  /* ---------- Stat counters ---------- */
  var counters = document.querySelectorAll("[data-count]");
  var countObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        countObserver.unobserve(entry.target);
        animateCount(entry.target);
      });
    },
    { threshold: 0.5 }
  );
  counters.forEach(function (el) {
    countObserver.observe(el);
  });

  function animateCount(el) {
    var target = parseInt(el.getAttribute("data-count"), 10);
    var duration = 1800;
    var start = null;

    function frame(ts) {
      if (!start) start = ts;
      var progress = Math.min((ts - start) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target).toLocaleString("en-US");
      if (progress < 1) {
        requestAnimationFrame(frame);
      }
    }
    requestAnimationFrame(frame);
  }

  /* ---------- Contact form validation + submission ---------- */
  var form = document.getElementById("contactForm");
  var status = document.getElementById("formStatus");
  var submitBtn = document.getElementById("formSubmit");
  var formCfg = (cfg.contact && cfg.contact.form) || {};

  var fields = {
    name: {
      el: document.getElementById("name"),
      validate: function (v) {
        return v.trim().length >= 2 ? "" : "Please enter your full name.";
      }
    },
    email: {
      el: document.getElementById("email"),
      validate: function (v) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim())
          ? ""
          : "Please enter a valid email address.";
      }
    },
    phone: {
      el: document.getElementById("phone"),
      validate: function (v) {
        return v.trim().replace(/\D/g, "").length >= 7
          ? ""
          : "Please enter a valid phone number.";
      }
    },
    message: {
      el: document.getElementById("message"),
      validate: function (v) {
        return v.trim().length >= 10
          ? ""
          : "Please write at least 10 characters.";
      }
    }
  };

  function setStatus(message, isError) {
    status.classList.remove("is-visible", "form__success--error");
    if (message) {
      status.textContent = message;
      status.classList.add("is-visible");
      if (isError) status.classList.add("form__success--error");
    }
  }

  function validateField(name, showError) {
    var field = fields[name];
    var error = field.validate(field.el.value);
    var errorEl = form.querySelector('[data-error="' + name + '"]');
    var wrap = field.el.closest(".form__field");

    if (error && showError) {
      wrap.classList.add("is-invalid");
      field.el.setAttribute("aria-invalid", "true");
    } else {
      wrap.classList.remove("is-invalid");
      field.el.removeAttribute("aria-invalid");
    }
    errorEl.textContent = showError ? error : "";
    return error === "";
  }

  Object.keys(fields).forEach(function (name) {
    var field = fields[name];
    field.el.addEventListener("blur", function () {
      validateField(name, true);
    });
    field.el.addEventListener("input", function () {
      if (field.el.closest(".form__field").classList.contains("is-invalid")) {
        validateField(name, true);
      }
    });
  });

  function loadEmailJS(callback) {
    if (window.emailjs) {
      callback();
      return;
    }
    var s = document.createElement("script");
    s.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
    s.onload = callback;
    s.onerror = function () {
      setStatus(
        "Sorry — there was a problem sending your message. Please try again, or contact us directly.",
        true
      );
      submitBtn.disabled = false;
      submitBtn.textContent = "Send Enquiry";
    };
    document.head.appendChild(s);
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    setStatus("");

    var valid = true;
    Object.keys(fields).forEach(function (name) {
      if (!validateField(name, true)) valid = false;
    });

    if (!valid) {
      var firstInvalid = form.querySelector(".is-invalid input, .is-invalid textarea");
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    var payload = {
      name: fields.name.el.value.trim(),
      email: fields.email.el.value.trim(),
      phone: fields.phone.el.value.trim(),
      message: fields.message.el.value.trim(),
      _subject: formCfg.subjectPrefix || "New enquiry from website"
    };

    var originalText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = "Sending…";

    function done(ok) {
      submitBtn.disabled = false;
      submitBtn.textContent = originalText;
      if (ok) {
        form.reset();
        Object.keys(fields).forEach(function (name) {
          validateField(name, false);
        });
        setStatus(
          formCfg.successMessage ||
            "Thank you. Your enquiry has been received — we will be in touch soon."
        );
        status.scrollIntoView({ behavior: "smooth", block: "nearest" });
      } else {
        setStatus(
          "Sorry — there was a problem sending your message. Please try again, or contact us directly.",
          true
        );
      }
    }

    /* Demo mode — no service configured yet */
    if (!formCfg.endpoint && !(formCfg.emailjs && formCfg.emailjs.publicKey)) {
      console.log("[Demo mode] Enquiry would be sent:", payload);
      setTimeout(function () {
        done(true);
      }, 600);
      return;
    }

    /* Option A — Formspree */
    if (formCfg.endpoint) {
      fetch(formCfg.endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(payload)
      })
        .then(function (res) {
          if (!res.ok) throw new Error("Request failed");
          return res.json();
        })
        .then(function () {
          done(true);
        })
        .catch(function () {
          done(false);
        });
      return;
    }

    /* Option B — EmailJS */
    if (formCfg.emailjs && formCfg.emailjs.publicKey) {
      var ej = formCfg.emailjs;
      loadEmailJS(function () {
        emailjs
          .init({ publicKey: ej.publicKey })
          .then(function () {
            return emailjs.send(ej.serviceId, ej.templateId, {
              from_name: payload.name,
              reply_to: payload.email,
              from_phone: payload.phone,
              message: payload.message,
              subject: payload._subject,
              to_name: (cfg.brand && cfg.brand.name) || ""
            });
          })
          .then(function () {
            done(true);
          })
          .catch(function () {
            done(false);
          });
      });
    }
  });
})();
