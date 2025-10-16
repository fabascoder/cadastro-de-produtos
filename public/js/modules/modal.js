export default function initModal() {
  const modalContainer = document.querySelector('[data-modal="container"]');
  const abrirButton = document.querySelector('[data-modal="login"]');
  const fecharButton = document.querySelector('[data-modal="fechar"]');

  console.log(modalContainer, abrirButton, fecharButton)

  if (modalContainer && abrirButton && fecharButton) {
    function abrirModal(event) {
      event.preventDefault();
      modalContainer.classList.add("ativo");
    }

    function fecharModal(event) {
      event.preventDefault();
      modalContainer.classList.remove("ativo");
    }

    function clickForaModal(event) {
      if (event.target === this) {
        fecharModal(event);
      }
    }

    abrirButton.addEventListener("click", abrirModal);
    fecharButton.addEventListener("click", fecharModal);
    modalContainer.addEventListener("click", clickForaModal);
  }
}
