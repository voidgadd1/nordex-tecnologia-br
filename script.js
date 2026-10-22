/* ==========================================================
   NORDEX TECNOLOGIA — script.js
   ========================================================== */

/* ---------- CONFIGURAÇÃO ----------
   Link do WhatsApp usado em "Fale conosco", "Fale com a Nordex"
   e "Conversar pelo WhatsApp". Para trocar, altere só esta linha. */
const WHATSAPP_URL = "https://wa.me/qr/YI65U5COZO3LH1";

const MOBILE_BREAKPOINT = 760;

/* ---------- Menu mobile ---------- */
function initMobileMenu() {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.getElementById("menu-principal");
  if (!toggle || !nav) return;

  const setOpen = (open) => {
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
    nav.classList.toggle("is-open", open);
  };

  toggle.addEventListener("click", () => {
    setOpen(toggle.getAttribute("aria-expanded") !== "true");
  });

  // Fecha ao clicar em qualquer link do menu
  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setOpen(false));
  });

  // Fecha com Esc e devolve o foco ao botão
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && nav.classList.contains("is-open")) {
      setOpen(false);
      toggle.focus();
    }
  });

  // Reseta o estado ao voltar para tela larga
  window.addEventListener("resize", () => {
    if (window.innerWidth > MOBILE_BREAKPOINT) setOpen(false);
  });
}

/* ---------- WhatsApp ---------- */
function initWhatsApp() {
  document.querySelectorAll("[data-whatsapp]").forEach((el) => {
    el.href = WHATSAPP_URL;
    el.target = "_blank";
    el.rel = "noopener noreferrer";
  });
}

/* ---------- Ano no rodapé ---------- */
function initYear() {
  const year = document.getElementById("ano");
  if (year) year.textContent = new Date().getFullYear();
}

/* ---------- Inicialização ---------- */
document.addEventListener("DOMContentLoaded", () => {
  initMobileMenu();
  initWhatsApp();
  initYear();
});
