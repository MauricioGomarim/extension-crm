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
  sidebar.innerHTML = `<iframe src="${chrome.runtime.getURL(
    "sidebar.html"
  )}" frameborder="0"></iframe>`;
  wrapper.appendChild(sidebar);

  // Mantém o WhatsApp Web com rolagem normal
  container.style.overflow = "auto";
  container.style.height = "100vh";
}

// Aguarda o WhatsApp carregar antes de modificar
esperarElemento(".x78zum5.xdt5ytf.x5yr21d", inserirSidebar);

document.addEventListener("click", function (e) {
  if (e.target.closest(".x10l6tqk.xh8yej3.x1g42fcv")) {

    const nomeContatos = document.querySelectorAll('.x1iyjqo2.x6ikm8r.x10wlt62.x1n2onr6.xlyipyv.xuxw1ft.x1rg5ohu._ao3e');

    if (nomeContatos.length > 0) {
      nomeContatos.forEach(nomeContato => {
        chrome.runtime.sendMessage({
          action: "enviarNome",
          nome: nomeContato.textContent
        });
      });
    } 
  }
});

