/**
 * AsistenciaController
 * @type {{verAsistencia: module.exports.verAsistencia, lista: module.exports.lista, curso: module.exports.curso}}
 */

module.exports = {

  verAsistencia: async function (req, res){

    var course = await Curso.findOne({id:req.param('id')}).populate('inscriptos');
    var personas = [];
    for (var inscripcion of course.inscriptos){
      personas.push(
        await inscripcion.persona
      )
    }
    console.log(personas);
    var idCurso = await Curso.findOne({docencia:req.param('id')});
    var asistencia = [];
    for (var i=0; i<personas.length; i++){
      var tot = await Asistencia.count({persona:personas[i], curso:idCurso});
      var real = await Asistencia.count({persona:personas[i],curso:idCurso, asistio: true});
      var perc = ((real*100)/tot);
      console.log(tot);
      console.log(real);
      console.log(perc);

      var tmp = personas[i];
      asistencia.push(
        nombre = await Persona.findOne({tmp:req.param('nombre')}),
        apellido = await Persona.findOne({tmp:req.param('apellido')}),
        porcentaje = perc
    )
    }

    console.log(asistencia);

    res.view('pages/asistencia/verAsistencia', {asist: asistencia});
  },

  lista: async function (req, res){
    var course = await Curso.findOne({id:req.param('id')}).populate('inscriptos');
    console.log(course);
    var personas = [];
    for (var inscripcion of course.inscriptos){
      personas.push(
        await inscripcion.persona
      )
    }
    var people = [];
    for (var i=0; i<personas.length; i++) {
        people.push(
          await Persona.findOne({id:personas[i]})
        )
      }

    res.view('pages/asistencia/lista', {pers: people});

  },
  curso: async function (req, res){
    var user = await Usuario.findOne({id:req.session.usuario.id}).populate('docencia');
    res.view('pages/asistencia/curso', {docencia: user.docencia});
  },
};
