

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
    var cursoId = req.param('cursoId', -1);

    var curso = await Curso.find(

      {id: cursoId}

    );

    res.view('pages/inscripcion/inscripcionPersona.ejs',
      { curso: curso[0]});


  }





};
