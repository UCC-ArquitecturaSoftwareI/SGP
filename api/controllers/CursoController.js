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
      fechaInicio: param.fechaInicio,
      fechaFin: param.fechaFin,
      dias: param.dias,
      horaInicio: param.horaInicio,
      horaFin: param.horaFin,
      nombre: param.nombreDel,
      descripcion: param.descripcion,
      aula: param.aula,
      Cupo: param.Cupo,
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
        nombre: null,
        fechaFin: null,
        diasDe: null,
        horaInicio: null,
        horaFin: null,
        descripcion: null,
        aula: null,
        Cupo: null
      };
    }
    res.view('pages/cursos/formulario', {curso: ret});
  },
  lista: async function (req, res) {
    var cursos = await Curso.find({});
    res.view('pages/cursos/curso', {curso: cursos});
  },

};
