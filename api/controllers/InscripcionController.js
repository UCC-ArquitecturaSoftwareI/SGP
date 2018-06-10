

module.exports = {
  inscripcion: async function (req, res){

    // REVISAR QUE TE MANDA


    res.view('pages/inscripcion/seleccionCurso.ejs');
  },


  buscarCurso: async function (req, res) {

    console.log(req.allParams());

    var cursos = await Curso.find(

      // or: [
      {nombreDelCurso: {contains: req.allParams().nombre}}
      // ]
    );

    res.json(cursos);

  },

  cursoDetalle: async function (req, res) {
    console.log(req.allParams());
    var cursoId = req.param('cursoId', '-1');

    // Really? Fetch all records and filter later? WTF, there must be a better way. Anyways we need this working soon.
    var inscripciones = await Inscripcion.find().populate('curso').populate('persona');

    var filtered = inscripciones.filter(i => i.curso.id.toString() === cursoId);

    res.view('pages/inscripcion/inscripcionPersona.ejs', { curso: filtered[0].curso.id, inscripciones: filtered });
  }





};
