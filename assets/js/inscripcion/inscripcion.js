async function buscarCurso() {

  // debugger;

  let txtbox = document.querySelector('input[name=\'nombreCursoBuscar\']');
  if (txtbox.value.length >= 3) {



    let res = await fetch('/inscripcion/buscar', {
      method: 'POST',
      credentials: 'include',
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
      credentials: 'include',
      body: JSON.stringify({dato: txtbox.value}), // data can be `string` or {object}!
      headers: {
        'Content-Type': 'application/json',
      }
    });
    let json = await res.json();

    console.log(json);

    let t = document.getElementById('tablaBusqueda');

    t.innerHTML = '';
    for( let dato of json){

      // let ides = new Object();
      // ides.persona = dato.id;
      // ides.curso = cursoID;

      // console.log(ides);

      let inscripto =  await fetch('/inscripcion/Inscriptos', {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify( {curso: cursoID, persona: dato.id} ), // data can be `string` or {object}!
        headers: {
          'Content-Type': 'application/json',
        }
      });
      let inscriptojson = await inscripto.json();

      console.log(inscriptojson);

      if(!inscriptojson[0] /* || inscriptojson[inscriptojson.length - 1].baja */){

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
}

async function inscribirPersona(persona, curso) {

  let res = await fetch('/inscripcion/inscribir', {
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify( {cursoId: curso, personaId: persona} ), // data can be `string` or {object}!
    headers: {
      'Content-Type': 'application/json',
    }
  });

  if(res.status === 200 ) {
    // Refresh after successful removal
    location.reload();

  }

}
