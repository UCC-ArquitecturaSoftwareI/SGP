async function bautismoCheckboxes() {
  var i;
  var str = '';
  var checks = document.getElementsByClassName('form-check-input position-static');
  var arreglo = [];

  for (i = 0; i < checks.length; i++) {
    if (checks[i].checked === true) {
      arreglo.push(checks[i].value);
      //str += arreglo[i] + " ";
    }
  }

  str = JSON.stringify(arreglo);
  var hiddenInput;

  if (document.getElementsByName('inputpadrinos').length === 0) {
    var myForm = document.getElementById('my-form');
    hiddenInput = document.createElement('input');
    hiddenInput.type = 'hidden';
    hiddenInput.name = 'inputpadrinos';
    hiddenInput.id = 'inputpadrinos';
    hiddenInput.value = str;
    myForm.appendChild(hiddenInput);
  }
  else {
    hiddenInput = document.getElementById('inputpadrinos');
    hiddenInput.value = str;
  }
}