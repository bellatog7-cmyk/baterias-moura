/* ==========================================================
   CONFIGURAÇÃO DO WHATSAPP
   ----------------------------------------------------------
   Troque o número abaixo pelo WhatsApp comercial.
   Use somente números, incluindo 55 + DDD.
   Exemplo: 5511999999999
   ========================================================== */
const WHATSAPP_NUMBER = "5500000000000";

function openWhatsApp(message) {
  if (!WHATSAPP_NUMBER || WHATSAPP_NUMBER === "5500000000000") {
    alert("Configure o número do WhatsApp no arquivo script.js antes de publicar.");
    return;
  }
  const text = encodeURIComponent(message || "Olá! Quero fazer um orçamento de uma bateria Moura.");
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

document.querySelectorAll("[data-whatsapp]").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    openWhatsApp(link.dataset.message);
  });
});
