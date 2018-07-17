/**
 * AsistenciaController
 * @type {{verAsistencia: module.exports.verAsistencia, lista: module.exports.lista, curso: module.exports.curso}}
 */

module.exports = {

  verAsistencia: async function (req, res) {

    var course = await Curso.findOne({id: req.param('id')}).populate('inscriptos');
    var personas = [];
    for (var inscripcion of course.inscriptos) {
      personas.push(
        await inscripcion.persona
      );
    }
    console.log(personas);
    var idCurso = await Curso.findOne({docencia: req.param('id')});
    var asistencia = [];
    for (var i = 0; i < personas.length; i++) {
      var tot = await Asistencia.count({persona: personas[i], curso: idCurso});
      var real = await Asistencia.count({persona: personas[i], curso: idCurso, asistio: true});
      var perc = ((real * 100) / tot);

      var tmp = personas[i];
      asistencia.push(
        nombre = await Persona.findOne({id: req.param('tmp')}),
        apellido = await Persona.findOne({id: req.param('tmp')}),
        porcentaje = perc,
      );
    }

    console.log(asistencia);

    res.view('pages/asistencia/verAsistencia', {asist: asistencia});
  },

  lista: async function (req, res) {
    var course = await Curso.findOne({id: req.param('id')}).populate('inscriptos');
    var clase = 1;
    console.log(course);
    var personas = [];
    for (var inscripcion of course.inscriptos) {
      personas.push(
        await inscripcion.persona
      );
    }
    var people = [];
    for (var i = 0; i < personas.length; i++) {
      people.push(
        await Persona.findOne({id: personas[i]})
      );
    }
    var tmp = await Asistencia.find({curso: req.param('id')}).sort('clase DESC');
    if(tmp[0]){
      clase = tmp[0].clase + 1;
    }
    console.log(clase);


    res.view('pages/asistencia/lista', {pers: people, clase: clase});

  },
  curso: async function (req, res) {
    var user = await Usuario.findOne({id: req.session.usuario.id}).populate('docencia');
    res.view('pages/asistencia/curso', {docencia: user.docencia});
  },
  putAsistencia: async function (req, res) {
    res.json({asistio: Math.random()> 0.5});
  },
};
