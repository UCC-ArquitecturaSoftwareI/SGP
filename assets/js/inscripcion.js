async function buscarCurso() {

  // debugger;

  let txtbox = document.querySelector('input[name=\'nombreCursoBuscar\']');
  if (txtbox.value.length >= 3) {



    let res = await fetch('/inscripcionBuscar', {
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
        '<td>      <a href="/Curso/<%= a[i].id %>" class="btn-info btn">\n' +
        '        <i class="fas fa-pencil-alt"></i>\n' +
        '      </a></td>' +
        '</tr>';
    }
  }
}
