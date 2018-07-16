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
        '<td>'+dato.nombre+'</td>' +
        '<td>'+dato.descripcion+'</td>' +
        '<td>      <a href="/inscripcion/cursoDetalle/' + dato.id + '" class="btn-info btn">\n' +
        '        <i class="fas fa-pencil-alt"></i>\n' +
        '      </a></td>' +
        '</tr>';
    }
  }
}


async function encontrarPersona(cursoID) {

  let deckPersonasBuscadas = document.getElementById('resultadoPersonas');

  let txtbox = document.querySelector('input[name=\'buscador\']');

  if(txtbox.value.length < 3) {
    deckPersonasBuscadas.innerHTML = '';
  } else {

    let res = await fetch('/persona/buscar', {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify({dato: txtbox.value}), // data can be `string` or {object}!
      headers: {
        'Content-Type': 'application/json',
      }
    });
    let personasEncontradas = await res.json();

    let inscriptos =  await fetch('/inscripcion/Inscriptos', {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify( {curso: cursoID} ), // data can be `string` or {object}!
      headers: {
        'Content-Type': 'application/json',
      }
    });
    let inscriptosJson = await inscriptos.json();

    var tempInner = '<div class="row-g">';

    for( let persona of personasEncontradas){
      if(!inscriptosJson.includes(persona)) {
        tempInner += generateCard(persona, cursoID);
      }
    }
    tempInner +='</div>';
    deckPersonasBuscadas.innerHTML = tempInner;

  }
}

function generateCard(persona) {

  var result = ' <div class="col-sm-3">' +
    '<div class="card border-secondary mb-3">' +
    '<div class="card-body">' +
    '<h5 class="card-title">' + persona.apellido + ', ' + persona.nombre + '</h5>' +
    '<p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>' +
    '<p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>'+
    '</div></div></div>';

  return result;
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
