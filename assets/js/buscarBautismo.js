async function buscarBautismo() {
  let txtbox = document.querySelector('input[name=\'nombre\']');
  var fecha;
  if (txtbox.value.length >= 3) {

    let res = await fetch('/bautismos/buscar', {
      method: 'POST',
      body: JSON.stringify({nombre: txtbox.value}), // data can be `string` or {object}!
      headers: {
        'Content-Type': 'application/json'
      }
    });
    let json = await res.json();

    //console.log(json);

    let t = document.getElementById('tabla');

    t.innerHTML = '';
    for (let dato of json) {
      fecha = new Date(dato.fecha * 1);
      t.innerHTML += '<div class="row">' +
        '<div class="container" id="tarjeta">' +
        '<div class="row">' +
        '<div class="col" id="tarjeta-info">' +
        '<div id="tarjeta-titulo"> ' + dato.nombre + '</div>' +
        '<div class="tarjeta-contenido">' +
        '<div> DNI: ' + dato.dni + '</div>' +
        '<div> Fecha del turno: ' + ('00' + fecha.getDate()).substr(-2) + '/' + ('00' + (fecha.getMonth() + 1)).substr(-2) + '/' + fecha.getFullYear() + '</div>' +
        '<div> Turno: ' + dato.turno + '</div>' +
        '</div>' +
        '</div>' +
        '<div class="col-1" style="padding: 0">' +
        '<div class="row">' +
        '<a href="/bautismos/' + dato.id + '">' +
        '<div class="tarjeta-boton">' +
        '<button class="btn btn-primary">' +
        '<i class="fas fa-eye"></i>' +
        '</button>' +
        '</div>' +
        '</a>' +
        '</div>' +
        '<div class="row">' +
        '<a href="/bautismos/modificar/' + dato.id + '">'+
        '<div class="tarjeta-boton">' +
        '<button class="btn btn-primary">' +
        '<i class="fas fa-pencil-alt"></i>' +
        '</button>'+
        '</div>' +
        '</a>' +
        '</div>' +
        '<div class="row">' +
        '<div class="tarjeta-boton">' +
        '<button class="btn btn-danger" data-toggle="modal" data-target="#eliminarModal' + dato.id + '">' +
        '<i class="fas fa-trash"></i>' +
        '</button>' +
        '</div>' +
        <!-- Modal para eliminar -->
        '<div class="modal fade" id="eliminarModal' + dato.id + '" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">' +
        '<div class="modal-dialog" role="document">' +
        '<div class="modal-content">' +
        '<div class="modal-header">' +
        '<h5 class="modal-title" id="exampleModalLabel2' + dato.id + '">Está a punto de eliminar un turno</h5>' +
        '<button class="close" type="button" data-dismiss="modal" aria-label="Close">' +
        '<span aria-hidden="true">×</span>' +
        '</button>' +
        '</div>' +
        '<div class="modal-footer">' +
        '<button class="btn btn-secondary" type="button" data-dismiss="modal">Cancelar</button>' +
        '<a class="btn btn-danger" href="/bautismos/eliminar/' + dato.id + '">Eliminar</a>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>';
    }
  }
  else {
    let res = await fetch('/bautismos/listar', {
      method: 'POST',
      body: JSON.stringify({nombre: txtbox.value}), // data can be `string` or {object}!
      headers: {
        'Content-Type': 'application/json'
      }
    });

    let json = await res.json();

    console.log(json);

    let t = document.getElementById('tabla');

    t.innerHTML = '';
    for (let dato of json) {
      fecha = new Date(dato.fecha * 1);
      t.innerHTML += '<div class="row">' +
        '<div class="container" id="tarjeta">' +
        '<div class="row">' +
        '<div class="col" id="tarjeta-info">' +
        '<div id="tarjeta-titulo"> ' + dato.nombre + '</div>' +
        '<div class="tarjeta-contenido">' +
        '<div> DNI: ' + dato.dni + '</div>' +
        '<div> Fecha del turno: ' + ('00' + fecha.getDate()).substr(-2) + '/' + ('00' + (fecha.getMonth() + 1)).substr(-2) + '/' + fecha.getFullYear() + '</div>' +
        '<div> Turno: ' + dato.turno + '</div>' +
        '</div>' +
        '</div>' +
        '<div class="col-1" style="padding: 0">' +
        '<div class="row">' +
        '<a href="/bautismos/' + dato.id + '">' +
        '<div class="tarjeta-boton">' +
        '<button class="btn btn-primary">' +
        '<i class="fas fa-eye"></i>' +
        '</button>' +
        '</div>' +
        '</a>' +
        '</div>' +
        '<div class="row">' +
        '<a href="/bautismos/modificar/' + dato.id + '">'+
        '<div class="tarjeta-boton">' +
        '<button class="btn btn-primary">' +
        '<i class="fas fa-pencil-alt"></i>' +
        '</button>'+
        '</div>' +
        '</a>' +
        '</div>' +
        '<div class="row">' +
        '<div class="tarjeta-boton">' +
        '<button class="btn btn-danger" data-toggle="modal" data-target="#eliminarModal' + dato.id + '">' +
        '<i class="fas fa-trash"></i>' +
        '</button>' +
        '</div>' +
        <!-- Modal para eliminar -->
        '<div class="modal fade" id="eliminarModal' + dato.id + '" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">' +
        '<div class="modal-dialog" role="document">' +
        '<div class="modal-content">' +
        '<div class="modal-header">' +
        '<h5 class="modal-title" id="exampleModalLabel2' + dato.id + '">Está a punto de eliminar un turno</h5>' +
        '<button class="close" type="button" data-dismiss="modal" aria-label="Close">' +
        '<span aria-hidden="true">×</span>' +
        '</button>' +
        '</div>' +
        '<div class="modal-footer">' +
        '<button class="btn btn-secondary" type="button" data-dismiss="modal">Cancelar</button>' +
        '<a class="btn btn-danger" href="/bautismos/eliminar/' + dato.id + '">Eliminar</a>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>';
    }
  }
}
