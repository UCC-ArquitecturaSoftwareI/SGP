/**
 * AsistenciaController
 * @type {{verAsistencia: module.exports.verAsistencia, lista: module.exports.lista, curso: module.exports.curso}}
 */
module.exports = {

  verAsistencia: async function (req, res){

    var course = await Curso.findOne({id:req.param('id')}).populate('inscriptos');
    console.log(course);
    var personas = [];
    for (var inscripcion of course.inscriptos){
      personas.push(
        await inscripcion.persona
      );
    }
    var people = [];
    for (var i=0; i<personas.length; i++) {
      var temp = personas[i];
      people.push(
        await Persona.findOne({id:temp})
      );
    }

    console.log(people);


    res.view('pages/asistencia/verAsistencia', {asist: people});
  },

  lista: async function (req, res){
    var course = await Curso.findOne({id:req.param('id')}).populate('inscriptos');
    console.log(course);
    var personas = [];
    for (var inscripcion of course.inscriptos){
      personas.push(
        await inscripcion.persona
      );
    }
    var people = [];
    for (var i=0; i<personas.length; i++) {
      var temp = personas[i];
      people.push(
          await Persona.findOne({id:temp})
      );
    }

    console.log(people);

    res.view('pages/asistencia/lista', {pers: people});

  },
  curso: async function (req, res){
    var user = await Usuario.findOne({id:req.session.usuario.id}).populate('docencia');
    console.log(user);
    res.view('pages/asistencia/curso', {docencia: user.docencia});
  },
};
