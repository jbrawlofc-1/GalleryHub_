document.getElementById("form-contato").addEventListener("submit", function (e) {
  e.preventDefault();
  const aviso = document.getElementById("notificacao");
  aviso.classList.add("mostrar");
  this.reset();
  setTimeout(function () {
    aviso.classList.remove("mostrar");
  }, 3000);
});
document.querySelectorAll(".btn-coracao").forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    this.classList.toggle("ativo");
  });
});