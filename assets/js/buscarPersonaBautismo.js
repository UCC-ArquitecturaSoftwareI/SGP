async function buscarPersonaBautismo() {
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

    let t = document.getElementById('tabla');

    t.innerHTML = '';
    for( let dato of json){

      t.innerHTML += '<tr>' +
        '<td><div class="form-check">' +
        '<input class="form-check-input" type="checkbox" value="" name="checkbox/'+dato.id+'" id="checkbox/'+dato.id+'">' +
        '</div></td>' +
        '<td>'+dato.nombre+'</td>' +
        '<td>'+dato.apellido+'</td>' +
        '<td>'+dato.dni+'</td>' +
        '</tr>';
    }
  }
  else {

    let res = await fetch('/bautismos/listarpersonas', {
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

      t.innerHTML += '<tr>' +
        '<td><div class="form-check">' +
        '<input class="form-check-input" type="checkbox" name="checkbox/'+dato.id+'" id="checkbox/'+dato.id+'">' +
        '</div></td>' +
        '<td>'+dato.nombre+'</td>' +
        '<td>'+dato.apellido+'</td>' +
        '<td>'+dato.dni+'</td>' +
        '</tr>';
    }
  }
}
