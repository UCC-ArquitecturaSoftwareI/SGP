

module.exports = {
  inscripcion: async function (req, res){

    // REVISAR QUE TE MANDA


    res.view('pages/inscripcion/inscripcion.ejs');
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





};
