async function buscarCurso() {

  // debugger;

  let txtbox = document.querySelector('input[name=\'buscador\']');
  let t = document.getElementById('tabla-container');


  if(txtbox.value.length < 3) {
    t.innerHTML = '';
  } else {



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


    let tempHTML = '<div class="row">';


    for( let dato of json){
      tempHTML += generateCursoCard(dato);
    }
    tempHTML +='</div>';
    t.innerHTML = tempHTML;
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
    let personasJson = await res.json();

    let inscriptos =  await fetch('/inscripcion/Inscriptos', {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify( {curso: cursoID} ), // data can be `string` or {object}!
      headers: {
        'Content-Type': 'application/json',
      }
    });
    let inscriptosJson = await inscriptos.json();
    let inscriptosIds = inscriptosJson.map(inscripto => inscripto.id);

    let personasNoInscriptas = personasJson.filter(persona => !inscriptosIds.includes(persona.id));

    var tempInner =
      '<div class="row">';

    if(personasNoInscriptas.length > 0) {
      for (let persona of personasNoInscriptas) {
        if (!inscriptosJson.includes(persona)) {
          tempInner += generatePersonaCard(persona, cursoID);
        }
      }
    } else {
      tempInner += '<p>No se encontraron personas con ese criterio: ' + txtbox.value + '</p>';
    }
    tempInner +='</div>';
    deckPersonasBuscadas.innerHTML = tempInner;

  }
}

function generatePersonaCard(persona, cursoID) {

  var result = '<div class="col-sm-4">' +
    '<div class="card border-secondary mb-3">' +
    '<div class="card-body">' +
    '<h5 class="card-title">' + persona.dni + '</h5>' +
    '<p class="card-text">Apellido: ' + persona.apellido + '</p>' +
    '<p class="card-text"><b>Nombre:</b> ' + persona.nombre + '</p>' +
    '<button onclick="inscribirPersonaACurso(' + persona.id + ',' + cursoID + ')"' +
    'class="btn-info btn" style="justify-content: center">' +
    '<i class=" fas fa-plus-circle"></i>Agregar' +
    '</button> '+
    '<p class="card-text"><small class="text-muted">Agregado el dia ' + new Date(persona.createdAt).toLocaleDateString() + '</small></p>'+
    '</div></div></div>';

  return result;
}

function generateCursoCard(curso) {

  var result = '<div class="col-sm-4">' +
    '<div class="card border-secondary mb-3">' +
    '<div class="card-body">' +
    '<h3 class="card-title">' + curso.nombre + '</h3>' +
    '<p class="card-text"><b>Descripcion:</b>: ' + curso.descripcion + '</p>' +
    '<p class="card-text"><b>Cupo:</b> ' + curso.cupo + '</p>' +
    '<a href="/inscripcion/cursoDetalle/' + curso.id + '" class="btn-info btn">' +
    '<i class=" fas fa-plus-circle"></i>Gestionar' +
    '</a> '+
    '<p class="card-text"><small class="text-muted">Creado el dia ' + new Date(curso.createdAt).toLocaleDateString() + '</small></p>'+
    '</div></div></div>';

  return result;
}

async function inscribirPersonaACurso(persona, curso) {

  let res = await fetch('/inscripcion/inscribir', {
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify({cursoId: curso, personaId: persona}), // data can be `string` or {object}!
    headers: {
      'Content-Type': 'application/json',
    }
  });

  if (res.status === 200) {
    // Refresh after successful removal
    location.reload();
  }

}
