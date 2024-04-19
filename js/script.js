(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    bg_button: document.querySelector(".bg-button"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
  refs.bg_button.addEventListener("clock", continue)

  function  continue() {
    window.location.href = "./portfolio.html"
  }
  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();
