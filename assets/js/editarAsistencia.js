async function cambiarA(id) {

  let aa = await fetch('/asistencia/editarAsistencia/'+id);
  let json = await aa.json();
}
