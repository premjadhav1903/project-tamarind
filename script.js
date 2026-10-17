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
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;

    const submitButton = form.querySelector('button[type="submit"]');
    const originalButtonText = submitButton ? submitButton.innerHTML : "";
    const data = new FormData(form);

    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const enquiryType = String(data.get("enquiryType") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (!name || !email || !enquiryType || !message) {
      status.textContent = "Please complete all required fields.";
      return;
    }

    if (!form.action.startsWith("https://formspree.io/f/")) {
      status.textContent = "The enquiry form is not configured yet. Please try again later.";
      return;
    }

    data.set("_subject", "Chinchvan website enquiry: " + enquiryType);
    status.textContent = "Sending your enquiry…";
    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = "Sending…";
    }

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" }
      });

      if (response.ok) {
        form.reset();
        status.textContent = "Thank you for contacting Chinchvan. Your enquiry has been submitted. Check your inbox for any verification email from Formspree if prompted.";
      } else {
        let serviceMessage = "";
        try {
          const result = await response.json();
          serviceMessage = Array.isArray(result.errors)
            ? result.errors.map((item) => item.message).join(" ")
            : "";
        } catch (_) {}

        status.textContent = serviceMessage
          ? "We could not submit your enquiry: " + serviceMessage
          : "We could not submit your enquiry. Please check the Formspree setup and try again.";
      }
    } catch (_) {
      status.textContent = "A network error prevented submission. Check your connection and try again.";
    } finally {
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.innerHTML = originalButtonText;
      }
    }
  });
}
