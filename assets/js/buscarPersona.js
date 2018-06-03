async function buscarPersona() {
  let txtbox = document.querySelector("input[name='buscador']");

  if (txtbox.value.length >= 3) {

    let res = await fetch("/buscar", {
      method: 'POST',
      body: JSON.stringify({dato: txtbox.value}), // data can be `string` or {object}!
      headers: {
        'Content-Type': 'application/json'
      }
    });
    let json = await res.json();

    console.log(json);

    let t = document.getElementById('tabla');

    t.innerHTML = '';
    for( let dato of json){

      t.innerHTML += "<tr>" +
        "<td>"+dato.nombre+"</td>" +
        "<td>"+dato.apellido+"</td>" +
        "<td>"+dato.dni+"</td>" +
        "<td>"+dato.correo+"</td>" +
        "<td>"+dato.direccion+"</td>" +
        '<td><button class="btn-info btn" data-toggle="modal" data-target="#deleteModal">' +
        '<i class="fas fa-trash"></i>' +
        "</button>" +
        '<div class="modal fade" id="deleteModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">' +
        '<div class="modal-dialog" role="document">' +
        '<div class="modal-content">' +
        '<div class="modal-header">' +
        '<h5 class="modal-title" id="exampleModalLabel2">¿Seguro que desea eliminar?</h5>' +
        '<button class="close" type="button" data-dismiss="modal" aria-label="Close">' +
        '<span aria-hidden="true">×</span>' +
        '</button>' +
        '</div>' +
        '<div class="modal-body"></div>' +
        '<div class="modal-footer">' +
        '<button class="btn btn-secondary" type="button" data-dismiss="modal">Cancelar</button>' +
        '<a class="btn btn-primary" href="/eliminar/<%= persona[i].id ">Eliminar</a>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<a href="/formulario/<%= persona[i].id%>" class="btn-info btn">' +
        '<i class="fas fa-eye"></i>' +
        '</a>' +
        '</td>' +
        '</tr>';
    }
  }
}
