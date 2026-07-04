(function () {
  "use strict";

  var prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  /* ---------------- Typewriter ---------------- */
  var roles = [
    "Mechatronics Engineer",
    "Automation Systems Engineer",
    "Computer Vision Engineer",
    "Robotics Controls Engineer",
    "Fullstack Robotics Engineer",
    "Robotics Systems Engineer"
  ];

  var TYPE_SPEED = 70; // ms per char while typing
  var DELETE_SPEED = 40; // ms per char while deleting
  var PAUSE_AFTER_WORD = 1400; // ms pause once a word is fully typed

  function initTypewriter() {
    var el = document.getElementById("typewriter-text");
    if (!el) return;

    if (prefersReducedMotion) {
      el.textContent = roles[roles.length - 1];
      return;
    }

    var roleIndex = 0;
    var charIndex = 0;
    var deleting = false;

    function tick() {
      var current = roles[roleIndex];

      if (!deleting) {
        charIndex++;
        el.textContent = current.slice(0, charIndex);

        if (charIndex === current.length) {
          deleting = true;
          window.setTimeout(tick, PAUSE_AFTER_WORD);
          return;
        }
        window.setTimeout(tick, TYPE_SPEED);
      } else {
        charIndex--;
        el.textContent = current.slice(0, charIndex);

        if (charIndex === 0) {
          deleting = false;
          roleIndex = (roleIndex + 1) % roles.length;
          window.setTimeout(tick, TYPE_SPEED);
          return;
        }
        window.setTimeout(tick, DELETE_SPEED);
      }
    }

    window.setTimeout(tick, TYPE_SPEED);
  }

  /* ---------------- Mobile nav toggle ---------------- */
  function initNavToggle() {
    var toggle = document.querySelector(".nav-toggle");
    var links = document.querySelector(".nav-links");
    if (!toggle || !links) return;

    toggle.addEventListener("click", function () {
      var isOpen = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    links.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------------- Scroll-spy active nav link ---------------- */
  function initScrollSpy() {
    var sections = Array.prototype.slice.call(
      document.querySelectorAll("main section[id]")
    );
    var navLinks = Array.prototype.slice.call(
      document.querySelectorAll(".nav-links a")
    );
    if (!sections.length || !navLinks.length || !("IntersectionObserver" in window)) {
      return;
    }

    var byId = {};
    navLinks.forEach(function (link) {
      var id = link.getAttribute("href").replace("#", "");
      byId[id] = link;
    });

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          var link = byId[entry.target.id];
          if (!link) return;
          if (entry.isIntersecting) {
            navLinks.forEach(function (l) {
              l.classList.remove("active");
            });
            link.classList.add("active");
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach(function (section) {
      observer.observe(section);
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initTypewriter();
    initNavToggle();
    initScrollSpy();
  });
})();
