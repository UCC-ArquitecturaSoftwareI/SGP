/**
 * AsistenciaController
 * @type {{verAsistencia: module.exports.verAsistencia, lista: module.exports.lista, curso: module.exports.curso}}
 */

module.exports = {

  verAsistencia: async function (req, res) {

    var idCurso = req.param('id');
    var course = await Curso.findOne({id: idCurso}).populate('inscriptos');
    var personas = [];
    for (var inscripcion of course.inscriptos) {
      personas.push(
         inscripcion.persona
      );
    }
    console.log(personas);
    var asistencia = [];
    for (var i = 0; i < personas.length; i++) {
      var tot = await Asistencia.count({persona: personas[i], curso: idCurso});
      var real = await Asistencia.count({persona: personas[i], curso: idCurso, asistio: true});
      var perc = ((real * 100) / tot);
      if (isNaN(perc)) {
        perc = 0;
      }


      var tmp = personas[i];
      var per = await Persona.findOne({id: tmp});
      asistencia.push({
        nombre: per.nombre,
        apellido: per.apellido,
        porcentaje: perc,
      });
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
    if (tmp[0]) {
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
    // TODO: Crear una instancia de asistencia con true si no existe o toglearla si existe.
    res.json({asistio: Math.random() > 0.5});
  },
};
