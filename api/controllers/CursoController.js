/**
 * PersonaController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  agregar: async function (req, res) {
    var param = req.allParams();
    var nuevoCurso = {
      fechaInicioCurso: param.fechaInicioCurso,
      fechaFinCurso: param.fechaFinCurso,
      diasDeCursos: param.diasDeCursos,
      horaInicioCurso: param.horaInicioCurso,
      horaFinCurso: param.horaFinCurso,
      nombreDelCurso: param.nombreDelCurso,
      descripcionCurso: param.descripcionCurso,
      aula: param.aula,
      CupoCursos: param.CupoCursos,
    };

    datos = await curso.create(nuevoCurso);
    res.view('pages/cursos/curso', {curso: cursos});
  },
  eliminar: async function (req, res) {

    console.log(JSON.stringify(req.allParams()));
    res.redirect('/curso');
  },
  formulario: async function (req, res) {
    if (req = null) {
      var ret;
      ret = {
        nombreDelCurso: null,
        fechaFinCurso: null,
        diasDeCursos: null,
        horaInicioCurso: null,
        horaFinCurso: null,
        descripcionCurso: null,
        aula: null,
        CupoCursos: null
      };
    }
    res.view('pages/cursos/formulario', {curso: ret});
  },
  lista: async function (req, res) {
    var cursos = await Curso.find({});
    res.view('pages/cursos/curso', {curso: cursos});
  },

};
