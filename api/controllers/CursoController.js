/**
 * cursoController
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

    datos = await Curso.create(nuevoCurso);
    res.view('pages/cursos/curso', {curso: cursos});
  },
  modificar: async function (req, res) {
    var param = req.allParams();
    var nuevocurso = {
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

    datos = await Curso.update({id: param.id},nuevocurso);
    var cursos = await Curso.find({});
    res.view('pages/cursos/curso', {curso: cursos});
  },
  eliminar: async function (req, res) {
    await Curso.destroy({id: req.allParams().id});
    console.log(JSON.stringify(req.allParams()));
    res.redirect('/cursos/curso');
  },
  buscar: async function (req, res) {
    var cursos = await Curso.find(
      {
        or: [
          {nombre: {contains: req.allParams().dato}},
        ]
      });
    console.log(req.allParams());
    res.json(personas);
  },
  lista: async function (req, res) {
    var cursos = await Curso.find({});

    res.view('pages/cursos/curso', {curso: cursos});
  },

  formulario: async function (req, res) {
    if (req.allParams().id === '0') {
      var ret;
      ret = {
        nombre: null,
        fechaFin: null,
        dias: null,
        horaInicio: null,
        horaFin: null,
        descripcion: null,
        aula: null,
        Cupo: null
      };
    } else {
      var sujeto = await Curso.find({id: req.allParams().id});
      ret = {
        id: sujeto[0].id,
        nombre: sujeto[0].nombre,
        fechaFin: sujeto[0].fechaFin,
        dias: sujeto[0].dias,
        horaInicio: sujeto[0].horaInicio,
        horaFin: sujeto[0].horaFin,
        descripcion: sujeto[0].descripcion,
        aula: sujeto[0].aula,
        cupo: sujeto[0].cupo
      };
    }
    res.view('pages/cursos/formulario', {curso: ret});
  },
};
