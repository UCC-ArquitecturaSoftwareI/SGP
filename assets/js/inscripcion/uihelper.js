


// remove enrolled student modal
$('#removeStudentModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget);
  var alumno = button.data('alumno-nombre');
  var inscripcionId = button.data('inscripcion-id')
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this)
  modal.find('.alumno').text('Alumno: ' + alumno)
})
