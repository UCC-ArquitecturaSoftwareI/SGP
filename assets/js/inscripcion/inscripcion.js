async function buscarCurso() {

  // debugger;

  let txtbox = document.querySelector('input[name=\'nombreCursoBuscar\']');
  if (txtbox.value.length >= 3) {



    let res = await fetch('/inscripcion/buscar', {
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
    for( let dato of json){
      t.innerHTML += '<tr>' +
        '<td>'+dato.nombreDelCurso+'</td>' +
        '<td>'+dato.descripcionCurso+'</td>' +
        '<td>      <a href="/inscripcion/cursoDetalle/' + dato.id + '" class="btn-info btn">\n' +
        '        <i class="fas fa-pencil-alt"></i>\n' +
        '      </a></td>' +
        '</tr>';
    }
  }
}

async function encontrarPersona(cursoID) {



  let txtbox = document.querySelector('input[name=\'buscador\']');

  if (txtbox.value.length >= 3) {

    let res = await fetch('/persona/buscar', {
      method: 'POST',
      body: JSON.stringify({dato: txtbox.value}), // data can be `string` or {object}!
      headers: {
        'Content-Type': 'application/json'
      }
    });
    let json = await res.json();

    console.log(json);

    let t = document.getElementById('tablaBusqueda');

    t.innerHTML = '';
    for( let dato of json){

      t.innerHTML += '<tr>' +
        '<td>'+dato.nombre+'</td>' +
        '<td>'+dato.apellido+'</td>' +
        '<td>'+dato.dni+'</td>' +
        '<td>'+dato.correo+'</td>' +
        '<td>'+dato.direccion+'</td>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<a href="/formulario/<%= persona[i].id%>" class="btn-info btn">' +
        '<i class="fas fa-eye"></i>' +
        '</a>' +
        '<button onclick="inscribirPersona(' + dato.id + ',' + cursoID + ')"' +
        'class="btn-info btn">' +
        '<i class=" fas fa-plus-circle"></i>' +
        '</button> '+

        '</td>' +
        '</tr>';
    }
  }
}

async function inscribirPersona(persona, curso) {

  console.log(persona);
  console.log(curso);

}
