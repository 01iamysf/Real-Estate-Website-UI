/* ============================================================
   Meridian & Co. — Interactivity
   All content on the page is rendered from config.js.
   ============================================================ */

(function () {
  "use strict";

  var cfg = window.SITE_CONFIG || {};

  /* Prefer settings saved through the Site Manager (admin.html) */
  var savedCfg = null;
  try {
    savedCfg = JSON.parse(localStorage.getItem("meridian_site_config"));
  } catch (e) {
    savedCfg = null;
  }
  if (savedCfg) {
    var mergedCfg = {};
    Object.keys(cfg).forEach(function (key) {
      mergedCfg[key] = savedCfg[key] !== undefined ? savedCfg[key] : cfg[key];
    });
    cfg = mergedCfg;
  }

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
      var grid = document.getElementById("propertiesGrid");
      if (grid) {
        (p.items || []).forEach(function (item) {
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
        });
      }
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
