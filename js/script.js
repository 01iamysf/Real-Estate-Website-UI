/* ============================================================
   Meridian & Co. — Interactivity
   ============================================================ */

(function () {
  "use strict";

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

  /* ---------- Contact form validation ---------- */
  var form = document.getElementById("contactForm");
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

  var success = document.getElementById("formSuccess");

  function validateField(name, showError) {
    var field = fields[name];
    var value = field.el.value;
    var error = field.validate(value);
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

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    success.classList.remove("is-visible");

    var valid = true;
    Object.keys(fields).forEach(function (name) {
      if (!validateField(name, true)) valid = false;
    });

    if (!valid) {
      var firstInvalid = form.querySelector(".is-invalid input, .is-invalid textarea");
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    form.reset();
    Object.keys(fields).forEach(function (name) {
      validateField(name, false);
    });
    success.classList.add("is-visible");
    success.scrollIntoView({ behavior: "smooth", block: "nearest" });
  });
})();
