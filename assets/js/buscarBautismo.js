async function buscarBautismo() {
  let txtbox = document.querySelector('input[name=\'nombre\']');
  if (txtbox.value.length >= 3) {

    let res = await fetch('/bautismos/buscar', {
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
      var fecha = new Date(dato.fecha * 1);
      t.innerHTML += '<tr>' +
        '<td>' + dato.nombre + '</td>' +
        '<td>' + dato.dni + '</td>' +
        '<td>' + ("00" + fecha.getDate()).substr(-2) + '/' + ("00" + (fecha.getMonth() + 1)).substr(-2) + '/' + fecha.getFullYear() + '</td>' +
        '<td>' + dato.turno + '</td>' +
        '<td>      <a href="/TurnoBautismo/<%= a[i].id %>" class="btn-info btn">\n' +
        '        <i class="fas fa-eye"></i>\n' +
        '      </a></td>' +
        '</tr>';
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
      var fecha = new Date(dato.fecha * 1);
      t.innerHTML += '<tr>' +
        '<td>' + dato.nombre + '</td>' +
        '<td>' + dato.dni + '</td>' +
        '<td>' + ("00" + fecha.getDate()).substr(-2) + '/' + ("00" + (fecha.getMonth() + 1)).substr(-2) + '/' + fecha.getFullYear() + '</td>' +
        '<td>' + dato.turno + '</td>' +
        '<td>      <a href="/TurnoBautismo/<%= a[i].id %>" class="btn-info btn">\n' +
        '        <i class="fas fa-eye"></i>\n' +
        '      </a></td>' +
        '</tr>';
    }
  }
}
