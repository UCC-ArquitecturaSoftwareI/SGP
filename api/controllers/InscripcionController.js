

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

    var tamanoCurso = 3;


    // Really? Fetch all records and filter later? WTF, there must be a better way. Anyways we need this working soon.
    var inscripcionesFull = await Inscripcion.find().populate('curso').populate('persona');

    var inscriptos = inscripcionesFull.filter(i => i.curso.id.toString() === cursoId && i.baja === false); //.slice(0,tamanoCurso - 1);
    var enespera = null;

    if(inscriptos.length > tamanoCurso) {
      enespera = inscriptos.slice(tamanoCurso, inscriptos.length);
      inscriptos = inscriptos.slice(0, tamanoCurso);
    }


    res.view('pages/inscripcion/inscripcionPersona.ejs', { curso: inscriptos[0].curso, inscriptos: inscriptos, enespera:  enespera});
  },


  inscribir: async function(req, res) {

    let param = req.allParams();
    let personaId = param.personaId;
    let cursoId = param.cursoId;

    let inscripcion = await Inscripcion.find({persona: personaId, curso: cursoId});

    if(inscripcion.length > 0) {
      let updateResult = await Inscripcion.update({ id: inscripcion[0].id}).set( {baja: false} );
    } else {

      var resultCreate = await Inscripcion.create({
        persona: param.personaId,
        curso: param.cursoId,
        baja: false
      }).fetch();
    }

    return res.ok();
  },


  removerAlumno: async function(req, res) {
    var param = req.allParams();

    var result = await Inscripcion.update( { id: param.inscripcionId } ).set( { baja: true} );

    res.ok();
  },

  buscarInscriptos: async function (req, res) {

    let param = req.allParams();
    let personaId = param.persona;
    let cursoId = param.curso;

    console.log('Este ID llega a buscarInscriptos ' + personaId);
    console.log('Este ID llega a buscarInscriptos ' + cursoId);


    var inscriptos = await Inscripcion.find({persona: personaId, curso: cursoId});
    res.json(inscriptos);
  },



};
