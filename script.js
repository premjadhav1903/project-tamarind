const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("#primary-nav");

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation");
    });
  });
}

const year = document.querySelector("#year");
if (year) year.textContent = String(new Date().getFullYear());

const form = document.querySelector("#enquiry-form");
const status = document.querySelector("#form-status");

if (form && status) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!form.reportValidity()) return;

    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const enquiryType = String(data.get("enquiryType") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (!name || !email || !enquiryType || !message) {
      status.textContent = "Please complete all required fields.";
      return;
    }

    const subject = encodeURIComponent("Website enquiry: " + enquiryType);
    const body = encodeURIComponent(
      "Name: " + name + "\nEmail: " + email + "\nEnquiry type: " + enquiryType + "\n\nMessage:\n" + message
    );

    status.textContent = "Your email app may open with a draft. This website does not send or save enquiries yet.";
    window.location.href = "mailto:REPLACE-WITH-YOUR-BUSINESS-EMAIL@example.com?subject=" + subject + "&body=" + body;
  });
}
