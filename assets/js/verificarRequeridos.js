// funcion para verificar los campos requeridos
(function verificarRequeridos() {
  'use strict';
  window.addEventListener('load', () => {
    let forms = document.getElementsByClassName('needs-validation');
    let validation = Array.prototype.filter.call(forms, (form) => {
      form.addEventListener('submit', (event) => {
        if (false === form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        //pinta todos los campos de rojo o verde segun corresponda:
        let formGroup = document.getElementsByClassName('form-group');
        for (let i = 0; i < formGroup.length; i++){
          formGroup[i].classList.add('was-validated');
        }
        //
      }, false);
    });
  }, false);
})();
