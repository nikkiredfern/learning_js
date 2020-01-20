  function $(sel) {
    return document.querySelector(sel);
  }

class Modal {
  constructor() {
    this.modal = $(".modal-js-modal");
  }

  open() {
        this.modal.style.display = "initial";
  }

  close() {
        this.modal.style.display = "none";
  }
}

const modal = new Modal()
const closeBtn = $(".js-close-modal")
const openBtn =$(".js-open-modal")


openBtn.addEventListener("click", function(event) {
  modal.open();
});

closeBtn.addEventListener("click", function(event) {
  modal.close();
});
