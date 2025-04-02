chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "alterarWhatsApp") {
      chrome.scripting.executeScript({
        target: { tabId: sender.tab.id },
        function: alterarPaginaWhatsApp,
        args: [message.texto]
      });
    }


    
  });
  
  function alterarPaginaWhatsApp(texto) {
    alert("Texto da barra lateral: " + texto);




  }
  