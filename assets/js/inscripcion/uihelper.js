


// remove enrolled student modal
$('#removeStudentModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget);
  var alumno = button.data('alumno-nombre');
  var cursoId = button.data('curso-id');
  var alumnoId = button.data('alumno-id');
  var inscripcionId = button.data('inscripcion-id');
  var modal = $(this);
  modal.find('.alumno').text('Alumno: ' + alumno);


  var onRemove = async function(evt) {

    console.log(inscripcionId);

    let res = await fetch('/inscripcion/removerAlumno', {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify({inscripcionId: inscripcionId}), // data can be `string` or {object}!
      headers: {
        'Content-Type': 'application/json',
      }
    });

    if(res.status === 200 ) {
      // response ok
      $('#removeStudentModal').modal('toggle');

      // Refresh after successful removal
      location.reload();

    }

  };

  $('#botonRemover').on('click', onRemove);

});
