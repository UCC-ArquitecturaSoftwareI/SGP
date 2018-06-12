

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

    var filtered = inscripciones.filter(i => i.curso.id.toString() === cursoId && i.baja === false);

    res.view('pages/inscripcion/inscripcionPersona.ejs', { curso: filtered[0].curso, inscripciones: filtered });
  },


  inscribir: async function(req, res) {

    let param = req.allParams();
    let personaId = param.personaId;
    let cursoId = param.cursoId;

    let inscripcion = await Inscripcion.find({persona: personaId, curso: cursoId});

    if(inscripcion.length > 0) {
      let updateResult = await Inscripcion.update({ id: inscripcion[0].id}).set( {baja: false} );
    } else {

      Inscripcion.create({
        persona: param.personaId,
        curso: param.cursoId,
        baja: false
      });
    }

    return res.ok();
  },


  removerAlumno: async function(req, res) {
    var param = req.allParams();

    var result = await Inscripcion.update( { id: param.inscripcionId } ).set( { baja: true} );

    res.ok();
  }



};
