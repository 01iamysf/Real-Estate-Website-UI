/* ============================================================
   Site Manager — admin.js
   Edits the whole site from a form UI and saves it.
   ============================================================ */

(function () {
  "use strict";

  var STORAGE_KEY = "meridian_site_config";

  /* ---------- Helpers ---------- */
  function clone(obj) {
    return JSON.parse(JSON.stringify(obj));
  }

  function getPath(obj, path) {
    return path.split(".").reduce(function (o, key) {
      return o == null ? undefined : o[key];
    }, obj);
  }

  function setPath(obj, path, value) {
    var parts = path.split(".");
    var o = obj;
    for (var i = 0; i < parts.length - 1; i++) {
      o = o[parts[i]];
    }
    o[parts[parts.length - 1]] = value;
  }

  function merge(base, extra) {
    var out = {};
    Object.keys(base).forEach(function (key) {
      out[key] = extra && extra[key] !== undefined ? extra[key] : base[key];
    });
    return out;
  }

  /* ---------- State ---------- */
  var defaults = window.SITE_CONFIG || {};
  var saved = null;
  try {
    saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
  } catch (e) {
    saved = null;
  }
  var state = clone(merge(defaults, saved || {}));

  /* ---------- Toast ---------- */
  var toastEl = document.getElementById("toast");
  var toastTimer;

  function toast(message, isError) {
    toastEl.textContent = message;
    toastEl.classList.add("is-visible");
    toastEl.classList.toggle("toast--error", !!isError);
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      toastEl.classList.remove("is-visible");
    }, 3000);
  }

  /* ---------- Render lists ---------- */
  function renderNavList() {
    var host = document.getElementById("navList");
    host.innerHTML = state.nav
      .map(function (item, i) {
        return (
          '<div class="list__item">' +
          '<div class="list__item-head">' +
          '<span class="list__item-title">Menu item ' +
          (i + 1) +
          "</span>" +
          '<button type="button" class="list__remove" data-remove="nav.' +
          i +
          '">Remove</button>' +
          "</div>" +
          '<div class="list__grid">' +
          '<div class="field"><label class="field__label">Label</label>' +
          '<input class="field__input" type="text" data-bind="nav.' +
          i +
          '.label" /></div>' +
          '<div class="field"><label class="field__label">Link</label>' +
          '<input class="field__input" type="text" data-bind="nav.' +
          i +
          '.href" /></div>' +
          "</div>" +
          '<label class="check-row"><input type="checkbox" data-bind="nav.' +
          i +
          '.cta" /> Highlight as button</label>' +
          "</div>"
        );
      })
      .join("");
  }

  function renderPropertiesList() {
    var host = document.getElementById("propertiesList");
    host.innerHTML = state.properties.items
      .map(function (item, i) {
        return (
          '<div class="list__item">' +
          '<div class="list__item-head">' +
          '<span class="list__item-title">' +
          (item.name || "Property") +
          "</span>" +
          '<button type="button" class="list__remove" data-remove="properties.items.' +
          i +
          '">Remove</button>' +
          "</div>" +
          '<div class="list__grid">' +
          '<div class="field"><label class="field__label">Name</label>' +
          '<input class="field__input" type="text" data-bind="properties.items.' +
          i +
          '.name" /></div>' +
          '<div class="field"><label class="field__label">Location</label>' +
          '<input class="field__input" type="text" data-bind="properties.items.' +
          i +
          '.location" /></div>' +
          '<div class="field"><label class="field__label">Price</label>' +
          '<input class="field__input" type="text" data-bind="properties.items.' +
          i +
          '.price" /></div>' +
          '<div class="field"><label class="field__label">Status badge</label>' +
          '<input class="field__input" type="text" data-bind="properties.items.' +
          i +
          '.status" /></div>' +
          "</div>" +
          '<div class="list__grid list__grid--tight">' +
          '<div class="field"><label class="field__label">Beds</label>' +
          '<input class="field__input" type="number" min="0" data-bind="properties.items.' +
          i +
          '.beds" /></div>' +
          '<div class="field"><label class="field__label">Baths</label>' +
          '<input class="field__input" type="number" min="0" data-bind="properties.items.' +
          i +
          '.baths" /></div>' +
          '<div class="field"><label class="field__label">Sq ft</label>' +
          '<input class="field__input" type="number" min="0" data-bind="properties.items.' +
          i +
          '.sqft" /></div>' +
          "</div>" +
          '<div class="field"><label class="field__label">Photo URL</label>' +
          '<input class="field__input" type="url" data-bind="properties.items.' +
          i +
          '.image" />' +
          '<img class="preview" data-preview="properties.items.' +
          i +
          '.image" alt="" /></div>' +
          '<div class="field"><label class="field__label">Photo description (alt text)</label>' +
          '<input class="field__input" type="text" data-bind="properties.items.' +
          i +
          '.alt" /></div>' +
          "</div>"
        );
      })
      .join("");
  }

  function renderStatsList() {
    var host = document.getElementById("statsList");
    host.innerHTML = state.stats
      .map(function (stat, i) {
        return (
          '<div class="list__item">' +
          '<div class="list__item-head">' +
          '<span class="list__item-title">Number ' +
          (i + 1) +
          "</span>" +
          '<button type="button" class="list__remove" data-remove="stats.' +
          i +
          '">Remove</button>' +
          "</div>" +
          '<div class="list__grid">' +
          '<div class="field"><label class="field__label">Number</label>' +
          '<input class="field__input" type="number" min="0" data-bind="stats.' +
          i +
          '.value" /></div>' +
          '<div class="field"><label class="field__label">Label</label>' +
          '<input class="field__input" type="text" data-bind="stats.' +
          i +
          '.label" /></div>' +
          "</div>" +
          "</div>"
        );
      })
      .join("");
  }

  function renderTestimonialsList() {
    var host = document.getElementById("testimonialsList");
    host.innerHTML = state.testimonials.items
      .map(function (item, i) {
        return (
          '<div class="list__item">' +
          '<div class="list__item-head">' +
          '<span class="list__item-title">Testimonial ' +
          (i + 1) +
          "</span>" +
          '<button type="button" class="list__remove" data-remove="testimonials.items.' +
          i +
          '">Remove</button>' +
          "</div>" +
          '<div class="field"><label class="field__label">Quote</label>' +
          '<textarea class="field__input" rows="2" data-bind="testimonials.items.' +
          i +
          '.quote"></textarea></div>' +
          '<div class="list__grid">' +
          '<div class="field"><label class="field__label">Name</label>' +
          '<input class="field__input" type="text" data-bind="testimonials.items.' +
          i +
          '.name" /></div>' +
          '<div class="field"><label class="field__label">Details</label>' +
          '<input class="field__input" type="text" data-bind="testimonials.items.' +
          i +
          '.role" /></div>' +
          "</div>" +
          '<label class="check-row"><input type="checkbox" data-bind="testimonials.items.' +
          i +
          '.alt" /> Show in the highlighted style</label>' +
          "</div>"
        );
      })
      .join("");
  }

  function renderColumns() {
    var host = document.getElementById("footerColumns");
    host.innerHTML = state.footer.columns
      .map(function (col, i) {
        var links = col.links
          .map(function (link, j) {
            return (
              '<div class="list__item">' +
              '<div class="list__item-head">' +
              '<span class="list__item-title">Link ' +
              (j + 1) +
              "</span>" +
              '<button type="button" class="list__remove" data-remove="footer.columns.' +
              i +
              ".links." +
              j +
              '">Remove</button>' +
              "</div>" +
              '<div class="list__grid">' +
              '<div class="field"><label class="field__label">Label</label>' +
              '<input class="field__input" type="text" data-bind="footer.columns.' +
              i +
              ".links." +
              j +
              '.label" /></div>' +
              '<div class="field"><label class="field__label">Link</label>' +
              '<input class="field__input" type="text" data-bind="footer.columns.' +
              i +
              ".links." +
              j +
              '.href" /></div>' +
              "</div>" +
              "</div>"
            );
          })
          .join("");

        var flat = col.flat
          .map(function (text, j) {
            return (
              '<div class="list__item">' +
              '<div class="list__item-head">' +
              '<span class="list__item-title">Plain text ' +
              (j + 1) +
              "</span>" +
              '<button type="button" class="list__remove" data-remove="footer.columns.' +
              i +
              ".flat." +
              j +
              '">Remove</button>' +
              "</div>" +
              '<div class="field"><label class="field__label">Text</label>' +
              '<input class="field__input" type="text" data-bind="footer.columns.' +
              i +
              ".flat." +
              j +
              '" /></div>' +
              "</div>"
            );
          })
          .join("");

        return (
          '<div class="list__item">' +
          '<div class="list__item-head">' +
          '<span class="list__item-title">Column ' +
          (i + 1) +
          "</span>" +
          '<button type="button" class="list__remove" data-remove="footer.columns.' +
          i +
          '">Remove column</button>' +
          "</div>" +
          '<div class="field"><label class="field__label">Column heading</label>' +
          '<input class="field__input" type="text" data-bind="footer.columns.' +
          i +
          '.heading" /></div>' +
          '<p class="panel__subtitle" style="font-size:.85rem;margin-top:1rem">Links</p>' +
          links +
          '<button type="button" class="btn btn--ghost btn--small" data-addlink="footer.columns.' +
          i +
          '.links">+ Add link</button>' +
          (flat
            ? '<p class="panel__subtitle" style="font-size:.85rem;margin-top:1rem">Plain text</p>' + flat
            : "") +
          '<button type="button" class="btn btn--ghost btn--small" data-addlink="footer.columns.' +
          i +
          '.flat">+ Add plain text</button>' +
          "</div>"
        );
      })
      .join("");
  }

  /* ---------- Bind static inputs from state ---------- */
  function bindAll() {
    var els = document.querySelectorAll("[data-bind]");
    els.forEach(function (el) {
      var value = getPath(state, el.getAttribute("data-bind"));
      if (el.type === "checkbox") {
        el.checked = !!value;
      } else {
        el.value = value == null ? "" : value;
      }
    });
  }

  function refreshPreviews() {
    var imgs = document.querySelectorAll("[data-preview]");
    imgs.forEach(function (img) {
      img.onerror = function () {
        img.classList.add("preview--hidden");
      };
      var url = getPath(state, img.getAttribute("data-preview"));
      if (url) {
        img.src = url;
        img.classList.remove("preview--hidden");
      } else {
        img.removeAttribute("src");
        img.classList.add("preview--hidden");
      }
    });
  }

  function render() {
    renderNavList();
    renderPropertiesList();
    renderStatsList();
    renderTestimonialsList();
    renderColumns();
    bindAll();
    refreshPreviews();
  }

  /* ---------- Add / remove ---------- */
  function addItem(key) {
    if (key === "nav") {
      state.nav.push({ href: "#properties", label: "New link" });
    } else if (key === "properties") {
      state.properties.items.push({
        name: "New property",
        location: "City, State",
        price: "$0",
        beds: 1,
        baths: 1,
        sqft: 1000,
        status: "New",
        image: "",
        alt: "Property photo"
      });
    } else if (key === "stats") {
      state.stats.push({ value: 0, label: "New number" });
    } else if (key === "testimonials") {
      state.testimonials.items.push({
        quote: "Write the client quote here…",
        name: "Client name",
        role: "Details about the purchase",
        alt: false
      });
    } else if (key === "columns") {
      state.footer.columns.push({
        heading: "New column",
        links: [{ href: "#", label: "Link" }],
        flat: []
      });
    }
    render();
  }

  function addLinkItem(path) {
    var arr = getPath(state, path);
    if (!arr) return;
    if (path.indexOf(".links") > -1) {
      arr.push({ href: "#", label: "New link" });
    } else {
      arr.push("New text");
    }
    render();
  }

  function removeItem(path) {
    var parts = path.split(".");
    var key = parts.pop();
    var arr = getPath(state, parts.join("."));
    if (Array.isArray(arr)) {
      arr.splice(parseInt(key, 10), 1);
      render();
    }
  }

  /* ---------- Save / export / import / reset ---------- */
  function save() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      toast("Saved. Open your site to see the changes.");
    } catch (e) {
      toast("Could not save — browser storage is full or disabled.", true);
    }
  }

  function download(name, content) {
    var blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    var a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = name;
    document.body.appendChild(a);
    a.click();
    setTimeout(function () {
      URL.revokeObjectURL(a.href);
      a.remove();
    }, 500);
  }

  function exportConfig() {
    var json = JSON.stringify(state, null, 2);
    var content =
      "/* Exported from the Site Manager — replace config.js in your website folder with this file. */\n\n" +
      "window.SITE_CONFIG = " +
      json +
      ";\n";
    download("config.js", content);
    toast("config.js downloaded. Replace the one in your website folder to make it live.");
  }

  function applyImport(parsed) {
    if (!parsed || typeof parsed !== "object") {
      toast("That file doesn't look like a valid config.", true);
      return;
    }
    state = clone(merge(defaults, parsed));
    render();
    toast("Imported. Press Save to keep these changes.");
  }

  function reset() {
    if (!confirm("Reset everything back to the original defaults? This cannot be undone.")) {
      return;
    }
    localStorage.removeItem(STORAGE_KEY);
    state = clone(defaults);
    render();
    toast("Reset to the original defaults.");
  }

  /* ---------- Events ---------- */
  document.addEventListener("input", function (e) {
    var bind = e.target.getAttribute && e.target.getAttribute("data-bind");
    if (!bind || e.target.type === "checkbox") return;
    var value = e.target.value;
    if (e.target.type === "number") {
      value = parseFloat(value) || 0;
    }
    setPath(state, bind, value);
    refreshPreviews();
  });

  document.addEventListener("change", function (e) {
    var bind = e.target.getAttribute && e.target.getAttribute("data-bind");
    if (bind && e.target.type === "checkbox") {
      setPath(state, bind, e.target.checked);
    }
  });

  document.addEventListener("click", function (e) {
    var addBtn = e.target.closest("[data-add]");
    if (addBtn) {
      e.preventDefault();
      addItem(addBtn.getAttribute("data-add"));
      return;
    }
    var addLinkBtn = e.target.closest("[data-addlink]");
    if (addLinkBtn) {
      e.preventDefault();
      addLinkItem(addLinkBtn.getAttribute("data-addlink"));
      return;
    }
    var removeBtn = e.target.closest("[data-remove]");
    if (removeBtn) {
      e.preventDefault();
      removeItem(removeBtn.getAttribute("data-remove"));
    }
  });

  document.getElementById("btnSave").addEventListener("click", save);
  document.getElementById("btnExport").addEventListener("click", exportConfig);

  var fileInput = document.getElementById("fileImport");
  document.getElementById("btnImport").addEventListener("click", function () {
    fileInput.click();
  });
  fileInput.addEventListener("change", function () {
    var file = fileInput.files[0];
    if (!file) return;
    var reader = new FileReader();
    reader.onload = function () {
      var text = String(reader.result);
      var parsed;
      try {
        var trimmed = text.replace(/^\uFEFF/, "").trim();
        if (trimmed.charAt(0) === "{" || trimmed.charAt(0) === "[") {
          parsed = JSON.parse(trimmed);
        } else {
          var fn = new Function("window", trimmed + "\nreturn window.SITE_CONFIG;");
          parsed = fn({});
        }
      } catch (err) {
        toast("Could not read that file. Import a file exported from this manager.", true);
        return;
      }
      applyImport(parsed);
    };
    reader.readAsText(file);
    fileInput.value = "";
  });

  document.getElementById("btnReset").addEventListener("click", reset);

  /* ---------- Start ---------- */
  document.getElementById("adminTitle").textContent =
    "Site Manager — " + (state.brand ? state.brand.name : "Website");
  render();
})();
