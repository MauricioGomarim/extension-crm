chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "atualizarNomeSidebar") {
    const nomeEl = document.querySelector('.nome');
    if (nomeEl) {
      nomeEl.textContent = message.nome;
    }
  }
});



document.getElementById("enviar").addEventListener("click", async () => {
  const texto = document.getElementById("mensagem").value;

  // Envia uma mensagem para o content_script.js
  chrome.runtime.sendMessage({ action: "alterarWhatsApp", texto: texto });
});
