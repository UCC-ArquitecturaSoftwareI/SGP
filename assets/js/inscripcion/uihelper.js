


// remove enrolled student modal
$('#removeStudentModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget);
  var alumno = button.data('alumno-nombre');
  var cursoId = button.data('curso-id');
  var alumnoId = button.data('alumno-id');
  var inscripcionId = button.data('inscripcion-id');
  var modal = $(this);
  modal.find('.alumno').text('Alumno: ' + alumno);


  $('#botonRemover').on(
    'click',
    function(evt)
    {
      console.log(cursoId);
      console.log(alumnoId);
    }
  );


});
