let retardo;
async function buscarPersona() {
  clearTimeout(retardo);
  retardo = await setTimeout(async () => {
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
        body: JSON.stringify({dato:''}), // data can be `string` or {object}!
        headers: {
          'Content-Type': 'application/json'
        }
      });

    }
    let json = await res.json();

    let t = document.getElementById('tabla');

    t.innerHTML = '';
    for( let dato of json){

      t.innerHTML += '<tr>' +
        '<td>'+dato.nombre+'</td>' +
        '<td>'+dato.apellido+'</td>' +
        '<td>'+dato.dni+'</td>' +
        '<td>'+dato.correo+'</td>' +
        '<td>'+dato.direccion+'</td>' +
        '<td>' +
        '<a href="/persona/formulario/' + dato.id + '" ' + 'class="btn-info btn">' +
        '<i class="fas fa-pencil-alt"></i>' +
        '</a>' +
        '</td>' +
        '<td><button class="btn-danger btn" data-toggle="modal" data-target="#deleteModal' + dato.id + '" ' + '>' +
        '<i class="fas fa-trash"></i>' +
        '</button>' +
        '<div class="modal fade" id="deleteModal' + dato.id + '" ' + 'tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">' +
        '<div class="modal-dialog" role="document">' +
        '<div class="modal-content">' +
        '<div class="modal-header">' +
        '<h5 class="modal-title" id="exampleModalLabel2' + dato.id + '" ' + '>¿Seguro que desea eliminar?</h5>' +
        '<button class="close" type="button" data-dismiss="modal" aria-label="Close">' +
        '<span aria-hidden="true">×</span>' +
        '</button>' +
        '</div>' +
        '<div class="modal-body"></div>' +
        '<div class="modal-footer">' +
        '<button class="btn btn-secondary" type="button" data-dismiss="modal">Cancelar</button>' +
        '<a class="btn btn-primary" href="/persona/eliminar/' + dato.id + '" ' + '>Eliminar</a>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</td>' +
        '</tr>';
    }
  },500);
}
