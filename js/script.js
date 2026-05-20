(function () {
  /* ── Unified scroll reveal ── */
  var els = document.querySelectorAll(".reveal");
  if (els.length) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e, i) {
          if (e.isIntersecting) {
            setTimeout(
              function () {
                e.target.classList.add("visible");
              },
              (i % 5) * 90,
            );
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 },
    );
    els.forEach(function (el) {
      io.observe(el);
    });
  }

  /* ── Mobile nav active state on scroll ── */
  var sections = [
    { id: "hero-sd", nav: "hero-sd" },
    { id: "visi-sd", nav: "visi-sd" },
    { id: "kurikulum-sd", nav: "kurikulum-sd" },
    { id: "bahasa-sd", nav: "bahasa-sd" },
    { id: "pendidik-sd", nav: "pendidik-sd" },
  ];
  var navItems = document.querySelectorAll(".mobile-nav-item");

  function setActive(sectionId) {
    navItems.forEach(function (item) {
      var ds = item.getAttribute("data-section");
      item.classList.toggle("active", ds === sectionId);
    });
  }

  function onScroll() {
    var scrollY = window.scrollY + window.innerHeight * 0.35;
    var current = sections[0].id;
    sections.forEach(function (s) {
      var el = document.getElementById(s.id);
      if (el && el.offsetTop <= scrollY) current = s.id;
    });
    setActive(current);
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();
