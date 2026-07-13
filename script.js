/* ===== Tenute Arena — script ===== */
(function () {
  "use strict";

  /* Anno corrente nel footer */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* Menu mobile */
  var toggle = document.getElementById("nav-toggle");
  var nav = document.getElementById("main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* Reveal on scroll */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* Switch lingua IT / EN */
  var buttons = document.querySelectorAll(".lang-switch button");
  function setLang(lang) {
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-" + lang + "]").forEach(function (el) {
      var val = el.getAttribute("data-" + lang);
      if (val !== null) el.textContent = val;
    });
    buttons.forEach(function (b) {
      b.classList.toggle("is-active", b.getAttribute("data-lang") === lang);
    });
    try { localStorage.setItem("ta-lang", lang); } catch (e) {}
  }
  buttons.forEach(function (b) {
    b.addEventListener("click", function () { setLang(b.getAttribute("data-lang")); });
  });
  var saved;
  try { saved = localStorage.getItem("ta-lang"); } catch (e) {}
  if (saved === "en") setLang("en");

  /* Form contatti → apre client email precompilato */
  window.handleContact = function (e) {
    e.preventDefault();
    var f = e.target;
    var lang = document.documentElement.lang === "en" ? "en" : "it";
    var subject = lang === "en"
      ? "Website request — " + (f.name.value || "")
      : "Richiesta dal sito — " + (f.name.value || "");
    var body =
      (lang === "en" ? "Name: " : "Nome: ") + f.name.value + "\n" +
      "Email: " + f.email.value + "\n\n" +
      f.message.value;
    window.location.href =
      "mailto:info@tenutaarena.com" +
      "?subject=" + encodeURIComponent(subject) +
      "&body=" + encodeURIComponent(body);
    return false;
  };
})();
