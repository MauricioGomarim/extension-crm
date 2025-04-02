function esperarElemento(selector, callback) {
    const elemento = document.querySelector(selector);
    if (elemento) {
      callback(elemento);
    } else {
      setTimeout(() => esperarElemento(selector, callback), 500);
    }
  }
  
  function inserirSidebar(container) {
    if (document.getElementById("whatsapp-sidebar")) return;
  
    // Criamos um wrapper para manter a estrutura original
    const wrapper = document.createElement("div");
    wrapper.id = "whatsapp-wrapper";
    wrapper.style.display = "grid";
    wrapper.style.gridTemplateColumns = "1fr 300px";
    wrapper.style.height = "100vh";
    wrapper.style.overflow = "hidden"; // Evita bugs no scroll
  
    // Movemos o WhatsApp para dentro do wrapper
    container.parentNode.insertBefore(wrapper, container);
    wrapper.appendChild(container);
  
    // Criamos a barra lateral
    const sidebar = document.createElement("div");
    sidebar.id = "whatsapp-sidebar";
    sidebar.innerHTML = `<iframe src="${chrome.runtime.getURL("sidebar.html")}" frameborder="0"></iframe>`;
    wrapper.appendChild(sidebar);
  
    // Mantém o WhatsApp Web com rolagem normal
    container.style.overflow = "auto";
    container.style.height = "100vh";
  }
  
  // Aguarda o WhatsApp carregar antes de modificar
  esperarElemento(".x78zum5.xdt5ytf.x5yr21d", inserirSidebar);
  