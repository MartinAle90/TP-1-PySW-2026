const form = document.getElementById("contactForm");
const inputs = form ? form.querySelectorAll(".field-input") : [];

inputs.forEach((input) => {
  input.addEventListener("blur", () => {
    const group = input.closest(".field-group");
    if (group) group.classList.add("touched");
  });
});

const textarea = document.getElementById("mensaje");
const charCount = document.getElementById("charCount");

if (textarea && charCount) {
  textarea.addEventListener("input", () => {
    const len = textarea.value.length;
    charCount.textContent = `${len} / 20 mínimo`;
    charCount.style.color =
      len >= 20 ? "var(--clr-accent)" : "var(--clr-text-muted)";
  });
}

const submitBtn = form ? form.querySelector(".btn-submit") : null;
const modal = document.getElementById("confirmModal");
const modalClose = document.getElementById("modalClose");
const modalEmail = document.getElementById("modal-email");
const formStatus = document.getElementById("form-status");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    form.querySelectorAll(".field-group").forEach((g) => g.classList.add("touched"));

    if (!form.checkValidity()) {
      const firstInvalid = form.querySelector(".field-input:invalid");
      if (firstInvalid) firstInvalid.focus();
      if (formStatus) {
        formStatus.textContent =
          "El formulario tiene errores. Por favor revisá los campos marcados.";
      }
      return;
    }

    if (submitBtn) {
      submitBtn.classList.add("loading");
      submitBtn.disabled = true;
      submitBtn.setAttribute("aria-busy", "true");
    }

    const mainEl = document.getElementById("main-content");

    setTimeout(() => {
      if (submitBtn) {
        submitBtn.classList.remove("loading");
        submitBtn.disabled = false;
        submitBtn.setAttribute("aria-busy", "false");
      }

      const emailInput = document.getElementById("email");
      if (modalEmail && emailInput) modalEmail.textContent = emailInput.value;

      if (modal) {
        modal.hidden = false;
        document.body.style.overflow = "hidden";
        if (mainEl && "inert" in mainEl) mainEl.inert = true;
        modal.querySelector(".modal-close")?.focus();
      }

      if (formStatus) {
        formStatus.textContent =
          "Mensaje enviado con éxito. Te contactaremos pronto.";
      }

      form.reset();
      form.querySelectorAll(".field-group").forEach((g) => g.classList.remove("touched"));
      if (charCount) charCount.textContent = "0 / 20 mínimo";
    }, 1800);
  });
}

function closeModal() {
  if (modal) {
    modal.hidden = true;
    document.body.style.overflow = "";
    const mainEl = document.getElementById("main-content");
    if (mainEl && "inert" in mainEl) mainEl.inert = false;
    submitBtn?.focus();
  }
}

if (modalClose) modalClose.addEventListener("click", closeModal);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal && !modal.hidden) closeModal();
});

if (modal) {
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });
}
