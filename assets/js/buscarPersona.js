let retardo;

async function buscarPersona(){
  let txtbox = document.querySelector('input[name=\'buscador\']');
  let res;

  if (txtbox.value.length >= 3) {

    res = await fetch('/persona/buscar', {
      method: 'POST',
      body: JSON.stringify({dato: txtbox.value}), // data can be `string` or {object}!
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } else {
    res = await fetch('/persona/buscar', {
      method: 'POST',
      body: JSON.stringify({dato: ''}), // data can be `string` or {object}!
      headers: {
        'Content-Type': 'application/json'
      }
    });

  }
  return await res.json();
}

async function actualizarLista() {
  clearTimeout(retardo);
  retardo = await setTimeout(async () => {

    let json = await buscarPersona();

    let t = document.getElementById('tabla');

    t.innerHTML = '';
    for (let dato of json) {

      t.innerHTML += '<div class="row">' +
        '<div class="container" id="tarjeta">' +
        '<div class="row">' +
        '<div class="col-2" id="foto-wrapper">' +
        '<div id="foto-placeholder">' +
        '</div>' +
        '</div>' +
        '<div class="col" id="tarjeta-info">' +
        '<div id="tarjeta-titulo">' + dato.apellido + ', ' + dato.nombre + '</div>' +
        '<div class="tarjeta-contenido">' +
        '<div> DNI: ' + dato.dni + '</div>' +
        '<div>' + dato.correo + '</div>' +
        '<div>' + dato.direccion + '</div>' +
        '</div>' +
        '</div>' +

        '<div class="col-1" style="padding: 0">' +
        '<a href="/persona/formulario/' + dato.id + ' "> ' +
        '<div class="tarjeta-boton">' +
        '<button class="btn-info btn">' +
        '<i class="fas fa-pencil-alt"></i>' +
        '</button>' +
        '</div>' +
        '</a>' +
        '<div class="tarjeta-boton">' +
        '<button class="btn-danger btn" data-toggle="modal" data-target="#deleteModal' + dato.id + '">' +
        '<i class="fas fa-trash"></i>' +
        '</button>' +
        '<!--Comienzo de Modal para eliminar-->' +
        '<div class="modal fade" id="deleteModal' + dato.id + '" tabindex="-1" role="dialog"' +
        ' aria-labelledby="exampleModalLabel" aria-hidden="true">' +
        '<div class="modal-dialog" role="document">' +
        '<div class="modal-content">' +
        '<div class="modal-header">' +
        '<h5 class="modal-title" id="exampleModalLabel2' + dato.id + '">Está por eliminar a</h5>' +
        '<button class="close" type="button" data-dismiss="modal" aria-label="Close">' +
        '<span aria-hidden="true">×</span>' +
        '</button>' +
        '</div>' +
        '<div class="modal-body">' +
        '<b>' + dato.nombre + ' ' + dato.apellido + '</b>' +
        '<div style="padding-left: 20px">' +
        'DNI: ' + dato.dni +
        '<br>' +
        'Correo: ' + dato.correo +
        '<br>' +
        'Dirección: ' + dato.direccion +
        '</div>' +
        '</div>' +
        '<div class="modal-footer">' +
        '<button class="btn btn-secondary" type="button" data-dismiss="modal">Cancelar</button>' +
        '<a class="btn-danger btn" href="/persona/eliminar/' + dato.id + '">Eliminar</a>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<!--Final de Modal para eliminar-->' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>';
    }
  }, 500);
}
