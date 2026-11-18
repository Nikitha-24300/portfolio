/* ==========================================================
   Portfolio interactions
   - Mobile navigation menu
   - Active navigation highlighting
   - Scroll reveal (kept from the original, now using IntersectionObserver)
   No libraries required.
   ========================================================== */

(function () {
    "use strict";

    var header = document.querySelector(".site-header");
    var toggle = document.querySelector(".nav-toggle");
    var menu = document.getElementById("nav-menu");
    var links = menu ? Array.prototype.slice.call(menu.querySelectorAll("a[href^='#']")) : [];

    /* ---------- Mobile navigation ---------- */

    function setMenu(open) {
        if (!toggle || !menu) { return; }
        menu.classList.toggle("is-open", open);
        toggle.setAttribute("aria-expanded", open ? "true" : "false");
        toggle.setAttribute("aria-label", open ? "Close navigation menu" : "Open navigation menu");
    }

    if (toggle && menu) {
        toggle.addEventListener("click", function () {
            setMenu(toggle.getAttribute("aria-expanded") !== "true");
        });

        // Close after choosing a link
        links.forEach(function (link) {
            link.addEventListener("click", function () { setMenu(false); });
        });

        // Close with Escape and return focus to the button
        document.addEventListener("keydown", function (event) {
            if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
                setMenu(false);
                toggle.focus();
            }
        });

        // Close when clicking outside the header
        document.addEventListener("click", function (event) {
            if (header && !header.contains(event.target)) { setMenu(false); }
        });

        // Reset when the layout switches back to the desktop navigation
        if (window.matchMedia) {
            var desktop = window.matchMedia("(min-width: 1041px)");
            var onChange = function (event) { if (event.matches) { setMenu(false); } };
            if (desktop.addEventListener) { desktop.addEventListener("change", onChange); }
            else if (desktop.addListener) { desktop.addListener(onChange); }
        }
    }

    /* ---------- Active navigation highlighting ---------- */

    var sections = links
        .map(function (link) { return document.querySelector(link.getAttribute("href")); })
        .filter(Boolean);

    function setActive(id) {
        links.forEach(function (link) {
            var active = link.getAttribute("href") === "#" + id;
            link.classList.toggle("is-active", active);
            if (active) { link.setAttribute("aria-current", "location"); }
            else { link.removeAttribute("aria-current"); }
        });
    }

    if ("IntersectionObserver" in window && sections.length) {
        var spy = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) { setActive(entry.target.id); }
            });
        }, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });

        sections.forEach(function (section) { spy.observe(section); });

        // The last section is short, so also activate it when the page bottom is reached
        window.addEventListener("scroll", function () {
            var atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
            if (atBottom) { setActive(sections[sections.length - 1].id); }
        }, { passive: true });
    }

    /* ---------- Scroll reveal ---------- */

    var revealItems = document.querySelectorAll(".reveal");

    if ("IntersectionObserver" in window) {
        var reveal = new IntersectionObserver(function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });

        revealItems.forEach(function (item) { reveal.observe(item); });
    } else {
        // Older browsers: just show everything
        revealItems.forEach(function (item) { item.classList.add("is-visible"); });
    }
})();
