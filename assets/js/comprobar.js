function comprobar() {
  let formGroup = document.getElementsByClassName('form-group');
  for (let i = 0; i < formGroup.length; i++){
    if (formGroup[i].children[1].value.length > 0) { //si el largo del valor del input (children 1) del formulario i es mayor a 0
      formGroup[i].classList.add('was-validated');
    }else{
      formGroup[i].classList.remove('was-validated');
    }
  }
}
