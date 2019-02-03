async function setAs(per,clase,curso, tr) {

  tr.classList.remove('bg-success');
  tr.classList.remove('bg-danger');

  let res = await fetch('/asistencia/putAsistencia/' + clase + '/' + per + '/' + curso);
  let json = await res.json();

  if (json.asistio) {
    tr.classList.remove('bg-danger');
    tr.classList.add('bg-success');
  } else {
    tr.classList.remove('bg-success');
    tr.classList.add('bg-danger');
  }
}
