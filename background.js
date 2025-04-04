chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "alterarWhatsApp") {
    chrome.scripting.executeScript({
      target: { tabId: sender.tab.id },
      function: alterarPaginaWhatsApp,
      args: [message.texto],
    });
  }


  if (message.action === "enviarNome") {
    // Repasse para a sidebar, se for o caso
    chrome.runtime.sendMessage({
      action: "atualizarNomeSidebar",
      nome: message.nome
    });
  }

});

function alterarPaginaWhatsApp(texto) {
  alert("Texto da barra lateral: " + texto);
}