/* Minimal nav toggle — no dependencies */
(function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".site-nav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", function () {
    var open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });

  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
})();

/* Contact form → mailto (no backend, no paid services) */
(function () {
  var form = document.getElementById("quote-form");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    var name = (form.elements.namedItem("name") || {}).value || "";
    var phone = (form.elements.namedItem("phone") || {}).value || "";
    var email = (form.elements.namedItem("email") || {}).value || "";
    var jobType = (form.elements.namedItem("jobType") || {}).value || "";
    var suburb = (form.elements.namedItem("suburb") || {}).value || "";
    var message = (form.elements.namedItem("message") || {}).value || "";

    var subject = "Quote enquiry — " + (suburb || jobType || "Sunshine Coast");
    var body = [
      "Name: " + name,
      "Phone: " + phone,
      "Email: " + email,
      "Job type: " + jobType,
      "Suburb / area: " + suburb,
      "",
      "Message:",
      message
    ].join("\n");

    var href =
      "mailto:ashtonbougs@gmail.com" +
      "?subject=" + encodeURIComponent(subject) +
      "&body=" + encodeURIComponent(body);

    window.location.href = href;
  });
})();
