/**
 * PersonaController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  verAsistencia: async function (req, res){

    res.view('pages/asistencia/verAsistencia');
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
    for (var i=0; i<personas.length; i++){
      people.push(
        await persona[i].nombre
      )
    }
    console.log(personas);

    res.view('pages/asistencia/lista', {pers: personas.pers});

  },
  curso: async function (req, res){
    var user = await Usuario.findOne({id:req.session.usuario.id}).populate('docencia');
    console.log(user);
    res.view('pages/asistencia/curso', {docencia: user.docencia});
  },
};
