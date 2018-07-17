async function setAs(per,clase, tr) {
  tr.classList.remove('bg-success');
  tr.classList.remove('bg-danger');

  // TODO: Quitar clase d-none y agregar despues.
  tr.classList.add('bg-info');

  let res = await fetch('/asistencia/putAsistencia/'+clase+'/'+per);
  let json = await res.json();

  tr.classList.remove('bg-info');

  if (json.asistio) {
    tr.classList.remove('bg-danger');
    tr.classList.add('bg-success');
  } else {
    tr.classList.remove('bg-success');
    tr.classList.add('bg-danger');
  }
}
