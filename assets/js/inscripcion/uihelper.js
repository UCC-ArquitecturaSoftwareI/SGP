


// remove enrolled student modal
$('#removeStudentModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget);
  var alumno = button.data('alumno-nombre');
  var inscripcionId = button.data('inscripcion-id');
  var modal = $(this);
  modal.find('.alumno').text('Alumno: ' + alumno);
});
